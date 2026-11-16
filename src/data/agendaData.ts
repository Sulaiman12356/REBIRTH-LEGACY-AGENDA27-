/**
 * REBIRTH LEGACY AGENDA DATA
 * 
 * Accurately represents the leadership profile and expanded 13-pillar agenda of
 * Onifade Sulaiman Ipesola (Mr. Clarity).
 * Strict adherence to accuracy: no invented achievements, awards, or statistics,
 * and clear distinction between established initiatives, advocacy, collaboration,
 * and resource/approval-dependent goals.
 */

export interface VerifiedHighlight {
  role: string;
  level: string;
  description: string;
  type: "office_held" | "contested" | "ongoing" | "venture";
}

export interface IdentityCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface JourneyMilestone {
  period: string;
  role: string;
  nature: "Official Executive Office" | "Student Representation" | "Electoral Contest" | "Entrepreneurial & Mentorship";
  statusBadge: string;
  summary: string;
  responsibilities: string[];
  contextNote?: string;
}

export type ImplementationCategory =
  | "Intend to Establish"
  | "Intend to Advocate For"
  | "Requires Collaboration"
  | "Resource & Approval Dependent";

export interface AgendaPillar {
  number: number;
  letterTag: string;
  title: string;
  headline?: string;
  shortIntro: string;
  problemAddressed: string;
  proposedSolution: string;
  proposedInitiatives: string[];
  studentParticipation: string;
  expectedBenefit: string;
  progressCommunication: string;
  implementationCategory: ImplementationCategory;
  iconName: string;
  isFlagship?: boolean;
  group: "Core Foundation (Pillars 1–7)" | "Flagship Opportunities (Pillars 8–9)" | "Growth & Governance (Pillars 10–13)";
}

export interface LegacyPrinciple {
  letter: string;
  title: string;
  description: string;
  coreFocus: string[];
}

export interface ImplementationDistinction {
  id: string;
  category: ImplementationCategory;
  subtitle: string;
  description: string;
  examples: string[];
}

export interface ImplementationStage {
  stageNumber: number;
  stageName: string;
  headline: string;
  description: string;
  actionItems: string[];
  keyOutputs: string;
}

export interface AccountabilityCommitment {
  id: string;
  title: string;
  description: string;
  mechanism: string;
  frequency: string;
}

// 1. Verified Experience Highlights (Preserved accurately)
export const verifiedHighlights: VerifiedHighlight[] = [
  {
    role: "Class Representative",
    level: "100L – 400L",
    description: "Continuous student representation, communication, and liaison between students and departmental faculty.",
    type: "ongoing",
  },
  {
    role: "NACOS General Secretary",
    level: "300L",
    description: "Official executive tenure managing departmental administrative coordination, documentation, and stakeholder correspondence.",
    type: "office_held",
  },
  {
    role: "NACOS Financial Secretary Contestant",
    level: "200L",
    description: "Early active engagement in departmental association governance and student leadership elections.",
    type: "contested",
  },
  {
    role: "CEO, Clarity Digital Academy",
    level: "Active",
    description: "Digital entrepreneurship, youth mentorship, and practical digital skills training initiative.",
    type: "venture",
  },
];

// 2. Identity Cards (Preserved)
export const identityCards: IdentityCard[] = [
  {
    id: "student-leader",
    title: "Student Leader",
    subtitle: "Representation & Governance",
    description: "Rooted in grassroots student representation across four academic levels and official administrative service within the NACOS executive council.",
    iconName: "Users",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategist",
    subtitle: "Brand & Audience Communication",
    description: "Experienced in campaign structuring, audience engagement, digital brand growth, and clear communication systems.",
    iconName: "TrendingUp",
  },
  {
    id: "skills-mentor",
    title: "Digital Skills Mentor",
    subtitle: "Empowerment & Guidance",
    description: "Passionate about demystifying practical tech competencies, guiding undergraduates from foundational learning to real capability.",
    iconName: "GraduationCap",
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    subtitle: "Clarity Digital Academy",
    description: "Founder and operator helping young people build practical digital skills, vocational competence, and self-reliance.",
    iconName: "Briefcase",
  },
  {
    id: "ai-enthusiast",
    title: "AI & Digital Solutions Enthusiast",
    subtitle: "Practical Innovation",
    description: "Advocate for responsible AI adoption and practical digital tools to improve student productivity and problem-solving.",
    iconName: "Cpu",
  },
];

