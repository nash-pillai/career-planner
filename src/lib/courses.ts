import { Course } from "types";

export const courses = [
  {
    department: "Business",
    course_name: "College and Career Planning",
    course_code: "0700",
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["CTE Pathway"],
    description:
      "College and Career Planning is one of our required courses for the CTE pathway. It is designed to give you the big picture about where your life might go in the future. You take personality and interest tests to help you make an informed decision about a good field to pursue. You look at colleges and student funding, and you plan a budget for your first shot at living on your own. You explore the basics of employment law, and consider the differences in working in different types of organizations: the military, government agencies, big business, small business, entrepreneurial endeavors and trade unions. You consider the management styles you are most likely to encounter in different working environments. Finally, you set personal, professional, and financial goals for your 60-year-old self.",
  },
  {
    department: "Business",
    course_name: "Microsoft Office with Keyboarding",
    course_code: "B545",
    prerequisites: [],
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,

    pathways: ["CTE Pathway"],
    description:
      "This ½ credit course offers you the opportunity to improve your typing skills, and use Microsoft’s Suite of Office Products in a more sophisticated manner. You will format documents, spreadsheets, and workbooks, including headers, footers, picture formatting, inserting tables, cover pages, works cited lists. You will collaborate with other students and use the editing features of Word, Excel, and PowerPoint. You will write a resume and cover letter using templates and learn the basics of Excel including creating formulas, graphing, sorting, filtering, and conditional formatting. You will also add sophistication to presentations with master slides, animations, and transitions.",
  },
  {
    department: "Business",
    course_name: "Money Management",
    course_code: "B650",
    prerequisites: [],
    eligible_grades: [10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,

    pathways: ["CTE Pathway"],
    description:
      "Every adult should have a basic grasp of finances! As you prepare to navigate through life, this course helps prepare you to be an educated consumer. Topics include emergency funds, budgeting, goal setting, paying for college, avoiding debt, insurance, investing, and retirement planning. Students have the opportunity to earn W!se Certification in financial literacy. This course is core to the CTE pathway.",
  },
  {
    department: "Business",
    course_name: "Business Ownership",
    course_code: "B653",
    prerequisites: [],
    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,

    pathways: ["CTE Pathway"],
    description:
      "Business Ownership is a survey course designed around the idea of running a small business. You explore entrepreneurship through economics, marketing, sales, accounting, finance, human resources, contract law, patents, and trademarks. The course includes public speaking coaching and culminates with a pitch project similar to Shark Tank.",
  },
  {
    department: "Business",
    course_name: "College Virtual Enterprise I and II",
    course_code: "B800/B801",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["None (Business Ownership or Accounting is suggested)"],
    pathways: ["Optional for CTE Pathway"],
    description:
      "This college-level course provides students the opportunity to run a virtual business that sells products/services to other virtual businesses globally. Students participate in business operations, competitions, and personal finance management. College credits may be available through Dutchess Community College.",
  },
  {
    department: "Business",
    course_name: "Work-Based Learning (Business Co-Op)",
    course_code: "B770",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Previous CTE Course Required"],
    pathways: ["CTE Pathway"],
    description:
      "Work-Based Learning (Business Co-Op) provides students the opportunity to work and receive high school credit while exploring career options. Students reflect on business courses and apply them in real-world work experiences, submitting journals and pay stubs for credit. This course can be taken in both junior and senior years.",
  },
  {
    department: "Business",
    course_name: "Business Law",
    course_code: "B610",
    prerequisites: [],
    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,

    pathways: [],
    description:
      "Business Law provides an understanding of legal rights and responsibilities in various situations, including school, car purchases, and courtroom proceedings. This course is a foundation for other business courses like Business Ownership and Sports & Entertainment Law.",
  },
  {
    department: "Business",
    course_name: "Sports & Entertainment Law",
    course_code: "B625",
    prerequisites: [],
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,

    pathways: [],
    description:
      "Do you like to prove a point? Are you the person who enjoys defending others? Maybe you are a huge sports fan, but do not consider yourself an athlete. Or perhaps you'd prefer to explore how the law impacts the Entertainment industry. No problem! This course will explore how the law impacts sports and entertainment. Find out what power the NCAA has over student-athletes and why players are in a union. Learn why individuals in the movie, television, music, or theater industries need to know about the law. You will study legal cases related to these industries. You will have the opportunity to review areas of law that include contracts, labor law, collective bargaining, discrimination, employment, crimes, constitutional and common law, discrimination, securities, copyright infringement, the right of privacy, libel, slander, defamation, advertising, tax, plus many more. See how you can feed your interest to work in the Sports or Entertainment industry from the legal side.",
  },
  {
    department: "Business",
    course_name: "Computer Game Design",
    course_code: "B680",
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Plug in your imagination for this ½ credit course in computer gaming. All types of students are encouraged to learn the basics of coding in a social and creative environment. Using drag and drop block code in Scratch, you will work individually and in teams to learn how to use loops, conditionals, variables, and functions to make games. You will even have a chance to use graphic software to design your own playing pieces and take a turn programming your own background music. This course is a great choice for anyone considering a career in Computer Science, Business Information Systems, or any STEM field. Most STEM majors require one or more courses in computer science. Students who have had exposure to coding in high school do significantly better in CS courses in college. By taking this in high school, you get to learn the basics of computational thinking in a low-stakes environment where the learning feels like fun.",
  },
  {
    department: "Business",
    course_name: "Mobile App Development",
    course_code: "B685",
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Computer Game Design (or Proficiency on local exam)"],
    pathways: [],
    description:
      "This is a course for creative people. This ½ credit course is offered in the spring after the prerequisite Computer Game Design. It uses drag and drop blocks to code, but moves from games into business applications. MIT App Inventor offers more sophisticated logic and gives you the chance to use mobile features like GPS, the accelerometer, text messaging, and voice recognition in your apps. This course is a great choice for anyone considering a career in Computer Science, Business Information Systems, or any STEM field. Most STEM majors require one or more courses in computer science. Students who have had exposure to coding in high school do significantly better in CS courses in college. By taking this course in high school, you get to learn the basics of computational thinking in a low-stakes environment where the learning feels like fun. Bring your creativity to make it beautiful, make it sing, make it dance, and maybe even make some money.",
  },
  {
    department: "Business",
    course_name: "Financial Math",
    course_code: "B415",
    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Two Years of Math"],
    pathways: [],
    description:
      "Does hearing the word math send shivers down your spine? Do you ever wonder how you will use the math taught in class? Your wondering days are over! This class will teach you what you need to know to master the financial challenges you will face after graduation. From calculating the cost of a car loan to determining which credit card gives you the best options, these topics are real-world, every day! Find out how much sales tax you need to pay before you make a purchase. Financial Math is the course that will help build your understanding of the mathematical practices to solve problems found in the real-world, including banking, finance, salary and income, payroll, loans, and insurance. For those not interested in taking Algebra 2, this course satisfies the 3rd year of Math required for graduation.",
  },
  {
    department: "Business",
    course_name: "College Accounting 104",
    course_code: "B652",
    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [],
    pathways: [],
    description:
      "Learn the language of money. Many consider accounting to be the best route to a successful career in business because accounting has always been considered the language and basic tool of every business. Learn to analyze, record, classify, summarize, and interpret accounting data for all types of businesses. Accounting is not a math course, but a study of money. We will discuss where it comes from, where it goes, and how much it has changed. Enrolled students are eligible for 3 DCC credits for an additional fee payable directly to the College.",
  },
  {
    department: "Business",
    course_name: "College Economics 105",
    course_code: "B656",
    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.1,
    prerequisites: ["3 social studies credits"],
    pathways: [],
    description:
      "This course satisfies the graduation requirement of a ½ credit in economics and may be taken instead of D655- Economics. This course emphasizes how economics affects you right now and provides insights into why all entrepreneurs want to come to America. Learn critical communication skills, including how to debate important economic topics that are valuable, regardless of your career path. You will even have the opportunity to learn how to make money in the stock market! Enrolled students are eligible for 3 DCC credits for an additional fee payable directly to the College.",
  },
  {
    department: "Business",
    course_name: "Sports and Entertainment Marketing",
    course_code: "B553",
    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Do you know how much money is generated in the Sports & Entertainment Industries, and the economic impact they have on the local, state, national, and global economies? You will learn how to stay “plugged-in” to current marketing trends that are constantly shifting to the latest platforms, and how consumers, particularly younger viewers, watch sports and entertainment today. Examine how sports and entertainment fans are demanding a much more engaging and realistically immersive experience than ever before! Why is it important for marketers to address the challenge that younger “millennial” audiences are watching sports and entertainment on new platforms, particularly social networks? Why are marketers allowing fans to have an insider’s view and be closer to the action than ever before?",
  },
  {
    department: "Business",
    course_name: "Diversified Work-Based Learning (Diversified Co-Op)",
    course_code: "B700",
    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "If you are a senior and have not taken a business elective but are interested in earning one credit while working, consider Diversified Work-Based Learning (Diversified Co-Op)! Gain valuable work experience that can launch your career. Not sure what your career plan is after high school? The work experience combined with online classroom activities will allow you to connect what you are learning in the classroom to the skills required for success in today’s workplace. You will earn a credit toward graduation too! Students must complete assignments virtually to help prepare them for employment. Students are required to be employed, and submit reflective journals and copies of their pay stubs to the supervisor.",
  },
  {
    department: "Business",
    course_name: "Ethics and Decision Making",
    course_code: "B640",
    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Ethics & Decision Making is the study of how to make decisions. Every day we are faced with numerous decisions. Some seem easy and some difficult. Every decision requires thought: but many times we think of our own short term benefit. Students examine what they believe, and why they believe it, by actively participating in solution planning, debates, and case studies. Ethics & Decision Making focuses not on “right versus wrong”, but on thought development and the process of making a decision. Are we thinking of others? Our family? Our school? Our community? Our environment? For today, and beyond? Elements of interest to students include, but are not limited to: Personal Law, Consumer Rights, Individual Rights, Education, Medicine, Business Decisions, Animal Rights, Economics & Poverty, and the Environment.",
  },
  {
    department: "Business",
    course_name: "AP Computer Science Principles",
    course_code: "B690",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Completion of Geometry with a grade of 80+ or any student who has earned a 90 or higher in Computer Programming, Computer Game Design, Mobile App Development, or Web Design.",
    ],
    pathways: ["CTE pathway in Computer Information Systems"],
    description:
      "Students taking this college course do the type of work done by many STEM professionals. Students build mobile apps and work through activities to improve their writing, communication, collaboration, and creativity skills. Computer Science jobs are projected to make up 70% of all new STEM work in the next decade. The need for professionals  with coding skills can be found in every size business, in every industry, in every state. The need is driven by businesses’ desire to produce mobile apps and leverage near-ubiquitous wireless Internet to build out the Internet of Things (IoT). Topics Include:\n• Coding: emphasis on project management of\nmobile apps for a defined customer\n• Cryptography and Cybersecurity\n• Data - binary/hex conversions, data storage and transmission protocols, data visualization ofpublicly available big data\n• Ethics - exploring the big questions of the Information Age\nThis is the capstone course for the CTE pathway in Computer Information Systems. Those seeking more instruction in pure coding might enjoy taking AP CSA - Java in the Math department after this course. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. The exam is 40% Mobile App developed in advance, and 60% multiple choice in May.",
  },
  {
    department: "English",
    course_name: "English 9",
    course_code: "E341",
    eligible_grades: [9],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "The first year of high school is an opportunity for students to begin the journey that will lead them to who they become as adults in our world. In English 9, students will read a variety of fiction and non-fiction texts in order to explore ideas and concepts dealing with identity, self-discovery, personal journeys, power struggles, conformity and nonconformity, and digital citizenship. Students will demonstrate critical thinking, learn how to identify various forms of author’s craft to aid their analyses of texts, and express their ideas through writing and speaking.",
  },
  {
    department: "English",
    course_name: "English 9 Honors",
    course_code: "E361",
    eligible_grades: [9],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Completion of ELA 8 Honors with a final average of at least 85% and recommendation of ELA 8th grade teacher or completion of ELA 8 with a final average of at least 90% and recommendation of ELA 8th grade teacher with department approval.",
    ],
    pathways: [],
    description:
      "Honors classes generally incorporate more reading, writing and discussion and at a higher level, and use more challenging text books and other materials.",
  },
  {
    department: "English",
    course_name: "English 9 Literacy Lab",
    course_code: "E386",
    eligible_grades: [9],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [
      "Students assigned based on Grade 8 ELA State Exam Score and Grade 8 ELA class average as well as teacher recommendation.",
    ],
    pathways: [],
    description:
      "This course provides support in ELA skills and strategies in order to meet NY State Standards in English Language Arts. A variety of texts will be used to further develop skills and strategies.",
  },
  {
    department: "English",
    course_name: "English 10",
    course_code: "E441",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Pass English 9"],
    pathways: [],
    description:
      "Second-year high school students will continue to explore their emerging independence that they began to cultivate on their ninth grade journey. In English 10, through a variety of genres, students will expand their world of reading and writing through more complex and diverse topics, such as understanding contemporary issues, contemplating moral and ethical questions, and coming to terms with difficult historical moments. In addition to adding new and more sophisticated writing skills involving fiction, students will involve themselves with more argument and opinion writing as they begin to find their voices.",
  },
  {
    department: "English",
    course_name: "English 10 Honors",
    course_code: "E461",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Passed English 9 Honors with a grade of 85% or higher and teacher recommendation or completion of Regents 9 with a final average of at least 90% and recommendation of teacher with department approval.",
    ],
    pathways: [],
    description:
      "Honors classes generally incorporate more reading, writing and discussion and at a higher level, and use more challenging text books and other materials.",
  },
  {
    department: "English",
    course_name: "English Language Arts Skills and Interventions I",
    course_code: "E640",
    eligible_grades: [10],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Must have passed English 9"],
    pathways: [],
    description:
      "These two courses are intended for identified students who need to further develop their literacy skills in order to be successful in their course work. An emphasis will be placed on essential skills and strategies to help students read, write, listen, think, and speak effectively. A variety of texts will be used to further develop students’ skills and strategies.",
  },
  {
    department: "English",
    course_name: "English Language Arts Skills and Interventions II",
    course_code: "E740",
    eligible_grades: [11],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Must have passed English 10"],
    pathways: [],
    description:
      "These two courses are intended for identified students who need to further develop their literacy skills in order to be successful in their course work. An emphasis will be placed on essential skills and strategies to help students read, write, listen, think, and speak effectively. A variety of texts will be used to further develop students’ skills and strategies.",
  },
  {
    department: "English",
    course_name: "English 11 Regents",
    course_code: "E540",

    eligible_grades: [11],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Passed English 10 or English 10 Honors"],
    pathways: [],
    description:
      "While students will spend a good portion of 11th grade English honing the skills they will need to excel on the Regents Examination, they will also have the opportunity to enrich their writing skills as they begin preparing for college-level writing and thinking. Much of the emphasis in English 11 will lie on the canon of American literature while leveling up sophistication in essay writing, developing the ability to write complex thesis statements, developing and supporting more nuanced arguments in writing and in speech, and writing a wide range of pieces: creative, short analysis, five-paragraph essays, research papers, presentations, and other projects.",
  },
  {
    department: "English",
    course_name: "AP Language and Composition",
    course_code: "E563",
    eligible_grades: [11],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Completion of Honors English 10 with final average of at least 92% or teacher recommendation. Students are accepted only by departmental selection and approval.",
    ],
    pathways: [],
    description:
      "Students will learn about the elements of argument and composition as they develop critical reading and writing skills. They will read and analyze nonfiction from various periods and write essays with different aims: for example, to explain an idea, argue a point, or persuade a reader. Students are expected to take the Regents Examination in English in January and the AP exam for the course in May. There is a fee for this exam, which is the responsibility of the student.",
  },
  {
    department: "English",
    course_name: "English 12",
    course_code: "E670",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Pass English 11"],
    pathways: [],
    description:
      "This course will explore the identity of self through the concept of journeys, major cultural events/movements, and an author’s ability to tell a story. Literature and nonfiction works will be analyzed to reveal challenges and how the meeting or succumbing to these challenges shapes one’s identity of self. Emphasis will be placed on cultural factors and how the world community influences its individual inhabitants.",
  },
  {
    department: "English",
    course_name: "AP Literature and Composition",
    course_code: "E681",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Completion of English 11 or English 11AP with an average of at least 92% or teacher recommendation. Students are accepted only by departmental selection and approval.",
    ],
    pathways: [],
    description:
      "This is an introductory college-level literary analysis course. Students cultivate their understanding of literature through reading and analyzing texts while exploring concepts such as character, setting, structure, perspective, figurative language and literary analysis in the context of literary works. Students are expected to take the AP exam in May. There is a fee for the exam, which is the responsibility of the student. NOTE: This course, equivalent in difficulty to a second year college English course, is designed for the exceptional student who wishes to accept the challenge of a college-level literature and writing course.",
  },
  {
    department: "English",
    course_name: "College English I and II",
    course_code: "E662 & E663",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Must have passed English 11 and the English Regents exam with at least 85%.",
      "Students must also have the recommendation of their grade 11 English teacher and/or the approval of the Director of English Language Arts.",
    ],
    pathways: [],
    description:
      "Students will explore principles of college writing, narrative and expository writing, argumentative writing, traditional rhetorical modes, effective composing, revising and editing strategies, MLA conventions, critical reading skills, critical thinking skills, and using language appropriately and imaginatively. Enrolled students are eligible for college credits for an additional fee payable directly to DCC.",
  },
  {
    department: "English",
    course_name: "Art of Film: Elements and Analysis",
    course_code: "E777",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course seeks to empower students to challenge themselves by taking a medium that they are familiar with, while using literary techniques to analyze film. The goal is to derive greater meaning from both the films they watch as well as to more fully realize their potential as thoughtful young members of our society. This course will also expose students to new ideas through the medium of film, to evaluate how these films are effective using devices/elements common to the ELA classroom, and to gain a better understanding of the medium in general. The goal is to use film and nonfiction articles as a way to focus upon and assess students’ critical thinking skills.",
  },
  {
    department: "English",
    course_name: "Literature of Genocide",
    course_code: "E782",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course will deal with the uniqueness and universality of this momentous event in the history of mankind. Participants will study the effect of genocide on the course of humanity during the five subsequent decades. The class will consist of historical readings, fictional accounts, films and guest speakers. There will be a variety of written assignments as well as a research project.",
  },
  {
    department: "English",
    course_name: "Media Writing & Communication",
    course_code: "E738",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course will focus on writing for different types of media including television, film and print. Students will be required to master appropriate speaking techniques and writing styles and apply those to the production of television broadcasts, short films, commercials, and news articles. Participation in various production projects that will necessitate out of class involvement will be required. There will also be several readings by leaders in the field of visual and print media. Students will study media theory, mass communication, media ethics, writing for the camera, broadcast news, and journalistic writing.",
  },
  {
    department: "English",
    course_name: "Monsters and Marvels in Literature",
    course_code: "E732",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Monsters come in all shapes and sizes; they touch every walk of life. Throughout the ages stories of monsters and marvels have captured the imaginations of writers and readers alike, but where do monsters come from? What purpose do they serve? Why does one culture fear one type of monster and another culture, another type? Are monsters projections of our anxieties? More importantly, what exactly makes a monster? This class will examine monsters in classic and contemporary literature, culture, film and art from earliest times to modern times.",
  },
  {
    department: "English",
    course_name: "College Public Speaking",
    course_code: "E664",

    eligible_grades: [12],
    credits: 0.5,
    rank_weighting: 1.1,
    prerequisites: [],
    pathways: [],
    description:
      "Public Speaking challenges students to get over the fear of presentations by simply presenting. If you want to work on your public speaking skills or if you have a fear of public speaking, this is for you. Public speaking is still the number one fear among the American population. Students are required to write and present their presentations on an ongoing basis. This is a course that will take students out of their comfort zones and challenge them in their presentations. Enrolled students are eligible for college credits for an additional fee payable directly to Dutchess Community College.",
  },
  {
    department: "English",
    course_name: "Science Fiction and Popular Culture",
    course_code: "E731",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Even the most perfect world that man can conceive is flawed. Students will explore the definition and characteristics of such dystopias by reading modern and classic sci-fi, investigating theories and cultural allusions behind the works, and analyzing films in the sci-fi genre. In addition, students will analyze what these pieces say about our current society and the future of the human race.",
  },
  {
    department: "English",
    course_name: "Shakespeare",
    course_code: "E733",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is excellent preparation for college English and as a supplementary course for the AP Literature Exam. Students will explore Shakespeare, the man and his writings, the Elizabethan Age, and plays as performance pieces.",
  },
  {
    department: "English",
    course_name: "Theatre I",
    course_code: "E810",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is an introduction to theatre arts. It is a participatory course in which students will learn basic stage movement and voice training, introductory acting and improvisational techniques as well as backstage elements such as lighting and costuming. It is intended for both the student who has always wanted to try their hand at the stage as well as the student who has a real interest in performing. Students are evaluated based on participation, grades, acting exercises, written projects, reading assignments, final projects and tests. NOTE: This course may be used to meet the 1 unit Regents Art/Music graduation requirement.",
  },
  {
    department: "English",
    course_name: "Improvisational Theatre",
    course_code: "E445",

    eligible_grades: [10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Theatre I or permission of instructor."],
    pathways: [],
    description:
      "This class provides students with the ability to explore the genre of applied theatre. Students will grow as performers through the intensive sound and movement work improvisational forms necessitate. They will focus on stage composition, learning how to use space in an interesting and meaningful way, and explore how to create music to support the story on stage in a non-traditional, improvisational way. Most importantly, performers practice listening skills in a highly motivated and active manner. It is through this listening that they will be able to explore the different purposes that improvisational theatre has: to increase self-knowledge, to build community, and to address specific issues within a community or society at large",
  },
  {
    department: "English",
    course_name: "Theatre II",
    course_code: "E820",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Must have successfully completed Theatre I or have permission of the instructor.",
    ],
    pathways: [],
    description:
      "This course is a continuation of Theatre I for the advanced student.",
  },
  {
    department: "English",
    course_name: "Theatre III",
    course_code: "E821",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Theatre II"],
    pathways: [],
    description:
      "This course is a continuation of Theatre II for the advanced student.",
  },
  {
    department: "English",
    course_name: "Writers Workshop",
    course_code: "E737",

    eligible_grades: [11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This is a course for the student who enjoys writing creatively. A writing journal is required of all students. A critical aspect of this class is reading and discussing all students’ work in a supportive community of writers. In this class, students are formulating ideas, exploring techniques of writing poetry and prose, studying models, drafting, revising, and preparing for publication.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Adolescent Psychology",
    course_code: "H790",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Adolescent Psychology curriculum incorporates concepts and introduction to adolescent psychology, transitions of adolescences in society and contemporary issues in adolescences in today’s society. The goal is to assist students in developing skills and learning to apply these skills to real world situations.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Child Development",
    course_code: "H770",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Child Development curriculum incorporates concepts and introduction into child development. Students learn to understand child, family, and community connections, prenatal development and child development from infancy through school age. The goal is to assist students in developing skills and learning to apply these skills through hands on instructions.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Parenting",
    course_code: "H780",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "Parenting curriculum incorporates concepts and introduces students to prenatal development, including the responsibility of child bearing and the personal health decision making and the positive ways to meet the needs of the developing child. The goal is to assist students in developing skills and learn to apply these skills through hands on instructions and working collaboratively with others.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Food Preparation: Core",
    course_code: "H587",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "The Food Preparation Core curriculum incorporates concepts and introduces students to health and safety in the kitchen, menu planning, food preparation, working collaboratively and shared decision making. The course prepares students to use learned knowledge throughout life. The goal is to assist students in developing lifelong skills and applying these skills throughout life.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Baking and Pastry",
    course_code: "H730",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Food Preparation"],
    pathways: [],
    description:
      "Baking and Pastry curriculum incorporates concepts and introduces students to the basic techniques of pastry and baking for personal and professional goals. Students learn hands-on and collaboratively from working in groups in this course. The course prepares students to expand beyond basic culinary skills and move toward more complicated procedures of baking pastry.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Gourmet Foods",
    course_code: "H750",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Food Preparation"],
    pathways: [],
    description:
      "The Gourmet Foods class continues expanding on the food preparation skills learned in Food Prep while using more advanced production techniques and exploring more complicated procedures of fine cuisine. This course focuses on the study of classic cuisine and current epicurean trends. Students will further develop culinary terminology, menu language and proper etiquette while participating in a fine dining experience.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "International and Regional Foods",
    course_code: "H760",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Food Preparation"],
    pathways: [],
    description:
      "The international and regional foods curriculum will provide students an opportunity to explore a variety of culture specific foods as well as preparation techniques. This course will also create a framework for understanding cultural differences and appreciation for customs, traditions and differences through hands-on learning and working collaboratively.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "Interior Design",
    course_code: "H950",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "The Interior Design curriculum focuses on interior design and decoration field, enabling students to assess their abilities to plan an interior which uses the principles of design and is acceptable to a client. Students will work hands-on and collaboratively to plan and design spaces.",
  },
  {
    department: "Family and Consumer Science",
    course_name: "World of Fashion",
    course_code: "H960",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "The World of Fashion curriculum focuses on clothing and fashion. Students learn about the fashion industry, trends, textiles, wardrobe planning and careers. Students after completing this course will be able to apply what they have learned to real-life situations.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art",
    course_code: "F587",

    eligible_grades: [9, 10, 11],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Recommendation of Art Staff"],
    pathways: [
      "Advanced Art I",
      "Advertising Design",
      "SIA/Communications Systems",
    ],
    description:
      "This course is a full-year foundation course designed to meet the Art/Music graduation requirement. It is the prerequisite for Advanced Art I, Advertising Design, and SIA/Communications Systems. Areas of study include drawing skills developed as a basis for work in painting, printmaking, three-dimensional design, perceptual skills development, elements and principles of art and design, career options, and portfolio development. Student assessment is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from district assessments and objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, sketchbook assignments, and the WCSD Portfolio Assessment results. This course can be used to fulfill the 1 credit Arts requirement for graduation.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Communications Systems",
    course_code: "1100",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["Technology credit", "Art/Music graduation requirement"],
    description:
      "Students will spend a year exploring visual and technical concepts as they apply to contemporary communication systems. Students will document all work and maintain a digital portfolio for course assessment. This course is taught collaboratively by the departments of Technology and Fine Arts. Areas of study include development and role of communication systems, digital photography, traditional and new computer illustration and printing processes, sound applications, communication graphics, digital video applications, and career options. Student assessment is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from district assessments and objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, sketchbook assignments, and the WCSD Portfolio Assessment results. This course can be used to fulfill the 1 credit Arts requirement for graduation.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/3-Dimensional Design",
    course_code: "F607",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["3-D Design/Crafts II", "Studio-In-Sculpture"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. Students will develop studio skills, including drawing skills, while creating functional as well as aesthetic art. It is a prerequisite for 3-D Design/Crafts II and Studio-In-Sculpture. Areas of study include: an introduction to a wide variety of art experiences; design and production of 3-D objects utilizing various materials; use of metal, plaster, clay, wire, and/or glass as possible media; portfolio development; sketchbooks; and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/3-Dimensional Design",
    course_code: "F707",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["3-D Design/Crafts II", "Studio-In-Sculpture"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. Students will develop studio skills, including drawing skills, while creating functional as well as aesthetic art. It is a prerequisite for 3-D Design/Crafts II and Studio-In-Sculpture. Areas of study include: an introduction to a wide variety of art experiences; design and production of 3-D objects utilizing various materials; use of metal, plaster, clay, wire, and/or glass as possible media; portfolio development; sketchbooks; and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Ceramics",
    course_code: "F591",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["Ceramics II", "Studio-In-Sculpture"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. The second semester of the Full Year course is spent on developing skills on the potter’s wheel. It is a prerequisite for Ceramics II and Studio-in-Sculpture. Areas of study include: an introduction to a wide variety of art experiences, ceramic hand building techniques including pinch, coil, slab and sculpture; glazing; development of drawing skills; portfolio sketchbooks; historic and contemporary ceramic work and traditions; digital portfolio (as computers are available); and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Ceramics",
    course_code: "F791",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["Ceramics II", "Studio-In-Sculpture"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. The second semester of the Full Year course is spent on developing skills on the potter’s wheel. It is a prerequisite for Ceramics II and Studio-in-Sculpture. Areas of study include: an introduction to a wide variety of art experiences, ceramic hand building techniques including pinch, coil, slab and sculpture; glazing; development of drawing skills; portfolio sketchbooks; historic and contemporary ceramic work and traditions; digital portfolio (as computers are available); and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Digital Art",
    course_code: "F576",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This a project-based course that teaches the skills, process and mindset of a digital artist. This course introduces digital art image making, editing and design techniques as a foundation upon which an effective visual language is built. Beginning with an investigation of the elements and principles of design, students will discover a broad range of visual ideas, concepts and techniques to use in creating images. Expressing, evaluating and communicating ideas with visual images is a primary focus of this course. During the academic school year, students will use imaging and design software consistent with the visual professions as a beginning step towards professional-standard computer proficiency.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Photomedia",
    course_code: "F635",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["Photography II", "Media Arts II"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. It is a prerequisite for Photography II and Media Arts II. Areas of study include: an introduction to a wide variety of art experiences; fundamentals of photography; black & white film processing; composition exercises using a variety of materials; a journal that includes illustrations, resource materials and writing; elements of art and principles of design as applied to photography and graphic art; portfolio development; darkroom processes; and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Photomedia",
    course_code: "F735",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: ["Photography II", "Media Arts II"],
    description:
      "This course is a demanding foundation course designed to meet the Art/Music graduation requirement. It is a prerequisite for Photography II and Media Arts II. Areas of study include: an introduction to a wide variety of art experiences; fundamentals of photography; black & white film processing; composition exercises using a variety of materials; a journal that includes illustrations, resource materials and writing; elements of art and principles of design as applied to photography and graphic art; portfolio development; darkroom processes; and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Designworks A",
    course_code: "F611",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is a foundation course designed to meet the Art/Music graduation requirement for non-art majors. Art making in a variety of media will be explored, visual learning capacities will be identified and developed, and interdisciplinary connections will be utilized. Areas of study include an introduction to a wide variety of art experiences, print-making, design (2-D, 3-D exercises with art elements), painting (exploring basic color theory), drawing (exercises in improving drawing skills), use of a variety of tools and media, and sketchbooks. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from district assessments and objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, and sketchbook assignments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Designworks B",
    course_code: "F612",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is a foundation course designed to meet the Art/Music graduation requirement for non-art majors. Art making in a variety of media will be explored, visual learning capacities will be identified and developed, and interdisciplinary connections will be utilized. Areas of study include an introduction to a wide variety of art experiences, print-making, design (2-D, 3-D exercises with art elements), painting (exploring basic color theory), drawing (exercises in improving drawing skills), use of a variety of tools and media, and sketchbooks. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from district assessments and objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, and sketchbook assignments.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Art/Designworks - Full Year",
    course_code: "F613",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is a foundation course designed to meet the Art/Music graduation requirement for non-art majors. Art making in a variety of media will be explored, visual learning capacities will be identified and developed, and interdisciplinary connections will be utilized. Areas of study include an introduction to a wide variety of art experiences, print-making, design (2-D, 3-D exercises with art elements), painting (exploring basic color theory), drawing (exercises in improving drawing skills), use of a variety of tools and media, and sketchbooks. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from district assessments and objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, and sketchbook assignments.",
  },
  {
    department: "Fine Arts",
    course_name: "3-D Design/Crafts II",
    course_code: "F608",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Studio-In-Art/3-D Design", "Full Year"],
    pathways: [],
    description:
      "This course is designed to develop in students the advanced techniques and skills of the studio crafts media, while creating functional as well as aesthetic art. Areas of study include: development of advanced skills and techniques in design and production of advanced 3-D objects utilizing various materials; use of metal, plaster, clay, wire, and/or glass as possible media; portfolio development; sketchbooks; and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments. The grade may be derived from objective teacher evaluations and observations, including students’ demonstration of criteria-based skills and techniques in artwork, written critical analysis of artwork, sketchbook, portfolio, and other assignments.",
  },
  {
    department: "Fine Arts",
    course_name: "Broadcast Arts",
    course_code: "F626",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Any full-year art or music course or with permission of instructor (including 9th grade students)",
    ],
    pathways: [],
    description:
      "This course will cover the various facets of video production and sound production, editing, and broadcast journalism. Students produce in-school news segments to be aired on “WCSD On The Air” and other venues. It does not satisfy the one credit foundation course graduation requirement; however, it can be applied as an elective credit in a sequence. Areas of study include audio-video recording methods and techniques, preparation of broadcast-ready pieces for local airing, recording, editing and mixing of sound, the art of interviewing, internet production, motion graphics, story-board design, copyright laws and their application, portfolio development, and career options. Student evaluation is reflected in the art grade, a composite of a student’s participation and achievement in assignments and assessments.",
  },
  {
    department: "Fine Arts",
    course_name: "Ceramics II",
    course_code: "F592",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Studio-In-Art/Ceramics, full year"],
    pathways: [],
    description:
      "This course is designed to develop in students the advanced techniques and skills of the studio ceramics medium. Areas of study include development of advanced skills and techniques in ceramics, wheel-throwing of clay, hand-building of clay, glaze technology and application, an analysis of various ceramic traditions (historical/cultural), drawing skills, sketchbook, sculpting in clay (with wheel and hand), portfolio (including a digital portfolio as technology is available), and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Studio-In-Sculpture",
    course_code: "F594",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Studio-In-Art/3-D Design or Studio-in-Art/Ceramics, or permission of the instructor",
    ],
    pathways: [],
    description:
      "This course is designed to develop in students the aesthetic and technical experience to understand, create and appreciate sculpture. Areas of study include: development of dexterity, sensitivity and technique to control a variety of media which may include: wood, clay, wire, metal, stone, plaster, and recycled materials; self-expression in advanced three-dimensional forms; development of drawing skills; portfolio development; and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Photography II",
    course_code: "F622",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Studio-ln-Art/Photomedia Full Year with a final average of 80 or higher",
    ],
    pathways: [],
    description:
      "This course is designed to develop in students advanced techniques and skills of photography. Assignments are aimed at enriching the expressive use of the camera and darkroom. Areas of study include advanced skills and techniques in photography, technology (computer, digital camera, software applications), experimental film (high contrast), digital and macro photography, mixed media processes, commercial Photography, studio and environmental portraiture, still life/advertising photography, portfolio development, and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Media Arts II",
    course_code: "F615",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Studio-In-Art/Photomedia Full Year with a final average of 80 or higher",
    ],
    pathways: [],
    description:
      "This course is designed to develop in students the advanced techniques and skills of the media arts. Areas of study include development of advanced skills and techniques in media, electronic imaging, video production via multiple software applications, creative sound, computer graphics, image transfer techniques, animation (computer, stop-motion, claymation), portfolio development, and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Sculpture II",
    course_code: "F638",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Studio-ln-Art/3-D Design or Studio-in-Art/Ceramics, Studio-ln-Sculpture",
    ],
    pathways: [],
    description:
      "This course is designed to further develop in students the aesthetic and technical experience to understand, create and appreciate sculpture. Areas of study include: development of advanced dexterity, sensitivity and technique to control a variety of media which may include wood, clay, wire, metal, stone, plaster, and recycled materials; self-expression in advanced three-dimensional forms; development of drawing skills; portfolio development; and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Advertising Design",
    course_code: "F590",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Studio-ln-Art", "F587"],
    pathways: [],
    description:
      "This course is an introduction to advertising design and commercial art. Learning situations will incorporate ad clients from the school and community. Computer and video equipment will be used as available. Areas of study include basic design concepts and skills, layout, lettering, product and package design, portfolio development, computer and technology, and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Advanced Art I - Drawing and Painting",
    course_code: "F596",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Studio-In-Art"],
    pathways: [],
    description:
      "This course is designed to develop students’ skills in design and drawing as a foundation for advanced work. Visual problem-solving skills will be developed through the examination and analysis of artists’ work. Areas of study include advanced painting and drawing, print-making, mixed media, perceptual skills development, portfolio development, and career and college options.",
  },
  {
    department: "Fine Arts",
    course_name: "Advanced Art II - Drawing and Painting",
    course_code: "F597",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Advanced Art I or permission of instructor"],
    pathways: [],
    description:
      "This course is designed to provide continued emphasis in the development of visual observation, critical analysis and problem-solving skills through instruction and exploration of two-dimensional materials and techniques. Students will begin to explore potential topics and themes that will provide direction and work for personal, college and Advanced Placement portfolios.",
  },
  {
    department: "Fine Arts",
    course_name: "AP Studio Art and Design",
    course_code: "F642",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Advanced Art II and permission from instructor"],
    pathways: [],
    description:
      "Advanced Placement Studio Art and Design is a College Board certified course designed to provide instruction that culminates in a portfolio submission to the AP College Board for foundation level college credit. The focus of the course is the development of perceptual, problem-solving, and critical thinking skills to meet this goal. Observational work in two-dimensional media is required for this portfolio submission.",
  },
  {
    department: "Fine Arts",
    course_name: "Portfolio Development",
    course_code: "F640",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Advanced Art II or permission from instructor"],
    pathways: [],
    description:
      "This course is recommended for art majors who are in the process of completing their art course sequence. They will continue to develop the advanced skills and techniques initiated in Advanced Art I and II. Portfolios will be developed that reflect personal ideas and skills in several media.",
  },
  {
    department: "Fine Arts",
    course_name: "Photography III",
    course_code: "F630",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Studio-In-Art/Photomedia",
      "Photography II, with an average of 80 or higher",
    ],
    pathways: [],
    description:
      "Photography III provides advanced skills and techniques in photography, and students work on their portfolios, explore advanced camera techniques and career options.",
  },
  {
    department: "Fine Arts",
    course_name: "Media Arts III",
    course_code: "F631",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Studio-ln-Art/Photomedia", "Media Arts II"],
    pathways: [],
    description: "",
  },
  {
    department: "Fine Arts",
    course_name: "Ceramics III",
    course_code: "F632",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Studio-In-Art/Ceramics",
      "Ceramics II, with an average of 80 or higher.",
    ],
    pathways: [],
    description: "",
  },
  {
    department: "Fine Arts",
    course_name: "3-D Design/Crafts III",
    course_code: "F637",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Studio-ln-Art/3-D Design", "3-D Design/Crafts II"],
    pathways: [],
    description: "",
  },
  {
    department: "Foreign Language",
    course_name: "Spanish I",
    course_code: "L513",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description:
      "This course is intended as a first experience in the target language and prepares students to meet the NYS Education Department’s Languages Other Than English (LOTE) Checkpoint A proficiency level. Students learn to speak and understand the language using basic vocabulary within the context of everyday situations, use grammatical structures within the context of topics, and work with vocabulary lists, original dialogues, notes and letters related to a variety of topics. A Department final assessment will be administered in June. Passing this course meets the minimum graduation requirement in foreign language.",
  },
  {
    department: "Foreign Language",
    course_name: "French II",
    course_code: "L123",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description: "",
  },
  {
    department: "Foreign Language",
    course_name: "Italian II",
    course_code: "L323",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description: "",
  },
  {
    department: "Foreign Language",
    course_name: "Spanish II",
    course_code: "L523",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Must have passed the same target language in Grades 7 & 8, including the proficiency (Checkpoint A) or Level 1.",
    ],
    pathways: [],
    description:
      "In level II, students move beyond the State Education Department’s LOTE Checkpoint A proficiency level and begin preparing in earnest for the District Final Assessment at the end of level III (Checkpoint B). Topics, functions and situations remain the same as in the previous level, but are approached in a broader and deeper manner. Expanding vocabulary and an increasing understanding of more complicated verb forms and grammatical concepts allow students to communicate more effectively and understand the target language in authentic situations.",
  },
  {
    department: "Foreign Language",
    course_name: "French III",
    course_code: "L133",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description: "",
  },
  {
    department: "Foreign Language",
    course_name: "Italian III",
    course_code: "L333",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [],
    pathways: [],
    description: "",
  },
  {
    department: "Foreign Language",
    course_name: "Spanish III",
    course_code: "L533",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Must have passed the same target language course in Level 2.",
    ],
    pathways: [],
    description:
      "This is the final course preparing students for NYS Education Department’s Checkpoint B proficiency (District Level Final Assessment). Topics, functions and situations remain the same as in the previous levels, but are approached in a broader and deeper manner. Expanding vocabulary and an increasing understanding of more complicated verb forms and grammatical concepts allow students to communicate more effectively and understand the target language in authentic situations. All students in this course level take the District Final Assessment in the foreign language in June. Students must pass this course and pass the District Final Assessment in order to qualify for an Advanced Regents Diploma.",
  },
  {
    department: "Foreign Language",
    course_name: "French IV Honors*",
    course_code: "L145",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [],
    pathways: [],
    description:
      "*This course is intended for the accelerated/honors student who is prepared to meet the rigorous academic demands of advanced placement work, as it is the first part of a two-year sequence that prepares students to meet the challenges of the College Board’s Advanced Placement exam at the end of Level 5. As an honors-level course, grades are weighted.",
  },
  {
    department: "Foreign Language",
    course_name: "Italian IV Honors*/College Credit**",
    course_code: "L345",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [],
    pathways: [],
    description:
      "**Students of Italian 4 have the option of enrolling with SUNY Albany to receive four (4) credits for successful completion of the course (equivalent to SUNY Albany’s Intermediate Italian 1). There is a fee for students who wish to participate in this college program.",
  },
  {
    department: "Foreign Language",
    course_name: "Spanish IV Honors*",
    course_code: "L545",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: ["Must have passed the same foreign language in Level 3."],
    pathways: [],
    description:
      "*This course is intended for the accelerated/honors student who is prepared to meet the rigorous academic demands of advanced placement work, as it is the first part of a two-year sequence that prepares students to meet the challenges of the College Board’s Advanced Placement exam at the end of Level 5. As an honors-level course, grades are weighted.",
  },
  {
    department: "Foreign Language",
    course_name: "AP French V*/College Credit**",
    course_code: "L156",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Must have passed the same foreign language in Level 4."],
    pathways: [],
    description:
      "*This course is intended for the accelerated/honors student who is prepared to meet the rigorous academic demands of advanced placement work, as it is the final part of a two-year sequence that prepares students to meet the challenges of the College Board’s Advanced Placement exam or College Course equivalent. Grades are weighted.",
  },
  {
    department: "Foreign Language",
    course_name: "Italian V - Honors/College Credit**",
    course_code: "L355",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Must have passed the same foreign language in Level 4."],
    pathways: [],
    description:
      "**Students of Italian V have the option of enrolling with SUNY Albany to receive four (4) credits for successful completion of the course (equivalent to SUNY Albany’s Intermediate Italian 2). There is a fee for this program.",
  },
  {
    department: "Foreign Language",
    course_name: "AP Italian V*",
    course_code: "L356",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Must have passed the same foreign language in Level 4."],
    pathways: [],
    description:
      "*This course is intended for the accelerated/honors student who is prepared to meet the rigorous academic demands of advanced placement work, as it is the final part of a two-year sequence that prepares students to meet the challenges of the College Board’s Advanced Placement exam or College Course equivalent. Grades are weighted.",
  },
  {
    department: "Foreign Language",
    course_name: "AP Spanish V*",
    course_code: "L556",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Must have passed the same foreign language in Level 4."],
    pathways: [],
    description:
      "*This course is intended for the accelerated/honors student who is prepared to meet the rigorous academic demands of advanced placement work, as it is the final part of a two-year sequence that prepares students to meet the challenges of the College Board’s Advanced Placement exam or College Course equivalent. Grades are weighted.",
  },
  {
    department: "Foreign Language",
    course_name: "Advanced Spanish for the Heritage and Native Speaker II",
    course_code: "L524",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Must have passed the same target language in Grades 7 & 8, including the proficiency (Checkpoint A) or Level 1.",
      "Teacher recommendation and individual assessment required.",
    ],
    pathways: [],
    description:
      "In level 2, students move beyond the State Education Department’s LOTE Checkpoint A proficiency level and begin preparing in earnest for the District Final exam at the end of level 3 (Checkpoint B). This course is designed for students whose first language is Spanish, may have grown up using Spanish at home, or find that our traditional Spanish classes do not meet their language skills needs. While they may communicate at a high level, they need help with skills such as spelling, accents, higher grammatical structures, reading comprehension of authentic material, and writing in formal and informal situations. Heritage speakers will solidify their knowledge of Spanish, focus on comprehension of multiple regionalisms, and develop a high level of fluency. Topics, functions and situations remain the same as in the previous level, but are approached in a broader and deeper manner. Expanding vocabulary and an increasing understanding of more complicated verb forms and grammatical concepts allow students to communicate more effectively and understand the target language in authentic situations. Topics include personal identification, family life, education, house and home, leisure, shopping, community neighborhood, meal taking/food/drink, physical environment, travel, health and welfare, earning a living, public and private services, services and repairs, and current events. Functions include culture, socializing, providing and obtaining information, expressing personal feelings, and persuasion. Situations include listening, speaking, reading, and writing. A Department Final Assessment will be administered in June. The final exam counts as 20% of the final course average. This course is an Advanced Level II Spanish Course and will count toward the language sequence.",
  },
  {
    department: "Foreign Language",
    course_name: "Advanced Spanish for the Heritage and Native Speaker III",
    course_code: "L525",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Must have passed the same target language in Grades 7 & 8, including the proficiency (Checkpoint A) or Level 1.",
      "Teacher recommendation and individual assessment required.",
    ],
    pathways: [],
    description:
      "In level 2, students move beyond the State Education Department’s LOTE Checkpoint A proficiency level and begin preparing in earnest for the District Final exam at the end of level 3 (Checkpoint B). This course is designed for students whose first language is Spanish, may have grown up using Spanish at home, or find that our traditional Spanish classes do not meet their language skills needs. While they may communicate at a high level, they need help with skills such as spelling, accents, higher grammatical structures, reading comprehension of authentic material, and writing in formal and informal situations. Heritage speakers will solidify their knowledge of Spanish, focus on comprehension of multiple regionalisms, and develop a high level of fluency. Topics, functions and situations remain the same as in the previous level, but are approached in a broader and deeper manner. Expanding vocabulary and an increasing understanding of more complicated verb forms and grammatical concepts allow students to communicate more effectively and understand the target language in authentic situations. Topics include personal identification, family life, education, house and home, leisure, shopping, community neighborhood, meal taking/food/drink, physical environment, travel, health and welfare, earning a living, public and private services, services and repairs, and current events. Functions include culture, socializing, providing and obtaining information, expressing personal feelings, and persuasion. Situations include listening, speaking, reading, and writing. A Department Final Assessment will be administered in June. The final exam counts as 20% of the final course average. This course is an Advanced Level II Spanish Course and will count toward the language sequence.",
  },
  {
    department: "Math",
    course_name: "Algebra I",
    course_code: "M351",

    eligible_grades: [9],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Math 8 with a final average of 70% or higher"],
    pathways: [],
    description:
      "This Regents course focuses on developing algebra concepts and skills through a multiple representations approach. Major topics include, but are not limited to, identifying and solving Linear and Exponential models, Statistics, Operations with Polynomials, Factoring and Solving Quadratic Functions, and System of Equations. This course ends with a New York State Regents Examination. Successful completion of this course and the Algebra I Regents Examination is a New York State graduation requirement.",
  },
  {
    department: "Math",
    course_name: "Algebra I Honors",
    course_code: "M371",

    eligible_grades: [9],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Math 8 with a final average of 90% or higher with teacher recommendation",
    ],
    pathways: [],
    description:
      "This Regents course focuses on developing algebra concepts and skills through a multiple representations approach. Major topics include, but are not limited to, identifying and solving Linear and Exponential models, Statistics, Operations with Polynomials, Factoring and Solving Quadratic Functions, and System of Equations. Algebra Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Algebra Regents course. This course ends with a New York State Regents Examination. Successful completion of this course and the Algebra I Regents Examination is a New York State graduation requirement.",
  },
  {
    department: "Math",
    course_name: "Algebra+",
    course_code: "M341 & M341L",

    eligible_grades: [9],
    credits: 1.5,
    rank_weighting: 1.0,
    prerequisites: ["For those with less than a 75% average in Math 8"],
    pathways: [],
    description:
      "This Regents course focuses on developing algebra concepts and skills through a multiple representations approach. Major topics include, but are not limited to, identifying and solving Linear and Exponential models, Statistics, Operations with Polynomials, Factoring and Solving Quadratic Functions, and System of Equations. Algebra+ consists of an additional, attached lab period that allows students additional time to explore/discover concepts through labs and hands-on activities. This course ends with a New York State Regents Examination. Successful completion of this course and the Algebra I Regents Examination is a New York State graduation requirement.",
  },
  {
    department: "Math",
    course_name: "Algebra 1A (½ NCAA credit)",
    course_code: "M331",

    eligible_grades: [9],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["For those with less than a 70% average in Math 8"],
    pathways: [],
    description:
      "This course is the first year of a two year sequence in Algebra I, focusing on developing algebra concepts and skills through a multiple representations approach. The slower pacing of the sequence allows for students to develop and master skills needed to be successful in Algebra. Major topics include, but are not limited to, Solving Linear Equations and Inequalities, Writing and Graphing Linear Functions, Systems of Equations, Exponential Functions and Sequences. Upon successful completion of this course, students will be enrolled in Algebra 1B. Successful completion of the Algebra 1A/1B sequence satisfies the New York State graduation requirement for Algebra I.",
  },
  {
    department: "Math",
    course_name: "Algebra 1B (½ NCAA credit)",
    course_code: "M431",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Algebra 1A"],
    pathways: [],
    description:
      "This course is the second year of a two year sequence in Algebra I, focusing on developing algebra concepts and skills through a multiple representations approach. The slower pacing of the sequence allows for students to develop and master skills needed to be successful in Algebra. Major topics include, but are not limited to, Polynomials & Factoring, Quadratic & Radical Functions, Data Analysis and Displays. This course ends with a New York State Regents Examination. Successful completion of the Algebra 1A/1B sequence and the Algebra I Regents Examination satisfies the New York State graduation requirement for Algebra I.",
  },
  {
    department: "Math",
    course_name: "Geometry",
    course_code: "M451",

    eligible_grades: [10, 11],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Algebra I and a passing score on the Algebra Regents Exam.",
    ],
    pathways: [],
    description:
      "This Regents course focuses on the properties of geometric figures and geometric relationships. Major topics include, but are not limited to, Constructions & Transformations, Right Triangles, Circles, Trigonometry, Geometric Measurement & Dimensions, and Modeling with Geometry. Students will be expected to present valid arguments justified by axioms, definitions and theorems. This course ends with a New York State Regents Examination. Successful completion of this course and the Geometry Regents Examination is a requirement for a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Geometry Honors",
    course_code: "M481",

    eligible_grades: [9, 10],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Successful completion of Algebra I Honors with a final average of 85% or higher, OR Algebra I with a final average of 95% or higher with teacher recommendation.",
    ],
    pathways: [],
    description:
      "This Regents course focuses on the properties of geometric figures and geometric relationships. Major topics include, but are not limited to, Constructions & Transformations, Right Triangles, Circles, Trigonometry, Geometric Measurement & Dimensions, and Modeling with Geometry. Students will be expected to present valid arguments justified by axioms, definitions and theorems. Geometry Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Geometry Regents course. This course ends with a New York State Regents Examination. Successful completion of this course and the Geometry Regents Examination is a requirement for a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Geometry+",
    course_code: "M453 & M453L",

    eligible_grades: [10],
    credits: 1.5,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Algebra I."],
    pathways: [],
    description:
      "Focuses on the properties of geometric figures and geometric relationships. Major topics include, but are not limited to, Constructions & Transformations, Right Triangles, Circles, Trigonometry, Geometric Measurement & Dimensions, and Modeling with Geometry. Students will be expected to present valid arguments justified by axioms, definitions and theorems. This course ends in a New York State Regents Examination. Geometry+ consists of an additional, attached lab period that allows students additional time to explore/discover concepts through labs and hands-on activities. This course ends with a New York State Regents Examination. Successful completion of this course and the Geometry Regents Examination is a requirement for a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Math AIS Regents Prep (Fall)",
    course_code: "M401",

    eligible_grades: [10, 11, 12],
    credits: 0,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Academic Intervention Services (AIS) are mandated for all students who have failed the Algebra I Regents Exam. Students will be assigned to the course either 5 days a week or on an every other day basis. The student remains in the course until he/she passes the Algebra I Regents Exam.",
  },
  {
    department: "Math",
    course_name: "Math AIS Regents Prep (Spring)",
    course_code: "M402",

    eligible_grades: [10, 11, 12],
    credits: 0,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Academic Intervention Services (AIS) are mandated for all students who have failed the Algebra I Regents Exam. Students will be assigned to the course either 5 days a week or on an every other day basis. The student remains in the course until he/she passes the Algebra I Regents Exam.",
  },
  {
    department: "Math",
    course_name: "Algebra II",
    course_code: "M551",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Geometry with a final average of 80% or higher, OR Algebra 2N with a final average of 85% or higher with teacher recommendation.",
    ],
    pathways: [],
    description:
      "This Regents course builds a foundation of mathematics for those students going on to Pre-Calculus and/or students who are college bound. Algebra II builds upon topics that were first introduced in Algebra I. Additional topics include, but are not limited to, Systems of Linear & Circle Equations, Rational Expressions, Rational, Irrational and Complex Numbers, Quadratic Equations & Functions, Sequences & Series, Relations & Functions, Exponents & Exponential Functions, Logarithms, and Introductory Trigonometry. This course ends with a New York State Regents Examination. Successful completion of this course and the Algebra II Regents Examination is a requirement for a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Algebra II Honors",
    course_code: "M581",

    eligible_grades: [10, 11],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Successful completion of Geometry Honors with a final average of 85% or higher, OR Geometry with a final average of 90% or higher with teacher recommendation.",
    ],
    pathways: [],
    description:
      "This Regents course builds a foundation of mathematics for those students going on to Pre-Calculus and/or students who are college bound. Algebra II builds upon topics that were first introduced in Algebra I. Additional topics include, but are not limited to, Systems of Linear & Circle Equations, Rational Expressions, Rational, Irrational and Complex Numbers, Quadratic Equations & Functions, Sequences & Series, Relations & Functions, Exponents & Exponential Functions, Logarithms, and Introductory Trigonometry. Algebra II Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Algebra II Regents course. This course ends with a New York State Regents Examination. Successful completion of this course and the Algebra II Regents Examination is a requirement for a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Algebra 2N",
    course_code: "M541",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Algebra I.",
      "Recommendation: Geometry with a final average lower than 70%, OR Algebra 1B with a final average lower than 70%.",
    ],
    pathways: [],
    description:
      "This non-Regents course expands upon students’ prior knowledge of Algebra and explores more advanced Algebra concepts. Major topics include, but are not limited to, the basics of functions, quadratic functions, radicals, complex numbers, rational functions, and introductory trigonometry. This course is designed for students who are not pursuing a New York State Regents Diploma with Advanced Designation.",
  },
  {
    department: "Math",
    course_name: "Introduction to College Math",
    course_code: "M645",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Algebra 2N."],
    pathways: [],
    description:
      "This course is intended for students who desire a 4th credit in math, but are not seeking a New York State Regents Diploma with Advanced Designation. The first half of the year focuses on Trigonometry which includes topics such as, Right Triangle Trig, Basic Trig Functions, Inverse Trig Function, Graphing Trig functions, and Trig Applications. The second half of the year focuses on Algebra which includes topics such as factoring, solving quadratics, functions, statistics, and probability.",
  },
  {
    department: "Math",
    course_name: "Pre-Calculus",
    course_code: "M644",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Algebra II."],
    pathways: [],
    description:
      "This course is intended for students who wish to further their understanding of mathematical structure and analysis. This course is designed to expand on, make connections between, and apply concepts related to these major topics that include, but are not limited to, Trigonometry, Vectors, Matrices, Analytic Geometry, Functions and their Graphs, Polynomial Functions, Rational Functions, Exponential Functions, Logarithms & Limits.",
  },
  {
    department: "Math",
    course_name: "AP/College Pre-Calculus",
    course_code: "M661",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Algebra II Honors OR Algebra II with a final average of 95% or higher",
      "A score of 85 or higher on the New York State Algebra II Regents Examination.",
    ],
    pathways: [],
    description:
      "Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. Students enrolled in this course are eligible for 3 credits available through Marist College for an additional fee made payable directly to the college. This course is a college level course which follows the curriculum for the Dutchess Community College MAT 185 course. Major topics include, but are not Limited to, Linear, Polynomial, Rational, Trigonometric, Exponential, Logarithmic, Polar, and Inverse Functions. Modeling and data analysis techniques are also employed. Conceptual understanding is emphasized and algebraic skills are reinforced throughout the Course.",
  },
  {
    department: "Math",
    course_name: "College Calculus",
    course_code: "M221",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Pre-Calculus or Pre-Calculus Honors.",
    ],
    pathways: [],
    description:
      "Note: The final exam is approved by Dutchess Community College. Successful completion of this exam can result in up to 4 college credits issued by Dutchess Community College. This course is a college level course that follows the curriculum for the DCC MAT 221 course. Major topics include, but are not limited to: Limits, Calculating Derivatives, Curve Sketching, Motion, Optimization, Related Rates, and Integration. Enrolled students are eligible for 3 DCC credits for an additional fee payable directly to the College.",
  },
  {
    department: "Math",
    course_name: "AP Calculus AB",
    course_code: "M662",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Algebra II with a final average of 95% or higher OR Pre-Calculus (both options with teacher recommendation).",
    ],
    pathways: [],
    description:
      "AP Calculus AB is roughly equivalent to a first semester college calculus course devoted to topics in differential and integral calculus. The AP course covers topics in these areas, including concepts and skills of limits, derivatives, definite integrals, and the Fundamental Theorem of Calculus. Students will learn how to approach calculus concepts and problems when they are represented graphically, numerically, analytically, and verbally, and how to make connections amongst these representations. Students will learn how to use technology to help solve problems, experiment, interpret results, and support conclusions. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student.",
  },
  {
    department: "Math",
    course_name: "AP Calculus BC",
    course_code: "M681",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Algebra II Honors with a final average of 85% or higher OR Pre-Calculus (both options with teacher recommendation) OR AP Calculus AB",
    ],
    pathways: [],
    description:
      "AP Calculus BC is considerably more intensive than Advanced Placement Calculus AB. This course is roughly equivalent to both first and second semester college calculus courses. It extends the content learned in Calculus AB to different types of equations and introduces the topic of sequences and series. This course covers topics in differential and integral calculus, including concepts and skills of limits, derivatives, definite integrals, the Fundamental Theorem of Calculus, and series. Students will learn how to approach calculus concepts and problems when they are represented graphically, numerically, analytically, and verbally, and to make connections amongst these representations. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student.",
  },
  {
    department: "Math",
    course_name: "AP/College Statistics",
    course_code: "M655",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["Successful completion of Algebra II"],
    pathways: [],
    description:
      "AP Statistics focuses on major concepts and tools for collecting, analyzing, and drawing conclusions from data. Students will develop analytical and critical thinking skills as they learn to describe data patterns and departures from patterns, plan and conduct studies, use probability and simulation to explore random phenomena, estimate population parameters, test hypotheses, and make statistical inferences. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. Students enrolled in this course are eligible for 3 credits available through Marist College for an additional fee made payable directly to the college.",
  },
  {
    department: "Math",
    course_name: "College Elementary Statistics",
    course_code: "M654",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Algebra II or successful completion of Algebra 2N with a final average of 85 or higher; or successful completion of Introduction of College Math",
    ],
    pathways: [],
    description:
      "This course is a college level course which follows the curriculum for the Dutchess Community College MAT 118 course. In this course, basic statistical procedures are developed. Topics include descriptive statistics, hypothesis testing, and confidence intervals and regression using both simulation and a theory-based approach. Technology will be used regularly throughout the course. Enrolled students are eligible for 3 DCC credits for an additional fee payable directly to the College.",
  },
  {
    department: "Math",
    course_name: "Math & Science Real World Applications",
    course_code: "M692",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Algebra I AND Geometry"],
    pathways: [],
    description:
      "This course is designed to give students answer to the questions “When are we going to use this?” by providing students with a hands-on, project-oriented learning experience. Students will explore the math and science behind items they encounter in everyday life in a true STEAM class, using technology and engineering to create some of the objects discussed in class.",
  },
  {
    department: "Math",
    course_name: "Computer Programming I",
    course_code: "M415",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: [
      "Concurrent enrollment in Algebra I, OR Completion of Algebra I",
    ],
    pathways: [],
    description:
      "This course is an introduction to the field of computer science and the fundamentals of computer programming. Students will learn structured, object oriented event based programming and will include the development, debugging, and verification of programs. Using the VisualBasic.net language, programming projects are used to reinforce key concepts including data types, decision making structures, loops, procedures and functions. Prior programming experience is not required.",
  },
  {
    department: "Math",
    course_name: "Computer Programming II",
    course_code: "M416",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Computer Programming 1"],
    pathways: [],
    description:
      "This course provides additional practice and builds on the core programming concepts taught in Computer Programming 1. Using the VisualBasic.net language, programming projects are used to reinforce advanced programming topics such as class design, arrays, structures, graphics and files.",
  },
  {
    department: "Math",
    course_name: "AP Computer Science A",
    course_code: "M650",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Algebra II, OR Computer Programming 2",
    ],
    pathways: [],
    description:
      "AP Computer Science A focuses on core aspects of computer science which are used to create solutions that are understandable, adaptable, and when appropriate, reusable. The design and implementation of computer programs to solve problems involve skills that are fundamental to the study of computer science. This includes the development and analysis of algorithms and fundamental data structures, and the use of logic and formal methods. The course will cover fundamentals of programming syntax and methodology using the Java programming language. Solve problems involve skills that are fundamental to the study of computer science. This includes the development and analysis of algorithms and fundamental data structures, and the use of logic and formal methods. The course will cover fundamentals of programming syntax and methodology using the Java programming language. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student.",
  },
  {
    department: "Technology",
    course_name: "SIA/Communication Systems",
    course_code: "T710",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Communication Systems is a HALF YEAR, half credit course, taught by the Department of Technology. Students learn about the different systems of communications including, audio, audio/visual, visual, and electronic. Students will use various Communication Technology Equipment including mixing boards, video cameras, Apple Computers, and other video production equipment. Students work will be displayed on MSG Varsity Network.",
  },
  {
    department: "Technology",
    course_name: "SIA/Communication Systems",
    course_code: "I100",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Communication Systems is a FULL YEAR, full credit course, taught by the Department of Technology in conjunction with the Art Department (Studio-In-Art). Upon completion of both Communication Systems and Studio-In-Art, students will receive credit in Technology and Art. Student’s NYS Regents Art/Music requirement will be fulfilled.",
  },
  {
    department: "Technology",
    course_name: "Computer Graphics",
    course_code: "T743",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "This intermediate design and visual communications course will provide an overview of graphic design, digital photography, and animation. Software used includes: Adobe Photoshop, Illustrator, InDesign, and Flash. Skills developed in the course are a necessary foundation for success in Web Design and Development. Students will develop computer vocabulary related to concepts, aesthetics, and technical skills related to computer graphic technology. Students utilize official Adobe training materials which make them eligible to take Adobe Certification Exams (ACE).",
  },
  {
    department: "Technology",
    course_name: "Web Design and Animation",
    course_code: "T742",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: ["Successful Completion of Computer Graphics"],
    pathways: [],
    description:
      "This course is a continuation of Computer Graphics. Students will broaden their skills in Adobe Illustrator, Photoshop, and Flash to complete projects using Dreamweaver. Students will utilize the graphic design process to create both professional and personal websites. Students will gain knowledge in the areas of basic computer programming, design, and site maintenance/management while understanding the theory and history of Web Design. Students utilize official Adobe training material, which make them eligible to take Adobe Certification Exams (ACE).",
  },
  {
    department: "Technology",
    course_name: "Computer Aided Design (CAD)",
    course_code: "T745",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: ["Technical Drawing"],
    pathways: [],
    description:
      "Computer Aided Design is a half year, half credit course designed to acquaint the student with hands-on activities using a PC platform workstation. Students will exercise a variety of drafting and design software tools using CAD to produce both two and three-dimensional drawings and illustrations. Drawings will be produced by students of their own designs as well as assigned exercises. Drawings will be electronically saved, printed and/or plotted for evaluation.",
  },
  {
    department: "Technology",
    course_name: "Materials Processing: Woods",
    course_code: "T753",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Woods Processes and Fabrication is an introduction to woods technology including materials, processes, tools, and equipment. The half year course includes fundamental manipulative work in selection, planning, cutting, forming, assembling, and finishing a variety of wood products. Students are instructed on many machinist tools and utilize many different combining techniques to form a well-rounded experience that will be an asset in any future work in the technology field or even for the home hobbyist.",
  },
  {
    department: "Technology",
    course_name: "Materials Processing: Advanced Woods",
    course_code: "T754",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: ["Materials Processing: Woods"],
    pathways: [],
    description:
      "Advanced woodworking is a half year course for students taking the basic woodworking class to the next level. Students will be using more advanced machinery and completing projects that entail more thought and detail while still demonstrating proper safety measures.",
  },
  {
    department: "Technology",
    course_name: "Materials Processing: Metals",
    course_code: "T759",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Metals Processes and Fabrication is an introduction to metals technology including materials, processes, tools, and equipment. The half year course includes fundamental manipulative work in selection, planning, cutting, forming, assembling, and finishing a variety of metal products. Students work with ferrous and nonferrous metals and learn how industry uses these materials to construct structures and tools that are essential in our technological society. Students are instructed on many machinist tools and utilize many different combining techniques to form a well-rounded experience that will be an asset in any future work in the technology field or even for the home hobbyist.",
  },
  {
    department: "Technology",
    course_name: "Construction Systems",
    course_code: "T723",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Construction Systems is a ½-unit, twenty-week course offered to all students. Construction Systems explores how mankind shapes the world using current technology to provide solutions for society’s needs. This course will explore the four fields of construction-Light Construction, Commercial Construction, Industrial Construction, and Civil Construction. Seventy-five percent of the course time will be spent on hands-on activities in a laboratory setting. Lab activities will center on the most common construction activities found in Light and Commercial Construction. Careers within the construction trades will be explored throughout the course. Personal safety, energy use, conservation, and environmental issues are addressed as related to all fields of construction.",
  },
  {
    department: "Technology",
    course_name: "Transportation Systems",
    course_code: "T720",

    eligible_grades: [9, 10, 11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Transportation systems is a course that will acquaint students with a range of methods used to move people, materials, and products, across the land sea and air. The study of these systems will be the main focus of the course. The theory of operation and the scientific principles of the transportation systems will be included. The course is full year for one period each day. The lab work will consist of 20 or more instructional topics and 60-70 lab periods for student activity. Such lab activities will include construction of model cars, planes, rockets, and boats. Students will also experiment with internal combustion engines that are used to power our transportation systems, as well as auto repair and maintenance.",
  },
  {
    department: "Technology",
    course_name: "Basic Electricity/Electronics",
    course_code: "T725",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "Basic Electronics and Electricity provides students with a background in electronics and electricity principles. Many activities involve Energy Electronics and the use of Innovative Green Electronic Technology systems. Students will also participate in household wiring projects such as wiring up a room in a house, garage door openers, “Clap on Clap off” circuits, and solar panels.",
  },
  {
    department: "Technology",
    course_name: "Technical Drawing and Drafting",
    course_code: "T735",

    eligible_grades: [9, 10, 11, 12],
    credits: 0.5,
    rank_weighting: 1,
    prerequisites: [],
    pathways: [],
    description:
      "This course is designed to present to the student the concepts of technical drawing, and traces its evolution from manual drafting techniques to modern computer aided drafting/CAD techniques. Major topics include: types of drawings, types of technical drawings, their purpose, applications, and regulations.",
  },
  {
    department: "Technology",
    course_name: "Manufacturing Systems",
    course_code: "T760",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["2 Previous Technology classes"],
    pathways: [],
    description:
      "Students will explore the concepts of custom and mass production with an emphasis on the construction of student designed projects. This will include but not be limited to 3D computer design, prototyping, learning the entire process of CNC (computer numerical control) machining, and developing procedures to mass produce products within the Tech Ed. Labs.",
  },
  {
    department: "Technology",
    course_name: "Winner’s Circle Project I and II",
    course_code: "T721",

    eligible_grades: [10, 11, 12],
    credits: 2,
    rank_weighting: 1,
    prerequisites: ["Teacher Recommendation"],
    pathways: [],
    description:
      "Winner’s Circle Project is a two-period course in which students earn two elective credits. Students will build a high-performance Factory Five vehicle from the ground up. Teachers will utilize a project-based curriculum that will not only focus on the mechanics of the build, but also on aspects of racing production and the racing team.",
  },
  {
    department: "Technology",
    course_name:
      "Project Lead The Way (PLTW) Design and Drawing for Production (DDP)",
    course_code: "T750",

    eligible_grades: [9, 10],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["75% or Higher in Math 8"],
    pathways: ["Project Lead The Way (PLTW)"],
    description:
      "Design and Drawing for Production is a course in the Project Lead the Way Program that teaches students how to take an idea through a design process that will eventually be manufactured or produced. As you learn about various aspects of engineering and engineering design, such as how engineers communicate through drawing, you will apply what you learn through various activities, projects, and problems. For example, after learning about the different techniques engineers use in determining how to design a product, students will have the flexibility to explore the design and engineering processes to solve problems that are of their own interest. Students who meet certain requirements may also receive college credits through Rochester Institute of Technology at the end of the course.",
  },
  {
    department: "Technology",
    course_name: "PLTW Principles of Engineering (POE)",
    course_code: "T773",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["75% or Higher in Math 8"],
    pathways: ["Project Lead The Way (PLTW)"],
    description:
      "This survey course of engineering exposes students to some of the major concepts they’ll encounter in a postsecondary engineering course of study. Students have an opportunity to investigate engineering and high-tech careers and to develop skills and understanding of course concepts. Students employ engineering and scientific concepts in the solution of engineering design problems. They develop problem-solving skills and apply their knowledge of research and design to create solutions to various challenges. Students also learn how to document their work and communicate their solutions to peers and members of the professional community. This course is designed for 10th or 11th grade students.",
  },
  {
    department: "Technology",
    course_name: "PLTW Civil Engineering & Architecture (CEA)",
    course_code: "T774",

    eligible_grades: [10, 11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["75% or Higher in Math 8"],
    pathways: ["Project Lead The Way (PLTW)"],
    description:
      "The major focus of this course is completing long-term projects that involve the development of property sites. As students learn about various aspects of civil engineering and architecture, they apply what they learn to the design and development of a property. The course provides teachers and students freedom to develop the property as a simulation or to students to model the experiences that civil engineers and architects face. Students work in teams, exploring hands-on activities and projects to learn the characteristics of civil engineering and architecture. In addition, students use 3D design software to help them design solutions to solve major course projects. Students learn about documenting their project, solving problems, and communicating their solutions to their peers and members of the professional community of civil engineering and architecture.",
  },
  {
    department: "Technology",
    course_name: "PLTW Digital Electronics (DE)",
    course_code: "T771",

    eligible_grades: [10, 11],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: ["75% or Higher in Math 8"],
    pathways: ["Project Lead The Way (PLTW)"],
    description:
      "This course is the study of electronic circuits that are used to process and control digital signals. Digital electronics is the foundation of all modern electronic devices such as cellular phones, MP3 players, laptop computers, digital cameras, and high-definition televisions. The major focus of the DE course is to expose students to the design process of combinational and sequential logic design, teamwork, communication methods, engineering standards, and technical documentation.",
  },
  {
    department: "Technology",
    course_name: "PLTW Engineering Design & Development (EDD)",
    course_code: "T775",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: ["Two completed PLTW courses"],
    pathways: ["Project Lead The Way (PLTW)"],
    description:
      "This capstone course allows students to design a solution to a technical problem of their choosing. They have the chance to eliminate one of the “Don’t you hate it when…” statements of the world. This is an engineering research course in which students will work in teams to research, design, test, and construct a solution to an open-ended engineering problem. The product development life cycle and a design process are used to guide and help the team to reach a solution to the problem. The team presents and defends their solution to a panel of outside reviewers at the conclusion of the course. The EDD course allows students to apply all the skills and knowledge learned in previous Project Lead The Way courses. The use of 3D design software helps students design solutions to the problem their team has chosen. This course also engages students in time management and teamwork skills, a valuable asset to students in the future.",
  },
  {
    department: "Science",
    course_name: "Living Environment",
    course_code: "S340 + S340L",

    eligible_grades: [9, 10],
    credits: 1,
    rank_weighting: 1,
    prerequisites: ["Completion of Science 8"],
    pathways: [],
    description:
      "This Regents level life-science course is a comprehensive overview of the major areas of Biology. Major topics include, but are not limited to: Scientific Method, Cell structure and function, Evolution & Classification, Ecology, Biochemistry, Genetics, and Plant & Animal Systems. Emphasis is placed on reading comprehension and language usage. This course ends with a New York State Regents Examination. Successful completion of this course is a New York State graduation requirement. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Living Environment Honors",
    course_code: "S461 + S461L",

    eligible_grades: [9, 10],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Completion of Honors Science 8 with a final average of 85 or higher; OR completion of Science 8 with a final average of 90 or higher with teacher recommendation",
    ],
    pathways: [],
    description:
      "This Regents level life-science course is a comprehensive overview of the major areas of Biology. Major topics include, but are not limited to: Scientific Method, Cell structure and function, Evolution & Classification, Ecology, Biochemistry, Genetics, and Plant & Animal Systems. Emphasis is placed on reading comprehension and language usage. Living Environment Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Living Environment Regents course. This course ends with a New York State Regents Examination. Successful completion of this course is a New York State graduation requirement. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Physical Setting- Earth Science",
    course_code: "S341 + S341L",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Successful completion of Living Environment.",
      "Recommendation: For those with less than a 75% average in Math 8",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course introduces students to Earth’s dynamic systems, the physical world, and Earth’s place in the universe. Major topics include, but are not limited to: Rocks & Minerals, Surface Processes & Landscape Formation, Mapping, Plate Tectonics, Geologic History, Meteorology, and Astronomy. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Physical Setting- Earth Science Honors",
    course_code: "S361 + S361L",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Completion of Living Environment Honors with a final average of 85 or higher; OR completion of Living Environment with a final average of 90 or higher with teacher recommendation",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course introduces students to Earth’s dynamic systems, the physical world, and Earth’s place in the universe. Major topics include, but are not limited to: Rocks & Minerals, Surface Processes & Landscape Formation, Mapping, Plate Tectonics, Geologic History, Meteorology, and Astronomy. Earth Science Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Earth Science Regents course. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Physical Setting - Chemistry",
    course_code: "S541 + S541L",

    eligible_grades: [10, 11],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Completion of Living Environment and Earth Science with a final average of 75 or higher.",
      "Completion of Algebra I and Geometry with a final average of 75 or higher.",
      "(Accelerated science students that have not taken Geometry are eligible with teacher recommendation.)",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course serves as an introduction to the quantitative and qualitative study of matter and energy. Major topics include, but are not limited to: Measurement, Periodic Table, Matter, Energy, Atomic Structure, Bonding, Solutions, Chemical Reactions, Kinetics & Equilibrium, Acids & Bases, Oxidation & Reduction, Nuclear Chemistry, and Organic Chemistry. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Physical Setting - Chemistry Honors",
    course_code: "S561 + S561L",

    eligible_grades: [10, 11],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Completion of Honors Living Environment with a final average of 85 or higher; OR Completion of Living Environment with a final average of 90 or higher",
      "Completion of Honors Earth Science with a final average of 85 or higher; OR Earth Science with a final average of 90 or higher",
      "Completion of Honors Algebra I with a with a final average of 85 or higher; OR Algebra I with a final average of 90 or higher",
      "Completion of Geometry Honors with a final average of 85 or higher; OR Completion of Geometry with a final average of 90 or higher.",
      "(Accelerated science students that have not taken Geometry are eligible with teacher recommendation.)",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course serves as an introduction to the quantitative and qualitative study of matter and energy. Major topics include, but are not limited to: Measurement, Periodic Table, Matter, Energy, Atomic Structure, Bonding, Solutions, Chemical Reactions, Kinetics & Equilibrium, Acids & Bases, Oxidation & Reduction, Nuclear Chemistry, and Organic Chemistry. Chemistry Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Chemistry Regents course. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Practical Chemistry",
    course_code: "S538",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Successful completion of Living Environment",
      "Passing grade on at least 1 Science Regents Exam",
    ],
    pathways: [],
    description:
      "This non-Regents course combines traditional chemistry concepts with applications in the real world. The first half of this course involves the study of chemistry, with a focus on chemical reactivity and qualitative analysis. The second half of this course couples these base concepts with practical concepts integral to students’ lives and future.",
  },
  {
    department: "Science",
    course_name: "Physical Setting - Physics",
    course_code: "S641 + S641L",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1,
    prerequisites: [
      "Completion of a Regents level science course with a final average of 75 or higher",
      "Completion of Regents Geometry with a final average of 75 or higher",
      "A score of 75 or higher on a previous Mathematics Regents Examination",
      "Successful completion of or concurrent enrollment in Algebra II Regents",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course serves as an introductory course in Physics. Major topics include, but are not limited to: Motion, Forces, Energy and Power, Electricity and Magnetism, Waves (including light and sound), Gravitation, and Relationships Between Science, Technology and Society. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Physical Setting - Physics Honors",
    course_code: "S661 + S661L",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.05,
    prerequisites: [
      "Completion of Regents Geometry with a final average of 85 or higher",
      "A score of 85 or higher on a previous Mathematics Regents Examination",
      "A score of 85 or higher on a previous Science Regents Examination",
      "Successful completion of or concurrent enrollment in Algebra II Regents",
    ],
    pathways: [],
    description:
      "This Regents level physical-science course serves as an introductory course in Physics. Major topics include, but are not limited to: Motion, Forces, Energy and Power, Electricity and Magnetism, Waves (including light and sound), Gravitation, and Relationships Between Science, Technology and Society. Physics Honors moves at a faster pace, goes into more depth, and covers additional topics compared to the Physics Regents course. This course ends with a New York State Regents Examination. Note: Completion of a minimum of 1200 minutes of laboratory work is required by New York State in order to be eligible for the New York State Regents Examination.",
  },
  {
    department: "Science",
    course_name: "Conceptual Physics",
    course_code: "S639",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of 2 full-year science courses",
      "Successful completion of 2 full-year math courses",
      "A score of 65 or higher on a previous Mathematics Regents Examination",
      "A score of 65 or higher on a previous Science Regents Examination",
    ],
    pathways: [],
    description:
      "This non-Regents course is an exploratory course into the world of physics, covering topics such as experimental techniques, motion of objects, forces, energy and power, electricity and magnetism, waves (including light and sound), and relationships between science, technology and society. The class typically emphasizes labs, projects and other forms of hands-on learning.",
  },
  {
    department: "Science",
    course_name: "AP Biology/College Biology",
    course_code: "S688 + S688L",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Honors or Regents Biology",
      "Successful completion of Honors or Regents Chemistry",
      "An average of 85 or higher in all previous Honors level science courses; OR an average of 90 or higher in all previous Regents level science courses",
    ],
    pathways: [],
    description:
      "This course is a college level course which follows the curriculum for the Dutchess Community College Bio 105 & 106 curricula courses. This course serves as an interdisciplinary study of basic biological concepts, including the nature of science, matter, the cell, characteristics of living matter, a brief survey of the living world, ecology, homeostasis in organisms, genetics, evolution and a consideration of the structure and function of tissues, organs and organ systems. This course assumes a high school level of chemistry knowledge. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. This course may include labs with dissection components. Enrolled students are eligible for DCC credits for an additional fee payable directly to the College. The final exams are approved by Dutchess Community College. Successful completion of these exams can result in up to 8 college credits issued by Dutchess Community College.",
  },
  {
    department: "Science",
    course_name: "AP Chemistry",
    course_code: "S682 + S682L",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Completion of Honors Chemistry with a final average of 85 or higher; OR completion of Regents Chemistry with a final average of 90 or higher",
      "Completion of Algebra II with a final average of 85 or higher",
    ],
    pathways: [],
    description:
      "AP Chemistry is a lab course that provides students with a college-level foundation to support future advanced course work in chemistry. Students cultivate their understanding of chemistry through inquiry-based investigations, as they explore topics such as: Atomic Structure, Intermolecular Forces and Bonding, Chemical Reactions, Kinetics, Thermodynamics, and Equilibrium. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. This course may include labs with dissection components.",
  },
  {
    department: "Science",
    course_name: "AP Physics C: Mechanics",
    course_code: "S686 + S686L",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Regents Physics",
      "Successful completion of or concurrent enrollment in a Calculus course",
      "Completion of previous Math & Science Regents courses with a final average of 80 or higher",
    ],
    pathways: [],
    description:
      "AP Physics C: Mechanics is a calculus-based, college-level physics course. It covers kinematics; Newton’s laws of motion; work, energy, and power; systems of particles and linear momentum; circular motion and rotation; oscillations; and gravitation. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student.",
  },
  {
    department: "Science",
    course_name: "AP Environmental Science",
    course_code: "S687 + S687L",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of Living Environment & Earth Science",
    ],
    pathways: [],
    description:
      "The AP Environmental Science course is designed to engage students with the scientific principles, concepts, and methodologies required to understand the interrelationships within the natural world. The course requires that students identify and analyze natural and human-made environmental problems, evaluate the relative risks associated with these problems, and examine alternative solutions for resolving or preventing them. Environmental science is interdisciplinary, embracing topics from geology, biology, environmental studies, environmental science, chemistry, and geography. Note: This course closely follows the Advanced Placement Program of The College Board. The syllabus has been reviewed and approved by the AP audit. Each student is expected to take the Advanced Placement Examination in May. A score of 3, 4, or 5 may result in a year’s credit in coursework at many colleges. The fee is determined by The College Board and is the responsibility of the student. This course may include labs with dissection components.",
  },
  {
    department: "Science",
    course_name: "College Forensic Science",
    course_code: "S714 + S714L",

    eligible_grades: [12],
    credits: 1,
    rank_weighting: 1.1,
    prerequisites: [
      "Successful completion of at least 3 Regents Science courses, including Chemistry and Living Environment",
      "Successful completion of 3 Regents Math courses",
      "Recommended by previous year’s science teacher",
    ],
    pathways: [],
    description:
      "Introduction to forensic science with focus upon the application of scientific methods and techniques to criminal justice and law. Methods specifically relevant to crime detection and analysis will be presented. Laboratory included. Note: The curriculum is rated for college level students. Some material presented in this course will be of graphic and explicit nature (e.g. serial killers, medico-legal death investigations and crime scenes). All material will be presented in an academic fashion and solely for the purpose of educational value, but some students may be sensitive to such topics. Students enrolled in this course are eligible for 4 credits available through Syracuse University for an additional fee made payable directly to the university.",
  },
  {
    department: "Science",
    course_name: "Marine Science",
    course_code: "S531",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of at least 2 Regents Science courses",
      "A score of 65 or higher on at least 1 science Regents Examination",
    ],
    pathways: [],
    description:
      "This non-Regents elective course is designed to provide students with a broad knowledge of Earth’s oceanic system. In this course, students will look at some of the basics of marine science that include marine conservation, marine biology, and oceanography. Through the use of visuals, readings, projects, current articles and classroom activities students will have a broader understanding of how our oceans and land are intricately connected.",
  },
  {
    department: "Science",
    course_name: "Astronomy",
    course_code: "S640",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of at least 2 Regents Science courses",
      "A score of 75 or higher on at least 1 Science Regents Examination",
    ],
    pathways: [],
    description:
      "Astronomy is a non-Regents elective exploratory course into the science of our universe, covering topics such as experimental techniques; celestial sphere; scale of the universe; the solar system, sun, moon and planets; comets and meteors; stars and stellar evolution; black holes, super novae and stellar remnants; galaxies and galactic evolution; constellations; modern telescopes and optics; observing techniques; history of astronomy and space exploration; exoplanets; space travel and relativity; life in the universe; dark matter and dark energy; cosmology and the big bang. The class typically emphasizes labs, projects and other forms of hands-on learning.",
  },
  {
    department: "Science",
    course_name: "Human Anatomy, Physiology, and Disease",
    course_code: "S715",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Living Environment & Earth Science",
    ],
    pathways: [],
    description:
      "This course will provide students with a comprehensive study of the human body. Students will develop an understanding of who they are, what makes their bodies work, and what happens when their bodies malfunction. Students will be performing a series of activities and laboratories that assist them in the exploration of the human body with practical everyday application. This course is designed for students with career interests in the health science fields, athletic training and in physical education.",
  },
  {
    department: "Science",
    course_name: "Introductory Plant Science",
    course_code: "S717",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Living Environment",
      "Successful completion of at least 1 other physical science course",
    ],
    pathways: [],
    description:
      "This elective course teaches general plant biology and the practical application of skills related to the care and propagation of plants. Major topics include, but are not limited to: Botany, Soil Chemistry, Hydroponics, Genetics, Plant Reproduction, and Farming. Students in this course will develop valuable skills that may help them attain seasonal or career employment in the field of agriculture.",
  },
  {
    department: "Science",
    course_name: "Environmental Topics",
    course_code: "S716",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Living Environment",
      "Successful completion of at least 1 other physical science course",
    ],
    pathways: [],
    description:
      "This course aims at raising students’ awareness of their natural environment through the scope of current relevant topics in the media. Students will become knowledgeable in fundamental concepts relating to Earth systems, climate, population growth dynamics, sustainability, and natural resource management. Environmental topics will be explored through different lenses; including biological, geological, historical, and socio-political viewpoints. Students will engage in a variety of learning experiences, allowing them to become active participants in environmental stewardship.",
  },
  {
    department: "Science",
    course_name: "Introduction to Animal Science",
    course_code: "S718",

    eligible_grades: [11, 12],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: [
      "Successful completion of Living Environment",
      "Successful completion of at least 1 other physical science course",
    ],
    pathways: [],
    description:
      "The Animal Science course is designed to introduce students to the world of animal agriculture. Students will engage in hands-on-laboratory activities and projects. At the completion of the course, students will submit a comprehensive Producer’s Management Guide for the animal of their choice. Major topics include, but are not limited to: History & Use of Animals, Animal Handling & Safety, Cells & Tissues, Animal Nutrition, Animal Reproduction, Genetics, Animal Health, Animal Products & Marketing.",
  },
  {
    department: "Science",
    course_name: "Science Research I",
    course_code: "S801",

    eligible_grades: [10],
    credits: 1,
    rank_weighting: 1.0,
    prerequisites: ["Successful completion of Living Environment"],
    pathways: ["Science Research Program"],
    description:
      "This course is a year-long introduction into authentic scientific research. Students will research scientific topics of their choice, find a mentor to work with, and conduct original scientific research in partnership with their mentor. Students are also expected to read academic articles, give presentations and to write reports on their experimental results and analysis. All students must present at an annual symposium at the end of the year. Note: This course is part of a Science Research Program that is run in collaboration with the University at Albany. Students in the program can participate in the program for up to 3 years (10th through 12th grades), taking all three levels of science research (I, II and III). Students who complete the entire program, including summer courses, are eligible to receive up to 12 college credits through the University at Albany. University at Albany credits are subject to an additional fee made payable directly to the university.",
  },
  {
    department: "Science",
    course_name: "Science Research II",
    course_code: "S802",

    eligible_grades: [11],
    credits: 0.5,
    rank_weighting: 1.1,
    prerequisites: ["Successful completion of Science Research I"],
    pathways: ["Science Research Program"],
    description:
      "Science Research II is designed for students in their second year in the Science Research Program. Students learn research methodology in the natural and social sciences by accessing scientific databases by using on-line bibliographic search techniques, consulting doctoral-level research scholars, developing hypotheses and performing experiments to test them, and writing research papers and making presentations at scientific symposia. Students enrolled in this course will only meet every other day. Note: This course is part of a Science Research Program that is run in collaboration with the University at Albany. Students in the program can participate in the program for up to 3 years (10th through 12th grades), taking all three levels of science research (I, II and III). Students who complete the entire program, including summer courses, are eligible to receive up to 12 college credits through the University at Albany. Students enrolled in this course are eligible for 4 credits available through University at Albany for an additional fee made payable directly to the university.",
  },
  {
    department: "Science",
    course_name: "Science Research III",
    course_code: "S803",

    eligible_grades: [12],
    credits: 0.5,
    rank_weighting: 1.1,
    prerequisites: ["Successful completion of Science Research I & II"],
    pathways: ["Science Research Program"],
    description:
      "Continuation of work undertaken in Science Research II with emphasis placed upon the communication of results. Students enrolled in this course will only meet every other day. Note: This course is part of a Science Research Program that is run in collaboration with the University at Albany. Students in the program can participate in the program for up to 3 years (10th through 12th grades), taking all three levels of science research (I, II, and III). Students who complete the entire program, including summer courses, are eligible to receive up to 12 college credits through the University at Albany. Students enrolled in this course are eligible for 4 credits available through the University at Albany for an additional fee made payable directly to the university.",
  },
] satisfies Course[];
