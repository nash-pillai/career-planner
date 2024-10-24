export const personalityAreas = [
  "Realistic",
  "Investigative",
  "Artistic",
  "Social",
  "Enterprising",
  "Conventional",
] as const;

export const allQuestions = [
  {
    area: "Realistic",
    text: "Building kitchen cabinets.",
  },
  {
    area: "Realistic",
    text: "Laying brick or tile.",
  },
  {
    area: "Investigative",
    text: "Developing a new medicine.",
  },
  {
    area: "Investigative",
    text: "Studying ways to reduce water pollution.",
  },
  {
    area: "Artistic",
    text: "Writing books or plays.",
  },
  {
    area: "Artistic",
    text: "Playing a musical instrument.",
  },
  {
    area: "Social",
    text: "Teaching an individual an exercise routine.",
  },
  {
    area: "Social",
    text: "Helping people with personal or emotional problems.",
  },
  {
    area: "Enterprising",
    text: "Buying and selling stocks and bonds.",
  },
  {
    area: "Enterprising",
    text: "Managing a retail store.",
  },
  {
    area: "Conventional",
    text: "Developing a spreadsheet using computer software.",
  },
  {
    area: "Conventional",
    text: "Proofreading records or forms.",
  },
  {
    area: "Realistic",
    text: "Repairing household appliances.",
  },
  {
    area: "Realistic",
    text: "Raising fish in a fish hatchery.",
  },
  {
    area: "Investigative",
    text: "Conducting chemical experiments.",
  },
  {
    area: "Investigative",
    text: "Studying the movement of planets.",
  },
  {
    area: "Artistic",
    text: "Composing or arranging music.",
  },
  {
    area: "Artistic",
    text: "Drawing pictures.",
  },
  {
    area: "Social",
    text: "Giving career guidance to people.",
  },
  {
    area: "Social",
    text: "Performing rehabilitation therapy.",
  },
  {
    area: "Enterprising",
    text: "Operating a beauty salon or barber shop.",
  },
  {
    area: "Enterprising",
    text: "Managing a department within a large company.",
  },
  {
    area: "Conventional",
    text: "Installing software across computers on a large network.",
  },
  {
    area: "Conventional",
    text: "Operating a calculator.",
  },
  {
    area: "Realistic",
    text: "Assembling electronic parts.",
  },
  {
    area: "Realistic",
    text: "Driving a truck to deliver packages to offices and homes.",
  },
  {
    area: "Investigative",
    text: "Examining blood samples using a microscope.",
  },
  {
    area: "Investigative",
    text: "Investigating the cause of a fire.",
  },
  {
    area: "Artistic",
    text: "Creating special effects for movies.",
  },
  {
    area: "Artistic",
    text: "Painting sets for plays.",
  },
  {
    area: "Social",
    text: "Doing volunteer work at a non-profit organization.",
  },
  {
    area: "Social",
    text: "Teaching children how to play sports.",
  },
  {
    area: "Enterprising",
    text: "Starting your own business.",
  },
  {
    area: "Enterprising",
    text: "Negotiating business contracts.",
  },
  {
    area: "Conventional",
    text: "Keeping shipping and receiving records.",
  },
  {
    area: "Conventional",
    text: "Calculating the wages of employees.",
  },
  {
    area: "Realistic",
    text: "Testing the quality of parts before shipment.",
  },
  {
    area: "Realistic",
    text: "Repairing and installing locks.",
  },
  {
    area: "Investigative",
    text: "Developing a way to better predict the weather.",
  },
  {
    area: "Investigative",
    text: "Working in a biology lab.",
  },
  {
    area: "Artistic",
    text: "Writing scripts for movies or television shows.",
  },
  {
    area: "Artistic",
    text: "Performing jazz or tap dance.",
  },
  {
    area: "Social",
    text: "Teaching sign language to people who are deaf or hard of hearing.",
  },
  {
    area: "Social",
    text: "Helping conduct a group therapy session.",
  },
  {
    area: "Enterprising",
    text: "Representing a client in a lawsuit.",
  },
  {
    area: "Enterprising",
    text: "Marketing a new line of clothing.",
  },
  {
    area: "Conventional",
    text: "Inventorying supplies using a hand-held computer.",
  },
  {
    area: "Conventional",
    text: "Recording rent payments.",
  },
  {
    area: "Realistic",
    text: "Setting up and operating machines to make products.",
  },
  {
    area: "Realistic",
    text: "Putting out forest fires.",
  },
  {
    area: "Investigative",
    text: "Inventing a replacement for sugar.",
  },
  {
    area: "Investigative",
    text: "Doing laboratory tests to identify diseases.",
  },
  {
    area: "Artistic",
    text: "Singing in a band.",
  },
  {
    area: "Artistic",
    text: "Editing movies.",
  },
  {
    area: "Social",
    text: "Taking care of children at a day-care center.",
  },
  {
    area: "Social",
    text: "Teaching a high-school class.",
  },
  {
    area: "Enterprising",
    text: "Selling merchandise at a department store.",
  },
  {
    area: "Enterprising",
    text: "Managing a clothing store.",
  },
  {
    area: "Conventional",
    text: "Keeping inventory records.",
  },
  {
    area: "Conventional",
    text: "Stamping, sorting, and distributing mail for an organization.",
  },
] as {
  area: (typeof personalityAreas)[number];
  text: string;
}[];

export const ratings = [
  "Strongly Dislike",
  "Dislike",
  "Unsure",
  "Like",
  "Strongly Like",
];

export const trainingLevel = [
  {
    title: "Little or No Preparation Needed",
    experience:
      "Little or no previous work-related skill, knowledge, or experience is needed for these careers. For example, a person can become a waiter or waitress even if he/she has never worked before.",
    education:
      "Some of these careers may need a high school diploma or GED certificate.",
    job_training:
      "Employees in these careers need from a few days to a few months of training. Usually, an experienced worker can show you how to do the job.",
    examples:
      "These careers involve following instructions and helping others. Examples include agricultural equipment operators, dishwashers, floor sanders and finishers, landscaping and groundskeeping workers, logging equipment operators, baristas, and maids and housekeeping cleaners.",
    svp_range: "(Below 4.0)",
  },
  {
    title: "Some Preparation Needed",
    experience:
      "Some previous work-related skill, knowledge, or experience is usually needed. For example, it would help a teller to have experience working with the public.",
    education: "These careers usually need a high school diploma.",
    job_training:
      "Employees in these careers need from a few months to one year of working with experienced employees. An apprenticeship program may be available for these careers.",
    examples:
      "These careers often involve using your knowledge and skills to help others. Examples include orderlies, counter and rental clerks, customer service representatives, security guards, upholsterers, tellers, and dental laboratory technicians.",
    svp_range: "(4.0 to < 6.0)",
  },
  {
    title: "Medium Preparation Needed",
    experience:
      "Previous work-related skill, knowledge, or experience is needed for these careers. For example, an electrician must be in an apprenticeship for three to four years or have several years of job training. You may need to pass a test to get a license to do the job.",
    education:
      "Most of these careers need vocational school training, on-the-job experience, or an associate's degree.",
    job_training:
      "Employees in these careers need one or two years of training. Both on-the-job experience and informal training with experienced workers may be needed. An apprenticeship program may be a good choice for these careers.",
    examples:
      "These careers usually involve using communication and organizational skills to coordinate, supervise, manage, or train others to accomplish goals. Examples include hydroelectric production managers, desktop publishers, electricians, agricultural technicians, barbers, court reporters and simultaneous captioners, and medical assistants.",
    svp_range: "(6.0 to < 7.0)",
  },
  {
    title: "High Preparation Needed",
    experience:
      "Long term work-related skill, knowledge, or experience is needed for these careers. For example, an accountant must complete four years of college and work several years in the field to be qualified for the job.",
    education:
      "Most of these careers need a four-year bachelor's degree, but some do not.",
    job_training:
      "Employees in these careers need several years of work-related experience and training. Both on-the-job and classroom job training may be needed.",
    examples:
      "Many of these careers involve coordinating, supervising, managing, or training others. Examples include real estate brokers, sales managers, database administrators, graphic designers, conservation scientists, art directors, and cost estimators.",
    svp_range: "(7.0 to < 8.0)",
  },
  {
    title: "Extensive Preparation Needed",
    experience:
      "Extensive skill, knowledge, and experience are needed for these careers. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job.",
    education:
      "Most of these careers need a graduate school education. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree).",
    job_training:
      "Employees may need some on-the-job training. However, the person will usually have the needed skills, knowledge, work-related experience, and training before starting the job.",
    examples:
      "These careers often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians.",
    svp_range: "(8.0 and above)",
  },
];