// 3. Leadership Journey Milestones (Preserved accurately)
export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "100L — 400L",
    role: "Class Representative",
    nature: "Student Representation",
    statusBadge: "Continuous Representation (100L - 400L)",
    summary: "Continuous grassroots involvement representing peers across every level of the undergraduate Computer Science programme.",
    responsibilities: [
      "Consistent student communication and timely relay of academic timetables, venue updates, and exam notices.",
      "Proactive liaison between class members, course lecturers, and departmental faculty administration.",
      "Coordination and follow-up on test schedules, lecture arrangements, and academic updates.",
      "Handling student concerns, inquiries, and representing collective class interests responsibly.",
    ],
    contextNote: "Direct day-to-day service to fellow computing students from 100L through 400L.",
  },
  {
    period: "200L",
    role: "NACOS Financial Secretary Contestant",
    nature: "Electoral Contest",
    statusBadge: "Position Contested",
    summary: "Demonstrated early commitment to departmental executive service by contesting for the office of Financial Secretary.",
    responsibilities: [
      "Shared early ideas on transparent student dues stewardship and association accountability.",
      "Engaged with students across levels to understand fiscal priorities and student needs.",
      "Gained first-hand insight into NACOS electoral processes and student expectations.",
    ],
    contextNote: "Accurately noted as a position contested for, not an office held.",
  },
  {
    period: "300L",
    role: "NACOS General Secretary",
    nature: "Official Executive Office",
    statusBadge: "Official Executive Office Held",
    summary: "Official service as the General Secretary for the Nigerian Association of Computing Students (OOU Chapter).",
    responsibilities: [
      "Administrative coordination and internal executive council correspondence.",
      "Official departmental documentation, secretarial records, minutes, and archives.",
      "Clear multi-channel communication to the computing student body.",
      "Organisational responsibilities for departmental events, seminars, and official proceedings.",
      "Working constructively with departmental stakeholders, faculty, and student representatives.",
    ],
    contextNote: "Verified executive governance and institutional documentation experience.",
  },
  {
    period: "Other Experience",
    role: "Committee, Mentorship & Entrepreneurship",
    nature: "Entrepreneurial & Mentorship",
    statusBadge: "Co-Curricular & Industry",
    summary: "Active contributions beyond formal association offices through planning committees, digital skills mentorship, and entrepreneurship.",
    responsibilities: [
      "Planning Committee Member: Contributing to the planning and execution of departmental events and student programmes.",
      "Digital Skills Mentor: Guiding students and learners in acquiring practical digital and technology skills.",
      "Digital Marketing Strategist: Supporting digital communication, outreach, and growth initiatives.",
      "CEO, Clarity Digital Academy: Leading an independent digital skills and mentorship initiative.",
    ],
  },
];

