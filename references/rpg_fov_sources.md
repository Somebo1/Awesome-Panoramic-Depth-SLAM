# RPG Multi-FoV dataset audit

Reviewed 2026-10-19. New dataset identity `ds_rpg_fov`; no equivalent canonical record found. This record covers the synthetic release currently linked from the requested page, not every real-world experiment in its paper.

- [Official project](https://rpg.ifi.uzh.ch/fov.html): two Blender scenes (city and room), each with perspective, fisheye and catadioptric optics at fixed sensor resolution. Provides data, optional depth, calibration/GT info and Blender scenes. CC BY-NC-SA 3.0 is explicit. No registration required by linked endpoints.
- [ICRA 2016 paper](https://rpg.ifi.uzh.ch/docs/ICRA16_Zhang.pdf), Sec. IV-A and Fig. 11: nominal 90° perspective, 180° fisheye, 360° catadioptric. Urban camera faces forward, room perspective/fisheye camera faces down, catadioptric faces up at mirror. Catadioptric azimuth coverage is not a full-sphere ERP image. Real Flyroom/MoCap and Zurich experiments in Sec. IV-B are distinct from the six synthetic download configurations.
- Six official info archives were downloaded and inspected. Their common README establishes pinhole K versus OCamCalib polynomial models; `images.txt` uses image ID, seconds and path; `groundtruth.txt` uses image ID, translation and quaternion xyzw, with `T_world_camera`. It explicitly defines `.depth` as row-major, space-delimited floating-point **Euclidean optical-ray distance**, not Z, including pinhole data: Z = range × unit-bearing-z.
- Urban info archives each enumerate 2500 images/poses but only one depth association; room archives enumerate 200 images/poses/depth associations. Image timestamps advance approximately 1/30 second. Fish/cata calibration explicitly lists 640×480. Large image/depth archives were only checked with HEAD; their file inventories and exhaustive per-frame depth coverage remain unverified. Do not turn one urban depth association into an assertion that the large archives contain only one map, or that all 2500 are confirmed.
- [Author's camera implementation](https://github.com/zhangzichao/omni_cam): visibility checks rectangular boundary only, so valid circular/annular masks are needed. [Official Blender patch](https://github.com/uzh-rpg/rpg_blender_omni_camera) describes polynomial/affine/shift/crop parameters. Neither justifies an ERP label or a physical multicamera/IMU claim.
- No official learning split, raw IMU stream or hardware synchronization protocol is established by the inspected synthetic-release material. Keep same-scene/trajectory optical variants together to avoid split leakage. The project states the urban data prioritizes geometrically realistic VO comparison rather than perfect photorealism.

## Download verification and metadata fingerprints

All 17 linked archive endpoints returned HTTP 200 on 2026-10-19. Only the six small calibration/trajectory info archives were downloaded; image, depth and Blender-scene archives were checked using HEAD requests. These checks establish endpoint availability, not complete transfer or exhaustive data integrity. Full archives are not redistributed.

| Official info archive | SHA-256 |
|---|---|
| [rpg_urban_pinhole_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_urban_pinhole_info.tar.gz) | `8ad042a2b8fa6921faca98a99a3255b75065a85c238d7e98a73edfb8a6f555eb` |
| [rpg_urban_fisheye_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_urban_fisheye_info.tar.gz) | `0405067bb06784eb3982beca92b0fc265ff144b3e0ea9cdf33c24b0e6a307203` |
| [rpg_urban_cata_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_urban_cata_info.tar.gz) | `f38765cd66b0deb2cbbc8450f2c886facff5fe9da4507e5d6ba6f45f5faa1dd7` |
| [rpg_vfr_pinhole_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_vfr_pinhole_info.tar.gz) | `d4179b11b2e3e334e9b091fc4053bd6930f9e8c0d19c3b96d7f728a990e84a1e` |
| [rpg_vfr_fisheye_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_vfr_fisheye_info.tar.gz) | `7adb077d896d448b1ebeb1eb6e0baa5f7e6afa7285cb72bb35221ec5802e2bf9` |
| [rpg_vfr_cata_info.tar.gz](https://rpg.ifi.uzh.ch/datasets/rpg_vfr_cata_info.tar.gz) | `b1ff4e364348a3eae665557fa2625b49d8e9003570cf576899aa7471bd1e9fe9` |
