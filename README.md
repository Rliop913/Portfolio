# Jiho Kim — Portfolio

Technical portfolio for C++ systems, audio DSP, GPGPU, and haptics/XR work.

This branch preserves two design directions:

- The repository root contains the editorial, CV-style static prototype.
- `sphinx/` contains the documentation-first portfolio, including its source
  files and generated local-preview HTML.

Project DJ Engine is the lead engineering system in the Sphinx version. Its
page combines a non-specialist-readable introduction with repository-derived
scale, architecture, build, test, and integration evidence.

## Root prototype

```bash
npm install
npm run dev
```

## Sphinx prototype

```bash
cd sphinx
uv sync
./build.sh
python -m http.server 8000 --directory docs
```

No deployment is performed from this development branch. The existing Pages
workflow remains restricted to pushes to `main`.