// 4. ALL 13 AGENDA PILLARS (Preserved Pillars 1-7 + New Pillars 8-13)
export const allAgendaPillars: AgendaPillar[] = [
  {
    number: 1,
    letterTag: "R",
    title: "Responsive Leadership",
    shortIntro: "A leadership structure that listens, communicates and responds to students' concerns.",
    problemAddressed: "Communication gaps between association executives and students often leave important inquiries, academic updates, and urgent concerns unanswered or delayed.",
    proposedSolution: "Establish structured two-way communication lines, regular consultative feedback sessions, and clear coordination with departmental representatives.",
    proposedInitiatives: [
      "Improve communication between executives and students.",
      "Encourage regular student engagement and feedback.",
      "Create accessible channels for students to submit suggestions and concerns.",
      "Promote responsible and timely responses to student issues.",
      "Encourage collaboration between departmental representatives and association leadership.",
    ],
    studentParticipation: "Students submit concerns and suggestions directly through Class Representatives, accessible WhatsApp channels, and open feedback sessions.",
    expectedBenefit: "Faster resolution of academic inquiries, clearer information flow across all levels, and a leadership team students can easily reach.",
    progressCommunication: "Bi-weekly executive communication digests and status updates shared via official NACOS and class channels.",
    implementationCategory: "Intend to Establish",
    iconName: "MessageSquare",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 2,
    letterTag: "E",
    title: "Educational Excellence",
    shortIntro: "Promote an environment where students can improve academically and access helpful learning resources.",
    problemAddressed: "Many students struggle silently with difficult foundational and advanced computing courses due to fragmented study materials and limited peer revision structures.",
    proposedSolution: "Organise structured peer-to-peer study groups, revision sessions, and shared digital learning resources across academic levels.",
    proposedInitiatives: [
      "Encourage academic support and peer-to-peer learning.",
      "Promote knowledge-sharing sessions among students.",
      "Encourage revision groups and academic discussions.",
      "Support access to relevant learning materials and educational opportunities.",
      "Encourage students to learn from one another across different academic levels.",
    ],
    studentParticipation: "Proficient students volunteer to lead course revision circles while learners across 100L–400L join study sessions and share verified study notes.",
    expectedBenefit: "Improved academic confidence, stronger grasp of core computing courses, and collaborative peer learning across levels.",
    progressCommunication: "Semester academic calendar updates, tutorial schedules, and resource repository announcements.",
    implementationCategory: "Requires Collaboration",
    iconName: "BookOpen",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 3,
    letterTag: "B",
    title: "Better Student Welfare",
    shortIntro: "Promote a more supportive and inclusive environment where students feel considered and represented.",
    problemAddressed: "Students facing academic, financial, or social difficulties often lack clear channels to voice welfare concerns or learn about available support.",
    proposedSolution: "Build an approachable welfare feedback system and responsibly advocate for practical student support within the association's capacity.",
    proposedInitiatives: [
      "Improve communication around student welfare concerns.",
      "Encourage accessible feedback channels for welfare-related issues.",
      "Promote awareness of available student support resources.",
      "Give attention to students who may face financial, academic or social difficulties.",
      "Advocate for practical welfare improvements within the association's capacity.",
    ],
    studentParticipation: "Students share welfare concerns confidentially with the welfare desk or class reps, and join peer support initiatives.",
    expectedBenefit: "A more considerate departmental community where struggling students feel seen, supported, and connected to help.",
    progressCommunication: "Periodic welfare advocacy updates and transparent communication on support awareness campaigns.",
    implementationCategory: "Intend to Advocate For",
    iconName: "HeartHandshake",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 4,
    letterTag: "I",
    title: "Innovation and Digital Empowerment",
    shortIntro: "Encourage students to understand and participate in the opportunities created by technology and innovation.",
    problemAddressed: "Classroom theory alone does not always provide hands-on exposure to modern digital skills, Artificial Intelligence, and collaborative software building.",
    proposedSolution: "Facilitate practical digital skills workshops, AI literacy sessions, and student-led technical projects.",
    proposedInitiatives: [
      "Organise practical digital skills sessions.",
      "Encourage exposure to emerging technologies, including Artificial Intelligence.",
      "Promote student-led technology projects.",
      "Create opportunities for students to share their digital knowledge.",
      "Encourage innovation and problem-solving across different disciplines.",
    ],
    studentParticipation: "Students attend hands-on workshops, propose practical project ideas, and share technical knowledge with peers.",
    expectedBenefit: "Stronger practical tech readiness, responsible AI literacy, and a visible culture of student-built solutions.",
    progressCommunication: "Workshop recaps, student project spotlights, and session attendance summaries.",
    implementationCategory: "Requires Collaboration",
    iconName: "Cpu",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 5,
    letterTag: "R",
    title: "Responsible Representation",
    shortIntro: "Representation should be about accountability, not just occupying an executive position.",
    problemAddressed: "When student representation lacks transparent reporting and resource stewardship, trust between students and executives breaks down.",
    proposedSolution: "Enforce consistent updates on association activities, collective consultation with representatives, and responsible resource management.",
    proposedInitiatives: [
      "Encourage transparent communication about association activities.",
      "Provide accessible updates on projects and initiatives.",
      "Promote responsible management of association resources.",
      "Encourage collective decision-making where appropriate.",
      "Establish a culture of accountability and responsible service.",
    ],
    studentParticipation: "Students review published executive updates, engage during congress/open forums, and hold representatives accountable.",
    expectedBenefit: "Higher institutional trust, ethical stewardship of association resources, and decisions grounded in student input.",
    progressCommunication: "Published executive communiqués, consultative meeting summaries, and transparent project updates.",
    implementationCategory: "Intend to Establish",
    iconName: "ShieldCheck",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 6,
    letterTag: "T",
    title: "Training and Career Development",
    shortIntro: "Help students prepare for opportunities beyond the classroom.",
    problemAddressed: "Students often approach internships, SIWES placements, and graduation without structured career guidance, portfolio feedback, or industry community ties.",
    proposedSolution: "Coordinate career workshops, practical portfolio/CV clinics, and exposure to competitions and internship opportunities.",
    proposedInitiatives: [
      "Encourage career development sessions.",
      "Promote mentorship and professional guidance.",
      "Organise practical workshops and experience-sharing sessions.",
      "Connect students with relevant professional communities where possible.",
      "Encourage exposure to internships, competitions and career opportunities.",
    ],
    studentParticipation: "Students participate in CV/portfolio review clinics, career webinars, and curated opportunity briefings.",
    expectedBenefit: "Better preparation for SIWES, internships, technical competitions, and post-university careers.",
    progressCommunication: "Career session announcements, verified opportunity digests, and post-workshop resource links.",
    implementationCategory: "Requires Collaboration",
    iconName: "Briefcase",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 7,
    letterTag: "H",
    title: "Harmony and Student Unity",
    shortIntro: "Build an association where students from different levels, backgrounds and areas of interest can feel connected.",
    problemAddressed: "Academic level silos often keep 100L, 200L, 300L, and 400L students disconnected from one another and from the wider NACOS community.",
    proposedSolution: "Foster cross-level mentorship, inclusive departmental engagements, and respectful community collaboration.",
    proposedInitiatives: [
      "Encourage interaction across different academic levels.",
      "Promote collaboration between students.",
      "Create opportunities for knowledge exchange.",
      "Encourage peaceful communication and mutual respect.",
      "Build a stronger sense of belonging within NACOS.",
    ],
    studentParticipation: "Students across all levels participate together in mixers, cross-level study groups, and knowledge-sharing events.",
    expectedBenefit: "A warmer, more united departmental culture where every student feels welcomed regardless of level or background.",
    progressCommunication: "Community event highlights and cross-level engagement feedback.",
    implementationCategory: "Intend to Establish",
    iconName: "Users",
    group: "Core Foundation (Pillars 1–7)",
  },
  {
    number: 8,
    letterTag: "08",
    title: "Student Talent and Opportunity Hub",
    headline: "YOUR TALENT DESERVES TO BE SEEN. YOUR ABILITY DESERVES AN OPPORTUNITY.",
    shortIntro: "A structured student talent directory and discovery initiative connecting skills—from beginners to advanced builders—with real opportunities.",
    problemAddressed: "Many talented students can design, code, write, manage social media, or solve technical problems, yet lack the connections or platform to be discovered.",
    proposedSolution: "Build an inclusive NACOS Student Talent Directory categorising skills, portfolios, and learning tracks for transparent opportunity matching.",
    proposedInitiatives: [
      "Create a student talent directory where interested students can register their skills.",
      "Allow students to showcase their portfolios, projects and previous work.",
      "Categorise talents according to their different areas of competence.",
      "Create a process for identifying students whose skills match available opportunities.",
      "Encourage qualified and suitable students to be considered for relevant projects, events, assignments and collaborations.",
      "Promote opportunities for students who are still learning, not just those who already have advanced skills.",
      "Encourage mentorship and skill development for students who need support.",
    ],
    studentParticipation: "Interested students register their skills, portfolios, or learning areas in the directory and get matched based on transparent criteria.",
    expectedBenefit: "Hidden student abilities become visible, beginners gain developmental pathways, and opportunities are shared fairly.",
    progressCommunication: "Directory launch updates, transparent selection criteria guidelines, and featured student showcase announcements.",
    implementationCategory: "Intend to Establish",
    iconName: "Award",
    isFlagship: true,
    group: "Flagship Opportunities (Pillars 8–9)",
  },
  {
    number: 9,
    letterTag: "09",
    title: "Student Collaboration and Agency Initiative",
    headline: "FROM INDIVIDUAL TALENTS TO COLLECTIVE POSSIBILITIES.",
    shortIntro: "Connecting students with complementary skills—tech and non-tech—to form collaborative teams, student agencies, and lasting ventures.",
    problemAddressed: "Students often attend lectures and write exams side-by-side in isolation, missing the chance to combine complementary skills into meaningful projects or ventures.",
    proposedSolution: "Facilitate skill-matching networks where designers, developers, writers, marketers, and business minds form collaborative student-led teams and agencies.",
    proposedInitiatives: [
      "Encourage students with complementary skills to connect.",
      "Promote the formation of student-led teams and agencies.",
      "Create opportunities for students to develop business ideas together.",
      "Encourage collaborative projects across different levels and disciplines.",
      "Promote student entrepreneurship and service-based ventures.",
      "Encourage experienced students to guide those who are just starting.",
      "Create opportunities to showcase student-led agencies and their services.",
      "Encourage collaboration that can continue even after graduation.",
    ],
    studentParticipation: "Students across technical and non-technical disciplines team up to form project groups, co-build service agencies, and showcase their work.",
    expectedBenefit: "Real teamwork experience, cross-disciplinary student ventures, and professional partnerships that can endure beyond graduation.",
    progressCommunication: "Team formation meetups, agency showcase spotlights, and collaborative project updates.",
    implementationCategory: "Requires Collaboration",
    iconName: "Network",
    isFlagship: true,
    group: "Flagship Opportunities (Pillars 8–9)",
  },
  {
    number: 10,
    letterTag: "10",
    title: "Inclusive Skills Development and Mentorship",
    headline: "YOUR BACKGROUND SHOULD NOT LIMIT YOUR OPPORTUNITY TO GROW.",
    shortIntro: "Making practical skill development and peer mentorship accessible regardless of a student's starting point or resources.",
    problemAddressed: "Not every student has equal access to paid bootcamps, personal equipment, mentorship, or structured practical training resources.",
    proposedSolution: "Promote accessible introductory skills sessions, peer-to-peer mentorship, and connections to free learning communities.",
    proposedInitiatives: [
      "Encourage affordable or free introductory skills sessions where feasible.",
      "Promote peer-to-peer mentorship.",
      "Encourage experienced students to share knowledge with beginners.",
      "Identify opportunities for students who lack access to professional learning resources.",
      "Promote practical learning instead of limiting training to theory.",
      "Encourage students to develop skills at their own pace.",
      "Connect interested students with available learning communities and training opportunities.",
    ],
    studentParticipation: "Beginners join self-paced introductory tracks while experienced peers mentor and guide smaller learning groups.",
    expectedBenefit: "No interested student is left behind due to financial barriers or lack of prior technical exposure.",
    progressCommunication: "Published beginner session calendars and curated free community learning directory updates.",
    implementationCategory: "Resource & Approval Dependent",
    iconName: "GraduationCap",
    group: "Growth & Governance (Pillars 10–13)",
  },
  {
    number: 11,
    letterTag: "11",
    title: "Industry Exposure and Professional Networking",
    headline: "PREPARE FOR THE WORLD BEYOND THE CLASSROOM.",
    shortIntro: "Bridging campus life with industry realities through alumni conversations, internships awareness, and portfolio building.",
    problemAddressed: "Students often lack direct exposure to how real industries operate, what employers value, and how to position themselves before graduating.",
    proposedSolution: "Host practical career conversations with alumni and industry practitioners alongside internship and SIWES readiness discussions.",
    proposedInitiatives: [
      "Encourage interactions with industry professionals and alumni.",
      "Promote career conversations and professional experience-sharing sessions.",
      "Encourage internship and industrial training awareness.",
      "Create exposure to entrepreneurship and professional opportunities.",
      "Encourage students to build professional portfolios and networks.",
      "Promote practical discussions around career paths and emerging industries.",
    ],
    studentParticipation: "Students attend alumni panels, ask practical career questions, and build stronger public portfolios.",
    expectedBenefit: "Clearer career roadmaps, stronger professional networks, and informed readiness for industrial training and job markets.",
    progressCommunication: "Event announcements, speaker session summaries, and shared career preparation notes.",
    implementationCategory: "Requires Collaboration",
    iconName: "Globe",
    group: "Growth & Governance (Pillars 10–13)",
  },
  {
    number: 12,
    letterTag: "12",
    title: "Student Innovation and Entrepreneurship",
    headline: "DON'T JUST WAIT FOR OPPORTUNITIES. LEARN TO CREATE VALUE.",
    shortIntro: "Cultivating problem-solving mindsets where students turn ideas into practical products, services, and sustainable businesses.",
    problemAddressed: "Over-reliance on conventional job hunting limits students from seeing everyday problems as opportunities to build value and create services.",
    proposedSolution: "Support student idea-sharing, entrepreneurship showcases, and awareness of innovation competitions.",
    proposedInitiatives: [
      "Encourage student business ideas and innovation.",
      "Promote idea-sharing and collaborative problem-solving.",
      "Encourage student entrepreneurship showcases.",
      "Support networking between students with complementary business interests.",
      "Promote awareness of relevant competitions and innovation programmes.",
      "Encourage students to turn practical problems into useful projects.",
    ],
    studentParticipation: "Student founders, builders, and problem-solvers pitch concepts, join innovation programmes, and showcase campus solutions.",
    expectedBenefit: "An entrepreneurial campus culture where computing students see themselves as creators and problem-solvers.",
    progressCommunication: "Innovation challenge announcements, showcase highlights, and founder spotlights.",
    implementationCategory: "Resource & Approval Dependent",
    iconName: "Lightbulb",
    group: "Growth & Governance (Pillars 10–13)",
  },
  {
    number: 13,
    letterTag: "13",
    title: "Communication, Transparency and Accountability",
    headline: "STUDENTS DESERVE TO KNOW. STUDENTS DESERVE TO BE HEARD.",
    shortIntro: "Building lasting institutional trust through open updates, consultative conversations, and honest reporting when challenges arise.",
    problemAddressed: "Students often feel excluded from decisions until after they are made, creating unnecessary friction and distrust.",
    proposedSolution: "Institutionalise regular activity updates, accessible programme notices, and open feedback loops before and during implementation.",
    proposedInitiatives: [
      "Encourage regular updates on association activities.",
      "Promote clear communication about initiatives and their progress.",
      "Encourage constructive feedback from students.",
      "Make information about available programmes and opportunities accessible.",
      "Promote responsible use of association resources.",
      "Encourage clear communication when plans change or challenges arise.",
    ],
    studentParticipation: "Students engage in pre-decision feedback polls, review published updates, and raise questions openly.",
    expectedBenefit: "A transparent, participatory NACOS culture built on mutual respect and shared ownership.",
    progressCommunication: "Regular association bulletins, midterm reviews, and honest constraint briefings.",
    implementationCategory: "Intend to Establish",
    iconName: "Megaphone",
    group: "Growth & Governance (Pillars 10–13)",
  },
];

