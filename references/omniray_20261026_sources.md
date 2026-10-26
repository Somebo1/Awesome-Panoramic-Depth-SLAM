# OmniRay weekly source review - 2026-10-26

New paper in this weekly window: arXiv v1 submitted 2026-10-22 17:55:30 UTC. Stable ID `omniray2026`; no matching existing record found.

- [Original abstract and version history](https://arxiv.org/abs/2610.31645v1): authors, publication date and up-to-scale scope. No formal venue is claimed.
- [Original HTML](https://arxiv.org/html/2610.31645v1), Sec. 3 / Eq. 1: unit camera ray and positive radial distance, P=rho*d, not optical-axis Z. The abstract and Sec. 4.3 explicitly limit geometry to global scale ambiguity; every benchmark method uses per-image median scale alignment.
- [Official project](https://nam1410.github.io/omniray/): explicitly says code and models are TBD. Code/Demo/Checkpoint buttons target arXiv rather than released artifacts. No guessed repository or checkpoint URL is retained. The paper CC BY 4.0 license does not license unissued software/weights.
- Sec. 4.2 / Appendix A.2: complete ERP, fisheye and pinhole evaluation; central-camera assumption. Synthetic lens augmentation and annular Nayar test do not mean a noncentral physical rig is supported. GoPro and Nayar configurations are withheld from training; 2D3DS/360Loc are source training datasets and PanoCity/CO3Dv2 unseen domains. These are different generalization tests.
- The paper compares UniK3D/DA3 and camera calibration baselines under its stated alignment. No direct DAP comparison was found. No local model inference, speed benchmark, weight download, or SLAM accuracy test was performed.

## Original method image

Original PDF page 3, Figure 2. Downloaded [v1 PDF](https://arxiv.org/pdf/2610.31645v1), SHA-256 `b893bd46731114697c060f1b60f1d099ce0539ccd5b32c3e3d9732b3a1a72ba3`. Crop in PDF points from top-left: [106,80,504,316]. Poppler render at 216 dpi, then exact crop; original complete page and final crop visually inspected. Both method panels are complete. Full PDF remains in ignored library; only attributed WebP image and thumbnail are publishable assets.

## Other depth checks this week

- OmniPoint official project remains paper/poster/BibTeX only; no new linked implementation/checkpoint found on 2026-10-26.
- DAP/DA2/PaGeR/DepthMaster official READMEs retain their existing release information, with no new October release announcement seen.
- VGGT-360 arXiv2603.18943v2 is a valuable older omission (March/May2026), not a paper first appearing this week; retain as backfill candidate rather than call it new.
