"""Publish this public-only static atlas through GitHub's supported APIs.

Credentials are requested from Git Credential Manager and stay in memory.
Neither the credential response nor Authorization headers are logged or saved.
This helper has a fixed GitHub destination and verifies the expected account.
"""
from pathlib import Path
import argparse
import json
import os
import subprocess
import sys
import urllib.request
import urllib.error

ROOT=Path(__file__).resolve().parents[1]
OWNER='Somebo1'
REPO='Awesome-Panoramic-Depth-SLAM'
REPO_PATH=f'/repos/{OWNER}/{REPO}'


def api(method,path,data=None,optional=False):
    req=urllib.request.Request('https://api.github.com'+path,
        data=json.dumps(data).encode() if data is not None else None,
        method=method,headers={'Authorization':'Bearer '+TOKEN,
        'Accept':'application/vnd.github+json','User-Agent':'Panoramic-Depth-Atlas-Publisher',
        'X-GitHub-Api-Version':'2022-11-28','Content-Type':'application/json'})
    try:
        with urllib.request.urlopen(req,timeout=40) as r:
            content=r.read()
            return json.loads(content) if content else {}
    except urllib.error.HTTPError as e:
        if optional and e.code==404:return None
        # Output only GitHub's public error description, never request headers.
        try:message=json.loads(e.read()).get('message','HTTP failure')
        except Exception:message='HTTP failure'
        raise RuntimeError(f'GitHub API {method} {path}: HTTP {e.code}: {message}') from None


def credential():
    env=os.environ.copy();env['GCM_INTERACTIVE']='never';env['GIT_TERMINAL_PROMPT']='0'
    r=subprocess.run(['git','-c','credential.interactive=never','credential','fill'],
        input=f'protocol=https\nhost=github.com\nusername={OWNER}\n\n',
        capture_output=True,text=True,env=env,cwd=ROOT,timeout=30)
    if r.returncode:raise RuntimeError('Existing GitHub credential unavailable; no credential contents were logged.')
    d=dict(line.split('=',1) for line in r.stdout.splitlines() if '=' in line)
    token=d.get('password')
    if not token:raise RuntimeError('Git credential helper returned no usable credential.')
    return token


def run():
    p=argparse.ArgumentParser()
    p.add_argument('action',choices=['check-auth','create','enable-pages','status'])
    args=p.parse_args()
    global TOKEN
    TOKEN=credential()
    me=api('GET','/user')
    if me['login'].lower()!=OWNER.lower():raise RuntimeError('Authenticated GitHub account does not match expected owner.')
    if args.action=='check-auth':
        repo=api('GET',REPO_PATH,optional=True)
        print(json.dumps({'authenticated_owner':me['login'],'target_repository_exists':repo is not None}))
    elif args.action=='create':
        if not (ROOT/'docs/index.html').exists() or not (ROOT/'docs/data/catalog.js').exists():
            raise RuntimeError('Build and validate reviewable site artifacts before creating a remote repository.')
        repo=api('GET',REPO_PATH,optional=True)
        if repo:raise RuntimeError('Target repository already exists. Inspect it rather than overwriting it.')
        repo=api('POST','/user/repos',{'name':REPO,'description':'A curated atlas of panoramic, fisheye and wide-FOV depth models, visual odometry and SLAM. Verified inputs, outputs, scale and official sources.',
             'private':False,'auto_init':False,'has_issues':True,'has_wiki':False,
             'homepage':f'https://{OWNER.lower()}.github.io/{REPO}/'})
        print(json.dumps({k:repo.get(k) for k in ['html_url','clone_url','default_branch','visibility']}))
    elif args.action=='enable-pages':
        current=api('GET',REPO_PATH+'/pages',optional=True)
        if current:
            if current.get('source')!={'branch':'main','path':'/docs'}:
                raise RuntimeError('Existing Pages configuration differs; inspect it before updating.')
            result=current
        else:
            result=api('POST',REPO_PATH+'/pages',{'build_type':'legacy','source':{'branch':'main','path':'/docs'}})
        print(json.dumps({k:result.get(k) for k in ['html_url','status','source','public','build_type']}))
    else:
        pages=api('GET',REPO_PATH+'/pages',optional=True)
        build=api('GET',REPO_PATH+'/pages/builds/latest',optional=True) if pages else None
        print(json.dumps({'repository':f'https://github.com/{OWNER}/{REPO}',
              'pages':{k:pages.get(k) for k in ['html_url','status','source','build_type']} if pages else None,
              'latest_build':{k:build.get(k) for k in ['status','error','commit','updated_at','duration']} if build else None}))


if __name__=='__main__':
    try:run()
    except Exception as e:
        print(type(e).__name__+': '+str(e),file=sys.stderr)
        raise SystemExit(1)
