# Panoramic Depth Atlas

[简体中文](README.md) | **English (selected)**

A curated index of **panoramic, fisheye and pinhole depth estimation, visual odometry, SLAM and related datasets** for robotics research, with separate field-of-view and camera-configuration filters for wide-FOV and multi-camera resources.

**[Explore the website →](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?lang=en)** · [Panoramic localization and mapping](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=slam&category=panoramic&lang=en) · [Datasets](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?collection=datasets&category=all&lang=en) · [Full JSON](docs/data/catalog.json) · [CSV](docs/data/catalog.csv)

Latest incremental literature-search cutoff: **2026-10-19**. Targeted pinhole additions, camera-taxonomy and dataset-annotation review: **2026-10-20**; this targeted review does not claim a comprehensive literature search through that date. The atlas contains **105** records: **34** depth and geometry methods (23 include a panoramic pipeline, 15 have pinhole-input evidence), **33** SLAM / VO / VIO methods (11 have explicit ERP input evidence), and **38** datasets (17 involve panoramic data or an explicit rendering or resampling protocol). Categories overlap. This is a manually verified index organized around research tasks, not a performance ranking or an exhaustive survey.

## Using the atlas

- Switch between depth estimation, localization and mapping, and datasets; browse Panoramic / ERP, Fisheye and Pinhole inputs. Wide FoV and multi-camera / baseline stereo, including simulation, are independent attributes.
- Combine keywords, year, scale and code-release filters. Queries remain in the URL so views can be shared.
- Open details for inputs and outputs, shapes and units, geometry conventions, calibration and IMU requirements, source code, environment, licenses and official evidence.
- Select up to four entries to compare them, and keep a reading list with local bookmarks.
- Export the current selection as JSON, CSV or a draft BibTeX file. Verify authors and final publication details before citing.
- Dataset filters also cover tasks, real / simulated-synthetic / both, indoor / outdoor / both, depth ground truth, trajectory / pose ground truth, and access conditions. Annotation status and provenance are shown separately.

The website header switches the whole interface, summaries and details between Chinese and English and remembers the local preference. Share `?lang=en` for an English view. Method names, paper titles and code identifiers retain their original form. Use the links at the top of this README to select a documentation language.

The pinhole category is labeled **Pinhole / 针孔（透视）**. Existing `category=perspective` links remain valid, and `category=pinhole` is an alias. Legacy `category=wide` and `category=multi` links migrate to all projections with `fov=wide` and `rig=multi` respectively, preserving shareable queries.

## Browsing datasets

Dataset cards include attributed previews to help identify scenes, sensor configurations or annotation formats. Images introduce the resource; they do not represent data collected or algorithms run by this website. Obtain the original files through the authors' download links under their terms.

The default reading priority puts resources with established use and clearer evaluation protocols first within the relevant research area. This order remains in effect after filtering by camera type. Labels distinguish **Established benchmark**, **Widely used resource**, **Specialized resource**, and **Awaiting release / verification**. Each entry includes the applicable scope, the editorial reason and official evidence. Entries within a group follow a curated order; sorting by year or name remains available.

This order is an editorial recommendation qualified by task scope, not an objective download-count or citation-based popularity ranking. An established perspective benchmark is not automatically suitable for full ERP input. Version support and native ERP support still need separate verification.

The 38 entries cover captured and rendered panoramic benchmarks, fisheye visual-inertial sequences, and common perspective baselines. Some announced resources are not yet available: inclusion does not mean the data can be downloaded. Each entry distinguishes the actual sensors, public annotations, depth or distance definition, reference trajectory, calibration and synchronization, splits, license and access conditions.

Depth and trajectory each have five independent annotation-status filters, preserving the distinction between estimated references, limited coverage and independently obtained ground truth:

| Annotation status | Meaning |
|---|---|
| Provided | Released measured or simulator/rendered annotations are documented; sparse range samples do not imply dense per-pixel depth. |
| Partial / conditional | Coverage depends on the sequence, subset, interval, static viewpoint, or a specified generation/export protocol. |
| Estimated reference | An SfM, SLAM or map-registration reference is provided, distinct from independently tracked ground truth. |
| Not provided | The documented release inventory does not provide the annotation product. |
| Unverified | Release contents, coverage or access remain unconfirmed; unknown does not mean absent. |

Provenance is separately recorded as **measured, simulated/rendered, estimated, or robot-kinematic**, with multiple sources allowed. Cards, details, comparison and exports retain coverage notes. Static scan-view poses do not automatically constitute a continuous trajectory, and RTK positions do not automatically establish complete 6DoF poses. See [`dataset_annotations.json`](source_data/dataset_annotations.json) and the [itemized annotation audit](references/dataset_annotation_sources.md).

