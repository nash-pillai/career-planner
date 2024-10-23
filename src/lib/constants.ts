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
  "Neutral",
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
] as const;

export const pathways = [
  "CTE Pathway",
  "Project Lead The Way (PLTW)",
  "Science Research Program",
] as const;

export const educationTags = [
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
