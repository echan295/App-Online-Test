const moduleContent = {
    // CHAPTER 0: INTRODUCTION TO PATHOLOGY
    "0.1": {
        title: "What is Pathology? 🧪",
        objectives: [
            "Understand the definition, origin, and the two main divisions of pathology."
        ],
        data: [
            { type: "mcq", question: 'What is the literal translation of "Pathology"?', options: ["Study of medicines", "Study of suffering", "Study of the human body", "Study of tissues", "Study of dead bodies"], answer: 1, explanation: "_Pathos_ means suffering, and _logos_ means study." },
            { type: "concept", title: "Information", text: "Pathology is the bridge between basic sciences (like anatomy) and clinical medicine. It explains the _whys_ and _wherefores_ of a patient's signs and symptoms.", subtext: "", buttonText: "Next" },
            {
                type: "sort",
                question: "Pathology is divided into two branches. Guess what each covers!",
                buckets: ["General Pathology", "Systemic Pathology"],
                items: [
                    { 
                        text: "Common reactions of cells and tissues to injury shared by many different organs (e.g., inflammation).", 
                        bucket: 0 
                    },
                    { 
                        text: "Specific diseases as they occur in particular organ systems (e.g., lung cancer or heart disease).", 
                        bucket: 1 
                    }
                ],
                explanation: "**General Pathology** deals with 'universal' reactions like inflammation that look the same in the liver or the lung. **Systemic Pathology** focuses on diseases unique to specific organs."
            },
            { type: "mcq", question: "General pathology focuses on diseases specific to a single organ, like the heart.", options: ["True", "False"], answer: 1, explanation: "_Systemic_ pathology looks at specific organ systems. _General_ pathology looks at common collective reactions by many different tissue types. For example, whether you injure your finger or get a lung infection, the basic inflammatory reaction is very similar!" }
        ]
    },
    "0.2": {
        title: "The Core Four (Part 1 - The Causes) 🔍",
        objectives: ["Learn the first two core aspects of a disease process: Etiology and Pathogenesis."],
        data: [
            {
                type: "concept",
                title: "The Four Core Aspects 🔍",
                text: "Every disease process revolves around these four key pillars:\n\n" +
                    "**1. Etiology** (The 'Why')\n" +
                    "**2. Pathogenesis** (The 'How')\n" +
                    "**3. Morphologic changes** (Structure)\n" +
                    "**4. Clinical manifestations** (Results)",
                subtext: "",
                buttonText: "Let's dive in!"
            },
            {
                type: "flashcard",
                front: "Etiology",
                back: "The initiating cause of a disease (The 'Why').",
                extra: "Can be **Genetic** (mutations) or **Environmental** (infections, chemicals). Most common diseases are multifactorial (a mix of both).",
                buttonText: "Got it!"
            },
            {
                type: "fill",
                question: "Atherosclerosis and cancer are caused by environmental insults on a genetically susceptible individual. Therefore, their etiology is described as ____________.",
                options: ["single-gene", "multifactorial", "purely environmental"],
                answer: 1, // Multifactorial
                explanation: "Diseases like cancer and heart disease aren't caused by just one thing—they are a mix (multi) of genetics and environment.",
                buttonText: "Continue"
            },
            {
                type: "flashcard",
                front: "Pathogenesis",
                back: 'The sequence of events that lead to the development of disease (The "How").',
                extra: "It explains how the etiology produces the actual disease. Understanding this helps us find _biomarkers_ for precision medicine!",
                buttonText: "Onward!"
            },
            {
                type: "sort",
                question: "Drag the term to its correct definition.",
                buckets: ["Etiology", "Pathogenesis"],
                items: [
                    { 
                        text: "The initiating cause of the disease.", 
                        bucket: 0 
                    },
                    { 
                        text: "The sequence of cellular and molecular events.", 
                        bucket: 1 
                    }
                ],
                explanation: ""
            }
        ]
    },
    "0.3": {
        title: "The Core Four (Part 2 - The Results) 🔬",
        objectives: ["Learn the final two core aspects: Morphologic changes and Clinical manifestations."],
        data: [
            {
                type: "concept",
                title: "Information",
                text: "The disease has started (Etiology) and progressed (Pathogenesis). Now, what happens to the body's structure? We call this Morphologic Changes.",
                subtext: "These are structural alterations in cells/tissues characteristic of a disease. They can be seen macroscopically (naked eye), microscopically, or even at the molecular/genetic level! ",
                buttonText: "Let's dive in!"
            },
            { 
                type: "mcq", 
                question: "Modern diagnostic pathology relies only on looking at tissue structures through a microscope to diagnose tumors.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Morphology is supplemented by analyzing protein expression and genetic alterations (e.g., next-generation sequencing) to predict how tumors will behave!"
            },
            {
                type: "concept",
                title: "Information",
                text: "Finally, structural changes lead to functional abnormalities. These are the **Clinical Manifestations.**\n\n" +
                    '**Symptoms:** What the patient feels (e.g., "My chest hurts").\n' +
                    "**Physical Signs:** What the clinician _discovers_ (e.g., High blood pressure on a monitor).",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "sort",
                question: "Sort the following into Symptoms or Signs.",
                buckets: ["Symptoms", "Signs"],
                items: [
                    { 
                        text: "Patient feels nauseous.", 
                        bucket: 0 
                    },
                    { 
                        text: "Doctor hears a heart murmur", 
                        bucket: 1 
                    },
                    { 
                        text: "Patient complains of a headache.", 
                        bucket: 0 
                    },
                    { 
                        text: "Doctor measures a fever of 39°C.", 
                        bucket: 1 
                    }
                ],
                explanation: ""
            }
        ]
    },
    "0.4": {
        title: "Speaking the Language of Pathology 🗣️",
        objectives: ["Master the basic vocabulary used in pathology laboratory reports."],
        data: [
            {
                type: "concept",
                title: "Clinical Lingo 🩺",
                text: "To be a great doctor, you must understand the language of pathology reports to treat your patients! Let's learn the lingo.\n\n" +
                    "• **Lesion:** Characteristic changes in tissues/cells produced by disease.\n" +
                    "• **Diagnosis:** What is wrong.\n" +
                    "• **Prognosis:** What is going to happen (the outcome).",
                subtext: "",
                buttonText: "Got it!"
            },
            { 
                type: "mcq", 
                question: "After running tests, the doctor determines the patient has Acute Appendicitis. What is this an example of?", 
                options: ["Etiology", "Diagnosis", "Prognosis", "Pathogenesis", "Clinical Manifestation"], 
                answer: 1, 
                explanation: ""
            },
            {
                type: "concept",
                title: "Information",
                text: "Pathologists study these lesions using different branches of pathology:\n\n" +
                    "• **Histopathology:** Study of tissue structures (gross and microscopic, often stained with H&E).\n" +
                    "• **Cytopathology:** Study of individual shed cells (e.g., Exfoliative cytology or FNAC - Fine Needle Aspiration Cytology).",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "fill",
                question: "If a doctor wants to study a piece of tissue cut from an organ, they will use ____________. If they want to use a needle to suck up a few loose cells from a deep lump, they will use ____________.",
                options: ["Histopathology", "Cytopathology (FNAC)"],
                answer: [0, 1], // Slot 1 = index 0, Slot 2 = index 1
                explanation: "**Histopathology** examines the 'architecture' of a whole piece of tissue. **Cytopathology** (like FNAC) looks at individual 'loose' cells.",
                buttonText: "Continue"
            }
        ]
    },
    "0.5": {
        title: "Inside the Histopathology Lab 🥼",
        objectives: ["Understand the step-by-step journey of a tissue sample from the operating room to the microscope."],
        data: [
            {
                type: "concept",
                title: "Information",
                text: "When a piece of tissue is removed from a patient, the very first step is Gross (Macroscopic) Examination. The pathologist looks at the tissue with their naked eye to find obvious disease.",
                subtext: "",
                buttonText: "Got it!"
            },
            { 
                type: "mcq", 
                question: "Gross examination of a tissue sample requires a high-powered microscope.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: '"Gross" or "Macroscopic" means looking with the _naked eye_.'
            },
            {
                type: "concept",
                title: "Tissue Processing - Step 1",
                text: "We can't let the tissue rot! To preserve the cells and stop decay, the tissue is placed in a chemical called formalin. This crucial step is called **Fixation**.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "Tissue Processing - Step 2",
                text: "Next, the tissue must be made stiff enough to cut. We remove the water and place the tissue into a hard block of paraffin wax. This is called **Embedding**.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "Tissue Processing - Step 3",
                text: "Now that the tissue is in a hard wax block, we use a machine called a Microtome to cut it into ultra-thin slices (thinner than a human hair!). This is called **Sectioning**.",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "match",
                question: "Match the lab process to its correct description!",
                pairs: [
                    { left: "Fixation", right: "Preserving the tissue (usually in formalin)." },
                    { left: "Embedding", right: "Putting the tissue in a hard wax block." },
                    { left: "Sectioning", right: "Cutting ultra-thin slices using a microtome." }
                ],
                explanation: "This sequence ensures the tissue is hard enough to be cut into slices so thin that light can pass through them!"
            },
            {
                type: "concept",
                title: "Staining Intro",
                text: "Because human cells are naturally clear, those ultra-thin slices are invisible under a microscope! We must dye them. The classic, routine stain used is H & E (Hematoxylin and Eosin).",
                subtext: "Let's see how it works.",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: 'The "H" in H&E',
                text: "Hematoxylin is a basic dye that loves acidic structures. Since the cell's nucleus is full of acidic DNA, Hematoxylin stains the nucleus a dark **Blue** or **Purple**.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: 'The "E" in H&E',
                text: "Eosin is an acidic dye that loves basic structures. It surrounds the nucleus and stains the cytoplasm (the body of the cell) and extracellular proteins a beautiful **Pink**.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "You are looking through the microscope! Match the dye to the part of the cell it colors.",
                pairs: [
                    { left: "Hematoxylin (Blue/Purple)", right: "The Nucleus (DNA)" },
                    { left: "Eosin (Pink)", right: "The Cytoplasm" }
                ],
                explanation: ""
            },
            { 
                type: "mcq", 
                question: "If you see a lot of dark blue/purple dots on an H&E stained slide, you are looking at the cytoplasms of the cells.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "The dark blue/purple dots are the nuclei (stained by Hematoxylin). The cytoplasm is the pink area!"
            },
            {
                type: "concept",
                title: "Special Stains",
                text: "Sometimes, the standard H&E (pink and purple) isn't enough to figure out exactly what the disease is. To get the most accurate diagnosis, pathologists use Special Staining Methods, such as Histochemistry and Immunohistochemistry.",
                subtext: "",
                buttonText: "Got it!"
            },
            { 
                type: "order", 
                question: "You are the pathologist! Arrange the lab steps in the correct chronological order to prepare your slide.", 
                items: ["Gross Examination", "Fixation (Formalin)", "Embedding (Wax)", "Sectioning (Microtome)", "Staining (H&E)"], 
                explanation: "" }
        ]
    }
};