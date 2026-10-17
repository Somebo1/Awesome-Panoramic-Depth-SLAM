# Verified panoramic VO, VIO and geometric mapping additions

Checked 2026-10-17. These three non-MDPI papers complement the existing atlas: a direct visual-only baseline, an inertial filtering baseline, and a geometric dense-mapping baseline. Primary papers and author resources were reviewed; implementations were not executed locally.

## 360VO — `vo360_2022`

- [Author project](https://huajianup.github.io/research/360VO/) establishes ICRA 2022 and links the paper, supplementary material and dataset. No official implementation link was found there.
- [Author PDF](https://huajianup.github.io/research/360VO/360VO_ICRA2022.pdf), sections III–IV: spherical projection, inverse Euclidean distance, epipolar-curve search and photometric local-window optimization.
- [HKUST institutional publication record](https://researchportal.hkust.edu.hk/en/publications/360vo-visual-odometry-using-a-single-360-camera/) establishes pp. 5594–5600 and DOI [10.1109/ICRA46639.2022.9812203](https://doi.org/10.1109/ICRA46639.2022.9812203).
- Value: a directly relevant ERP adaptation of DSO. Separates spherical photometric geometry from the newer learned VO and Gaussian mapping routes.
- Boundaries: no IMU or described global loop module. Monocular geometry retains scale ambiguity. No complete official code/license verified; do not mistake the author's separate 360VOT object-tracking toolkit for this method.

## 360-VIO — `vio360_2024`

- [IEEE publication](https://ieeexplore.ieee.org/document/10373205/) records TIE 71(9), 11136–11145, September 2024; online 25 December 2023; DOI [10.1109/TIE.2023.3337541](https://doi.org/10.1109/TIE.2023.3337541).
- [Coauthor Sheng Yang's page](https://shengyang93.github.io/publication/2023-360-vio/) and [coauthor Xieyuanli Chen's publication list](https://chen-xieyuanli.github.io/_pages/includes/pub/) confirm the paper. The latter directly links [the author-uploaded manuscript](https://www.researchgate.net/profile/Qi-Wu-42/publication/376825456_360-VIO_A_Robust_Visual-Inertial_Odometry_Using_a_360_Camera/links/6594b0b56f6e450f19c49549/360-VIO-A-Robust-Visual-Inertial-Odometry-Using-a-360-Camera.pdf).
- Manuscript section III: HybVIO-based EKF, ERP-to-bearing model, panoramic optical-center-to-IMU calibration, inertial propagation and tangent-plane visual measurement update with feature uncertainty.
- Value: the most directly relevant filtering comparison for a lightweight 360° camera plus IMU platform. It exposes the need to distinguish the stitched panorama optical center from the front fisheye optical center.
- Boundaries: sparse-feature VIO, not a dense-depth network or a verified global loop-closing SLAM system. Metric scale relies on inertial calibration and observable motion. The manuscript announces `https://github.com/Gatsby23/360-VIO`, but direct web access and main README returned 404 during this audit; GitHub API verification additionally hit a public rate limit. Therefore a runnable official release and license remain unverified, not confirmed absent permanently. A similarly named third-party toolkit is not the official method.
- PDF retrieval note: the author manuscript is readable through the research web tool, but direct local ResearchGate download is access-restricted. This is an acquisition limitation, not evidence against the paper's existence. Do not bypass the site's access controls or invent a PDF hash.

## PatchMatch-Stereo-Panorama — `patchmatch_panorama2022`

- [Author manuscript](https://arxiv.org/abs/2211.16266), sections III–IV and Figure 3, documents an additional ERP PatchMatch thread consuming OpenVSLAM keyframes, followed by depth consistency filtering and dense point fusion.
- [Official repository](https://github.com/RoblabWh/PatchMatch) links the paper and citation: SSRR 2022, pp. 366–372, DOI [10.1109/SSRR56537.2022.10018698](https://doi.org/10.1109/SSRR56537.2022.10018698). Its citation and the PDF list three paper authors; the README heading also lists an additional contributor and must not replace the publication author list.
- [Top-level LICENSE](https://github.com/RoblabWh/PatchMatch/blob/main/LICENSE), also fetched successfully from [raw source](https://raw.githubusercontent.com/RoblabWh/PatchMatch/main/LICENSE), is BSD-2-Clause. Dependency terms remain separate.
- The original official repository is archived and explicitly points to [stella_vslam_dense](https://github.com/RoblabWh/stella_vslam_dense) as its successor. This is a maintenance/reproduction note, not a second newly counted paper.
- Value: an interpretable geometric dense-mapping comparator for neural/3DGS systems, with actual ERP support and published code.
- Boundaries: poses and loop closure come from underlying OpenVSLAM. Dense reconstruction retains monocular scale ambiguity. Exact scalar-depth export semantics and dense-map deformation after global loop correction were not independently audited; no local runtime reproduction is claimed.
