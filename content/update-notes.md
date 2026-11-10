# Content maintenance notes

## Confirmed additions (2026-11-10)

- Greatman: complete AI/backend ownership; Amazon EC2 g5.xlarge deployment;
  VR client communication; logging; assistance with user experiments.
- Greatman's Unity VR client was developed by a different team member.
- CAVE escape room: Unity interactions, game logic, objects, and animations
  in a multi-projection space; LiDAR processing used an SDK.
- Greatman paper: https://doi.org/10.3390/app162110707
  Project-level field use: 42 participants / 126 sessions.
  Published analysis subset: 39 participants / 104 reconstructed sessions.

## Information to collect before extending the entries

- Greatman and CAVE development dates and team sizes.
- CAVE SDK name/version, Unity version, execution platform and input interface.
- Representative CAVE puzzle, interaction and animation implementation details.
- Greatman deployment configuration and owned incident fixes; confirm the inferred instance type against account records when available.
- Publicly shareable screenshots, videos, diagrams and technical documents.
- Verified performance measurements with their test conditions.
- Graduation date, availability and eligibility if preparing a job-specific CV.

Do not insert estimated dates or fabricated metrics into public pages. The
Greatman paper's field observations do not establish retrieval effectiveness
or a latency improvement. Keep individual responsibilities separate from
project-level results and coauthor contributions.

## Editable sources

- `content/cv.json`: English CV text and section/page structure.
- `scripts/build_cv.py`: renders that source to root `Jiho_Kim_CV.pdf`.
- `index.html`: Korean project summaries in the root portfolio.
- `sphinx/srcs/`: English detailed project, experience and research records.

After content changes, update all relevant surfaces and rebuild the PDF.


## EC2 name identification (2026-11-10)

Replaced generic AWS GPU EC2 wording with Amazon EC2 g5.xlarge.
This is a specification-based identification, not a direct account-record check:

- Paper Table 1: AWS, 4 vCPU, 16 GiB RAM, NVIDIA A10G GPU.
  https://www.mdpi.com/2076-3417/16/21/10707
- AWS launch table: g5.xlarge, one A10G, 4 vCPUs, 16 GiB RAM.
  The launch article specifies 24 GB of GPU memory per A10G.
  https://aws.amazon.com/blogs/aws/new-ec2-instances-g5-with-nvidia-a10g-tensor-core-gpus/
- G5 launch: November 2021, predating the 2025 deployment.

Do not confuse 16 GiB of system RAM with 24 GB of GPU memory.
