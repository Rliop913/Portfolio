# Jiho Kim — Portfolio

Technical portfolio for AI backends, Unity interactions, C++ systems, audio DSP, GPGPU, and haptics/XR work.

This branch preserves two design directions:

- The repository root contains the editorial, CV-style static prototype.
- `sphinx/` contains the documentation-first portfolio, including its source
  files and generated local-preview HTML.

Greatman and CAVE Escape Room add AI-backend and Unity-interaction records alongside the existing engineering systems. Project DJ Engine remains the lead C++ engineering system in the Sphinx version. Its
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


## Updating CV and project content

The CV now has an editable source at `content/cv.json`. Generate the PDF with:

```bash
python -m pip install -r scripts/requirements-cv.txt
python scripts/build_cv.py
```

This rebuilds the root `Jiho_Kim_CV.pdf` linked from the portfolio. The CV uses
two explicit pages; preview the PDF after content changes to check overflow.
An alternate output can be selected with `--output path/to/cv.pdf`.

Update root `index.html` for portfolio summaries and `sphinx/srcs/` for
the detailed English records. See `content/update-notes.md` for confirmed
responsibilities and information still to collect. Missing project dates
and team sizes are omitted from public content.

The Greatman entry separates AI/backend ownership from the Unity client
developed by another team member. CAVE records LiDAR SDK use rather than
claiming a custom LiDAR processing algorithm.
