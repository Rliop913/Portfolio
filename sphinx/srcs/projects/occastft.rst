OCCAstft
========

.. rubric:: Compute · Signal Processing | GPGPU/DSP Developer | 2023—2024

Context
-------

OCCAstft is an open-source heterogeneous STFT system for large signal batches.
A common processing contract spans GPU and CPU runners while a standalone
proxy selects an available execution route and returns asynchronous results.

Execution Model
---------------

.. list-table::
   :widths: 20 28 52
   :header-rows: 1

   * - Stage
     - Implementation
     - Detail
   * - Request
     - STFTProxy
     - Asynchronous ``future<optional<vector<float>>>`` result
   * - Transport
     - IPC + Network
     - Cap'n Proto, IXWebSocket, Windows/POSIX shared memory
   * - Execution
     - Runtime fallback
     - CUDA → OpenCL → OpenMP → server → Serial
   * - Kernel
     - OKL + Stockham FFT
     - Eight windows, overlap, DC removal, two output modes

Signal Pipeline
---------------

``overlap → window / DC removal → Stockham FFT → power or packed half-complex``

Profiling Evidence
------------------

- OCCA, cuFFT, and clFFT comparison artifacts
- 15 power-of-two window sizes from :math:`2^6` through :math:`2^{20}`
- NVIDIA H100 benchmark host running Ubuntu and CUDA 12.3
- HIP and Metal are scaffolded but not implemented

The repository preserves the raw JSON results, merged CSV generation route,
and per-window profiling artifacts. The portfolio intentionally records the
test boundary without turning plot shapes into unsupported performance claims;
comparative speedups will be stated only when a reviewed result table is
available.

Source & Project Links
----------------------

The links below lead to the original implementation and related publication
after the portfolio summary above.

- `Repository <https://github.com/Rliop913/OCCAstft>`_
- `Related APJCRI paper <http://apjcriweb.org/content/vol11no2/40.html>`_