// 5. Flagship Initiative Journeys (Section 6 & Section 7)
export const talentHubData = {
  pillarNumber: 8,
  title: "Student Talent and Opportunity Hub",
  headline: "YOUR TALENT DESERVES TO BE SEEN. YOUR ABILITY DESERVES AN OPPORTUNITY.",
  visionParagraphs: [
    "I believe there are many talented students within our association whose abilities remain undiscovered.",
    "Some students can design, develop websites, write, create content, manage social media, conduct research, build products, organise events, solve technical problems and perform other valuable tasks. Unfortunately, not everyone has the connections or platform to showcase what they can do.",
    "I want to promote a student talent initiative that gives students an opportunity to list their skills, showcase their work and become discoverable for relevant opportunities.",
  ],
  initiatives: [
    "Create a student talent directory where interested students can register their skills.",
    "Allow students to showcase their portfolios, projects and previous work.",
    "Categorise talents according to their different areas of competence.",
    "Create a process for identifying students whose skills match available opportunities.",
    "Encourage qualified and suitable students to be considered for relevant projects, events, assignments and collaborations.",
    "Promote opportunities for students who are still learning, not just those who already have advanced skills.",
    "Encourage mentorship and skill development for students who need support.",
  ],
  equalOpportunityPrinciple: {
    title: "Important Principle: Equal Opportunity",
    points: [
      "This initiative must not become a platform that only celebrates already-established talents.",
      "Students who are less privileged or have limited access to professional training should also have opportunities to learn, develop and showcase their abilities.",
      "The aim is to help students grow, not to create another system that leaves beginners behind.",
      "Selection for opportunities should be based on relevant skills, project requirements, transparent criteria and suitability.",
    ],
    closingGoal: "Talent should not remain hidden because opportunity was never accessible.",
  },
  journeySteps: [
    { step: 1, label: "Student Registration", detail: "Register skills, interests & level" },
    { step: 2, label: "Talent Showcase", detail: "Display portfolios & sample work" },
    { step: 3, label: "Skill Discovery", detail: "Categorised by competence & track" },
    { step: 4, label: "Opportunity Matching", detail: "Transparent project & event matching" },
    { step: 5, label: "Collaboration & Growth", detail: "Mentorship & real experience" },
  ],
};