Dataset routes such as camera observations, reprojection, rendering and stitching describe **image product provenance**. Authors may already release rendered or stitched ERP files, so these labels do not imply that users must convert them. Released, derivable and announced availability is recorded separately. Multi-camera / baseline stereo includes simulated configurations with a virtual baseline, such as TartanAir and Deep360; common-center cubemap faces do not form such a stereo rig.

Keep these distinctions in mind:

- **TartanAir V2** distinguishes the original perspective Z-depth from ray distance in customized fisheye or ERP views; the original paper year is not presented as the V2 release date. **Hilti 2026** includes 30 indoor floor sequences and reference trajectories from a LiDAR-inertial system. The released raw sequences do not include LiDAR, and reference poses do not imply dense depth ground truth. See the [source audit](references/tartanair_v2_hilti2026_sources.md).
- **MILD**, associated with AprilVINS, introduces real X5 and Insight9 data and MILD-Sim. Robot-kinematic TCP references have a specific scope. The official site still states that data, code and further details will be released after paper acceptance; licensing, full splits and public downloads remain unverified. Preview videos and a restricted upload service do not establish open data access. See the [MILD source audit](references/mild_dataset_sources.md).
- **UZH RPG Multi-FoV** provides synthetic urban and indoor scenes with perspective, fisheye and catadioptric models. Its `.depth` files store ray distance. A 360° catadioptric annular image is not a complete ERP, and the urban depth-file coverage limitation is recorded separately. The data license is CC BY-NC-SA 3.0. See the [format and source audit](references/rpg_fov_sources.md).
- **360DVO Dataset** uses SfM pseudo ground truth. Real Pro depth in **ODGS-SLAM Dataset** is estimated from stereo, X4 has no depth, and synthetic subsets are listed separately. **PanoCARLA-Static** and the dynamic version do not share frame-by-frame poses. See the [weekly source audit](references/weekly_20261019_sources.md).
- **PanoAir** still plans its official code release in the coming months. The authors' Drive links for data and calibration have not been unpacked or audited; a visible link does not establish a verified implementation, RTK file contents, or complete 6DoF reference coverage.
- Localization poses in **360Loc** are not dense depth ground truth; **TUM VI** does not provide complete motion capture for every sequence; **RobotCar** VO is not ground truth; **Holo360D** includes optimized trajectories and hole-filled depth; some derived ERP datasets may reuse training buildings.

The canonical records are `source_data/datasets_depth.json` and `source_data/datasets_slam.json`. Official evidence is linked in the [depth dataset audit](references/datasets_depth_sources.md), [localization and mapping dataset audit](references/datasets_slam_sources.md), and the supplementary audits above. This project curates public metadata and access links without redistributing large datasets.

## Technical map

| Direction | Representative methods |
|---|---|
| Panoramic foundation models and cross-camera methods | DAP, UniDAC, DAC, DA², DA360, PanDA, UniK3D, PaGeR, RePer-360 |
| Panoramic projection and fusion | 360MonoDepth, OmniFusion, HRDFuse, Elite360D, RPG360, ST²360D |
| Supervised and self-supervised panoramic depth | UniFuse, PanoFormer, BiFuse++, Depth Anywhere |
| Physical multi-camera stereo | MODE, MCPDepth |
| Video and multi-view geometry references | Video Depth Anything, Depth Anything 3, VGGT, VGGT-Ω |
| Pinhole depth and geometry baselines | Depth Anything V2, UniDepthV2, Metric3Dv2, Depth Pro, MoGe-2, MoGe-3, Marigold |
| Localization and mapping with ERP input | stella_vslam, 360VO, 360-VIO, 360DVO, PatchMatch-Stereo-Panorama, Cube-Splat, PanoLoop, 360ORB-SLAM, ODGS-SLAM, PanoGS-SLAM, PanoAir |
| Fisheye, wide-FOV and inertial methods | OpenVINS, ORB-SLAM3, Basalt, VINS-Fusion, OKVIS2/2-X, SVO Pro, OmniSLAM, LF-VISLAM, P2U-SLAM |
| Learned VO and SLAM | DROID-SLAM, DPVO, DPV-SLAM, MASt3R-SLAM, DBA-Fusion, D3VO, CodeVIO |
| RGB-D, neural implicit and Gaussian maps | SplaTAM, GO-SLAM, MonoGS, PanoSLAM |

Full titles, authors, affiliations, publication information and original sources are available on the [website](https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/?lang=en) and in the [evidence index](references/sources.md).

