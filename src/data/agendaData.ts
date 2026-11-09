/**
 * REBIRTH LEGACY AGENDA DATA
 * 
 * Accurately represents the leadership profile and agenda of Onifade Sulaiman Ipesola (Mr. Clarity).
 * Strict adherence to content guidelines: no invented statistics, no unsupported claims,
 * and clear separation of past verified roles from future proposed initiatives.
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

export interface RebirthPillar {
  letter: string;
  title: string;
  meaning: string;
  problemAddressed: string;
  proposedInitiatives: string[];
  implementationMethod: string[];
  measurableProgress: string[];
  category: "Leadership" | "Academics" | "Welfare" | "Tech & Skills" | "Governance" | "Career" | "Community";
}

export interface LegacyPrinciple {
  letter: string;
  title: string;
  description: string;
  coreFocus: string[];
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

// 1. Verified Experience Highlights
export const verifiedHighlights: VerifiedHighlight[] = [
  {
    role: "Class Representative",
    level: "100L – 400L",
    description: "Consistent 4-year student representation, communication, and liaison between students and departmental faculty.",
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

// 2. Identity Cards
export const identityCards: IdentityCard[] = [
  {
    id: "student-leader",
    title: "Student Leader",
    subtitle: "Representation & Governance",
    description: "Deeply rooted in grassroot student representation across four academic levels and official administrative service within the NACOS executive council.",
    iconName: "Users",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategist",
    subtitle: "Brand & Audience Communication",
    description: "Experienced in campaign structuring, audience engagement, digital brand growth, and high-clarity communication systems.",
    iconName: "TrendingUp",
  },
  {
    id: "skills-mentor",
    title: "Digital Skills Mentor",
    subtitle: "Empowerment & Guidance",
    description: "Passionate about demystifying practical tech competencies, guiding undergraduates from zero experience to demonstrable digital capabilities.",
    iconName: "GraduationCap",
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    subtitle: "Clarity Digital Academy",
    description: "Founder and operator solving digital skills deficits through structured curricula, vocational training, and self-reliance guidance.",
    iconName: "Briefcase",
  },
  {
    id: "ai-enthusiast",
    title: "AI & Digital Solutions Enthusiast",
    subtitle: "Practical Innovation",
    description: "Advocate for ethical and productive AI adoption, leveraging modern digital tools to enhance academic efficiency and solve departmental workflow challenges.",
    iconName: "Cpu",
  },
];

// 3. Leadership Journey Milestones
export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "100L — 400L",
    role: "Class Representative",
    nature: "Student Representation",
    statusBadge: "Continuous Service (100L - 400L)",
    summary: "Continuous grassroot involvement representing peers through every semester of the undergraduate curriculum.",
    responsibilities: [
      "Reliable student communication and timely relay of academic timetables, venue updates, and exam notifications.",
      "Proactive liaison between class members, course lecturers, and departmental faculty administration.",
      "Coordination and follow-up on test schedules, lecture arrangements, and course material distribution.",
      "Handling student complaints, academic inquiries, and representing collective class interests responsibly.",
    ],
    contextNote: "Direct daily service to fellow computing students across four academic sessions.",
  },
  {
    period: "200L",
    role: "NACOS Financial Secretary Contestant",
    nature: "Electoral Contest",
    statusBadge: "Electoral Contest Experience",
    summary: "Demonstrated early readiness to serve at the departmental executive level through a competitive student union election.",
    responsibilities: [
      "Formulated early student financial accountability and transparent dues stewardship ideas.",
      "Engaged across student constituencies to understand fiscal priorities and welfare needs.",
      "Deepened understanding of departmental association electoral processes and student body expectations.",
    ],
    contextNote: "Accurately noted as a position contested for, marking an important step in leadership growth.",
  },
  {
    period: "300L",
    role: "NACOS General Secretary",
    nature: "Official Executive Office",
    statusBadge: "Official Executive Tenure",
    summary: "Official service as the chief administrative and documentation officer for the Nigerian Association of Computing Students (OOU Chapter).",
    responsibilities: [
      "Executive administrative coordination and internal council correspondence.",
      "Official departmental documentation, secretarial records, minutes, and archives.",
      "Clear multi-channel communication to the entire computing student body.",
      "Close collaboration with departmental faculty, staff advisors, and student executives.",
      "Organisational support for departmental events, academic seminars, and official proceedings.",
    ],
    contextNote: "Proven track record of high-stakes association governance and institutional documentation.",
  },
  {
    period: "Professional & Co-Curricular",
    role: "Other Experience & Community Service",
    nature: "Entrepreneurial & Mentorship",
    statusBadge: "Co-Curricular & Industry",
    summary: "Active leadership outside statutory union politics, contributing to entrepreneurship, digital skills mentorship, and committee planning.",
    responsibilities: [
      "Planning Committee Member: Contributing to the coordination of departmental events and student programs.",
      "Digital Skills Mentor: Guiding students and young adults in acquiring in-demand digital and tech skills.",
      "Digital Marketing Strategist: Designing messaging and growth frameworks for businesses and student ventures.",
      "CEO, Clarity Digital Academy: Building an independent digital training platform committed to skill empowerment.",
    ],
  },
];

// 4. REBIRTH Pillars (Part A: 7 Pillars of Renewal)
export const rebirthPillars: RebirthPillar[] = [
  {
    letter: "R",
    title: "Responsive Leadership",
    meaning: "A leadership structure that actively listens, communicates transparently, and responds promptly to students' academic and administrative concerns.",
    problemAddressed: "Persistent communication lag between departmental leadership and students, leaving urgent inquiries and student concerns unaddressed or delayed.",
    proposedInitiatives: [
      "Accessible and open student communication channels.",
      "Regular periodic student feedback and town-hall check-ins.",
      "Prompt and structured dissemination of departmental circulars and academic information.",
      "Systematic follow-up and status logging on reported student challenges.",
    ],
    implementationMethod: [
      "Establish designated Class Rep liaison communication desks for real-time escalation.",
      "Publish weekly departmental digests summarizing upcoming academic events and notices.",
      "Schedule semesterly open-door consultative sessions between executives and students.",
    ],
    measurableProgress: [
      "Turnaround time for responding to student inquiries logged by the Secretariat.",
      "Frequency and consistency of published NACOS departmental bulletins.",
      "Documented student satisfaction ratings from periodic feedback polls.",
    ],
    category: "Leadership",
  },
  {
    letter: "E",
    title: "Educational Excellence",
    meaning: "Promoting proactive academic support, collaborative peer learning, and a stronger, resource-rich academic environment.",
    problemAddressed: "High academic stress, gaps during transitions between levels (e.g. 100L foundational courses to 200L/300L advanced programming), and fragmented study materials.",
    proposedInitiatives: [
      "Structured peer-to-peer learning circles and peer study clinics.",
      "Pre-examination academic tutorials and practical revision support.",
      "Curated repository for verified past questions, course outlines, and recommended references.",
      "Cross-level academic mentorship pairing seniors with junior students.",
      "Improved student access to critical academic deadlines and guidelines.",
    ],
    implementationMethod: [
      "Collaborate with course lecturers and proficient senior students to coordinate volunteer tutorial sessions.",
      "Organize accessible digital archives of study resources organized by level and course code.",
      "Facilitate dedicated hands-on coding clinics before practical examinations and defense.",
    ],
    measurableProgress: [
      "Number of structured tutorial and revision sessions organized per academic session.",
      "Active student participation and attendance in peer learning clinics.",
      "Breadth of open-access academic revision guides prepared for computing courses.",
    ],
    category: "Academics",
  },
  {
    letter: "B",
    title: "Better Student Welfare",
    meaning: "Giving deliberate attention to students' everyday concerns, mental wellness, and cultivating a supportive, humane departmental experience.",
    problemAddressed: "Students often navigate logistical, venue, and academic stress in isolation without structured avenues for advocacy or practical assistance.",
    proposedInitiatives: [
      "Structured and confidential student welfare feedback channel.",
      "Better communication of welfare matters and health advisories.",
      "Responsible advocacy for lecture venue cleanliness, lab ventilation, and power coordination.",
      "Early support mechanisms for freshmen during departmental registration and clearance.",
    ],
    implementationMethod: [
      "Create an accessible Welfare Advisory desk managed under the executive council.",
      "Engage department venue coordinators and laboratory technologists to ensure optimal learning conditions.",
      "Publish friendly 'Freshman Clearance & Academic Survival Guides' at session resumption.",
    ],
    measurableProgress: [
      "Resolution and referral rate of logged welfare inquiries.",
      "Documented advocacy engagements held regarding laboratory and lecture room facilities.",
      "Feedback from newly admitted students regarding orientation and onboarding ease.",
    ],
    category: "Welfare",
  },
  {
    letter: "I",
    title: "Innovation and Digital Empowerment",
    meaning: "Encouraging computing students to develop practical, industry-grade technology competencies beyond theoretical classroom lectures.",
    problemAddressed: "A widening gap between theoretical computer science concepts taught in class and the practical modern tech stacks demanded by global software and tech markets.",
    proposedInitiatives: [
      "Hands-on technology workshops covering software engineering, UI/UX, and cloud tools.",
      "Practical digital skills sessions including modern version control (Git/GitHub).",
      "Collaborative coding groups, open-source project initiatives, and study jams.",
      "Responsible AI awareness, practical prompting, and ethical machine learning education.",
      "Technical hackathons, project showcases, and departmental innovation challenges.",
    ],
    implementationMethod: [
      "Partner with skilled student developers, alumni practitioners, and developer communities (e.g. GDG, GitHub Campus).",
      "Organize modular weekend technical build-alongs focusing on deployable projects.",
      "Host an annual NACOS OOU Tech Showcase featuring top student-built solutions.",
    ],
    measurableProgress: [
      "Number of practical hands-on workshops conducted per academic year.",
      "Number of GitHub repositories and verified projects completed by participating students.",
      "Student participation across diverse technical tracks (Web, Mobile, Data, AI).",
    ],
    category: "Tech & Skills",
  },
  {
    letter: "R",
    title: "Responsible Representation",
    meaning: "Representing computing students fairly, transparently, ethically, and responsibly before university and faculty stakeholders.",
    problemAddressed: "A lack of institutional transparency, occasional disconnect between student expectations and administrative decisions, and unrepresentative executive actions.",
    proposedInitiatives: [
      "Consistent two-way communication between the executive council and the student body.",
      "Responsible, diplomatic, and constructive engagement with faculty leadership and lecturers.",
      "Fair, unbiased consideration of issues affecting students from all levels (100L through 400L).",
      "Clear, published briefings on council deliberations, financial decisions, and commitments.",
    ],
    implementationMethod: [
      "Institute consultative meetings with Class Representatives prior to major association decisions.",
      "Present well-articulated, respectful memos to departmental authorities on student academic concerns.",
      "Issue periodic executive communiqués following major stakeholder meetings.",
    ],
    measurableProgress: [
      "Number of Class Representative consultative sessions conducted.",
      "Documentation of all formal student memos presented to departmental authorities.",
      "Timely publication of executive communiqués within 48 hours of key decisions.",
    ],
    category: "Governance",
  },
  {
    letter: "T",
    title: "Training and Career Development",
    meaning: "Connecting students with actionable opportunities, industry insights, and career-readiness skills to excel in internships and the tech workforce.",
    problemAddressed: "Uncertainty surrounding SIWES/IT placements, unoptimized tech resumes and portfolios, and lack of direct exposure to alumni working in top tech ecosystems.",
    proposedInitiatives: [
      "Career development masterclasses with practicing software engineers and tech professionals.",
      "Comprehensive CV, LinkedIn, and developer portfolio review workshops.",
      "Alumni engagement webinars and industry mentorship sessions.",
      "Early awareness campaigns for internships, SIWES placements, and fellowship openings.",
      "Discussions on emerging technology careers, freelancing, and digital entrepreneurship.",
    ],
    implementationMethod: [
      "Host quarterly virtual alumni fireside chats exploring practical career pathways.",
      "Conduct practical resume critique clinics prior to industrial training application seasons.",
      "Curate a verified bulletin of vetted student internship and scholarship opportunities.",
    ],
    measurableProgress: [
      "Number of students attending career workshops and resume clinics.",
      "Documented alumni engagement sessions hosted by the department.",
      "Volume of verified internship and IT openings communicated to the student body.",
    ],
    category: "Career",
  },
  {
    letter: "H",
    title: "Harmony and Student Unity",
    meaning: "Building an inclusive, bonded, and cooperative NACOS community where computing students across all levels collaborate without barriers.",
    problemAddressed: "Level siloing where students only interact within their immediate cohort, leaving freshmen and Direct Entry students feeling detached from the broader community.",
    proposedInitiatives: [
      "Cross-level collaborative programs connecting senior and junior colleagues.",
      "Academic and healthy social engagements that foster lasting camaraderie.",
      "Knowledge-sharing lightning talks where students teach what they have built.",
      "Inclusive departmental activities celebrating computing talent and diversity.",
      "Strengthened community cohesion across all cohorts and academic levels.",
    ],
    implementationMethod: [
      "Organize an annual NACOS Orientation Mixer and welcome program for new intakes.",
      "Create peer-assisted problem-solving groups that blend different academic levels.",
      "Incorporate departmental recognition for community builders and academic contributors.",
    ],
    measurableProgress: [
      "Attendance representation across all four academic levels at departmental activities.",
      "Participation rates of 100L and Direct Entry students in departmental associations.",
      "Qualitative feedback on departmental community spirit and belonging.",
    ],
    category: "Community",
  },
];

// 5. LEGACY Principles (Part B: 6 Principles of Lasting Impact)
export const legacyPrinciples: LegacyPrinciple[] = [
  {
    letter: "L",
    title: "Leadership with Integrity",
    description: "Leading with honesty, fairness, responsibility, and unwavering respect for every computing student.",
    coreFocus: [
      "Zero tolerance for bias or favoritism in program allocations.",
      "Open and ethical stewardship of student association responsibilities.",
      "Respectful and dignified treatment of every student, regardless of level.",
    ],
  },
  {
    letter: "E",
    title: "Equal Opportunity",
    description: "Encouraging fair, unobstructed access to programmes, information, learning resources, and growth opportunities.",
    coreFocus: [
      "Democratized access to departmental workshops and training resources.",
      "Equal opportunity for 100L, 200L, 300L, and 400L students to participate.",
      "Transparent selection criteria for competitive tech and academic delegations.",
    ],
  },
  {
    letter: "G",
    title: "Growth and Development",
    description: "Deliberately supporting academic, professional, entrepreneurial, and technological advancement.",
    coreFocus: [
      "Holistic development: academic success paired with practical tech competencies.",
      "Encouraging student entrepreneurship and technology self-reliance.",
      "Long-term capability building rather than fleeting cosmetic events.",
    ],
  },
  {
    letter: "A",
    title: "Accountability and Transparency",
    description: "Promoting clear communication, responsible decisions, and honest reporting on association commitments.",
    coreFocus: [
      "Regular public reporting on proposed initiatives and their implementation status.",
      "Honest communication when institutional constraints or delays arise.",
      "Open financial stewardship and clear accounting of association programs.",
    ],
  },
  {
    letter: "C",
    title: "Collaboration and Community",
    description: "Strengthening cooperation among students, departmental leaders, faculty, alumni, and relevant partners.",
    coreFocus: [
      "Active synergy with class representatives as vital grassroot partners.",
      "Respectful bridge-building between the student body and academic faculty.",
      "Leveraging the expertise and goodwill of OOU Computer Science alumni.",
    ],
  },
  {
    letter: "Y",
    title: "Your Voice Matters",
    description: "Making student feedback, concerns, and suggestions an indispensable part of departmental priorities.",
    coreFocus: [
      "Direct channels for questions, criticisms, and innovative proposals.",
      "Consultative approach before rolling out major student initiatives.",
      "Ensuring that student leadership remains a mirror of student aspirations.",
    ],
  },
];

// 6. Implementation Stages
export const implementationStages: ImplementationStage[] = [
  {
    stageNumber: 1,
    stageName: "Listen & Assess",
    headline: "Understanding Real Realities on the Ground",
    description: "Before initiating programs, leadership must systematically listen to students across all cohorts to establish genuine priorities and evaluate existing resources.",
    actionItems: [
      "Conduct structured departmental surveys on academic and facility pain points.",
      "Hold consultative sessions with 100L through 400L Class Representatives.",
      "Audit existing departmental learning resources, lab capacities, and tutorial needs.",
      "Identify immediate quick wins versus medium-term programmatic goals.",
    ],
    keyOutputs: "Prioritized Needs Assessment Report & Stakeholder Consultation Register",
  },
  {
    stageNumber: 2,
    stageName: "Plan & Prioritise",
    headline: "Translating Aspirations into Concrete Roadmaps",
    description: "Strategic prioritization ensures commitments are mapped to realistic timelines, assigned team leads, and validated against departmental calendar constraints.",
    actionItems: [
      "Draft clear semester operational roadmaps aligned with the faculty academic calendar.",
      "Establish functional working sub-committees (Academics, Welfare, Tech, Media).",
      "Determine resource requirements, material needs, and logistical prerequisites.",
      "Prepare transparent activity proposals for departmental faculty review.",
    ],
    keyOutputs: "Semester Implementation Timeline & Sub-Committee Operational Briefs",
  },
  {
    stageNumber: 3,
    stageName: "Execute & Collaborate",
    headline: "Delivering Initiatives with Stakeholder Synergy",
    description: "Executing approved initiatives through teamwork with class reps, faculty advisers, student mentors, and alumni, with continuous progress updates.",
    actionItems: [
      "Roll out peer tutorials, revision workshops, and coding clinics systematically.",
      "Engage alumni and industry resource persons for career sessions and webinars.",
      "Maintain active communication to keep students informed of scheduled programs.",
      "Address logistical hurdles in real-time with agile administrative follow-ups.",
    ],
    keyOutputs: "Active Program Execution & Real-Time Event Communication",
  },
  {
    stageNumber: 4,
    stageName: "Review & Report",
    headline: "Measuring Impact, Gathering Feedback & Iterating",
    description: "Continuous accountability requires evaluating outcomes after every initiative, gathering honest student impressions, and reporting back openly.",
    actionItems: [
      "Distribute short post-event feedback surveys to participating students.",
      "Publish comprehensive midterm and end-of-semester progress reports.",
      "Assess gaps, logistical bottlenecks, and areas requiring institutional escalation.",
      "Document lessons learned to create sustainable continuity for future administrations.",
    ],
    keyOutputs: "Published Progress Reports & Documented Feedback Archives",
  },
];

// 7. Proposed Accountability Framework
export const accountabilityFramework: AccountabilityCommitment[] = [
  {
    id: "progress-briefs",
    title: "Periodic Progress Briefs",
    description: "Regular, concise written digests detailing executive activities, ongoing consultations, and upcoming academic events.",
    mechanism: "Published digital bulletins disseminated via official class groups and notices.",
    frequency: "Bi-Weekly & Monthly Digests",
  },
  {
    id: "feedback-surveys",
    title: "Direct Student Feedback Channels",
    description: "Open communication conduits (including direct WhatsApp contact and structured forms) for student queries and suggestions.",
    mechanism: "Direct WhatsApp hotline and open feedback sessions with Class Reps.",
    frequency: "Continuous & Real-time Access",
  },
  {
    id: "transparent-stewardship",
    title: "Transparent Activity Reporting",
    description: "Open accounting of initiatives executed, resources utilized, and event attendance across cohorts.",
    mechanism: "Comprehensive end-of-program executive communiqués.",
    frequency: "Following Every Major Event",
  },
  {
    id: "agenda-review",
    title: "Midterm Agenda Audit",
    description: "A formal review of proposed agenda items against realistic execution timelines, highlighting delivered programs and pending items.",
    mechanism: "Semester consultative forum with student stakeholders.",
    frequency: "Mid-Semester & Session Conclusion",
  },
  {
    id: "honest-communication",
    title: "Constraint & Challenge Disclosure",
    description: "Transparent, honest communication whenever external institutional approvals or logistical limitations delay a proposed initiative.",
    mechanism: "Direct briefings explaining causes, current status, and proposed alternatives.",
    frequency: "Promptly upon constraint emergence",
  },
];

// 8. Why REBIRTH vs Why LEGACY Comparison
export const whyRebirthLegacy = {
  rebirth: {
    title: "REBIRTH",
    subtitle: "The Catalyst for Renewal",
    description: "REBIRTH is about breathing fresh vitality, dynamic ideas, and responsive systems into the Nigerian Association of Computing Students.",
    points: [
      { label: "Renewal", text: "Revitalizing student engagement and breaking departmental lethargy." },
      { label: "Fresh Perspectives", text: "Approaching academic support and technical growth with modern, practical frameworks." },
      { label: "Improved Communication", text: "Bridging the gap between the executive council and the student body." },
      { label: "New Opportunities", text: "Unlocking practical digital skills, career awareness, and peer collaboration." },
      { label: "Commitment to Progress", text: "Moving away from ceremonial leadership to actionable student representation." },
    ],
  },
  legacy: {
    title: "LEGACY",
    subtitle: "The Mark of Lasting Value",
    description: "LEGACY is about ensuring that every initiative, policy, and cultural improvement outlives our immediate tenure and enriches future generations of computing students.",
    points: [
      { label: "Integrity", text: "Leading with unyielding honesty, mutual respect, and ethical stewardship." },
      { label: "Continuity", text: "Building repeatable institutional documentation so progress is never lost." },
      { label: "Accountability", text: "Staying answerable to the students who entrust us with representation." },
      { label: "Sustainable Development", text: "Investing in structures, academic archives, and alumni ties that endure." },
      { label: "Lasting Institutional Value", text: "Leaving OOU NACOS stronger, more united, and more respected than we met it." },
    ],
  },
  closingQuote: "REBIRTH IS ABOUT THE CHANGE WE SEEK. LEGACY IS ABOUT THE IMPACT WE LEAVE BEHIND.",
};