export const collaborationAgencyData = {
  pillarNumber: 9,
  title: "Student Collaboration and Agency Initiative",
  headline: "FROM INDIVIDUAL TALENTS TO COLLECTIVE POSSIBILITIES.",
  visionParagraphs: [
    "I believe students should not only meet one another to attend lectures and write examinations. We should also have opportunities to connect, collaborate, exchange ideas and build something meaningful together.",
    "A student who understands graphic design could work with a student who understands web development. Someone with business knowledge could work with a marketer, content creator or technical specialist.",
    "Together, these students could build an agency, a business or a project that creates value beyond their academic environment.",
  ],
  initiatives: [
    "Encourage students with complementary skills to connect.",
    "Promote the formation of student-led teams and agencies.",
    "Create opportunities for students to develop business ideas together.",
    "Encourage collaborative projects across different levels and disciplines.",
    "Promote student entrepreneurship and service-based ventures.",
    "Encourage experienced students to guide those who are just starting.",
    "Create opportunities to showcase student-led agencies and their services.",
    "Encourage collaboration that can continue even after graduation.",
  ],
  inclusiveNote: "The initiative supports different interests and business areas—not only technology-related ventures.",
  biggerPicture: {
    title: "The Bigger Picture",
    text: "Students do not have to build everything alone. A university environment brings together people with different knowledge, abilities and ambitions. We should create more opportunities to turn those differences into productive relationships. We can achieve more together than we can achieve in isolation.",
  },
  journeySteps: [
    { step: 1, label: "Individual Students", detail: "Diverse skills & ambitions" },
    { step: 2, label: "Connections", detail: "Complementary skill pairing" },
    { step: 3, label: "Collaborative Teams", detail: "Cross-level & cross-discipline" },
    { step: 4, label: "Student Agencies", detail: "Service & product ventures" },
    { step: 5, label: "Projects & Clients", detail: "Real-world value & continuity" },
  ],
};