The additions include **MoGe-2 (NeurIPS 2025)**, which separates affine point geometry from learned metric scale, and **MoGe-3 (accepted at NeurIPS 2026 per its official project)**, which uses sparse 3D refinement to preserve fine structures. Both released depth fields are camera Z-depth; radial range requires the point norm. **Marigold (CVPR 2024)** adds a diffusion-based affine-invariant depth reference with scale and shift ambiguity; it is neither metric depth nor inverse depth. All three include real paper diagrams, full bilingual specifications and a [source audit](references/pinhole_20261020_sources.md).

360VO, 360-VIO and 360DVO are odometry methods, which does not establish global loop closure. PatchMatch-Stereo-Panorama extends OpenVSLAM with densification. Cube-Splat's virtual views share an optical center and pose, creating no physical stereo baseline. PanoLoop uses offline retrieval over the complete sequence and Sim(3) correction, so it is not labeled real-time online metric SLAM. See the [classic-method audit](references/slam_candidates_classics_sources.md) and [recent-method audit](references/slam_candidates_recent_sources.md). Two Sensors (MDPI) candidates were excluded from that batch as requested for its scope.

## Classification and evidence

Camera support, depth definition, scale source, pose output and release status are separate dimensions.

- **Pinhole** means perspective input. Variable aspect ratios or estimated FoV do not establish fisheye support. Internal pinhole patches derived from ERP do not establish a separate interface accepting standalone pinhole images.
- **Fisheye** requires explicit lens-model or interface evidence. Wide-angle lenses, PAL / catadioptric annular images and full-sphere representations are distinguished. An omni name or dual-fisheye hardware does not by itself establish panoramic input support.
- **Panoramic** means the authors' pipeline explicitly accepts complete ERP or spherical input. Fisheye, omnidirectional rigs, PAL lenses, or names containing Any-view or Panoptic do not establish that support. PAL and rig methods are classified by their actual input.
- **Complete panoramic input support** describes a verified interface or paper pipeline. It does not mean every internal operation runs directly on the sphere; ERP-to-cubemap or tangent-plane conversion is documented separately.
- **Wide FoV** is an angular attribute rather than a separate projection model, so it is an auxiliary filter. It may overlap with pinhole or fisheye inputs when supported by itemized evidence.
- **Multi-camera / baseline stereo** is a camera-configuration attribute covering physical rigs and simulated stereo with a virtual baseline. Splitting one ERP into common-center cubemap faces or tangent views adds no stereo baseline.
- **Method input routes** distinguish direct input from pipelines requiring external reprojection or view splitting. Paper capabilities, released interfaces and announced support remain separate. Dataset routes describe image product provenance rather than necessarily describing runtime conversion steps.
- **Range** is Euclidean distance along a unit ray, `X = range × unit_ray`; **Z-depth** is the optical-axis component. The rear hemisphere of a complete ERP can have negative Z, so positive Z-depth must not be treated as full-sphere distance.
- **Metric** means the original method has a metric source, such as learned priors, a known baseline, an IMU or a depth sensor, documented in `scaleNote` / `metricStatus`. This label does not claim independently verified absolute accuracy.
- **Relative** indicates scale or scale-and-shift ambiguity. **Mixed** covers different scale conditions across input modes, weights, supervision domains or branches. **Unknown** means insufficient evidence. Metric training labels do not guarantee zero-shot metric predictions.
- **Released code** means a visible official implementation. **Partial release** indicates known component or release limitations. **Unverified** means a link or code completeness still needs review. **No public code found** does not treat a promise or documentation repository as a full implementation. Weight availability and licensing are recorded separately.
- Display years prioritize an explicit formal publication year, otherwise retaining the preprint or software year. Original record years, arXiv versions and conference differences are preserved. A continuing software project may cite a foundational paper without producing a new paper with the project's name.

For example, PanoSLAM is **panoptic RGB-D** mapping, not an ERP method. Scale-aligned PanoGS-SLAM results do not prove absolute metric trajectories. UniK3D's distance and depth mean range and Z-depth respectively. DAP raw-unit conversion must be checked against the checkpoint and validity mask. These judgments link to original evidence, and unknowns remain explicit.

DAC and UniDAC may appear in multiple categories because they document calibrated fisheye/pinhole-to-canonical-ERP conversion. Route labels preserve this distinction without implying that raw fisheye images need no preprocessing. The current MoGe `infer_panorama.py` imports **v1**; its panorama wrapper does not establish verified MoGe-2 or MoGe-3 panorama support. Canonical taxonomy is stored in [`camera_taxonomy.json`](source_data/camera_taxonomy.json), with the [itemized taxonomy index](references/camera_taxonomy.md) and [targeted review ledger](references/camera_taxonomy_audit_20261020.md).

## Update records and figure provenance

All 67 methods include verified paper figures; previews for the 38 datasets are attributed separately.

