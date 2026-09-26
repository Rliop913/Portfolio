End-to-End MR Haptic Texture Workflow
=====================================

.. rubric:: Research System · Haptics/XR | M.S. Researcher | March 2025—Present

Context
-------

This system keeps haptic texture acquisition, online model generation, model
analysis, and vibrotactile rendering inside one standalone Meta Quest session.
The research prototype targets a hands-on AsiaHaptics 2026 demonstration.

Acquisition Hardware
--------------------

:Prototype BOM: USD 26.27
:Sensors: MPU6050 acceleration + QA6P force-sensitive resistor
:Controller: ESP32-class wireless sensor interface
:Sampling: 1 kHz acceleration and force
:Interaction: Meta Quest 3 + Touch Plus

Processing Route
----------------

1. Acquire synchronized acceleration, force, position, and velocity.
2. Reject startup data and estimate a baseline.
3. Segment valid contact motion using bottom-up time-series segmentation.
4. Reduce three-axis acceleration into one vibration signal with DFT321.
5. Estimate autoregressive models and convert coefficients into LSF form.
6. Interpolate models over the observed spatial and dynamic domain.
7. Synthesize vibration and deliver floating-point PCM through OpenXR.

Implementation Record
---------------------

:Runtime: Godot 4 + native C/C++ GDExtension
:Transport: Wi-Fi TCP with host/client clock-offset alignment
:Modeling: DFT321, Yule-Walker AR, LSF conversion, Delaunay/barycentric interpolation
:Rendering: ``XR_FB_haptic_pcm`` floating-point PCM
:Storage: CBOR model serialization on Meta Quest 3

Timing and Runtime Behavior
---------------------------

- A PTP-like exchange aligns ESP32 timestamps to the headset clock without
  assuming hardware timestamp support.
- The sensor link uses explicit probing, connected states, timeout detection,
  and automatic return to discovery after a Wi-Fi interruption.
- Spatial lookup accelerates Delaunay triangle selection through AABB/BVH
  indexing and disables an ineffective cache after repeated misses.
- The native implementation separates pure C++ model tests from the Godot
  GDExtension boundary and integrates FFT, autoregression, triangulation, and
  BVH dependencies through CMake.

Model Parameters
----------------

:Analysis window: 1,000 samples
:Overlap / hop: 500 / 500 samples
:Segmentation height threshold: 10
:LSF unit-circle tolerance: :math:`10^{-4}`
:LSF angle tolerance: :math:`10^{-7}`

Research Evidence
-----------------

``An End-to-End MR Workflow for Haptic Texture Acquisition, Modeling, and
Rendering`` — Jiho Kim, Mudassir Ibrahim Awan, Ahsan Raza, and SeokHee Jeon,
AsiaHaptics 2026.

Project Link
------------

No public repository or publication page is linked yet. This page remains the
portfolio entry point until a canonical public artifact is available.