// 6. LEGACY Principles (Preserved)
export const legacyPrinciples: LegacyPrinciple[] = [
  {
    letter: "L",
    title: "Leadership with Integrity",
    description: "Leading with honesty, fairness, responsibility, and unwavering respect for every computing student.",
    coreFocus: [
      "Fairness and transparency in all association decisions.",
      "Ethical stewardship of student association responsibilities.",
      "Respectful and dignified engagement with every student.",
    ],
  },
  {
    letter: "E",
    title: "Equal Opportunity",
    description: "Encouraging fair, unobstructed access to programmes, information, learning resources, and growth opportunities.",
    coreFocus: [
      "Inclusive access for beginners and experienced students alike.",
      "Equal participation across 100L, 200L, 300L, and 400L.",
      "Transparent criteria for projects, trainings, and delegations.",
    ],
  },
  {
    letter: "G",
    title: "Growth and Development",
    description: "Deliberately supporting academic, professional, entrepreneurial, and technological advancement.",
    coreFocus: [
      "Balancing academic excellence with practical real-world skills.",
      "Supporting student entrepreneurship and agency collaboration.",
      "Building lasting capability rather than one-off events.",
    ],
  },
  {
    letter: "A",
    title: "Accountability and Transparency",
    description: "Promoting clear communication, responsible decisions, and honest reporting on association commitments.",
    coreFocus: [
      "Regular public updates on proposed initiatives and status.",
      "Honest disclosure when resource limits or delays arise.",
      "Responsible stewardship of association resources.",
    ],
  },
  {
    letter: "C",
    title: "Collaboration and Community",
    description: "Strengthening cooperation among students, departmental leaders, faculty, alumni, and relevant partners.",
    coreFocus: [
      "Active partnership with Class Representatives across all levels.",
      "Constructive dialogue with departmental leadership and lecturers.",
      "Meaningful ties with alumni and industry communities.",
    ],
  },
  {
    letter: "Y",
    title: "Your Voice Matters",
    description: "Making student feedback, concerns, and suggestions an indispensable part of departmental priorities.",
    coreFocus: [
      "Open dialogue before major decisions are finalized.",
      "Direct communication channels for questions and feedback.",
      "Leadership shaped by real student aspirations.",
    ],
  },
];

