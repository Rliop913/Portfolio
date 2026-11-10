Greatman - VR Historical NPC
============================================================

.. rubric:: AI Backend / Cloud / VR Integration

Context
-------

Greatman is a research platform for spoken interaction with a historical NPC
representing King Sejong in a Unity VR environment on Meta Quest 3. The system
connects speech recognition, retrieval, LLM generation, and speech or text
output for cultural and educational interaction.

My Responsibility
-----------------

- Owned the complete backend, including server implementation and AI configuration.
- Deployed and operated the backend on an Amazon EC2 g5.xlarge instance.
- Implemented communication with the VR client and dialogue logging.
- Assisted with user experiments and technical operation.

The Unity VR client was implemented by another team member.

Deployment Configuration
------------------------

:Instance: Amazon EC2 g5.xlarge
:GPU: One NVIDIA A10G (24 GB GPU memory)
:CPU / system memory: 4 vCPUs / 16 GiB RAM

The instance type is identified by matching the deployed server specification
in the paper's Table 1 (4 vCPUs, 16 GiB RAM, NVIDIA A10G) to the AWS G5
specification.

System Boundary
---------------

``Unity VR client -> HTTP -> AI backend -> response / dialogue logs``

The server-side workflow combines speech recognition, retrieval and context
assembly, LLM response generation, and speech synthesis. The publication
describes a self-hosted Python stack with Whisper, Gemma, Ollama, LangChain,
and FAISS.

User Study
------------------------------------------------------------

42 international participants took part in 126 sessions. The published technical analysis used 104 reconstructed
sessions from 39 participants.
Publication
-----------

Yunjin Kim, Jiho Kim, Gwuidong Ryu, and Tack Woo.
*Design and Field Validation of a VR-Based RAG Historical NPC: Knowledge
Grounding and Persona Grounding Can Fail Independently.*
Applied Sciences 16(21), 10707, published 29 October 2026.

- `Published paper <https://doi.org/10.3390/app162110707>`_
- `Article and supplementary materials <https://www.mdpi.com/2076-3417/16/21/10707>`_

- `AWS G5 launch specifications (2021) <https://aws.amazon.com/blogs/aws/new-ec2-instances-g5-with-nvidia-a10g-tensor-core-gpus/>`_
