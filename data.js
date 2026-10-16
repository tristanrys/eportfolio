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
    headline: "Final-year Computer Engineering student · Dean's Lister",
    email: "karlt375@gmail.com",
    schoolEmail: "tristankarl.reyes@my.jru.edu",
    resume: "Tristan_Karl_Reyes_Resume.pdf",
    status: "Seeking an OJT opportunity",
    photo: "tristan.jpg",
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

              text: "This journey document covers Printstant's Wadhwani Foundation milestones: validating the problem through 10 in-person interviews, testing a working web prototype with 3 users, and building the venture case, which scored a 93.33% Venture Viability Index. The work developed awareness of how an engineering solution creates social and economic value, and of the contemporary market trends a product has to respond to."
            },

            personal: {
              text: "These tasks helped me see engineering not just as a technical discipline but as a vehicle for value creation. Understanding business frameworks has shifted how I think about building products — I now ask not just 'Can I build this?' but 'Should I build this, and for whom?'"
            }
          }
        },

        {
          id: "techno-a2",
          type: "video",
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
          type: "pdf",
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

              text: "The final pitch deck presents Printstant, a web platform where students upload files remotely, track print queues in real time, and get automated price quotes from nearby print shops. Building it meant turning a technical design into a clear case covering the problem, the solution, the go-to-market plan, and the value delivered, all within real constraints on users, cost, and market."
            },

            personal: {
              text: "I handled marketing for our 3-person team, shaping a go-to-market plan built on social media (Facebook, Instagram, TikTok), campus flyers, and direct pitches to print shop owners. It showed me that a good product still needs a clear plan for reaching its users."
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

              text: "The video pitch is the most direct evidence of our ability to translate a business concept into a working technology solution. Presenting it, from the problem through the solution to the value it delivers, reflects engineering communication skills."
            },

            personal: {
              text: "Pitching our product and showing a live demo was one of the most realistic professional experiences of this course. It combined technical confidence with business storytelling — a combination I want to keep honing as I aim toward a career that bridges engineering and innovation."
            }
          }
        }
      ]
    }

    // ── ADD MORE SUBJECTS HERE ────────────────────────────────
  ],

  // ============================================================
  //  PROFILE (matches the resume) — shown on the "Resume" page
  // ============================================================
  profile: {
    objective: "Final-year Computer Engineering student at Jose Rizal University and Dean's Lister, with hands-on experience in machine learning, web development, and database design, backed by AWS Academy and CompTIA certifications. Seeking an OJT opportunity in software development, data, or IT systems where I can apply my technical skills and learn from experienced engineers.",

    education: [
      {
        degree: "Bachelor of Science in Computer Engineering",
        school: "Jose Rizal University",
        note: "Dean's Lister",
        date: "Expected graduation: 2027"
      }
    ],

    // linkSubject: id of a subject above, adds a "View artifacts" link
    projects: [
      {
        title: "Printstant: Print Queue and Shop Management Platform",
        context: "Venture Viability Analysis, Wadhwani Foundation",
        linkSubject: "techno",
        bullets: [
          "Member of a 3-person venture team that designed a web platform letting students upload files remotely, track print queues in real time, and get automated price quotes from nearby print shops.",
          "Handled marketing, contributing to a go-to-market plan built on social media (Facebook, Instagram, TikTok), campus flyers, and direct pitches to print shop owners.",
          "Validated the problem through 10 in-person interviews and tested a working web prototype with 3 users, all of whom rated it positively. The venture scored a 93.33% Venture Viability Index."
        ],
        tools: []
      },
      {
        title: "Lip Condition Classification Using CNNs",
        context: "Research Paper",
        bullets: [
          "Co-authored a study comparing EfficientNetB0 (transfer learning) against a custom Vanilla CNN to classify lip images as Chapped, Healthy, or Medical.",
          "EfficientNetB0 reached 88.89% test accuracy versus 73.33% for the Vanilla CNN, using two-phase training, data augmentation, class-weight balancing, and L2 regularization.",
          "Evaluated with confusion matrices and ROC-AUC curves, and exported both models to TensorFlow Lite for potential mobile deployment."
        ],
        tools: ["Python", "TensorFlow/Keras", "scikit-learn"]
      },
      {
        title: "Barangay Poblacion Portal",
        context: "CPE C315 Final Project",
        bullets: [
          "Co-developed a multi-page barangay web portal in HTML, CSS, and JavaScript where residents can read community news, request barangay documents, file complaints, and look up hotline numbers.",
          "Built add, edit, and delete features for document requests and complaints, with entries saved in the browser's local storage."
        ],
        tools: ["HTML", "CSS", "JavaScript"]
      },
      {
        title: "Laboratory Borrowing Portal",
        context: "Software Design Project",
        bullets: [
          "Co-developed a web portal with a 4-person team to replace the paper-based equipment borrowing process in the university's computer laboratory, with separate borrower and custodian views.",
          "Borrowers sign in with Google, check item availability, submit borrow requests, and track their history; custodians approve or reject requests and manage inventory from a dashboard."
        ],
        tools: []
      }
    ],

    certifications: [
      { name: "CompTIA Tech+", issuer: "CompTIA", date: "September 2025", hours: null },
      { name: "Relational Database Developer Certification", issuer: "freeCodeCamp", date: "November 2025", hours: "approx. 300 hours" },
      { name: "AWS Academy Graduate: Machine Learning Foundations", issuer: "AWS Academy", date: "April 2026", hours: "20 hours" },
      { name: "Overview of AI, Certificate of Completion", issuer: "Huawei ICT Academy", date: "March 2026", hours: null },
      { name: "Certificate of Content Completion", issuer: "Ignite Philippines, Wadhwani Foundation", date: "April 2026", hours: "42 hours" }
    ],

    skills: [
      { group: "Languages", items: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL"] },
      { group: "Databases", items: ["MySQL", "Supabase"] },
      { group: "Libraries and tools", items: ["scikit-learn", "TensorFlow/Keras", "Flask", "Google Colab"] },
      { group: "Concepts", items: ["Machine learning", "Deep learning", "Image classification", "Relational database design"] }
    ]
  }
};
