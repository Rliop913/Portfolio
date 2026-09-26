Project DJ Engine
=================

.. rubric:: Systems · Audio · Middleware | Solo Developer | June 2022—Present

What It Is
----------

Project DJ Engine is a soft real-time C++20 engine for rhythm games, DJ
performance, and audio-production workflows. A dedicated Godot GDExtension
provides the supported application-facing surface.

It is not a single-purpose audio demo. It brings playback, editing, device
input, timing judgment, music analysis, storage, and application integration
into one reusable system. A developer can build an interactive music product
on top of the engine without recreating those foundations.

At a Glance
-----------

.. list-table:: Project scale
   :widths: 31 26 43
   :header-rows: 1

   * - Area
     - Scale
     - Engineering significance
   * - Current version
     - 0.9.3
     - Synchronized core, wrapper, and distribution baseline
   * - Production code
     - 317 files · 35,779 lines
     - Native implementation scale, excluding test sources
   * - Automated test definitions
     - 173 cases
     - Test surface spanning the engine's major subsystems
   * - Supported desktop platforms
     - Windows · Linux · macOS
     - Portability across distinct toolchains and platform APIs
   * - Build automation
     - 10 workflows · 6 wrapper configurations
     - Repeatable builds for multiple platforms and build modes
   * - External integration
     - 21 managed libraries
     - Audio, persistence, search, networking, and ML capabilities

What I Built
------------

I own the system architecture, playback and editor runtime, DSP integration,
device input, rhythm-game judgment, IPC, persistence, packaging, and automated
binary delivery.

How It Fits Together
--------------------

.. list-table::
   :widths: 18 25 57
   :header-rows: 1

   * - Boundary
     - Component
     - Responsibility
   * - Application surface
     - PDJE-Godot-Plugin
     - Exposes the native runtime through Godot GDExtension APIs
   * - Core
     - Playback + Editor
     - Playback, authoring, indexing, music/FX control, and project state
   * - Input
     - Device Capture
     - Cross-platform keyboard, mouse, and MIDI backends
   * - Judge
     - Timing + Rails
     - Evaluates chart notes and input against timing windows
   * - Util
     - Data + Analysis
     - Persistence, search, signal analysis, waveform output, and ML inference
   * - Live data
     - Core timing + input events
     - Aligns playback state and input events on a monotonic timebase

Engineering Scope
-----------------

:Runtime: C++20, miniaudio, Faust, Cap'n Proto, SQLite
:Networking: TCP, UDP, WebSocket, shared-memory IPC
:Delivery: CMake, Conan, prebuilt Godot 4 GDExtension packages
:Platforms: Windows, Linux, macOS

Built for Continued Development
-------------------------------

- Integrates 21 explicitly managed libraries through Conan, FetchContent, and
  a prebuilt ONNX Runtime package while keeping the native core independent
  from the Godot-facing wrapper.
- Defines 173 doctest cases and CTest registration across core, input, judge,
  util, and integration probes.
- Builds the core on Windows, Ubuntu, and macOS. The wrapper additionally
  covers both Release and RelWithDebInfo, forming a six-configuration matrix.
- Maintains core, wrapper, and binary-distribution repositories as distinct
  release boundaries.

The distribution automation also drives 51 Godot-facing operations through a
headless application on Windows, Ubuntu, and macOS. The exercised path covers
engine and editor startup, track rendering, database updates, search, player
creation, music loading, cueing, BPM changes, and effect control. This turns
the delivery repository into an executable integration record, not merely a
place to store binaries.

Documentation as an Engineering System
--------------------------------------

The documentation is maintained as its own versioned system rather than as a
generated appendix. Doxygen XML is consumed through Breathe and Sphinx, while a
Python documentation harness records source baselines and current heads,
reports the source diff that remains undocumented, and advances the baseline
only after review.

The resulting site covers integration, editor workflows, input, judgment,
utility APIs, live data lines, format contracts, and guidance for both human
contributors and code-retrieval agents.

Supporting Systems
------------------

``AskToPDJE`` indexes the core and wrapper codebases for evidence-first code
retrieval. It combines persistent vector search with BM25 fusion and reranking,
returns file and symbol evidence, and exposes both a Discord command surface
and a Continue-compatible MCP server.

The low-latency input path is also backed by focused platform studies for
Windows RawInput, Linux libevdev/epoll, and MIDI through libremidi. These remain
implementation evidence for the Input Engine rather than separate headline
projects.

Current Development
-------------------

``Project-DJ-DAW`` is the application layer currently being built on top of
the engine. Its active work includes project selection, music-asset metadata,
BPM mapping, waveform/STFT inspection, and mixset-editing workspaces. It is
listed here as ongoing work until its public usage contract and documentation
are complete.

Source & Project Links
----------------------

The links below lead to the original project only after the portfolio record
above has established its scope and implementation boundaries.

- `Documentation <https://rliop913.github.io/Project-DJ-Engine-Docs/>`_
- `Documentation source and harness <https://github.com/Rliop913/Project-DJ-Engine-Docs>`_
- `Core repository <https://github.com/Rliop913/Project-DJ-Engine>`_
- `Godot wrapper <https://github.com/Rliop913/PDJE-Godot-Plugin>`_
- `Prebuilt distribution <https://github.com/Rliop913/Project_DJ_Godot>`_
- `AskToPDJE <https://github.com/Rliop913/AskToPDJE>`_
- `Project-DJ-DAW <https://github.com/Rliop913/Project-DJ-DAW>`_
- `Windows RawInput study <https://github.com/Rliop913/low-latency-RawInput-sample>`_
- `Linux libevdev study <https://github.com/Rliop913/low-latency-libevdev-sample>`_
- `MIDI/libremidi study <https://github.com/Rliop913/low-latency-libremidi-sample>`_