export const departments = [
  "Business",
  "English",
  "Family and Consumer Science",
  "Fine Arts",
  "Foreign Language",
  "Math",
  "Technology",
  "Science",
  "Social Studies",
] as const;

export const pathways = [
  "CTE Pathway",
  "Project Lead The Way (PLTW)",
  "Science Research Program",
  "4+1 Pathway",
] as const;

export const educationTags = [
  {
    code: "1",
    name: "Worker Characteristics",
    description: "Worker Characteristics",
  },
  {
    code: "1.A",
    name: "Abilities",
    description:
      "Enduring attributes of the individual that influence performance",
  },
  {
    code: "1.A.1",
    name: "Cognitive Abilities",
    description:
      "Abilities that influence the acquisition and application of knowledge in problem solving",
  },
  {
    code: "1.A.1.a",
    name: "Verbal Abilities",
    description:
      "Abilities that influence the acquisition and application of verbal information in problem solving",
  },
  {
    code: "1.A.1.a.1",
    name: "Oral Comprehension",
    description:
      "The ability to listen to and understand information and ideas presented through spoken words and sentences.",
  },
  {
    code: "1.A.1.a.2",
    name: "Written Comprehension",
    description:
      "The ability to read and understand information and ideas presented in writing.",
  },
  {
    code: "1.A.1.a.3",
    name: "Oral Expression",
    description:
      "The ability to communicate information and ideas in speaking so others will understand.",
  },
  {
    code: "1.A.1.a.4",
    name: "Written Expression",
    description:
      "The ability to communicate information and ideas in writing so others will understand.",
  },
  {
    code: "1.A.1.b",
    name: "Idea Generation and Reasoning Abilities",
    description:
      "Abilities that influence the application and manipulation of information in problem solving",
  },
  {
    code: "1.A.1.b.1",
    name: "Fluency of Ideas",
    description:
      "The ability to come up with a number of ideas about a topic (the number of ideas is important, not their quality, correctness, or creativity).",
  },
  {
    code: "1.A.1.b.2",
    name: "Originality",
    description:
      "The ability to come up with unusual or clever ideas about a given topic or situation, or to develop creative ways to solve a problem.",
  },
  {
    code: "1.A.1.b.3",
    name: "Problem Sensitivity",
    description:
      "The ability to tell when something is wrong or is likely to go wrong. It does not involve solving the problem, only recognizing that there is a problem.",
  },
  {
    code: "1.A.1.b.4",
    name: "Deductive Reasoning",
    description:
      "The ability to apply general rules to specific problems to produce answers that make sense.",
  },
  {
    code: "1.A.1.b.5",
    name: "Inductive Reasoning",
    description:
      "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
  },
  {
    code: "1.A.1.b.6",
    name: "Information Ordering",
    description:
      "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
  },
  {
    code: "1.A.1.b.7",
    name: "Category Flexibility",
    description:
      "The ability to generate or use different sets of rules for combining or grouping things in different ways.",
  },
  {
    code: "1.A.1.c",
    name: "Quantitative Abilities",
    description:
      "Abilities that influence the solution of problems involving mathematical relationships",
  },
  {
    code: "1.A.1.c.1",
    name: "Mathematical Reasoning",
    description:
      "The ability to choose the right mathematical methods or formulas to solve a problem.",
  },
  {
    code: "1.A.1.c.2",
    name: "Number Facility",
    description:
      "The ability to add, subtract, multiply, or divide quickly and correctly.",
  },
  {
    code: "1.A.1.d",
    name: "Memory",
    description: "Abilities related to the recall of available information",
  },
  {
    code: "1.A.1.d.1",
    name: "Memorization",
    description:
      "The ability to remember information such as words, numbers, pictures, and procedures.",
  },
  {
    code: "1.A.1.e",
    name: "Perceptual Abilities",
    description:
      "Abilities related to the acquisition and organization of visual information",
  },
  {
    code: "1.A.1.e.1",
    name: "Speed of Closure",
    description:
      "The ability to quickly make sense of, combine, and organize information into meaningful patterns.",
  },
  {
    code: "1.A.1.e.2",
    name: "Flexibility of Closure",
    description:
      "The ability to identify or detect a known pattern (a figure, object, word, or sound) that is hidden in other distracting material.",
  },
  {
    code: "1.A.1.e.3",
    name: "Perceptual Speed",
    description:
      "The ability to quickly and accurately compare similarities and differences among sets of letters, numbers, objects, pictures, or patterns. The things to be compared may be presented at the same time or one after the other. This ability also includes comparing a presented object with a remembered object.",
  },
  {
    code: "1.A.1.f",
    name: "Spatial Abilities",
    description:
      "Abilities related to the manipulation and organization of spatial information",
  },
  {
    code: "1.A.1.f.1",
    name: "Spatial Orientation",
    description:
      "The ability to know your location in relation to the environment or to know where other objects are in relation to you.",
  },
  {
    code: "1.A.1.f.2",
    name: "Visualization",
    description:
      "The ability to imagine how something will look after it is moved around or when its parts are moved or rearranged.",
  },
  {
    code: "1.A.1.g",
    name: "Attentiveness",
    description: "Abilities related to application of attention",
  },
  {
    code: "1.A.1.g.1",
    name: "Selective Attention",
    description:
      "The ability to concentrate on a task over a period of time without being distracted.",
  },
  {
    code: "1.A.1.g.2",
    name: "Time Sharing",
    description:
      "The ability to shift back and forth between two or more activities or sources of information (such as speech, sounds, touch, or other sources).",
  },
  {
    code: "1.A.2",
    name: "Psychomotor Abilities",
    description:
      "Abilities that influence the capacity to manipulate and control objects",
  },
  {
    code: "1.A.2.a",
    name: "Fine Manipulative Abilities",
    description: "Abilities related to the manipulation of objects",
  },
  {
    code: "1.A.2.a.1",
    name: "Arm-Hand Steadiness",
    description:
      "The ability to keep your hand and arm steady while moving your arm or while holding your arm and hand in one position.",
  },
  {
    code: "1.A.2.a.2",
    name: "Manual Dexterity",
    description:
      "The ability to quickly move your hand, your hand together with your arm, or your two hands to grasp, manipulate, or assemble objects.",
  },
  {
    code: "1.A.2.a.3",
    name: "Finger Dexterity",
    description:
      "The ability to make precisely coordinated movements of the fingers of one or both hands to grasp, manipulate, or assemble very small objects.",
  },
  {
    code: "1.A.2.b",
    name: "Control Movement Abilities",
    description:
      "Abilities related to the control and manipulation of objects in time and space",
  },
  {
    code: "1.A.2.b.1",
    name: "Control Precision",
    description:
      "The ability to quickly and repeatedly adjust the controls of a machine or a vehicle to exact positions.",
  },
  {
    code: "1.A.2.b.2",
    name: "Multilimb Coordination",
    description:
      "The ability to coordinate two or more limbs (for example, two arms, two legs, or one leg and one arm) while sitting, standing, or lying down. It does not involve performing the activities while the whole body is in motion.",
  },
  {
    code: "1.A.2.b.3",
    name: "Response Orientation",
    description:
      "The ability to choose quickly between two or more movements in response to two or more different signals (lights, sounds, pictures). It includes the speed with which the correct response is started with the hand, foot, or other body part.",
  },
  {
    code: "1.A.2.b.4",
    name: "Rate Control",
    description:
      "The ability to time your movements or the movement of a piece of equipment in anticipation of changes in the speed and/or direction of a moving object or scene.",
  },
  {
    code: "1.A.2.c",
    name: "Reaction Time and Speed Abilities",
    description: "Abilities related to speed of manipulation of objects",
  },
  {
    code: "1.A.2.c.1",
    name: "Reaction Time",
    description:
      "The ability to quickly respond (with the hand, finger, or foot) to a signal (sound, light, picture) when it appears.",
  },
  {
    code: "1.A.2.c.2",
    name: "Wrist-Finger Speed",
    description:
      "The ability to make fast, simple, repeated movements of the fingers, hands, and wrists.",
  },
  {
    code: "1.A.2.c.3",
    name: "Speed of Limb Movement",
    description: "The ability to quickly move the arms and legs.",
  },
  {
    code: "1.A.3",
    name: "Physical Abilities",
    description:
      "Abilities that influence strength, endurance, flexibility, balance and coordination",
  },
  {
    code: "1.A.3.a",
    name: "Physical Strength Abilities",
    description: "Abilities related to the capacity to exert force",
  },
  {
    code: "1.A.3.a.1",
    name: "Static Strength",
    description:
      "The ability to exert maximum muscle force to lift, push, pull, or carry objects.",
  },
  {
    code: "1.A.3.a.2",
    name: "Explosive Strength",
    description:
      "The ability to use short bursts of muscle force to propel oneself (as in jumping or sprinting), or to throw an object.",
  },
  {
    code: "1.A.3.a.3",
    name: "Dynamic Strength",
    description:
      "The ability to exert muscle force repeatedly or continuously over time. This involves muscular endurance and resistance to muscle fatigue.",
  },
  {
    code: "1.A.3.a.4",
    name: "Trunk Strength",
    description:
      "The ability to use your abdominal and lower back muscles to support part of the body repeatedly or continuously over time without giving out or fatiguing.",
  },
  {
    code: "1.A.3.b",
    name: "Endurance",
    description:
      "The ability to exert oneself physically over long periods without getting out of breath",
  },
  {
    code: "1.A.3.b.1",
    name: "Stamina",
    description:
      "The ability to exert yourself physically over long periods of time without getting winded or out of breath.",
  },
  {
    code: "1.A.3.c",
    name: "Flexibility, Balance, and Coordination",
    description: "Abilities related to the control of gross body movements",
  },
  {
    code: "1.A.3.c.1",
    name: "Extent Flexibility",
    description:
      "The ability to bend, stretch, twist, or reach with your body, arms, and/or legs.",
  },
  {
    code: "1.A.3.c.2",
    name: "Dynamic Flexibility",
    description:
      "The ability to quickly and repeatedly bend, stretch, twist, or reach out with your body, arms, and/or legs.",
  },
  {
    code: "1.A.3.c.3",
    name: "Gross Body Coordination",
    description:
      "The ability to coordinate the movement of your arms, legs, and torso together when the whole body is in motion.",
  },
  {
    code: "1.A.3.c.4",
    name: "Gross Body Equilibrium",
    description:
      "The ability to keep or regain your body balance or stay upright when in an unstable position.",
  },
  {
    code: "1.A.4",
    name: "Sensory Abilities",
    description:
      "Abilities that influence visual, auditory and speech perception",
  },
  {
    code: "1.A.4.a",
    name: "Visual Abilities",
    description: "Abilities related to visual sensory input",
  },
  {
    code: "1.A.4.a.1",
    name: "Near Vision",
    description:
      "The ability to see details at close range (within a few feet of the observer).",
  },
  {
    code: "1.A.4.a.2",
    name: "Far Vision",
    description: "The ability to see details at a distance.",
  },
  {
    code: "1.A.4.a.3",
    name: "Visual Color Discrimination",
    description:
      "The ability to match or detect differences between colors, including shades of color and brightness.",
  },
  {
    code: "1.A.4.a.4",
    name: "Night Vision",
    description: "The ability to see under low-light conditions.",
  },
  {
    code: "1.A.4.a.5",
    name: "Peripheral Vision",
    description:
      "The ability to see objects or movement of objects to one's side when the eyes are looking ahead.",
  },
  {
    code: "1.A.4.a.6",
    name: "Depth Perception",
    description:
      "The ability to judge which of several objects is closer or farther away from you, or to judge the distance between you and an object.",
  },
  {
    code: "1.A.4.a.7",
    name: "Glare Sensitivity",
    description:
      "The ability to see objects in the presence of a glare or bright lighting.",
  },
  {
    code: "1.A.4.b",
    name: "Auditory and Speech Abilities",
    description: "Abilities related to auditory and oral input",
  },
  {
    code: "1.A.4.b.1",
    name: "Hearing Sensitivity",
    description:
      "The ability to detect or tell the differences between sounds that vary in pitch and loudness.",
  },
  {
    code: "1.A.4.b.2",
    name: "Auditory Attention",
    description:
      "The ability to focus on a single source of sound in the presence of other distracting sounds.",
  },
  {
    code: "1.A.4.b.3",
    name: "Sound Localization",
    description:
      "The ability to tell the direction from which a sound originated.",
  },
  {
    code: "1.A.4.b.4",
    name: "Speech Recognition",
    description:
      "The ability to identify and understand the speech of another person.",
  },
  {
    code: "1.A.4.b.5",
    name: "Speech Clarity",
    description: "The ability to speak clearly so others can understand you.",
  },
  {
    code: "1.B",
    name: "Interests and Work Values",
    description: "Preferences for work environments and outcomes",
  },
  {
    code: "1.B.1",
    name: "General Occupational Interests",
    description:
      "Preferences for work environments. Occupational Interest Profiles (OIPs) are compatible with Holland's (1997) model of personality types and work environments. Six interest categories are used to describe the work environment of occupations: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. An OIP consists of six numerical scores indicating how descriptive and characteristic each work environment (or interest area) is for an O*NET-SOC occupation. In addition, a high-point profile has been assigned indicating which interests are most characteristic of an O*NET-SOC occupation. A high-point profile consists of one to three interest codes, depending on how many interest categories meet a minimum degree of descriptiveness for the O*NET-SOC occupation.",
  },
  {
    code: "1.B.1.a",
    name: "Realistic",
    description:
      "Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.",
  },
  {
    code: "1.B.1.b",
    name: "Investigative",
    description:
      "Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.",
  },
  {
    code: "1.B.1.c",
    name: "Artistic",
    description:
      "Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.",
  },
  {
    code: "1.B.1.d",
    name: "Social",
    description:
      "Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.",
  },
  {
    code: "1.B.1.e",
    name: "Enterprising",
    description:
      "Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.",
  },
  {
    code: "1.B.1.f",
    name: "Conventional",
    description:
      "Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.",
  },
  {
    code: "1.B.1.g",
    name: "First Interest High-Point",
    description: "Primary-Rank Descriptiveness",
  },
  {
    code: "1.B.1.h",
    name: "Second Interest High-Point",
    description: "Secondary-Cutoff/Rank Descriptiveness",
  },
  {
    code: "1.B.1.i",
    name: "Third Interest High-Point",
    description: "Tertiary-Cutoff/Rank Descriptiveness",
  },
  {
    code: "1.B.2",
    name: "Work Values",
    description:
      "Occupational Reinforcer Patterns (ORPs) indicate which work values and needs are likely to be reinforced or satisfied by a particular O*NET-SOC occupation. The use of work values to describe occupations is based on the Theory of Work Adjustment (TWA) developed during the Work Adjustment Project at the University of Minnesota under Research Grants from the U.S. Department of Health, Education and Welfare (Dawis, R.V., England, G.W., & Lofquist, L.H., 1964; Dawis, R.V., & Lofquist, L.H., 1984). This theory proposes that job satisfaction is directly related to the degree to which a person's values and corresponding needs are satisfied by his or her work environment. The TWA identifies six work values each with a corresponding set of needs.",
  },
  {
    code: "1.B.2.a",
    name: "Achievement",
    description:
      "Occupations that satisfy this work value are results oriented and allow employees to use their strongest abilities, giving them a feeling of accomplishment. Corresponding needs are Ability Utilization and Achievement.",
  },
  {
    code: "1.B.2.a.1",
    name: "Ability Utilization",
    description: "Workers on this job make use of their individual abilities.",
  },
  {
    code: "1.B.2.a.2",
    name: "Achievement",
    description: "Workers on this job get a feeling of accomplishment.",
  },
  {
    code: "1.B.2.b",
    name: "Working Conditions",
    description:
      "Occupations that satisfy this work value offer job security and good working conditions. Corresponding needs are Activity, Compensation, Independence, Security, Variety and Working Conditions.",
  },
  {
    code: "1.B.2.b.1",
    name: "Activity",
    description: "Workers on this job are busy all the time.",
  },
  {
    code: "1.B.2.b.2",
    name: "Independence",
    description: "Workers on this job do their work alone.",
  },
  {
    code: "1.B.2.b.3",
    name: "Variety",
    description:
      "Workers on this job have something different to do every day.",
  },
  {
    code: "1.B.2.b.4",
    name: "Compensation",
    description:
      "Workers on this job are paid well in comparison with other workers.",
  },
  {
    code: "1.B.2.b.5",
    name: "Security",
    description: "Workers on this job have steady employment.",
  },
  {
    code: "1.B.2.b.6",
    name: "Working Conditions",
    description: "Workers on this job have good working conditions.",
  },
  {
    code: "1.B.2.c",
    name: "Recognition",
    description:
      "Occupations that satisfy this work value offer advancement, potential for leadership, and are often considered prestigious. Corresponding needs are Advancement, Authority, Recognition and Social Status.",
  },
  {
    code: "1.B.2.c.1",
    name: "Advancement",
    description: "Workers on this job have opportunities for advancement.",
  },
  {
    code: "1.B.2.c.2",
    name: "Recognition",
    description:
      "Workers on this job receive recognition for the work they do.",
  },
  {
    code: "1.B.2.c.3",
    name: "Authority",
    description:
      "Workers on this job give directions and instructions to others.",
  },
  {
    code: "1.B.2.c.4",
    name: "Social Status",
    description:
      "Workers on this job are looked up to by others in their company and their community.",
  },
  {
    code: "1.B.2.d",
    name: "Relationships",
    description:
      "Occupations that satisfy this work value allow employees to provide service to others and work with co-workers in a friendly non-competitive environment. Corresponding needs are Co-workers, Moral Values and Social Service.",
  },
  {
    code: "1.B.2.d.1",
    name: "Co-workers",
    description:
      "Workers on this job have co-workers who are easy to get along with.",
  },
  {
    code: "1.B.2.d.2",
    name: "Social Service",
    description:
      "Workers on this job have work where they do things for other people.",
  },
  {
    code: "1.B.2.d.3",
    name: "Moral Values",
    description:
      "Workers on this job are never pressured to do things that go against their sense of right and wrong.",
  },
  {
    code: "1.B.2.e",
    name: "Support",
    description:
      "Occupations that satisfy this work value offer supportive management that stands behind employees. Corresponding needs are Company Policies, Supervision: Human Relations and Supervision: Technical.",
  },
  {
    code: "1.B.2.e.1",
    name: "Company Policies and Practices",
    description: "Workers on this job are treated fairly by the company.",
  },
  {
    code: "1.B.2.e.2",
    name: "Supervision, Human Relations",
    description:
      "Workers on this job have supervisors who back up their workers with management.",
  },
  {
    code: "1.B.2.e.3",
    name: "Supervision, Technical",
    description:
      "Workers on this job have supervisors who train their workers well.",
  },
  {
    code: "1.B.2.f",
    name: "Independence",
    description:
      "Occupations that satisfy this work value allow employees to work on their own and make decisions. Corresponding needs are Creativity, Responsibility and Autonomy.",
  },
  {
    code: "1.B.2.f.1",
    name: "Creativity",
    description: "Workers on this job try out their own ideas.",
  },
  {
    code: "1.B.2.f.2",
    name: "Responsibility",
    description: "Workers on this job make decisions on their own.",
  },
  {
    code: "1.B.2.f.3",
    name: "Autonomy",
    description: "Workers on this job plan their work with little supervision.",
  },
  {
    code: "1.B.2.g",
    name: "First Work Value High-Point",
    description: "Primary-Rank Descriptiveness",
  },
  {
    code: "1.B.2.h",
    name: "Second Work Value High-Point",
    description: "Secondary-Cutoff/Rank Descriptiveness",
  },
  {
    code: "1.B.2.i",
    name: "Third Work Value High-Point",
    description: "Tertiary-Cutoff/Rank Descriptiveness",
  },
  {
    code: "1.B.3",
    name: "Basic Occupational Interests",
    description:
      "Specific, homogeneous facets of interests that group together work activities that share similar properties and represent the same abstract object.",
  },
  {
    code: "1.B.3.a",
    name: "Mechanics/Electronics",
    description:
      "Work involves maintaining and repairing of machinery, such as automotive engines, electronic equipment, computers, and communication systems.",
  },
  {
    code: "1.B.3.b",
    name: "Construction/Woodwork",
    description:
      "Work involves constructing, installing, or repairing structures and fixtures made of wood.",
  },
  {
    code: "1.B.3.c",
    name: "Transportation/Machine Operation",
    description:
      "Work involves driving vehicles, such as vans, trucks, trains, and buses to transport people or materials. Work can also involve operating heavy equipment, such as cranes, forklifts, bulldozers, and backhoes to move materials or earth.",
  },
  {
    code: "1.B.3.d",
    name: "Physical/Manual Labor",
    description:
      "Work involves manually unloading and moving freight, stock, luggage, or other materials, or performing other physical labor.",
  },
  {
    code: "1.B.3.e",
    name: "Protective Service",
    description:
      "Work involves maintaining order and protecting life and property by conducting investigations and enforcing laws and regulations to prevent or solve crimes.",
  },
  {
    code: "1.B.3.f",
    name: "Agriculture",
    description:
      "Work involves planting, cultivating, and harvesting crops, plants, or trees, or raising farm animals. Work can also involve preparing plant and animal products for distribution to consumers, or protecting natural resources to maximize their use in farming.",
  },
  {
    code: "1.B.3.g",
    name: "Nature/Outdoors",
    description:
      "Work involves planning, restoring, and conserving natural areas and wildlife habitats.",
  },
  {
    code: "1.B.3.h",
    name: "Animal Service",
    description:
      "Work involves feeding, grooming, exercising, or otherwise providing care to promote and maintain the well-being of pets and other animals in settings such as kennels, animal shelters, and zoos.",
  },
  {
    code: "1.B.3.i",
    name: "Athletics",
    description:
      "Work involves training, practicing, or competing in athletic events, or supporting those participating in athletics through coaching, training, or officiating.",
  },
  {
    code: "1.B.3.j",
    name: "Engineering",
    description:
      "Work involves applying science and technology to the design, building, testing, and use of electrical and electronic components, mechanical devices and machines, automotive, marine, and aerospace equipment and vehicles, materials, or structures.",
  },
  {
    code: "1.B.3.k",
    name: "Physical Science",
    description:
      "Work involves studying and researching non-living objects, materials, and phenomena through scientific disciplines such as physics, chemistry, astronomy, meteorology, or geology.",
  },
  {
    code: "1.B.3.l",
    name: "Life Science",
    description:
      "Work involves studying and researching living organisms through scientific disciplines such as biology, botany, zoology, microbiology, physiology, biochemistry, or zoology.",
  },
  {
    code: "1.B.3.m",
    name: "Medical Science",
    description:
      "Work involves studying and researching the causes, nature, effects, and treatments of disease or other forms of impairment or illness.",
  },
  {
    code: "1.B.3.n",
    name: "Social Science",
    description:
      "Work involves studying and researching human behavior, society, politics, and social relationships through scientific disciplines such as psychology, sociology, economics, or political science.",
  },
  {
    code: "1.B.3.o",
    name: "Humanities",
    description:
      "Work involves studying and researching aspects of human history, culture, and language through disciplines such as history, philosophy, the language arts, or area/ethnic studies.",
  },
  {
    code: "1.B.3.p",
    name: "Mathematics/Statistics",
    description:
      "Work involves developing and applying mathematics and statistical theory and methods.",
  },
  {
    code: "1.B.3.q",
    name: "Information Technology",
    description:
      "Work involves designing, developing, testing, and maintaining computer software, hardware, networks, and systems.",
  },
  {
    code: "1.B.3.r",
    name: "Visual Arts",
    description:
      "Work involves creating original visual artwork for a variety of media and purposes using various techniques and software.",
  },
  {
    code: "1.B.3.s",
    name: "Applied Arts and Design",
    description:
      "Work involves applying artistic principles to the design and creation of various objects and materials.",
  },
  {
    code: "1.B.3.t",
    name: "Performing Arts",
    description:
      "Work involves acting as a performer in dance, comedy, or dramatic productions, choreographing of dance performances, or producing of live or recorded entertainment.",
  },
  {
    code: "1.B.3.u",
    name: "Music",
    description:
      "Work involves conducting, composing, or playing music or singing.",
  },
  {
    code: "1.B.3.v",
    name: "Creative Writing",
    description:
      "Work involves developing creative written works, such as novels, scripts, song lyrics, poetry, stories, or advertisements.",
  },
  {
    code: "1.B.3.w",
    name: "Media",
    description:
      "Work involves producing, developing, writing, directing, or presenting information through print, radio, television, or digital media.",
  },
  {
    code: "1.B.3.x",
    name: "Culinary Art",
    description:
      "Work involves preparing, cooking, and presenting food in a distinctive style usually associated with a specific culture or region.",
  },
  {
    code: "1.B.3.y",
    name: "Teaching/Education",
    description:
      "Work involves teaching through lectures, discussions, and demonstrations in one or more subjects.",
  },
  {
    code: "1.B.3.z",
    name: "Social Service",
    description:
      "Work involves providing social services and assistance to improve the well-being and social and psychological functioning of children and adults.",
  },
  {
    code: "1.B.3.aa",
    name: "Health Care Service",
    description:
      "Work involves providing health care services to individuals to include the diagnosis, prevention, or treatment of diseases and other forms of illness or impairment.",
  },
  {
    code: "1.B.3.ab",
    name: "Religious Activities",
    description:
      "Work involves conducting religious worship, leading a church or other religious group, and offering moral guidance associated with beliefs and practices of a religious faith.",
  },
  {
    code: "1.B.3.ac",
    name: "Personal Service",
    description:
      "Work involves providing personal services to individuals in need of non-medical assistance such as helping arrange or plan for travel, meals, or events.",
  },
  {
    code: "1.B.3.ad",
    name: "Professional Advising",
    description:
      "Work involves providing expert advice, coaching, and counseling on topics such as careers, educational opportunities, and educational and professional development.",
  },
  {
    code: "1.B.3.ae",
    name: "Business Initiatives",
    description:
      "Work involves creating strategic plans or taking actions to expand an organization's business or market share.",
  },
  {
    code: "1.B.3.af",
    name: "Sales",
    description: "Work involves selling goods or services.",
  },
  {
    code: "1.B.3.ag",
    name: "Marketing/Advertising",
    description:
      "Work involves promoting or creating a public image for products, services, or organizations to attract interest, engagement, or sales.",
  },
  {
    code: "1.B.3.ah",
    name: "Finance",
    description:
      "Work involves directing and managing financial activities, such as planning and investments for an individual or organization to generate income.",
  },
  {
    code: "1.B.3.ai",
    name: "Accounting",
    description:
      "Work involves examining, analyzing, and interpreting accounting records for financial statements, or maintaining, auditing, or evaluating records and accounts.",
  },
  {
    code: "1.B.3.aj",
    name: "Human Resources",
    description:
      "Work involves recruiting, selecting, and training job applicants, maintaining employee personnel records, administering compensation and employee-benefit programs, and conducting employee performance reviews.",
  },
  {
    code: "1.B.3.ak",
    name: "Office Work",
    description:
      "Work involves clerical and administrative tasks for an organization such as answering phones, bookkeeping, updating records, scheduling appointments or meetings, and editing of documents and files.",
  },
  {
    code: "1.B.3.al",
    name: "Management/Administration",
    description:
      "Work involves planning, directing, or coordinating the daily operations of an organization, and overseeing personnel, business, or administrative services.",
  },
  {
    code: "1.B.3.am",
    name: "Public Speaking",
    description:
      "Work involves speaking before an audience to educate, entertain, or influence the listeners.",
  },
  {
    code: "1.B.3.an",
    name: "Politics",
    description:
      "Work involves engaging in political activities to influence government policy.",
  },
  {
    code: "1.B.3.ao",
    name: "Law",
    description: "Work involves studying and applying legal knowledge.",
  },
  {
    code: "1.C",
    name: "Work Styles",
    description:
      "Personal characteristics that can affect how well someone performs a job.",
  },
  {
    code: "1.C.1",
    name: "Achievement Orientation",
    description:
      "Job requires personal goal setting, trying to succeed at those goals, and striving to be competent in own work",
  },
  {
    code: "1.C.1.a",
    name: "Achievement/Effort",
    description:
      "Job requires establishing and maintaining personally challenging achievement goals and exerting effort toward mastering tasks.",
  },
  {
    code: "1.C.1.b",
    name: "Persistence",
    description: "Job requires persistence in the face of obstacles.",
  },
  {
    code: "1.C.1.c",
    name: "Initiative",
    description:
      "Job requires a willingness to take on responsibilities and challenges.",
  },
  {
    code: "1.C.2",
    name: "Social Influence",
    description:
      "Job requires having an impact on others in the organization, and displaying energy and leadership",
  },
  {
    code: "1.C.2.b",
    name: "Leadership",
    description:
      "Job requires a willingness to lead, take charge, and offer opinions and direction.",
  },
  {
    code: "1.C.3",
    name: "Interpersonal Orientation",
    description:
      "Job requires being pleasant, cooperative, sensitive to others, easy to get along with, and having a preference for associating with other organization members",
  },
  {
    code: "1.C.3.a",
    name: "Cooperation",
    description:
      "Job requires being pleasant with others on the job and displaying a good-natured, cooperative attitude.",
  },
  {
    code: "1.C.3.b",
    name: "Concern for Others",
    description:
      "Job requires being sensitive to others' needs and feelings and being understanding and helpful on the job.",
  },
  {
    code: "1.C.3.c",
    name: "Social Orientation",
    description:
      "Job requires preferring to work with others rather than alone, and being personally connected with others on the job.",
  },
  {
    code: "1.C.4",
    name: "Adjustment",
    description:
      "Job requires maturity, poise, flexibility, and restraint to cope with pressure, stress, criticism, setbacks, personal and work-related problems, etc.",
  },
  {
    code: "1.C.4.a",
    name: "Self-Control",
    description:
      "Job requires maintaining composure, keeping emotions in check, controlling anger, and avoiding aggressive behavior, even in very difficult situations.",
  },
  {
    code: "1.C.4.b",
    name: "Stress Tolerance",
    description:
      "Job requires accepting criticism and dealing calmly and effectively with high-stress situations.",
  },
  {
    code: "1.C.4.c",
    name: "Adaptability/Flexibility",
    description:
      "Job requires being open to change (positive or negative) and to considerable variety in the workplace.",
  },
  {
    code: "1.C.5",
    name: "Conscientiousness",
    description:
      "Job requires dependability, commitment to doing the job correctly and carefully, and being trustworthy, accountable, and attentive to details",
  },
  {
    code: "1.C.5.a",
    name: "Dependability",
    description:
      "Job requires being reliable, responsible, and dependable, and fulfilling obligations.",
  },
  {
    code: "1.C.5.b",
    name: "Attention to Detail",
    description:
      "Job requires being careful about detail and thorough in completing work tasks.",
  },
  {
    code: "1.C.5.c",
    name: "Integrity",
    description: "Job requires being honest and ethical.",
  },
  {
    code: "1.C.6",
    name: "Independence",
    description:
      "Job requires developing one's own ways of doing things, guiding oneself with little or no supervision, and depending on oneself to get things done.",
  },
  {
    code: "1.C.7",
    name: "Practical Intelligence",
    description:
      "Job requires generating useful ideas and thinking things through logically",
  },
  {
    code: "1.C.7.a",
    name: "Innovation",
    description:
      "Job requires creativity and alternative thinking to develop new ideas for and answers to work-related problems.",
  },
  {
    code: "1.C.7.b",
    name: "Analytical Thinking",
    description:
      "Job requires analyzing information and using logic to address work-related issues and problems.",
  },
  {
    code: "2",
    name: "Worker Requirements",
    description: "Worker Requirements",
  },
  {
    code: "2.A",
    name: "Basic Skills",
    description:
      "Developed capacities that facilitate learning or the more rapid acquisition of knowledge",
  },
  {
    code: "2.A.1",
    name: "Content",
    description:
      "Background structures needed to work with and acquire more specific skills in a variety of different domains",
  },
  {
    code: "2.A.1.a",
    name: "Reading Comprehension",
    description:
      "Understanding written sentences and paragraphs in work-related documents.",
  },
  {
    code: "2.A.1.b",
    name: "Active Listening",
    description:
      "Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
  },
  {
    code: "2.A.1.c",
    name: "Writing",
    description:
      "Communicating effectively in writing as appropriate for the needs of the audience.",
  },
  {
    code: "2.A.1.d",
    name: "Speaking",
    description: "Talking to others to convey information effectively.",
  },
  {
    code: "2.A.1.e",
    name: "Mathematics",
    description: "Using mathematics to solve problems.",
  },
  {
    code: "2.A.1.f",
    name: "Science",
    description: "Using scientific rules and methods to solve problems.",
  },
  {
    code: "2.A.2",
    name: "Process",
    description:
      "Procedures that contribute to the more rapid acquisition of knowledge and skill across a variety of domains",
  },
  {
    code: "2.A.2.a",
    name: "Critical Thinking",
    description:
      "Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
  },
  {
    code: "2.A.2.b",
    name: "Active Learning",
    description:
      "Understanding the implications of new information for both current and future problem-solving and decision-making.",
  },
  {
    code: "2.A.2.c",
    name: "Learning Strategies",
    description:
      "Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
  },
  {
    code: "2.A.2.d",
    name: "Monitoring",
    description:
      "Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
  },
  {
    code: "2.B",
    name: "Cross-Functional Skills",
    description:
      "Developed capacities that facilitate performance of activities that occur across jobs",
  },
  {
    code: "2.B.1",
    name: "Social Skills",
    description:
      "Developed capacities used to work with people to achieve goals",
  },
  {
    code: "2.B.1.a",
    name: "Social Perceptiveness",
    description:
      "Being aware of others' reactions and understanding why they react as they do.",
  },
  {
    code: "2.B.1.b",
    name: "Coordination",
    description: "Adjusting actions in relation to others' actions.",
  },
  {
    code: "2.B.1.c",
    name: "Persuasion",
    description: "Persuading others to change their minds or behavior.",
  },
  {
    code: "2.B.1.d",
    name: "Negotiation",
    description:
      "Bringing others together and trying to reconcile differences.",
  },
  {
    code: "2.B.1.e",
    name: "Instructing",
    description: "Teaching others how to do something.",
  },
  {
    code: "2.B.1.f",
    name: "Service Orientation",
    description: "Actively looking for ways to help people.",
  },
  {
    code: "2.B.2",
    name: "Complex Problem Solving Skills",
    description:
      "Developed capacities used to solve novel, ill-defined problems in complex, real-world settings",
  },
  {
    code: "2.B.2.i",
    name: "Complex Problem Solving",
    description:
      "Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
  },
  {
    code: "2.B.3",
    name: "Technical Skills",
    description:
      "Developed capacities used to design, set-up, operate, and correct malfunctions involving application of machines or technological systems",
  },
  {
    code: "2.B.3.a",
    name: "Operations Analysis",
    description: "Analyzing needs and product requirements to create a design.",
  },
  {
    code: "2.B.3.b",
    name: "Technology Design",
    description:
      "Generating or adapting equipment and technology to serve user needs.",
  },
  {
    code: "2.B.3.c",
    name: "Equipment Selection",
    description:
      "Determining the kind of tools and equipment needed to do a job.",
  },
  {
    code: "2.B.3.d",
    name: "Installation",
    description:
      "Installing equipment, machines, wiring, or programs to meet specifications.",
  },
  {
    code: "2.B.3.e",
    name: "Programming",
    description: "Writing computer programs for various purposes.",
  },
  {
    code: "2.B.3.g",
    name: "Operations Monitoring",
    description:
      "Watching gauges, dials, or other indicators to make sure a machine is working properly.",
  },
  {
    code: "2.B.3.h",
    name: "Operation and Control",
    description: "Controlling operations of equipment or systems.",
  },
  {
    code: "2.B.3.j",
    name: "Equipment Maintenance",
    description:
      "Performing routine maintenance on equipment and determining when and what kind of maintenance is needed.",
  },
  {
    code: "2.B.3.k",
    name: "Troubleshooting",
    description:
      "Determining causes of operating errors and deciding what to do about it.",
  },
  {
    code: "2.B.3.l",
    name: "Repairing",
    description: "Repairing machines or systems using the needed tools.",
  },
  {
    code: "2.B.3.m",
    name: "Quality Control Analysis",
    description:
      "Conducting tests and inspections of products, services, or processes to evaluate quality or performance.",
  },
  {
    code: "2.B.4",
    name: "Systems Skills",
    description:
      "Developed capacities used to understand, monitor, and improve socio-technical systems",
  },
  {
    code: "2.B.4.e",
    name: "Judgment and Decision Making",
    description:
      "Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
  },
  {
    code: "2.B.4.g",
    name: "Systems Analysis",
    description:
      "Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes.",
  },
  {
    code: "2.B.4.h",
    name: "Systems Evaluation",
    description:
      "Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system.",
  },
  {
    code: "2.B.5",
    name: "Resource Management Skills",
    description: "Developed capacities used to allocate resources efficiently",
  },
  {
    code: "2.B.5.a",
    name: "Time Management",
    description: "Managing one's own time and the time of others.",
  },
  {
    code: "2.B.5.b",
    name: "Management of Financial Resources",
    description:
      "Determining how money will be spent to get the work done, and accounting for these expenditures.",
  },
  {
    code: "2.B.5.c",
    name: "Management of Material Resources",
    description:
      "Obtaining and seeing to the appropriate use of equipment, facilities, and materials needed to do certain work.",
  },
  {
    code: "2.B.5.d",
    name: "Management of Personnel Resources",
    description:
      "Motivating, developing, and directing people as they work, identifying the best people for the job.",
  },
  {
    code: "2.C",
    name: "Knowledge",
    description:
      "Organized sets of principles and facts applying in general domains",
  },
  {
    code: "2.C.1",
    name: "Business and Management",
    description:
      "Knowledge of principles and facts related to business administration and accounting, human and material resource management in organizations, sales and marketing, economics, and office information and organizing systems",
  },
  {
    code: "2.C.1.a",
    name: "Administration and Management",
    description:
      "Knowledge of business and management principles involved in strategic planning, resource allocation, human resources modeling, leadership technique, production methods, and coordination of people and resources.",
  },
  {
    code: "2.C.1.b",
    name: "Administrative",
    description:
      "Knowledge of administrative and office procedures and systems such as word processing, managing files and records, stenography and transcription, designing forms, and workplace terminology.",
  },
  {
    code: "2.C.1.c",
    name: "Economics and Accounting",
    description:
      "Knowledge of economic and accounting principles and practices, the financial markets, banking, and the analysis and reporting of financial data.",
  },
  {
    code: "2.C.1.d",
    name: "Sales and Marketing",
    description:
      "Knowledge of principles and methods for showing, promoting, and selling products or services. This includes marketing strategy and tactics, product demonstration, sales techniques, and sales control systems.",
  },
  {
    code: "2.C.1.e",
    name: "Customer and Personal Service",
    description:
      "Knowledge of principles and processes for providing customer and personal services. This includes customer needs assessment, meeting quality standards for services, and evaluation of customer satisfaction.",
  },
  {
    code: "2.C.1.f",
    name: "Personnel and Human Resources",
    description:
      "Knowledge of principles and procedures for personnel recruitment, selection, training, compensation and benefits, labor relations and negotiation, and personnel information systems.",
  },
  {
    code: "2.C.2",
    name: "Manufacturing and Production",
    description:
      "Knowledge of principles and facts related to the production, processing, storage, and distribution of manufactured and agricultural goods",
  },
  {
    code: "2.C.2.a",
    name: "Production and Processing",
    description:
      "Knowledge of raw materials, production processes, quality control, costs, and other techniques for maximizing the effective manufacture and distribution of goods.",
  },
  {
    code: "2.C.2.b",
    name: "Food Production",
    description:
      "Knowledge of techniques and equipment for planting, growing, and harvesting food products (both plant and animal) for consumption, including storage/handling techniques.",
  },
  {
    code: "2.C.3",
    name: "Engineering and Technology",
    description:
      "Knowledge of the design, development, and application of technology for specific purposes.",
  },
  {
    code: "2.C.3.a",
    name: "Computers and Electronics",
    description:
      "Knowledge of circuit boards, processors, chips, electronic equipment, and computer hardware and software, including applications and programming.",
  },
  {
    code: "2.C.3.b",
    name: "Engineering and Technology",
    description:
      "Knowledge of the practical application of engineering science and technology. This includes applying principles, techniques, procedures, and equipment to the design and production of various goods and services.",
  },
  {
    code: "2.C.3.c",
    name: "Design",
    description:
      "Knowledge of design techniques, tools, and principles involved in production of precision technical plans, blueprints, drawings, and models.",
  },
  {
    code: "2.C.3.d",
    name: "Building and Construction",
    description:
      "Knowledge of materials, methods, and the tools involved in the construction or repair of houses, buildings, or other structures such as highways and roads.",
  },
  {
    code: "2.C.3.e",
    name: "Mechanical",
    description:
      "Knowledge of machines and tools, including their designs, uses, repair, and maintenance.",
  },
  {
    code: "2.C.4",
    name: "Mathematics and Science",
    description:
      "Knowledge of the history, theories, methods, and applications of the physical, biological, social, mathematical, and geography",
  },
  {
    code: "2.C.4.a",
    name: "Mathematics",
    description:
      "Knowledge of arithmetic, algebra, geometry, calculus, statistics, and their applications.",
  },
  {
    code: "2.C.4.b",
    name: "Physics",
    description:
      "Knowledge and prediction of physical principles, laws, their interrelationships, and applications to understanding fluid, material, and atmospheric dynamics, and mechanical, electrical, atomic and sub-atomic structures and processes.",
  },
  {
    code: "2.C.4.c",
    name: "Chemistry",
    description:
      "Knowledge of the chemical composition, structure, and properties of substances and of the chemical processes and transformations that they undergo. This includes uses of chemicals and their interactions, danger signs, production techniques, and disposal methods.",
  },
  {
    code: "2.C.4.d",
    name: "Biology",
    description:
      "Knowledge of plant and animal organisms, their tissues, cells, functions, interdependencies, and interactions with each other and the environment.",
  },
  {
    code: "2.C.4.e",
    name: "Psychology",
    description:
      "Knowledge of human behavior and performance; individual differences in ability, personality, and interests; learning and motivation; psychological research methods; and the assessment and treatment of behavioral and affective disorders.",
  },
  {
    code: "2.C.4.f",
    name: "Sociology and Anthropology",
    description:
      "Knowledge of group behavior and dynamics, societal trends and influences, human migrations, ethnicity, cultures, and their history and origins.",
  },
  {
    code: "2.C.4.g",
    name: "Geography",
    description:
      "Knowledge of principles and methods for describing the features of land, sea, and air masses, including their physical characteristics, locations, interrelationships, and distribution of plant, animal, and human life.",
  },
  {
    code: "2.C.5",
    name: "Health Services",
    description:
      "Knowledge of principles and facts regarding diagnosing, curing, and preventing disease, and improving and preserving physical and mental health and well-being",
  },
  {
    code: "2.C.5.a",
    name: "Medicine and Dentistry",
    description:
      "Knowledge of the information and techniques needed to diagnose and treat human injuries, diseases, and deformities. This includes symptoms, treatment alternatives, drug properties and interactions, and preventive health-care measures.",
  },
  {
    code: "2.C.5.b",
    name: "Therapy and Counseling",
    description:
      "Knowledge of principles, methods, and procedures for diagnosis, treatment, and rehabilitation of physical and mental dysfunctions, and for career counseling and guidance.",
  },
  {
    code: "2.C.6",
    name: "Education and Training",
    description:
      "Knowledge of principles and methods for curriculum and training design, teaching and instruction for individuals and groups, and the measurement of training effects.",
  },
  {
    code: "2.C.7",
    name: "Arts and Humanities",
    description:
      "Knowledge of facts and principles related to the branches of learning concerned with human thought, language, and the arts.",
  },
  {
    code: "2.C.7.a",
    name: "English Language",
    description:
      "Knowledge of the structure and content of the English language including the meaning and spelling of words, rules of composition, and grammar.",
  },
  {
    code: "2.C.7.b",
    name: "Foreign Language",
    description:
      "Knowledge of the structure and content of a foreign (non-English) language including the meaning and spelling of words, rules of composition and grammar, and pronunciation.",
  },
  {
    code: "2.C.7.c",
    name: "Fine Arts",
    description:
      "Knowledge of the theory and techniques required to compose, produce, and perform works of music, dance, visual arts, drama, and sculpture.",
  },
  {
    code: "2.C.7.d",
    name: "History and Archeology",
    description:
      "Knowledge of historical events and their causes, indicators, and effects on civilizations and cultures.",
  },
  {
    code: "2.C.7.e",
    name: "Philosophy and Theology",
    description:
      "Knowledge of different philosophical systems and religions. This includes their basic principles, values, ethics, ways of thinking, customs, practices, and their impact on human culture.",
  },
  {
    code: "2.C.8",
    name: "Law and Public Safety",
    description:
      "Knowledge of regulations and methods for maintaining people and property free from danger, injury, or damage; the rules of public conduct established and enforced by legislation, and the political process establishing such rules.",
  },
  {
    code: "2.C.8.a",
    name: "Public Safety and Security",
    description:
      "Knowledge of relevant equipment, policies, procedures, and strategies to promote effective local, state, or national security operations for the protection of people, data, property, and institutions.",
  },
  {
    code: "2.C.8.b",
    name: "Law and Government",
    description:
      "Knowledge of laws, legal codes, court procedures, precedents, government regulations, executive orders, agency rules, and the democratic political process.",
  },
  {
    code: "2.C.9",
    name: "Communications",
    description: "Knowledge of the science and art of delivering information",
  },
  {
    code: "2.C.9.a",
    name: "Telecommunications",
    description:
      "Knowledge of transmission, broadcasting, switching, control, and operation of telecommunications systems.",
  },
  {
    code: "2.C.9.b",
    name: "Communications and Media",
    description:
      "Knowledge of media production, communication, and dissemination techniques and methods. This includes alternative ways to inform and entertain via written, oral, and visual media.",
  },
  {
    code: "2.C.10",
    name: "Transportation",
    description:
      "Knowledge of principles and methods for moving people or goods by air, rail, sea, or road, including the relative costs and benefits.",
  },
  {
    code: "2.D",
    name: "Education",
    description: "Prior educational experience required to perform in a job",
  },
  {
    code: "2.D.1",
    name: "Required Level of Education",
    description: "The level of education required to perform a job.",
  },
  {
    code: "2.D.2",
    name: "Instructional Program Required",
    description: "The instructional program required for this job",
  },
  {
    code: "2.D.3",
    name: "Education Level in Specific Subjects",
    description:
      "The amount of education required in 15 subject areas to perform in a job. Subject areas cover most of the courses that occur in high school, junior college, college undergraduate degree programs, and other education and training programs",
  },
  {
    code: "2.D.3.a",
    name: "Technical Vocational",
    description:
      "Courses focus on non-business technical skills, such as Agriculture, Industrial Arts, Automobile and Shop, and Electronics",
  },
  {
    code: "2.D.3.b",
    name: "Business Vocational",
    description:
      "Courses focus on basic business skills, such as Word Processing, Filing, Bookkeeping/Basic Accounting",
  },
  {
    code: "2.D.3.c",
    name: "English/language Arts",
    description:
      "Courses focus on reading, interpretation, and writing, such as Literature, Composition, Journalism, and Creative Writing",
  },
  {
    code: "2.D.3.d",
    name: "Oral Communication",
    description:
      "Courses focus on oral communication and speech, such as Oral Communication, Speech, and Interpersonal Communication",
  },
  {
    code: "2.D.3.e",
    name: "Languages",
    description:
      "Courses focus on reading, writing, and/or speaking languages other than English, such as French, Chinese, German, Japanese, Latin, Russian, and Spanish",
  },
  {
    code: "2.D.3.f",
    name: "Basic Math",
    description:
      "Courses focus on basic and applied math, such as General Math and Business Math",
  },
  {
    code: "2.D.3.g",
    name: "Advanced Math",
    description:
      "Courses focus on advanced topics in math, such as Algebra, Geometry, Calculus, and Statistics",
  },
  {
    code: "2.D.3.h",
    name: "Physical Science",
    description:
      "Courses focus on the study of matter and/or energy, such as Physics, Chemistry, and Astronomy",
  },
  {
    code: "2.D.3.i",
    name: "Computer Science",
    description:
      "Courses focus on computers and their uses, such as Programming, Information Systems Management, and Software Applications",
  },
  {
    code: "2.D.3.j",
    name: "Biological Science",
    description:
      "Courses focus on the study of life and living beings, such as life science, biology, anatomy and physiology",
  },
  {
    code: "2.D.3.k",
    name: "Applied Science",
    description:
      "Courses focus on the application of science, such as Engineering, Health, and Medicine",
  },
  {
    code: "2.D.3.l",
    name: "Social Science",
    description:
      "Courses focus on the behavioral sciences, such as Social Studies, Economics, History, Psychology, and Sociology",
  },
  {
    code: "2.D.3.m",
    name: "Arts",
    description:
      "Courses focus on visual and performing arts, such as Arts and Crafts, Music, Painting, Sculpture, Theater, and Voice",
  },
  {
    code: "2.D.3.n",
    name: "Humanities",
    description:
      "Courses focus on cultural and philosophical aspects of humans, such as Minority Studies, Philosophy, and Religion",
  },
  {
    code: "2.D.3.o",
    name: "Physical Education",
    description:
      "Courses focus on physical fitness and sports, such as Aerobics, Jogging, Weight Lifting, and Specific Sports",
  },
] as const;