The latest literature search is documented in the [2026-10-19 source audit](references/weekly_20261019_sources.md), covering GeoPano, AprilVINS / MILD, PanoCARLA-Static, and previously omitted 360DVO and ODGS-SLAM datasets. GeoPano point maps are scale-aligned outputs. AprilVINS is conditionally metric VIO with fisheye, IMU and AprilTag inputs; its algorithm and MILD data remain pending release. Backfilled older resources are not described as new work from that week, and unverified code announcements are not labeled complete implementations.

Method cards prioritize proposed-method overviews, followed by teasers or representative results, with an enlarged view on click. These are not outputs reproduced by this website. Figures retain their original colors; the interface uses white backgrounds, black text, neutral gray borders and limited semantic color, with a text-only homepage introduction.

`source_data/figures_depth.json` and `source_data/figures_slam.json` record method-figure provenance and visual verification. PDF excerpts include page number, figure number, crop bounds, captions and PDF SHA-256. A `sourceType: author-project-image` entry instead records the author page, original image URL, image SHA-256 and attribution, without inventing PDF pages or fingerprints. See the [paper figure provenance index](references/figure_sources.md). Web images are stored in `site/assets/papers/`.

Full papers and figure previews remain in the ignored local `library/` directory; PDFs are normally named by method ID under `library/pdfs/`. Restricted-paper access gaps remain documented. For example, 360-VIO uses a real method image from its authors' website and is not marked as an acquired full PDF or a PDF screenshot. Acquisition and cropping helpers are `tools/acquire_depth_figures.py` and `tools/acquire_slam_figures.py`; incremental maintenance must not overwrite existing manifests with initialization options. Full papers, model weights, datasets and credentials are not uploaded to this repository.

## Updating records and building

```text
source_data/             Canonical structured records and figure manifests
site/                    HTML / CSS / JavaScript website sources
site/data/catalog.*      Normalized frontend data and export files
docs/                    GitHub Pages publishing directory
references/              Original sources and verification notes
tools/build_site.py      Data adaptation and copy-based publishing build
tests/                   Data checks and DOM tests using the real catalog
```

1. Add or revise records in `source_data/`, include official paper, code or dataset links and verification dates, and retain stable unique IDs. Method summaries, details and specifications also need per-ID translations in `site/i18n.js`; bilingual dataset fields reside directly in the source records.
2. Maintain evidence-backed input projections, routes and auxiliary attributes in `source_data/camera_taxonomy.json`, and dataset depth/trajectory status, coverage and provenance in `source_data/dataset_annotations.json`, preserving itemized evidence and check dates. Keep scale and release mappings synchronized in `tools/build_site.py`. Do not infer support from names or keywords. New methods need verified real figures and provenance rather than generic diagrams.
3. Run `python tools/build_site.py` (Python 3.10+, standard library only) and `python tools/validate_data.py` to check canonical data, evidence and consistency between `site/` and `docs/`.
4. Check JavaScript syntax and run `node tests/frontend.test.cjs`. DOM tests use Node 24+ and pinned jsdom 30.1.3; install the locked dependencies in `tools/test-runtime` first. Browser layout and screenshot checks are performed separately.
Dataset previews reside in `source_data/figures_datasets_depth.json` and `source_data/figures_datasets_slam.json`; reading priority resides in `source_data/dataset_curation.json`. New datasets need an authentic preview, bilingual captions, attribution and scoped ordering evidence.

5. Commit canonical data, website sources and generated `docs/`. GitHub Pages publishes from `main:/docs`; do not edit only the generated catalog.

For local preview, run `python -m http.server 8766 --bind 127.0.0.1 --directory site` and open `http://127.0.0.1:8766/`. Opening `site/index.html` directly also works because the data uses classic scripts supporting file URLs. Reading the website requires no Node, npm or model environment. This project has not run the indexed depth networks, SLAM systems or real-device accuracy evaluations.

## Contributions and terms

Corrections and new records with primary sources are welcome. Distinguish paper claims, released interfaces and your own reproduction results; mark missing information as Unknown. Numbers measured with different cameras, scale alignment, resolutions or hardware are not directly ranked for accuracy or speed.

The interaction format was inspired by [Awesome-Ego-Robotics](https://chang-xinhai.github.io/Awesome-Ego-Robotics/); this website's interface and code were independently implemented. Paper and dataset previews introduce and discuss the resources, with copyright retained by the original authors. Use of complete papers, images, models and data is governed by the original sources' licenses and access conditions.

[Camera taxonomy evidence](references/camera_taxonomy.md) · [Annotation evidence](references/dataset_annotation_sources.md) · [Pinhole additions](references/pinhole_20261020_sources.md) · [Dataset ordering evidence](references/dataset_curation.md) · [Dataset preview attribution](references/dataset_figure_sources.md)
