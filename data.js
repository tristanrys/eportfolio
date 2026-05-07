// ============================================================
//  PORTFOLIO DATA
//  To add a new subject: add a new object to the SUBJECTS array.
//  To add a new artifact: add to the subject's `artifacts` array.
// ============================================================

const PORTFOLIO = {
  owner: {
    name: "Tristan Karl Reyes",
    program: "Bachelor of Science in Computer Engineering",
    school: "Jose Rizal University",
    bio: "A passionate Computer Engineering student with a focus on artificial intelligence, web technologies, and entrepreneurial thinking. This e-Portfolio documents my academic journey, project work, and personal growth across key courses in my program.",
    email: "tristankarl.reyes@my.jru.edu",
    photo: "assets/img/tristan.jpg",
  },

  subjects: [
    // ── SUBJECT 1 ────────────────────────────────────────────
    {
      id: "ai1",
      code: "CPE C313",
      title: "Artificial Intelligence 1",
      description: "An introductory course covering core AI concepts including neural networks, computer vision, machine learning algorithms, and practical model development using Python.",

      artifacts: [
        {
          id: "ai1-a1",
          type: "pdf",
          label: "Artifact 1",
          name: "Compilation of Lab Activities (PTs)",
          filename: "Compilation_of_Activity.pdf",
          fileLink: "https://drive.google.com/file/d/113B5Sd-t3vBQ2jBCvrITbftWE_vym8hc/view?usp=sharing",

          writeup: {
            cpe_so: {
              tags: [
                "SO1 – Apply knowledge of mathematics, sciences, and engineering sciences to the practice of computer engineering",
                "SO3 – Design a system, component, or process to meet needs within realistic constraints",
                "SO5 – Identify, formulate, and solve computer engineering problems"
              ],

              text: "The laboratory activities in this compilation required applying foundational mathematics (linear algebra, calculus) and engineering principles to implement and evaluate AI models. Each activity involved problem identification, algorithm selection, model training, and evaluation — directly contributing to the ability to design and analyze engineering solutions. Activities on neural networks and CNNs also developed skills in formulating complex technical problems and translating them into working software solutions."
            },

            personal: {
              text: "Completing these lab activities strengthened my hands-on programming skills in Python and deepened my intuition for how machine learning models learn from data. Each activity built my confidence in debugging, experimenting with hyperparameters, and interpreting results — skills I see as essential for my career in AI and software development."
            }
          }
        },

        {
          id: "ai1-a2",
          type: "journal",
          label: "Artifact 2",
          name: "Journal Article",
          filename: "AI1_Journal_Article.pdf",
          fileLink: "https://drive.google.com/file/d/1FGjAObmRQUXFFLtp1uZ1Sqy_mk52mDCT/view?usp=sharing",

          writeup: {
            cpe_so: {
              tags: [
                "SO7 – Communicate effectively",
                "SO8 – Understand the impact of engineering solutions in a global/societal context"
              ],

              text: "Writing the journal article required synthesizing technical research, organizing findings coherently, and communicating complex AI concepts to a broader audience. This directly develops engineering communication competency. It also fostered an understanding of how AI technologies impact society — ethically, economically, and practically — aligning with the broader education outcome."
            },

            personal: {
              text: "This artifact pushed me to think critically beyond code — to evaluate the real-world implications of AI systems. Writing it improved my academic writing, citation skills, and ability to construct evidence-based arguments, all of which I view as essential professional competencies."
            }
          }
        },

        {
          id: "ai1-a3",
          type: "code",
          label: "Artifact 3",
          name: "AI Project Source Code",
          filename: "AI_Project_Source_Code_[AIAI_DELAS ALAS].pdf",
          fileLink: "https://drive.google.com/file/d/1-JbFil5Ia2g9w4OjqCv2hLdAXq6VHyfj/view?usp=sharing",

          writeup: {
            cpe_so: {
              tags: [
                "SO1 – Apply knowledge of mathematics, sciences, and engineering sciences to the practice of computer engineering",
                "SO3 – Design a system, component, or process to meet needs within realistic constraints",
                "SO5 – Identify, formulate, and solve computer engineering problems",
                "SO11 – Use appropriate techniques, skills, and modern tools necessary for computer engineering practice"
              ],

              text: "The source code artifact represents the culmination of applying theoretical AI knowledge to a working system. Building the project required mathematical understanding of model architectures, systematic software design, and the use of modern tools such as Jupyter Notebook, TensorFlow/Keras, and scikit-learn. It demonstrates the ability to engineer an AI solution from problem formulation to a working prototype using appropriate modern engineering tools and techniques."
            },

            personal: {
              text: "Developing this project as a team taught me how to collaborate on technical codebases, divide responsibilities effectively, and integrate each component into a cohesive whole. It reinforced my belief that real learning happens when theory meets implementation."
            }
          }
        },

        {
          id: "ai1-a4",
          type: "video",
          label: "Artifact 4",
          name: "Working Model Demo / Prototype Video",
          filename: "Video_Demo_AI_Project.mp4",
          fileLink: "https://drive.google.com/file/d/1j5XEAGZsZ0LeN5Tvp3XWEtY9HWu1Fngu/view?usp=sharing",
          webLink: null,

          writeup: {
            cpe_so: {
              tags: [
                "SO3 – Design a system, component, or process to meet needs within realistic constraints",
                "SO11 – Use appropriate techniques, skills, and modern tools necessary for computer engineering practice"
              ],

              text: "The demonstration video showcases a working AI prototype, proving that the designed system meets its intended goals. Producing it required integrating data pipelines, trained models, and a user-facing interface — a full-stack engineering challenge that reflects real-world systems design. It also demonstrates effective use of modern AI development tools and frameworks."
            },

            personal: {
              text: "Seeing our model work end-to-end was deeply rewarding. Recording and presenting the demo also helped me practice concise technical communication — explaining what the system does, why design choices were made, and what limitations exist. This kind of presentation skill is something I actively want to keep developing."
            }
          }
        }
      ]
    },

    // ── SUBJECT 2 ────────────────────────────────────────────
    {
      id: "techno",
      code: "EGR C204",
      title: "Technopreneurship",
      description: "A course that merges technology and entrepreneurship, guiding students in identifying market opportunities, designing technology-driven business models, and developing pitches and feasibility plans.",

      artifacts: [
        {
          id: "techno-a1",
          type: "pdf",
          label: "Artifact 1",
          name: "Wadhwani Milestone 1 - 3",
          filename: "Printstant - Venture Journey.pdf",
          fileLink: "https://drive.google.com/file/d/1bp98JE4TMiUwKsGNi0GVCqVKB88liVTU/view?usp=sharing",

          writeup: {
            cpe_so: {
              tags: [
                "SO8 – Understand the impact of engineering solutions in a global/societal context",
                "SO9 – Engage in life-long learning and keep current with developments in a specific field of specialization",
                "SO10 – Know contemporary issues"
              ],

              text: "The activities covered business model canvas development, lean startup methodologies, and market research — all of which develop awareness of how engineering solutions create social and economic impact. Engaging with real industry problems also highlighted the importance of staying current with contemporary technological and market trends."
            },

            personal: {
              text: "These tasks helped me see engineering not just as a technical discipline but as a vehicle for value creation. Understanding business frameworks has shifted how I think about building products — I now ask not just 'Can I build this?' but 'Should I build this, and for whom?'"
            }
          }
        },

        {
          id: "techno-a2",
          type: "journal",
          label: "Artifact 2",
          name: "MVP Demo",
          filename: "Printstant - MVP Demo",
          fileLink: null,

          writeup: {
            cpe_so: {
              tags: [
                "SO7 – Communicate effectively",
                "SO8 – Understand the impact of engineering solutions in a global/societal context",
                "SO10 – Know contemporary issues"
              ],

              text: "The video demo showcased our product/SaaS called Printstant, a technology-driven platform designed to provide efficient and convenient printing services. Presenting the system required us to clearly communicate the problem, demonstrate the features and functionality of the platform, and explain how our solution can improve user experience and accessibility. The project also increased our awareness of how technology and digital innovation continue to reshape industries and business processes."
            },

            personal: {
              text: "Creating and presenting the video demo for our product/SaaS called Printstant gave me valuable experience in explaining technical concepts and showcasing a working system to an audience. It helped me improve my confidence in presenting ideas, demonstrating product features, and communicating how technology can be used to solve real-world problems. The experience also motivated me to further develop my skills in both technology and innovation."
            }
          }
        },

        {
          id: "techno-a3",
          type: "code",
          label: "Artifact 3",
          name: "Final Pitch Deck",
          filename: "Printstant - Final Pitch Deck.pdf",
          fileLink: "https://drive.google.com/file/d/1C1QsskVB_xrbA10vvKB93vD-7TJTkM_W/view?usp=sharing",

          writeup: {
            cpe_so: {
              tags: [
                "SO3 – Design a system, component, or process to meet needs within realistic constraints",
                "SO11 – Use appropriate techniques, skills, and modern tools necessary for computer engineering practice"
              ],

              text: "Building the technical component of our technopreneurial project required applying software engineering principles to a real problem with market potential. This artifact demonstrates the ability to design, develop, and document a functional system aligned to user needs and business goals."
            },

            personal: {
              text: "Working on this pushed me to think about code quality and scalability in a business context — not just whether it works, but whether it's maintainable and ready to grow. It also improved my documentation habits, which I know will matter in professional environments."
            }
          }
        },

        {
          id: "techno-a4",
          type: "video",
          label: "Artifact 4",
          name: "Video Pitch",
          filename: "Printstant - Video Pitch.mp4",
          fileLink: "https://drive.google.com/file/d/19hbdaS6XG6qdD5pDGCZZCdSFYC8G-l-A/view?usp=sharing",
          webLink: null,

          writeup: {
            cpe_so: {
              tags: [
                "SO3 – Design a system, component, or process to meet needs within realistic constraints",
                "SO7 – Communicate effectively"
              ],

              text: "The product demonstration is the most direct evidence of our ability to translate a business concept into a working technology solution. Presenting it — explaining the problem, the solution, and the value it delivers — also reflects strong engineering communication skills."
            },

            personal: {
              text: "Pitching our product and showing a live demo was one of the most realistic professional experiences of this course. It combined technical confidence with business storytelling — a combination I want to keep honing as I aim toward a career that bridges engineering and innovation."
            }
          }
        }
      ]
    }

    // ── ADD MORE SUBJECTS HERE ────────────────────────────────
  ]
};