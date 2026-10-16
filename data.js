// ============================================================
//  PORTFOLIO DATA
//  To add a new subject: add a new object to the SUBJECTS array.
//  To add a new artifact: add to the subject's `artifacts` array.
// ============================================================

const PORTFOLIO = {
  owner: {
    name: "Your Full Name",
    program: "Bachelor of Science in Computer Engineering",
    school: "Jose Rizal University",
    bio: "A passionate Computer Engineering student with a focus on artificial intelligence, web technologies, and entrepreneurial thinking. This e-Portfolio documents my academic journey, project work, and personal growth across key courses in my program.",
    email: "youremail@example.com",
    photo: null, // set to e.g. "assets/img/photo.jpg" when you have one
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
          fileLink: null, // replace with your actual link e.g. "files/Compilation_of_Activity.pdf"
          writeup: {
            cpe_so: {
              tags: ["SO1 – Apply math/science/engineering knowledge", "SO3 – Design a system or process to meet desired needs", "SO5 – Identify, formulate, and solve engineering problems"],
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
          fileLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO7 – Ability to communicate effectively", "SO8 – Broad education to understand impact of engineering solutions"],
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
          filename: "AI_Project_Source_Code_[GroupName].pdf",
          fileLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO1 – Apply math/science/engineering knowledge", "SO3 – Design a system or process", "SO5 – Identify, formulate, and solve engineering problems", "SO6 – Use modern engineering tools and techniques"],
              text: "The source code artifact represents the culmination of applying theoretical AI knowledge to a working system. Building the project required mathematical understanding of model architectures, systematic software design, and the use of modern tools (Jupyter Notebook, TensorFlow/Keras, scikit-learn). It demonstrates the ability to engineer an AI solution from problem formulation to a working prototype."
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
          filename: null,
          fileLink: null, // paste YouTube/Drive link here e.g. "https://youtu.be/..."
          webLink: null,  // if it's a hosted web app, put URL here
          writeup: {
            cpe_so: {
              tags: ["SO3 – Design a system or process to meet desired needs", "SO6 – Use modern engineering tools and techniques"],
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
      code: "TECHNO",
      title: "Technopreneurship",
      description: "A course that merges technology and entrepreneurship, guiding students in identifying market opportunities, designing technology-driven business models, and developing pitches and feasibility plans.",
      artifacts: [
        {
          id: "techno-a1",
          type: "pdf",
          label: "Artifact 1",
          name: "Compilation of Lab Activities / Performance Tasks",
          filename: "Compilation_of_Activity_Techno.pdf",
          fileLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO8 – Broad education to understand impact of engineering solutions", "SO9 – Recognition of the need for lifelong learning", "SO11 – Knowledge of contemporary issues"],
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
          name: "Journal Article",
          filename: "Techno_Journal_Article.pdf",
          fileLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO7 – Ability to communicate effectively", "SO8 – Broad education to understand impact of engineering solutions", "SO11 – Knowledge of contemporary issues"],
              text: "The journal article required researching the intersection of technology and business innovation. Writing and structuring arguments around a contemporary technopreneurial topic strengthened communication skills and awareness of how digital disruption reshapes industries — a key SO in an engineering education."
            },
            personal: {
              text: "Writing this article gave me space to think deeply about the startup ecosystems and digital business trends. It connected classroom concepts to real companies and decisions, which made the learning feel relevant and motivating."
            }
          }
        },
        {
          id: "techno-a3",
          type: "code",
          label: "Artifact 3",
          name: "Project Source Code / Technical Documentation",
          filename: "Techno_Project_Source_Code_[GroupName].pdf",
          fileLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO3 – Design a system or process", "SO6 – Use modern engineering tools and techniques"],
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
          name: "Product Demo / Prototype / Web App",
          filename: null,
          fileLink: null,
          webLink: null,
          writeup: {
            cpe_so: {
              tags: ["SO3 – Design a system or process to meet desired needs", "SO7 – Ability to communicate effectively"],
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
    // Copy the block above, change the id/code/title/description/artifacts,
    // and it will automatically appear in the nav and homepage.
  ]
};
