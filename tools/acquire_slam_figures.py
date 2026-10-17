"""Download primary-source SLAM papers and crop manually reviewed figures.

PDFs are kept in ignored library/pdfs. Published images retain source attribution
in source_data/figures_slam.json. Run --download, --inspect, then --render.
"""
import argparse
import concurrent.futures
import hashlib
import json
import re
import urllib.request
from pathlib import Path

import pdfplumber
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
LIB = ROOT / 'library' / 'pdfs'
PREV = ROOT / 'library' / 'previews'
ASSETS = ROOT / 'site' / 'assets' / 'papers'
DATA = json.loads((ROOT / 'source_data' / 'slam_survey.json').read_text(encoding='utf-8'))
OVERRIDES = {
    'svo_pro': 'https://rpg.ifi.uzh.ch/docs/TRO17_Forster-SVO.pdf',
    'odgsslam2026': 'https://openaccess.thecvf.com/content/CVPR2026/papers/Spiss_ODGS-SLAM_Omnidirectional_Gaussian_Splatting_SLAM_CVPR_2026_paper.pdf',
}

def pdf_url(row):
    url = OVERRIDES.get(row['id'], row['paper_url'])
    return url.replace('arxiv.org/abs/', 'arxiv.org/pdf/')

def download(row):
    target = LIB / (row['id'] + '.pdf')
    if target.exists() and target.read_bytes()[:5] == b'%PDF-':
        return row['id'], 'cached', target.stat().st_size
    url = pdf_url(row)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (research literature figure archive)'})
        with urllib.request.urlopen(req, timeout=90) as response:
            body = response.read()
        if body[:5] != b'%PDF-':
            raise ValueError('Response is not PDF: ' + repr(body[:80]))
        target.write_bytes(body)
        return row['id'], 'downloaded', len(body)
    except Exception as exc:
        return row['id'], 'ERROR', str(exc)

def inspect():
    reports = {}
    for row in DATA:
        path = LIB / (row['id'] + '.pdf')
        if not path.exists():
            continue
        pages = []
        with pdfplumber.open(path) as pdf:
            for index, page in enumerate(pdf.pages[:7]):
                lines = page.extract_text_lines()
                captions = [line for line in lines if re.match(r'^(Fig\.?|Figure)\s*\d', line['text'], re.I)]
                if captions:
                    pages.append({'page': index+1, 'size': [page.width, page.height], 'captions': [{k:v for k,v in item.items() if k!='chars'} for item in captions], 'images': len(page.images), 'rects':len(page.rects), 'curves':len(page.curves)})
        reports[row['id']] = pages
    (PREV / 'slam_caption_positions.json').write_text(json.dumps(reports, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(reports, ensure_ascii=True))

def render():
    manifest = json.loads((ROOT / 'source_data' / 'figures_slam.json').read_text(encoding='utf-8'))
    for row in DATA:
        fid = row['id']
        if fid not in manifest:
            continue
        entry = manifest[fid]
        path = LIB / (fid + '.pdf')
        with pdfplumber.open(path) as pdf:
            page = pdf.pages[entry['page'] - 1]
            image = page.crop(tuple(entry['cropBox'])).to_image(resolution=180).original.convert('RGB')
        image.save(ROOT / 'site' / entry['image'], 'WEBP', quality=88, method=6)
        thumb = image.copy()
        thumb.thumbnail((1000, 700))
        thumb.save(ROOT / 'site' / entry['thumbnail'], 'WEBP', quality=85, method=6)
        entry['pdfSha256'] = hashlib.sha256(path.read_bytes()).hexdigest()
        entry['imageSize'] = list(image.size)
    (ROOT / 'source_data' / 'figures_slam.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def contact():
    manifest = json.loads((ROOT / 'source_data' / 'figures_slam.json').read_text(encoding='utf-8'))
    for start in range(0, len(DATA), 8):
        subset = DATA[start:start+8]
        sheet = Image.new('RGB', (1600, 4*310), 'white')
        draw = ImageDraw.Draw(sheet)
        for i,row in enumerate(subset):
            fid = row['id']
            if fid not in manifest:
                continue
            entry = manifest[fid]
            image = Image.open(ROOT / 'site' / entry['image']).convert('RGB')
            image.thumbnail((770,275))
            x,y = (i%2)*800,(i//2)*310
            draw.text((x+8,y+4), fid + ' | p' + str(entry['page']) + ' | ' + entry['figureLabel'], fill='black')
            sheet.paste(image,(x+8,y+25))
        sheet.save(PREV / f'slam_contact_{start//8+1}.jpg',quality=92)

if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--download', action='store_true')
    parser.add_argument('--inspect', action='store_true')
    parser.add_argument('--render', action='store_true')
    parser.add_argument('--contact', action='store_true')
    args=parser.parse_args()
    for folder in [LIB,PREV,ASSETS]:
        folder.mkdir(parents=True,exist_ok=True)
    if args.download:
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            for result in pool.map(download,DATA):
                print(json.dumps(result),flush=True)
    if args.inspect: inspect()
    if args.render: render()
    if args.contact: contact()
