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
        ],
        next: "1.1.1"
    },

    // CHAPTER 1
    // UNIT 1
    "1.1.1": {
        title: "The Wall & The Gates (Plasma Membrane) 🛡️",
        objectives: ["Review the fluid bilayer's structural asymmetry, protein anchors, and bulk transport functions."],
        data: [
            {
                type: "concept",
                title: "Structure - The Bilayer",
                text: "Welcome back! Let's review the factory's outer wall. The plasma membrane is a fluid bilayer of amphipathic phospholipids.",
                subtext: "It has hydrophilic (water-loving) heads facing outward, and hydrophobic (water-fearing) tails hiding inside. This creates a tight barrier!",
                buttonText: "Got it!"
            },
            {
                type: "concept",
                title: "Function - The 3 Main Jobs",
                text: "The lipid wall is studded with proteins that do the heavy lifting. They have 3 main jobs for the cell:\n\n" +
                    "**1. Ion and metabolite transport** (The Gates).\n" +
                    "**2. Fluid-phase and receptor-mediated uptake** of macromolecules (The Loading Docks).\n" +
                    "**3. Cell-ligand, cell-matrix, and cell-cell interactions** (The Communication Antennas).",
                subtext: "",
                buttonText: "Let's dive in!"
            },
            {
                type: "match",
                question: "Match the membrane's job to its factory equivalent!",
                pairs: [
                    { left: "Ion and metabolite transport", right: "Pumping basic nutrients and waste through the gates." },
                    { left: "Uptake of macromolecules", right: "Swallowing giant shipments in vesicles." },
                    { left: "Cell-cell interactions", right: "Connecting to and communicating with neighboring factories." }
                ],
                explanation: ""
            },
            { 
                type: "mcq", 
                question: "The inner and outer layers of the lipid bilayer are identical in composition.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "The membrane is highly asymmetric. For example, glycolipids are only on the outside, while phosphatidylserine is normally restricted to the inside face!" 
            },
            {
                type: "concept",
                title: "Structure - The Proteins",
                text: "To perform those 3 main jobs, proteins attach to the membrane in different ways:\n\n" +
                    "• **Transmembrane:** Pierce all the way through (e.g., ion channels).\n" +
                    "• **GPI-anchored:** Tied to the outside face by sugar-lipid tails.\n" +
                    "• **Lipid-linked:** Anchored to the inside face by fatty acids.",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "match",
                question: "Match the protein anchor to its correct location and factory job!",
                pairs: [
                    { left: "Inside-Face Lipid-Linked", right: "Tethered to the cytoplasm side. Acts as a relay baton for internal signaling." },
                    { left: "Outside-Face GPI-Linked", right: "Tethered to the extracellular side. Acts as a shield or sensor for outside recognition." }
                ],
                explanation: "Where they are tethered dictates what they do!"
            },
            {
                type: "concept",
                title: "Function - Transport Basics",
                text: "Let's look at Job #1: Transport! The hydrophobic core blocks large or charged molecules. How do things cross?\n\n" +
                    "• **Passive Diffusion:** Small/nonpolar molecules slide right through the lipids.\n" +
                    "• **Channels & Carriers:** Proteins that create pores or shuttle specific molecules.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "sort",
                question: "Drag the molecule to the correct method it uses to cross the plasma membrane!",
                buckets: ["Passive Diffusion", "Channel Proteins", "Active Transport"],
                items: [
                    { text: "O₂, CO₂, and steroid hormones", bucket: 0 },
                    { text: "Water (H₂O) via Aquaporins", bucket: 1 },
                    { text: "Pumping molecules against concentration gradient", bucket: 2 }
                ],
                explanation: "Passive diffusion requires no energy, while Active transport burns ATP!"
            },
            {
                type: "concept",
                title: "Bulk Transport: In & Out",
                text: "Now for Job #2: Moving huge shipments! Instead of using tiny protein gates, the plasma membrane physically deforms to wrap around cargo.\n\n" +
                    "• **Endocytosis:** The membrane folds inward to swallow cargo.\n" +
                    "• **Exocytosis:** Internal vesicles fuse with the membrane to spit cargo out.",
                subtext: "The membrane is constantly recycled! These must be perfectly balanced so the cell doesn't shrink or expand.",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "Bulk Transport: Eating & Crossing",
                text: "The membrane also performs two specialized transport moves:\n\n" +
                    "• **Phagocytosis ('Cellular eating'):** The membrane actively reaches out to engulf giant targets like whole bacteria.\n" +
                    "• **Transcytosis:** The membrane swallows cargo on one side, moves the vesicle across, and spits it out the other side!",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "match",
                question: "The membrane is moving! Match the action to the correct transport name.",
                pairs: [
                    { left: "Endocytosis", right: "Membrane folds inward to swallow fluid." },
                    { left: "Exocytosis", right: "Vesicle fuses with membrane to release cargo." },
                    { left: "Phagocytosis", right: "Membrane reaches out to 'eat' a giant particle." },
                    { left: "Transcytosis", right: "Cargo passes entirely across the cell." }
                ],
                explanation: ""
            }
        ]
    },
    "1.1.2": {
        title: "The Scaffolding (Cytoskeleton) 🏗️",
        objectives: ["Master the three classes of cytoskeletal proteins, their motor functions, and how pathologists use them to diagnose tumors."],
        data: [
            {
                type: "concept",
                title: "Introduction",
                text: "Every factory needs a structural scaffold. The Cytoskeleton allows the cell to adopt a shape, maintain polarity, organize its organelles, and migrate.",
                subtext: "But unlike a real building, this scaffold is not rigid! It is constantly elongating, shrinking, and rebuilding itself.",
                buttonText: "Let's see how!"
            },
            { 
                type: "mcq", 
                question: "The cell's cytoskeleton is a permanent, static structure made of solid beams that never change shape.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "It is highly dynamic. The constant assembly and disassembly of these fibers is actually what drives cell migration!" 
            },
            {
                type: "concept",
                title: "1. Actin Microfilaments",
                text: "Let's meet the thinnest fibers: **Actin Microfilaments (5-9 nm)**. They are made of globular G-actin monomers that link into long double-stranded helices (F-actin).",
                subtext: "By rapidly adding subunits to one end and removing them from the other (actin treadmilling), these fibers drive migration and vesicular transport!",
                buttonText: "Got it!"
            },
            {
                type: "fill",
                question: "In skeletal and cardiac muscle, ____________ hydrolysis by the motor protein myosin slides the actin filaments past each other to cause muscle contraction.",
                options: ["ATP", "Calcium", "Formalin", "GTP", "Glucose"],
                answer: 0,
                explanation: "ATP directly powers the myosin motors to slide the actin fibers and contract the muscle.",
                buttonText: "Continue"
            },
            {
                type: "concept",
                title: "2. Intermediate Filaments",
                text: "Next are **Intermediate Filaments (10 nm)**. Unlike actin, these form stable, ropelike polymers that do not actively reorganize.",
                subtext: "Their main job is to provide tensile strength so cells can survive mechanical stress. They act like shock absorbers!",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "Clinical Correlation - Tumor Markers! 🩺",
                text: "**Pathology Secret!** Intermediate filaments are unique to specific tissue types. \n\nPathologists use them as 'markers' to figure out exactly where a poorly differentiated cancer cell originally came from!",
                subtext: "This is a must-know for diagnostic pathology.",
                buttonText: "Play the Marker Game"
            },
            {
                type: "match",
                question: "You are looking at an unknown tumor biopsy. Match the intermediate filament to the tissue type it came from!",
                pairs: [
                    { left: "Cytokeratin", right: "Epithelial cells (e.g., skin, GI tract)." },
                    { left: "Vimentin", right: "Mesenchymal cells (e.g., fibroblasts)." },
                    { left: "Desmin", right: "Muscle cells." },
                    { left: "GFAP", right: "Glial cells (in the brain)." }
                ],
                explanation: "These markers allow us to identify the 'identity' of a cancer cell even if it looks totally abnormal!"
            },
            {
                type: "concept",
                title: "3. Microtubules",
                text: "The thickest fibers are **Microtubules (25 nm)**. They are hollow tubes made of α- and β-tubulin dimers that grow from a central hub called the centrosome.",
                subtext: "Their main jobs: Acting as 'train tracks' for cargo, pulling chromatids apart during mitosis, and forming the core of cilia!",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "Match the motor protein to the direction it travels on the microtubule 'train tracks'!",
                pairs: [
                    { left: "Kinesins", right: "Anterograde (Outward, - to + end)." },
                    { left: "Dyneins", right: "Retrograde (Inward, + to - end)." }
                ],
                explanation: "Think of Kinesins moving 'Klean' out of the center, and Dyneins moving 'Dining' back into the center."
            },
            { 
                type: "mcq", 
                question: "Besides acting as train tracks for vesicles, microtubules pull what apart during cell division?", 
                options: ["Sister chromatids (Mitosis)", "The plasma membrane", "The nuclear lamins"], 
                answer: 0, 
                explanation: "The microtubule spindle separates the sister chromatids. This is why many chemo drugs target microtubules to stop cancer cells from dividing!"
            },
            {
                type: "sort",
                question: "Final review! Sort the factory scaffold fibers by their main description.",
                buckets: ["Actin Microfilaments", "Intermediate Filaments", "Microtubules"],
                items: [
                    { text: "Double-helices that 'treadmill' and slide with myosin.", bucket: 0 },
                    { text: "Stable, ropelike fibers for tensile strength (Tumor markers!).", bucket: 1 },
                    { text: "Thick hollow tubes acting as train tracks and forming cilia.", bucket: 2 }
                ],
                explanation: ""
            }
        ]
    },
    "1.1.3": {
        title: "Assembly Lines (ER & Golgi) 🏭",
        objectives: ["Trace the normal path of protein synthesis, folding, and shipping through the ER and Golgi."],
        data: [
            {
                type: "concept",
                title: "The Factory Maze",
                text: "To build cell parts, we need an assembly line. The **Endoplasmic Reticulum (ER)** is a maze of interconnected tubes and sheets.",
                subtext: "It has two distinct areas: the Rough ER (RER), covered in ribosomes, and the Smooth ER (SER), which has no ribosomes.",
                buttonText: "Let's build!"
            },
            {
                type: "match",
                question: "The cell uses different ribosomes depending on where the protein is going. Match the ribosome to its job!",
                pairs: [
                    { left: "Attached Ribosomes (RER)", right: "Make proteins for secretion or the plasma membrane." },
                    { left: "Free Ribosomes (Cytosol)", right: "Make proteins that stay inside the cytoplasm." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "Inside the Rough ER",
                text: "Once a new protein is inserted into the Rough ER, it must fold into its active 3D shape. \n\nSpecial 'helper' molecules called **Chaperones** assist with this folding.",
                subtext: "The ER also adds chemical bonds and early sugar tags (N-linked oligosaccharides) to the protein.",
                buttonText: "Got it!"
            },
            { 
                type: "mcq", 
                question: "If a protein fails to fold correctly, the Rough ER will still send it out to the rest of the cell.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "The ER has strict quality control. If a protein misfolds, it is retained and destroyed right there in the ER (ER-associated degradation) to keep the cell healthy!" 
            },
            {
                type: "concept",
                title: "The Golgi Apparatus",
                text: "Correctly folded proteins are shipped in transport vesicles to the **Golgi Apparatus** (the shipping and modifying department).",
                subtext: "Proteins move through stacked layers: they enter the cis face (near the ER) and exit the trans face (near the plasma membrane).",
                buttonText: "Next"
            },
            {
                type: "fill",
                question: "The movement of proteins through the Golgi stacks for sequential processing happens in a specific direction: from the ____________ face to the ____________ face.",
                options: ["Cis", "Trans"],
                answer: [0, 1],
                explanation: "They enter the cis side (the receiving dock) and get shipped out from the trans side (the shipping dock).",
                buttonText: "Continue"
            },
            {
                type: "concept",
                title: "Golgi Modifications",
                text: "The Golgi transports proteins while chemically modifying them (especially adding/removing sugars), and finally tags and packs them into vesicles for delivery to their correct address.",
                subtext: "",
                buttonText: "Show me an address tag"
            },
            { 
                type: "mcq", 
                question: "To safely deliver a powerful digestive enzyme to the lysosome (the recycling center), the Golgi attaches a specific sugar tag as its 'cellular address.' What is this tag called?", 
                options: ["ATP", "Mannose-6-Phosphate (M6P)", "Calcium"], 
                answer: 1, 
                explanation: "The Golgi adds the M6P tag so the cell knows this specific bubble must be delivered straight to the lysosome."
            },
            {
                type: "concept",
                title: "Histology: Seeing the Golgi 🔬",
                text: "Normal cells that secrete massive amounts of protein have a huge Golgi complex. \n\nIn antibody-secreting **Plasma Cells**, this giant Golgi can be seen under a microscope as a pale area next to the nucleus.",
                subtext: "This is called a **perinuclear hoff**!",
                buttonText: "Got it!"
            },
            {
                type: "concept",
                title: "The Smooth ER (SER)",
                text: "Finally, what about the Smooth ER? Because it has no ribosomes, it does not make proteins.",
                subtext: "Instead, it synthesizes steroid hormones, breaks down lipid-soluble molecules (toxins), and stores calcium.",
                buttonText: "Next"
            },
            {
                type: "sort",
                question: "The Smooth ER adapts to the specific job of the cell. Match the cell type to what its SER is doing!",
                buckets: ["Muscle Cells", "Liver Cells", "Adrenal Gland Cells"],
                items: [
                    { text: "Stores and releases Calcium for contraction.", bucket: 0 },
                    { text: "Breaks down and metabolizes toxins.", bucket: 1 },
                    { text: "Synthesizes steroid hormones.", bucket: 2 }
                ],
                explanation: "In muscle, the SER is specifically called the sarcoplasmic reticulum!"
            },
            { 
                type: "order", 
                question: "Arrange the assembly line in the order a secreted protein is made and shipped!", 
                items: ["Rough ER (Synthesis & Folding)", "Golgi Apparatus (Modification & Sorting)", "Secretory Vesicle", "Exocytosis (Release)"], 
                explanation: "This is the 'Secretory Pathway' of the cell." 
            }
        ]
    },
    "1.1.4": {
        title: "Waste Management (Lysosomes & Proteasomes) 🗑️",
        objectives: ["Understand how the cell uses different organelles to digest large waste, shred tiny proteins, and break down fats."],
        data: [
            {
                type: "concept",
                title: "The Waste Departments",
                text: "Every factory produces waste. To stay clean and healthy, the cell has three main trash and recycling centers:\n\n" +
                    "• **Lysosomes**\n" +
                    "• **Proteasomes**\n" +
                    "• **Peroxisomes**",
                subtext: "Let's see how they work!",
                buttonText: "Start Cleaning"
            },
            {
                type: "concept",
                title: "The Lysosome",
                text: "The biggest recycling centers are **Lysosomes**. They are membrane bubbles packed with about 40 different digestive enzymes (acid hydrolases).",
                subtext: "Because these enzymes are so dangerous, they only work in a highly acidic environment (pH ≤ 5). This protects the rest of the cell if they leak!",
                buttonText: "Got it!"
            },
            { 
                type: "mcq", 
                question: "Do you remember how these dangerous digestive enzymes get delivered to the Lysosome in the first place? The Golgi apparatus tags them with:", 
                options: ["A ubiquitin tag", "A Mannose-6-Phosphate (M6P) tag", "A lipid anchor"], 
                answer: 1, 
                explanation: "The M6P tag is the specific 'cellular address' for the Lysosome."
            },
            {
                type: "concept",
                title: "Route 1: Endocytosis",
                text: "Waste arrives at the Lysosome via 3 different pathways. \n\n**Endocytosis:** The cell drinks in fluid or molecules from the outside. These delivery bubbles (endosomes) get progressively more acidic until they fuse with the Lysosome.",
                subtext: "",
                buttonText: "Next Route"
            },
            {
                type: "concept",
                title: "Route 2: Autophagy",
                text: "**Autophagy** (which means 'self-eating').\n\nIf an organelle gets old and broken, the cell builds a double membrane around it to form an **autophagosome**. This fuses with the Lysosome to recycle the old parts!",
                subtext: "",
                buttonText: "Next"
            },
            { 
                type: "mcq", 
                question: "Autophagy is only used to destroy broken parts. It has absolutely no use if the cell is starving.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Autophagy is a brilliant survival tool. During starvation, the cell will 'eat' its own organelles to provide nutrients for survival!"
            },
            {
                type: "concept",
                title: "Route 3: Phagocytosis",
                text: "**Phagocytosis** ('cellular eating').\n\nSpecialized 'professional' cells (like macrophages) swallow giant outside invaders, like bacteria or debris, and hand them to the Lysosome for destruction.",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "match",
                question: "How did the trash get to the Lysosome? Match the route to its description!",
                pairs: [
                    { left: "Endocytosis", right: "Bringing in fluids and small molecules from outside." },
                    { left: "Autophagy", right: "Wrapping double membranes around internal organelles." },
                    { left: "Phagocytosis", right: "Swallowing massive particles or bacteria." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "The Proteasome",
                text: "But what about tiny, individual misfolded proteins floating in the cytoplasm? They are sent to the **Proteasome**!",
                subtext: "The Proteasome is a hollow cylinder that acts like a molecular paper shredder, chopping bad proteins into tiny amino acids.",
                buttonText: "How does it find them?"
            },
            { 
                type: "mcq", 
                question: "What is the name of the small protein tag that identifies a molecule for destruction by the Proteasome (The 'Kiss of Death')?", 
                options: ["Ubiquitin", "Clathrin", "Actin", "Lysine", "Phosphate"], 
                answer: 0, 
                explanation: "Polyubiquitinated proteins are unfolded and funneled straight into the Proteasome shredder."
            },
            {
                type: "concept",
                title: "The Peroxisome",
                text: "Finally, we have the **Peroxisomes**. These special organelles contain oxidative enzymes used for one very specific job:",
                subtext: "They break down (catabolize) **very long-chain fatty acids**.",
                buttonText: "Got it!"
            },
            {
                type: "sort",
                question: "You are the factory manager! Sort the waste into the correct disposal system.",
                buckets: ["Lysosome", "Proteasome", "Peroxisome"],
                items: [
                    { text: "Digests old whole organelles and bacteria (pH ≤ 5).", bucket: 0 },
                    { text: "Shreds tiny cytosolic proteins tagged with ubiquitin.", bucket: 1 },
                    { text: "Catabolizes very long-chain fatty acids.", bucket: 2 }
                ],
                explanation: ""
            }
        ]
    },
    "1.1.5": {
        title: "The Powerhouse (Mitochondria & Metabolism) 🔋",
        objectives: ["Understand mitochondrial structure, maternal inheritance, ATP generation, and the Warburg effect."],
        data: [
            {
                type: "concept",
                title: "The Ancient Invader",
                text: "Welcome to the factory's Powerhouse! **Mitochondria** actually evolved from ancient bacteria that were swallowed by early cells 1.5 billion years ago.",
                subtext: "Because of this, they have their _own_ DNA and make some of their own proteins, just like bacteria!",
                buttonText: "Interesting!"
            },
            { 
                type: "mcq", 
                question: "Mitochondrial DNA is inherited equally from both your mother and father.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Because the ovum (egg) provides the cytoplasm during fertilization, mitochondrial DNA is almost entirely **maternally inherited**." 
            },
            {
                type: "concept",
                title: "Structure of the Powerhouse",
                text: "The mitochondrion has two separate membranes:\n\n" +
                    "• **Outer Membrane:** Studded with pores, making it permeable.\n" +
                    "• **Inner Membrane:** Folded into ridges called **cristae**. This is where the respiratory chain enzymes live.",
                subtext: "Deep inside the inner membrane is the **Core Matrix**, which holds the enzymes for the TCA (Krebs) cycle!",
                buttonText: "Got it!"
            },
            {
                type: "match",
                question: "Match the physical structure to its description!",
                pairs: [
                    { left: "Outer Membrane", right: "The outer shell, covered in pores." },
                    { left: "Inner Membrane (Cristae)", right: "Folded inner ridges holding the respiratory chain." },
                    { left: "Core Matrix", right: "The deep center holding the TCA cycle enzymes." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "Making Energy - ATP",
                text: "How does it make energy? The mitochondria burn sugars and transfer electrons. This process pumps **Protons (H⁺)** out of the core matrix.",
                subtext: "When those protons flow back down into the core matrix, the energy is used to generate **ATP**!",
                buttonText: "How do they flow?"
            },
            { 
                type: "mcq", 
                question: "Why do the protons (H⁺) flow back into the core matrix with so much energy?", 
                options: [
                    "Because they are pulled by gravity", 
                    "Because they are following their electrochemical gradient", 
                    "Because the cell is cold", 
                    "Because they are actively pumped back by burning ATP",
                    "Because they are pulled in by clathrin"
                ], 
                answer: 1, 
                explanation: "Like water rushing through a dam, the pressure of the proton gradient forces them through **ATP Synthase**, which spins to churn out ATP!"
            },
            {
                type: "fill",
                question: "A natural, low-level by-product of mitochondrial electron transport is the production of ____________ (like oxygen free radicals and hydrogen peroxide).",
                options: ["Reactive Oxygen Species (ROS)", "Mannose-6-Phosphate", "ATP"],
                answer: 0,
                explanation: "We will see how these ROS cause damage later in the Cell Injury module.",
                buttonText: "Continue"
            },
            {
                type: "concept",
                title: "Metabolism & The Warburg Effect",
                text: "Normally, mitochondria burn glucose completely to make 36-38 ATP. \n\nBut rapidly dividing cells (like cancer) switch to 'aerobic glycolysis,' making only 2 ATP! This is the **Warburg Effect**.",
                subtext: "Why make less energy? Because it stops the carbon from burning away, saving it as 'building blocks' to create new lipids and proteins for rapid growth!",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "The Lifecycle",
                text: "Mitochondria only live for **1 to 10 days**. To stay healthy, they constantly split (fission) and merge (fusion).",
                subtext: "When they get too old, they are recycled by the cell in a specific type of autophagy called **mitophagy**.",
                buttonText: "Finish Unit"
            }
        ],
        next: "1.2.1"
    },

    // UNIT 2
    "1.2.1": {
        title: "The Social Network (Cell-Cell Junctions) 🧩",
        objectives: ["Master the three main types of cellular connections and their normal physiological roles."],
        data: [
            {
                type: "concept",
                title: "The Social Controls",
                text: "Cells are not isolated islands; they must communicate to survive! Extracellular signals tell a cell to live, die, or go to work.",
                subtext: "If a cell loses these 'social controls' and ignores its neighbors, it can lead to unregulated, dangerous growth (cancer).",
                buttonText: "Let's connect!"
            },
            {
                type: "concept",
                title: "1. Tight Junctions - The Ziploc Seal",
                text: "The first type is the **Tight Junction** (Occluding Junction). Made of proteins like **claudins**, it acts like a Ziploc bag, sealing adjacent cells together.",
                subtext: "This seal stops ions from leaking between cells and separates the top (apical) of the cell from the bottom (basolateral).",
                buttonText: "Got it!"
            },
            { 
                type: "mcq", 
                question: "Tight junctions are permanent, concrete walls that can never be opened.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Tight junctions are dynamic and can briefly open to allow inflammatory immune cells to pass through during tissue healing." 
            },
            {
                type: "concept",
                title: "2. Anchoring Junctions - The Velcro",
                text: "Next are **Anchoring Junctions**. They act like strong Velcro straps to mechanically attach cells together using transmembrane proteins called **Cadherins**.",
                subtext: "They come in two flavors depending on which cytoskeletal fiber they grab onto inside the cell: Adherens Junctions and Desmosomes.",
                buttonText: "Which is which?"
            },
            {
                type: "match",
                question: "Memory Test! Match the anchoring junction to the internal cytoskeletal fiber it grabs onto.",
                pairs: [
                    { left: "Adherens Junctions", right: "Link to Actin microfilaments (helps cell shape)." },
                    { left: "Desmosomes", right: "Link to Intermediate Filaments (dissipates mechanical stress)." }
                ],
                explanation: "Actin is primarily responsible for movement and shape, while intermediate filaments provide tensile strength to resist mechanical stress."
            },
            {
                type: "concept",
                title: "Hemidesmosomes - Anchoring to the Floor",
                text: "What if the cell wants to attach to the floor (the Extracellular Matrix) instead of a neighbor? It uses 'half a desmosome,' called a **Hemidesmosome**.",
                subtext: "Important difference! Instead of cadherins, hemidesmosomes use proteins called **Integrins** to grip the floor.",
                buttonText: "Next"
            },
            {
                type: "concept",
                title: "3. Gap Junctions - The Secret Tunnels",
                text: "Finally, we have **Gap Junctions** (Communicating Junctions). These are literal tunnels between cells made of pores called **Connexons**.",
                subtext: "They allow ions, sugars, and electrical signals to flow directly from one cytoplasm into the neighbor's cytoplasm!",
                buttonText: "See them in action"
            },
            {
                type: "mcq",
                question: "Gap junctions in the heart allow rapid cell-to-cell fluxes of ____________ ions to coordinate the heartbeat.",
                options: ["Calcium", "Potassium", "ATP", "Formalin", "E-cadherin"],
                answer: 0,
                explanation: "The rapid flow of Calcium through gap junctions allows the heart cells to beat as one single unit (a functional syncytium).",
                buttonText: "Continue"
            },
            {
                type: "sort",
                question: "Final review! Match the cell-cell junction to its main job.",
                buckets: ["Tight Junctions", "Anchoring Junctions", "Gap Junctions"],
                items: [
                    { text: "Seals the space between cells using Claudins.", bucket: 0 },
                    { text: "Mechanically attaches cells together using Cadherins.", bucket: 1 },
                    { text: "Creates open pores (Connexons) for sharing ions.", bucket: 2 }
                ],
                explanation: ""
            }
        ]
    },
    "1.2.2": {
        title: "Cell Signaling (The Cell's Inbox) 📩",
        objectives: ["Understand what signals a cell listens to and the four main distances signals can travel."],
        data: [
            {
                type: "concept",
                title: "The Cacophony of Signals",
                text: "Individual cells are constantly bombarded with a cacophony of signals! They must integrate this information to decide whether to grow, specialize, or stay quiet.",
                subtext: "Survival depends on these signals. If a normal cell stops receiving 'keep living' signals, it will automatically trigger programmed cell death (apoptosis).",
                buttonText: "What are they listening to?"
            },
            { 
                type: "mcq", 
                question: "A healthy cell will live forever even if it receives absolutely zero extracellular signals from its environment.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Cells require constant external input to continue living. In the absence of appropriate survival signals, they trigger apoptosis." 
            },
            {
                type: "concept",
                title: "Signal Sources",
                text: "Cells sense their environment through four main sources:\n\n" +
                    "1. **Danger & Pathogens** (Microbes or damaged cells).\n" +
                    "2. **Cell-Cell Contacts** (Sharing ions like Calcium/cAMP via gap junctions).\n" +
                    "3. **Cell-ECM Contacts** (Using integrins to feel the extracellular matrix).\n" +
                    "4. **Secreted Molecules** (Growth factors, cytokines, and hormones).",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "Match the secreted molecule to its primary physiological role.",
                pairs: [
                    { left: "Cytokines", right: "Mediators of inflammation and immune responses." },
                    { left: "Hormones", right: "Secreted by endocrine organs to affect distant tissues." },
                    { left: "Growth Factors", right: "Signals that tell the cell to proliferate and grow." }
                ],
                explanation: ""
            },
            { 
                type: "mcq", 
                question: "If a cell secretes a signal that only affects cells in its immediate vicinity due to rapid degradation, what kind of signaling is this?", 
                options: ["Autocrine signaling", "Paracrine signaling", "Endocrine signaling", "Synaptic signaling"], 
                answer: 1, 
                explanation: "'Para' means beside or near. Paracrine signaling involves local mediators that affect only cells in the immediate environment of the signaling cell." 
            },
            { 
                type: "mcq", 
                question: "When a cell secretes a signal that immediately binds to its own surface receptors to amplify a response, what is this called?", 
                options: ["Autocrine signaling", "Paracrine signaling", "Synaptic signaling", "Endocrine signaling"], 
                answer: 0, 
                explanation: "'Auto' means self. Autocrine signaling occurs when a cell responds to the very molecules it secretes." 
            },
            {
                type: "concept",
                title: "Synaptic & Endocrine Signaling",
                text: "Specialized and long-distance communication methods include:\n\n" +
                    "• **Synaptic Signaling:** Activated neurons secrete neurotransmitters across a specialized gap (synapse) onto a target cell.\n" +
                    "• **Endocrine Signaling:** A mediator (hormone) is released into the bloodstream to travel to target cells throughout the body.",
                subtext: "",
                buttonText: "Got it!"
            },
            {
                type: "fill",
                question: "When the thyroid gland secretes a hormone that travels through the bloodstream to reach targets all over the body, it is using ____________ signaling.",
                options: ["Endocrine", "Autocrine", "Paracrine", "Synaptic", "Integrin"],
                answer: 0,
                explanation: "Endocrine signaling utilizes the circulatory system to transport hormones to distant target organs.",
                buttonText: "Continue"
            },
            {
                type: "match",
                question: "Final review! Match the spatial signaling type to its correct distance or target.",
                pairs: [
                    { left: "Autocrine", right: "The cell stimulates itself." },
                    { left: "Paracrine", right: "Signals affect immediate neighbors only." },
                    { left: "Synaptic", right: "Neurotransmitters fired across a synapse." },
                    { left: "Endocrine", right: "Sending hormones through the bloodstream to distant targets." }
                ],
                explanation: ""
            }
        ]
    },
    "1.2.3": {
        title: "The Receptors (The Lock and Key) 🗝️",
        objectives: ["Understand how ligands bind to receptors, activate G-proteins, and trigger massive internal cascades."],
        data: [
            {
                type: "concept",
                title: "The Lock and Key",
                text: "No matter how a signal travels, the cell can only 'hear' it using specific **Receptor Proteins**.",
                subtext: "The signaling molecule (the Ligand) acts like a key. It has a high affinity for its receptor and binds with exquisite specificity, fitting perfectly into the receptor 'lock'.",
                buttonText: "Where are the locks?"
            },
            { 
                type: "mcq", 
                question: "Ligands will randomly bind to any receptor they bump into, even if it's the wrong shape.", 
                options: ["True", "False"], 
                answer: 1, 
                explanation: "Ligands bind to their respective receptors with exquisite specificity based on molecular shape and chemical affinity." 
            },
            {
                type: "concept",
                title: "Receptor Locations",
                text: "Receptors are located in two main places:\n\n" +
                    "1. **Intracellular Receptors:** Hidden deep inside the cell.\n" +
                    "2. **Cell-Surface Receptors:** Sticking out of the plasma membrane.",
                subtext: "",
                buttonText: "Next"
            },
            {
                type: "fill",
                question: "To reach an intracellular receptor, the ligand must be able to slide through the lipid plasma membrane. Therefore, these ligands (like Vitamin D and steroid hormones) must be ____________.",
                options: ["Lipid-soluble", "Giant proteins", "Water-soluble"],
                answer: 0,
                explanation: "Because they are lipid-soluble (lipophilic), these molecules easily transit the plasma membrane to activate transcription factors inside the cell.",
                buttonText: "Continue"
            },
            { 
                type: "mcq", 
                question: "Nitric Oxide (NO) is a tiny gas that diffuses into adjacent smooth muscle cells. What happens to the smooth muscle when internal enzymes generate cGMP in response?", 
                options: [
                    "The muscle violently contracts", 
                    "The muscle relaxes", 
                    "The muscle undergoes apoptosis", 
                    "The muscle cell rapidly divides", 
                    "The muscle cell secretes its own NO"
                ], 
                answer: 1, 
                explanation: "This paracrine signaling process tells the blood vessels to relax and dilate, which is a key regulator of blood flow."
            },
            {
                type: "concept",
                title: "Cell-Surface Receptors",
                text: "Most ligands are too big or polar to enter the cell. Instead, they bind to **Cell-Surface Receptors**.",
                subtext: "The most famous type is the **G-Protein-Coupled Receptor (GPCR)**. Attached to the inside of this receptor is a G-Protein, which acts like a molecular On/Off switch.",
                buttonText: "How does the switch work?"
            },
            { 
                type: "mcq", 
                question: "When a ligand binds to a GPCR, the G-protein drops GDP and grabs a high-energy molecule called GTP. What happens next?", 
                options: [
                    "It turns OFF and falls asleep", 
                    "It turns ON and starts an intracellular cascade", 
                    "It detaches and leaves the cell completely", 
                    "It travels directly into the nucleus", 
                    "It destroys the receptor"
                ], 
                answer: 1, 
                explanation: "Grabbing GTP acts as the activation trigger. The activated G-protein then moves along the membrane to trigger the next step in the signaling pathway."
            },
            {
                type: "concept",
                title: "The Second Messengers",
                text: "Because the original hormone (the '1st messenger') is stuck outside the cell, the activated G-Protein must create **Second Messengers** inside the cytoplasm.",
                subtext: "These messengers pass the instructions from the membrane down into the cell to reach the nucleus.",
                buttonText: "See the cascades"
            },
            {
                type: "match",
                question: "Match the G-Protein pathway to the Second Messenger it floods the cell with!",
                pairs: [
                    { left: "The cAMP Pathway", right: "Activates Adenylyl Cyclase to turn ATP into cAMP." },
                    { left: "The Calcium Pathway", right: "Activates Phospholipase C to release Calcium from the Smooth ER." }
                ],
                explanation: "These are the two major pathways used by GPCRs to relay signals into the cell."
            },
            {
                type: "fill",
                question: "Once cAMP or Calcium levels rise, they activate special proteins called Kinases. These cause a domino effect by attaching ____________ groups to other target proteins.",
                options: ["Ubiquitin", "Phosphate", "Formalin"],
                answer: 1,
                explanation: "Kinases phosphorylate target molecules, changing their shape to turn them on or off and continue the signal cascade.",
                buttonText: "Continue"
            },
            {
                type: "match",
                question: "GPCRs are just one type! Match these 4 cell-surface receptor types to their trigger mechanism.",
                pairs: [
                    { left: "G-Protein Coupled", right: "Drops GDP and grabs GTP to turn 'ON'." },
                    { left: "Ion Channels", right: "Opens a pore, typically at nerve synapses." },
                    { left: "Enzyme-Linked", right: "Activates an attached enzyme (like Tyrosine Kinase)." },
                    { left: "Shape Changers", right: "Alters shape to activate transcription factors (Notch/Wnt)." }
                ],
                explanation: ""
            }
        ]
    },
    "1.2.4": {
        title: "Signal Transduction (The Domino Effect) ⛓️",
        objectives: ["Trace the path of a signal from the receptor to the nucleus and understand the role of Growth Factors."],
        data: [
            {
                type: "concept",
                title: "From Surface to Nucleus",
                text: "When a ligand binds a receptor, the signal must travel deep inside to change the cell's behavior. This journey is called **Signal Transduction**.",
                subtext: "The most common transmission method is **Phosphorylation**. Enzymes called **Kinases** add phosphate groups to proteins, changing their shape and turning them ON or OFF!",
                buttonText: "How is it turned off?"
            },
            { 
                type: "mcq", 
                question: "For every kinase that adds a phosphate group to turn a protein ON, there is an enzyme called a Phosphatase that removes it to turn the protein OFF.", 
                options: ["True", "False"], 
                answer: 0, 
                explanation: "Kinases add phosphates to activate or modulate proteins, while Phosphatases remove them to deactivate or reset the signal." 
            },
            {
                type: "concept",
                title: "The Network",
                text: "Cellular signaling is a complex network rather than a straight line. One activated protein can communicate with many others.",
                subtext: "**Adaptor Proteins** act as molecular connectors, linking enzymes together to form massive signaling hubs.",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "Match the receptor type to its primary internal signaling strategy.",
                pairs: [
                    { left: "Receptor Tyrosine Kinase", right: "Ligand binding causes the receptor to phosphorylate itself (autophosphorylation) and recruit proteins like RAS." },
                    { left: "G-Protein Coupled Receptor", right: "Activates G-proteins to generate second messengers like cAMP or Calcium." },
                    { left: "Nuclear Receptor", right: "The ligand enters the cell and the receptor binds directly to DNA to change transcription." },
                    { left: "Notch Receptor", right: "Ligand binding causes the receptor to be cut (cleaved), releasing a piece that travels to the nucleus." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "The Final Destination",
                text: "Most signaling cascades end in the nucleus by activating **Transcription Factors** (e.g., MYC, JUN, or β-catenin).",
                subtext: "These proteins bind to specific DNA sequences to turn genes ON or OFF, changing the cell’s behavior permanently.",
                buttonText: "Got it!"
            },
            {
                type: "concept",
                title: "Growth Factors: The Messengers",
                text: "**Growth Factors** are secreted proteins that trigger pathways telling cells to survive, grow, and divide.",
                subtext: "They are critical for physiological processes like healing wounds and replacing damaged cells.",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "Match the growth factor to its primary function.",
                pairs: [
                    { left: "EGF", right: "Stimulates epithelial cell growth and migration." },
                    { left: "VEGF", right: "Stimulates new blood vessel growth (Angiogenesis)." },
                    { left: "PDGF", right: "Attracts fibroblasts and smooth muscle cells to injury sites." },
                    { left: "TGF-β", right: "Stimulates collagen production and stops inflammation." }
                ],
                explanation: ""
            },
            { 
                type: "mcq", 
                question: "When a cell is hypoxic (low oxygen), it activates the transcription factor HIF-1. This turns on the gene for which specific growth factor?", 
                options: ["EGF", "VEGF", "TGF-β", "PDGF", "TNF"], 
                answer: 1, 
                explanation: "Low oxygen levels trigger HIF-1, which increases VEGF production to stimulate angiogenesis and restore oxygen supply."
            },
            {
                type: "concept",
                title: "Pleiotropy",
                text: "Some growth factors are **Pleiotropic**, meaning they have many different effects depending on the cell type.",
                subtext: "TGF-β is a prime example; it can suppress inflammation but also drive scar formation (fibrosis) depending on the context.",
                buttonText: "Next"
            },
            { 
                type: "order", 
                question: "Arrange the steps of a typical growth signal in the correct chronological order.", 
                items: [
                    "Ligand (Growth Factor) binds Receptor", 
                    "Receptor activates Internal Kinases (e.g., RAS)", 
                    "Phosphorylation Cascade travels to Nucleus", 
                    "Transcription Factors bind DNA", 
                    "New Genes are transcribed"
                ], 
                explanation: "" 
            }
        ],
        next: "1.3.1"
    },

    // UNIT 3
    "1.3.1": {
        title: "Matrix Types (The Scaffold & The Gel) 🏗️",
        objectives: ["Understand the two forms of ECM (Interstitial vs. Basement Membrane) and their critical roles in support and signaling."],
        data: [
            {
                type: "concept",
                title: "More Than Just Filler",
                text: "The **Extracellular Matrix (ECM)** is a protein network surrounding every cell. It is NOT just empty space filler!",
                subtext: "It acts as mechanical support, a signaling hub, and a scaffold for tissue repair.",
                buttonText: "Is it active?"
            },
            {
                type: "mcq",
                question: "The ECM is a static, inactive structure that only exists to hold cells in place like glue.",
                options: ["True", "False"],
                answer: 1,
                explanation: "The ECM is highly dynamic. It constantly remodels, stores growth factors, and sends signals via integrin receptors to tell cells when to grow or move."
            },
            {
                type: "concept",
                title: "The Two Forms",
                text: "The ECM comes in two basic forms, depending on where it lives in the tissue:\n\n" +
                    "1. **Interstitial Matrix:** The 'gel' that fills spaces between cells.\n" +
                    "2. **Basement Membrane:** The highly organized 'sheet' that cells sit on.",
                subtext: "",
                buttonText: "Explore the Gel"
            },
            {
                type: "concept",
                title: "Interstitial Matrix - The Gel",
                text: "The Interstitial Matrix occupies the spaces between stromal cells (like fibroblasts) and epithelium. It is synthesized by mesenchymal cells.",
                subtext: "It forms a 3D, semi-fluid gel that acts as a cushion against compression in organs like the bladder or gut.",
                buttonText: "What's in the gel?"
            },
            {
                type: "match",
                question: "The interstitial gel is made of many different proteins. Match the component to its description!",
                pairs: [
                    { left: "Fibrillar Collagens", right: "Strong fibers that provide tensile strength." },
                    { left: "Elastin", right: "Allows tissues to stretch and snap back." },
                    { left: "Proteoglycans", right: "Trap water to form the semi-fluid gel cushion." },
                    { left: "Fibronectin", right: "Helps cells stick to the matrix and migrate." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "Basement Membrane - The Sheet",
                text: "The **Basement Membrane** is a highly organized, flat meshwork. It acts as a boundary between epithelium and underlying connective tissue.",
                subtext: "Even though it's called a 'membrane,' it is actually porous! It serves as a specialized surface for cell growth and filtration.",
                buttonText: "What's in the sheet?"
            },
            {
                type: "fill",
                question: "The two major structural components of the Basement Membrane are Laminin and Type _______ Collagen.",
                options: ["Type I", "Type IV", "Type III", "Type II", "Type V"],
                answer: 1,
                explanation: "Type IV Collagen forms the flat meshwork of the basement membrane, while Type I is for strong fibers in the interstitial space.",
                buttonText: "Continue"
            },
            {
                type: "mcq",
                question: "The Basement Membrane is a collaborative effort. It is synthesized by:",
                options: [
                    "Only the epithelial cells",
                    "Only the fibroblasts",
                    "Both overlying epithelium and underlying mesenchymal cells",
                    "Only macrophages",
                    "Inside the nucleus"
                ],
                answer: 2,
                explanation: "Building the basement membrane is a team effort between the cells on top and the mesenchymal cells below to create a shared foundation."
            },
            {
                type: "concept",
                title: "Critical for Regeneration",
                text: "The ECM acts as a scaffold for tissue renewal.",
                subtext: "If the basement membrane or stromal scaffold is destroyed, cells cannot organize themselves properly, and effective tissue regeneration fails!",
                buttonText: "Got it!"
            },
            {
                type: "sort",
                question: "Final review! Sort the features into the correct Matrix type.",
                buckets: ["Interstitial Matrix", "Basement Membrane"],
                items: [
                    { text: "Semi-fluid gel; Type I Collagen; cushions compression.", bucket: 0 },
                    { text: "Organized flat sheet; Type IV Collagen; acts as a filter.", bucket: 1 },
                    { text: "Contains Elastin.", bucket: 0 },
                    { text: "Contains Laminin; acts as a boundary.", bucket: 1 }
                ],
                explanation: ""
            }
        ]
    },
    "1.3.2": {
        title: "Matrix Components (Ropes, Sponges, & Glue) 🧪",
        objectives: ["Master the three families of ECM components: structural fibers, hydrating gels, and adhesive glycoproteins."],
        data: [
            {
                type: "concept",
                title: "The 3 Families",
                text: "The ECM is built from three families of molecules, each with a specific job:\n\n" +
                    "1. **Fibers** (Collagens & Elastin) for strength and stretch.\n" +
                    "2. **Gels** (Proteoglycans) for squishy cushioning.\n" +
                    "3. **Glue** (Glycoproteins) to stick it all together.",
                subtext: "",
                buttonText: "See the materials"
            },
            {
                type: "match",
                question: "If the ECM is a building, match the molecule family to its construction material!",
                pairs: [
                    { left: "Structural Fibers", right: "Steel beams and rubber bands (Strength & Recoil)." },
                    { left: "Hydrated Gels", right: "Water-filled sponges (Compressive resistance)." },
                    { left: "Adhesive Glycoproteins", right: "Cement and glue (Connecting cells to matrix)." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "Fibers - Collagen",
                text: "Collagen forms rope-like triple helices that give tissue immense tensile strength.",
                subtext: "To make these ropes strong, the cell cross-links them using the enzyme **lysyl hydroxylase**, which requires **Vitamin C** as a cofactor.",
                buttonText: "Next Fiber"
            },
            {
                type: "concept",
                title: "Fibers - Elastin",
                text: "Elastin allows tissues like the aorta, uterus, and skin to stretch and snap back into shape.",
                subtext: "Elastin fibers have a central stretchy core wrapped in a supportive glycoprotein mesh called **Fibrillin**.",
                buttonText: "Got it!"
            },
            {
                type: "concept",
                title: "The Gels - Proteoglycans",
                text: "Proteoglycans look like round hairbrushes. They have a protein core with long, sugar-coated bristles called **glycosaminoglycans** (GAGs).",
                subtext: "These sugar bristles are highly negatively charged.",
                buttonText: "The Sponge Effect"
            },
            { 
                type: "mcq", 
                question: "Because the proteoglycan bristles are highly negatively charged, what do they attract into the matrix to form a cushion?", 
                options: [
                    "Positive Sodium (Na+) ions, which pull in massive amounts of Water", 
                    "Lipid droplets, which repel water", 
                    "More collagen ropes"
                ], 
                answer: 0, 
                explanation: "Negative sugars attract positive sodium, and water follows sodium via osmosis. This creates a pressurized, water-filled cushion for tissues like joints."
            },
            {
                type: "concept",
                title: "The Glue - Fibronectin & Laminin",
                text: "Adhesive Glycoproteins connect the ECM to itself and to the cells.",
                subtext: "• **Fibronectin:** The main glue in the Interstitial gel.\n• **Laminin:** The main cross-shaped glue in the Basement Membrane.",
                buttonText: "Next"
            },
            {
                type: "match",
                question: "Match the specific 'glue' to where it works in the ECM!",
                pairs: [
                    { left: "Fibronectin", right: "Connects things in the squishy Interstitial Matrix." },
                    { left: "Laminin", right: "Connects cells to the flat Basement Membrane sheet." }
                ],
                explanation: ""
            },
            {
                type: "concept",
                title: "Integrins - The Cell's Hands",
                text: "How does the cell grab onto this glue? It uses transmembrane receptors called **Integrins**.",
                subtext: "Integrins link the ECM outside to the cell's cytoskeleton inside. When they grab the matrix, they also send signals into the cell telling it to grow or move.",
                buttonText: "Got it!"
            },
            {
                type: "sort",
                question: "You are building a tissue! Sort the components into their correct ECM family.",
                buckets: ["Structural Fibers", "Hydrated Gels", "Adhesive Glycoproteins"],
                items: [
                    { text: "Collagen & Elastin", bucket: 0 },
                    { text: "Proteoglycans & Hyaluronan", bucket: 1 },
                    { text: "Fibronectin & Laminin", bucket: 2 }
                ],
                explanation: ""
            }
        ]
    }
};