// 7. Honest Implementation Approach Distinctions (Section 13)
export const implementationDistinctions: ImplementationDistinction[] = [
  {
    id: "establish",
    category: "Intend to Establish",
    subtitle: "Direct Executive & Secretariat Action",
    description: "Structured internal systems that can be initiated directly through the executive council, Class Rep coordination, and digital communication channels.",
    examples: [
      "Accessible student feedback and inquiry channels.",
      "Regular association communication updates and bulletins.",
      "The Student Talent Directory framework and registration process.",
      "Structured Class Representative consultative check-ins.",
    ],
  },
  {
    id: "advocate",
    category: "Intend to Advocate For",
    subtitle: "Constructive Representation",
    description: "Welfare and academic environment improvements that require formal representation, dialogue, and presentation of student concerns to departmental authorities.",
    examples: [
      "Practical improvements around student welfare concerns.",
      "Timely communication around lecture venues and academic scheduling.",
      "Attention to students facing academic, financial, or onboarding challenges.",
      "Supportive environments for freshmen and Direct Entry students.",
    ],
  },
  {
    id: "collaborate",
    category: "Requires Collaboration",
    subtitle: "Shared Ownership & Teamwork",
    description: "Community-powered initiatives driven by volunteer student mentors, cross-level peers, alumni, and external tech communities.",
    examples: [
      "Peer-to-peer revision groups and cross-level academic tutorials.",
      "Student Collaboration & Agency formation across disciplines.",
      "Alumni career conversations and portfolio review sessions.",
      "Peer-led practical workshops and knowledge-sharing circles.",
    ],
  },
  {
    id: "resources",
    category: "Resource & Approval Dependent",
    subtitle: "Responsible Planning & Feasibility",
    description: "Larger programmes, physical events, and infrastructure-dependent trainings whose scale depends on available association funds and official institutional approval.",
    examples: [
      "Large-scale physical workshops, hackathons, and entrepreneurship showcases.",
      "Subsidised or free introductory skills training logistics.",
      "Use of departmental halls, laboratories, and campus facilities.",
      "Any initiative involving external partners or institutional clearances.",
    ],
  },
];

