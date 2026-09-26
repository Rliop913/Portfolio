Supporting Work
===============

This page collects smaller systems and upstream contributions that support the
main engineering record without competing with the three selected projects.

Upstream Contributions
----------------------

Godot AI — Pi Coding Agent Client
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Added Pi Coding Agent as a supported MCP client to ``hi-godot/godot-ai``. The
change covers client registration and configuration, merge precedence,
rollback protection, project overrides, user documentation, and Godot/Python
regression tests. The merged contribution changed 19 files with 2,126 additions
and 78 deletions.

- `Merged pull request #870 <https://github.com/hi-godot/godot-ai/pull/870>`_

Meta RocksDB — C++20 Atomic Shared Pointer Compatibility
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Proposed a compatibility fix for fragmented range-tombstone caching under
C++20: use ``std::atomic<std::shared_ptr<T>>`` when the standard-library feature
is available and preserve the C++17 free-function fallback otherwise. The
public pull request was closed after review; the change was subsequently landed
upstream through Meta's internal integration workflow with the original pull
request recorded in the commit.

- `Original pull request #13744 <https://github.com/facebook/rocksdb/pull/13744>`_
- `Upstream commit 6ae1cb8 <https://github.com/facebook/rocksdb/commit/6ae1cb8837022ef84f3993633791a4a54b18393d>`_

Selected Utility
----------------

Linux Keyboard Debouncer
~~~~~~~~~~~~~~~~~~~~~~~~

A small libevdev/interception-tools utility that creates a filtered Linux input
device, applies a configurable microsecond debounce threshold, and can
reconnect automatically when a Bluetooth keyboard reappears through udev.

- `Repository <https://github.com/Rliop913/Linux-Key-Debouncer>`_

Scope Boundary
--------------

Experimental language exercises, early demonstrations, and unrelated personal
automation are not presented as portfolio projects. Private laboratory and
assistive-control repositories remain excluded until their publication and
collaboration boundaries are explicitly cleared.