// 8. 4 Implementation Stages (Preserved & refined)
export const implementationStages: ImplementationStage[] = [
  {
    stageNumber: 1,
    stageName: "Listen & Assess",
    headline: "Understanding Real Realities on the Ground",
    description: "Before launching initiatives, leadership must listen to students across all levels to establish genuine priorities and assess available capacity.",
    actionItems: [
      "Gather structured feedback across 100L–400L cohorts.",
      "Consult with Class Representatives on immediate academic and welfare needs.",
      "Review available resources, volunteers, and departmental calendar constraints.",
    ],
    keyOutputs: "Needs Assessment & Priority Map",
  },
  {
    stageNumber: 2,
    stageName: "Plan & Prioritise",
    headline: "Translating Vision into Realistic Roadmaps",
    description: "Map commitments against realistic timelines, assign dedicated working teams, and distinguish immediate steps from approval-dependent programmes.",
    actionItems: [
      "Set practical semester milestones aligned with academic schedules.",
      "Form focused student sub-committees and volunteer teams.",
      "Prepare clear proposals for required departmental approvals.",
    ],
    keyOutputs: "Semester Operational Roadmap",
  },
  {
    stageNumber: 3,
    stageName: "Execute & Collaborate",
    headline: "Delivering Through Teamwork & Transparency",
    description: "Launch approved initiatives collaboratively with student mentors, teams, and alumni while keeping the student body informed throughout.",
    actionItems: [
      "Roll out peer learning circles, talent directory, and team meetups.",
      "Coordinate career sessions and practical skills workshops.",
      "Communicate dates, participation guidelines, and updates clearly.",
    ],
    keyOutputs: "Active Programmes & Open Participation",
  },
  {
    stageNumber: 4,
    stageName: "Review & Report",
    headline: "Measuring Benefit, Listening & Improving",
    description: "Evaluate each programme honestly, gather student feedback, share progress openly, and document processes for future administrations.",
    actionItems: [
      "Collect post-programme student impressions and suggestions.",
      "Publish honest progress updates, including constraints encountered.",
      "Document workflows so initiatives endure beyond a single tenure.",
    ],
    keyOutputs: "Progress Reports & Continuity Records",
  },
];

// 9. Proposed Accountability Framework (Preserved)
export const accountabilityFramework: AccountabilityCommitment[] = [
  {
    id: "progress-briefs",
    title: "Periodic Progress Briefs",
    description: "Regular written digests detailing executive activities, ongoing consultations, and upcoming academic or skill programmes.",
    mechanism: "Published digital bulletins via NACOS & Class Rep channels.",
    frequency: "Regular Semester Updates",
  },
  {
    id: "feedback-surveys",
    title: "Accessible Feedback Conduits",
    description: "Open communication channels so students can ask questions, share concerns, and propose ideas before decisions are finalised.",
    mechanism: "WhatsApp community, Class Rep desk & open forums.",
    frequency: "Continuous Access",
  },
  {
    id: "transparent-stewardship",
    title: "Responsible Resource Reporting",
    description: "Clear communication on how association resources are managed and allocated across student initiatives.",
    mechanism: "End-of-programme summaries and financial updates.",
    frequency: "Per Initiative & Semester",
  },
  {
    id: "honest-communication",
    title: "Honest Constraint Disclosure",
    description: "Clear, respectful explanations whenever institutional approvals, timing, or resource limits require plans to adapt.",
    mechanism: "Direct executive briefings explaining status & next steps.",
    frequency: "Whenever Plans Shift",
  },
];

// 10. Central Philosophy & Why REBIRTH LEGACY (Section 12 + Section 10)
export const centralPhilosophy = {
  headline: "WE ARE NOT JUST IN SCHOOL TO EARN CERTIFICATES. WE ARE HERE TO BUILD CONNECTIONS, DISCOVER POSSIBILITIES AND PREPARE FOR LIFE.",
  paragraphs: [
    "Our time in school should be about more than attending lectures, writing examinations and obtaining certificates.",
    "It should also be a time to discover our abilities, meet people with different perspectives, build meaningful relationships, develop practical skills and explore opportunities that can shape our future.",
    "The connections we build today can become the collaborations, businesses, friendships and professional relationships that support us tomorrow.",
    "Through REBIRTH LEGACY, I want to encourage a NACOS community where academic growth, personal development, networking, innovation and opportunity can exist together.",
    "Because the people we meet and the things we build today can influence the opportunities we create tomorrow.",
  ],
};

export const whyRebirthLegacy = {
  rebirth: {
    title: "REBIRTH",
    subtitle: "Renew & Rebuild",
    description: "Breathing fresh energy, responsive communication, and practical opportunity into NACOS.",
    points: [
      { label: "Renewal", text: "Revitalising student participation and breaking departmental disconnection." },
      { label: "Fresh Perspectives", text: "Approaching student representation and skill growth with practical systems." },
      { label: "Improved Communication", text: "Closing the distance between the executive council and every student." },
      { label: "New Opportunities", text: "Creating pathways for talent discovery, team building, and career readiness." },
    ],
  },
  legacy: {
    title: "LEGACY",
    subtitle: "Leave a Legacy",
    description: "Building structures, standards, and relationships that outlive a single executive tenure.",
    points: [
      { label: "Integrity", text: "Leading with honesty, fairness, and respect for every student." },
      { label: "Continuity", text: "Documenting programmes and directories so progress endures." },
      { label: "Accountability", text: "Staying answerable to the students who grant the mandate." },
      { label: "Lasting Value", text: "Leaving OOU NACOS more united, resourceful, and opportunity-driven." },
    ],
  },
  closingQuote: "REBIRTH IS ABOUT THE CHANGE WE SEEK. LEGACY IS ABOUT THE IMPACT WE LEAVE BEHIND.",
};
