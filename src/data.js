// All site content lives here. Edit this file; markup is rendered by main.js.

export const profile = {
  name: 'Mario Tristan',
  tagline: 'I love solving problems, building products, and working with technology.',
  intro:
    "I'm an engineer who works with code and hardware to find the right tool for the job. I help teams understand and improve their applications and business processes through technology. Let's build something great together.",
  email: 'mariotristan@gmail.com',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/mariotristan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mariotristan/' },
  { label: 'Twitter', href: 'https://twitter.com/mariotristan' },
  { label: 'Instagram', href: 'https://instagram.com/mariotristan' },
];

export const technologies = [
  'Azure',
  'AWS',
  'Kubernetes',
  'Kustomize',
  'Docker',
  'Jenkins',
  'Ansible',
  'Terraform',
  'GitHub Actions',
  'C#',
  'Node',
  'Angular',
];

export const experience = [
  {
    role: 'Director, Client Delivery',
    company: 'Slalom',
    url: 'https://www.slalom.com/',
    period: 'April 2025 – Present',
    summary:
      'Works closely with clients and teams, leads larger multi-workstream engagements, manages direct reports, participates in Build operations, designs cloud and DevOps architecture, and collaborates on project delivery.',
  },
  {
    role: 'Principal DevOps Engineer',
    company: 'Chubb',
    url: 'https://www.chubb.com/mx-es/',
    period: 'Jan 2024 – March 2025',
    summary:
      'Monterrey, Mexico. Participated in a digital transformation effort with state-of-the-art technologies.',
  },
  {
    role: 'DevSecOps Manager',
    company: 'PwC',
    url: 'https://www.pwc.com/mx/es.html',
    period: 'Sep 2023 – Jan 2024',
    summary:
      'Worked with engineering teams to improve operational efficiency and maintain Development, QA and Production environments.',
  },
  {
    role: 'Lead DevSecOps Engineer, Digital',
    company: 'FEMSA',
    url: 'https://www.femsa.com/es/unidades-de-negocio/digital-femsa/',
    period: 'Jan 2022 – Aug 2023',
    summary:
      'Ensured all code and configuration changes were automated, traceable and repeatable, and implemented deployment automation with other operations leads for Digital@FEMSA products.',
    link: { label: 'Spin Premia', href: 'https://spinpremia.com/' },
  },
  {
    role: 'Principal DevOps Engineer',
    company: 'Solera',
    url: 'https://www.solera.com/',
    period: 'Aug 2021 – Jan 2022',
    summary:
      'Engineering execution excellence and technical direction for the source code management team.',
  },
  {
    role: 'DevOps Manager',
    company: 'Accenture',
    url: 'https://www.accenture.com/',
    period: 'Aug 2019 – Aug 2021',
    summary:
      'Used open source, enterprise and public cloud technology and the Accenture DevOps Platform to deliver CI/CD solutions.',
  },
  {
    role: 'Information Technology & Records Manager',
    company: 'FIBRA Macquarie Group',
    url: 'https://www.fibramacquarie.com/es.html',
    period: 'Jan 2018 – Jul 2019',
    summary: 'Developed and implemented IT policy and best-practice guides.',
  },
  {
    role: 'Software Engineer Team Lead / Technical Project Manager',
    company: 'Accenture',
    url: 'https://www.accenture.com/',
    period: 'Jul 2014 – Dec 2017',
    summary:
      'Analysis, design, build, test and support of system components and applications.',
  },
  {
    role: 'Systems Coordinator',
    company: 'FEMSA',
    url: 'https://www.femsa.com/',
    period: 'Sep 2007 – Jul 2014',
    summary:
      'Architecture design of satellite systems, researching technologies and frameworks, and understanding the business domain.',
  },
];

export const education = [
  {
    degree: 'Master of Information Technology Management',
    school: 'TecMilenio, Mexico',
    url: 'https://tecmilenio.mx/es',
    period: '2016 – 2018',
  },
  {
    degree: 'Bachelor of Engineering in Computer Systems',
    school: 'Instituto Tecnológico de Nuevo Laredo, Mexico',
    url: 'https://nlaredo.tecnm.mx/',
    period: '2001 – 2005',
  },
];

const ms = (id) =>
  `https://learn.microsoft.com/api/credentials/share/en-us/mariotristan/${id}?sharingId=92F4D301AA367686`;

export const certifications = [
  {
    issuer: 'Microsoft',
    items: [
      { name: 'DevOps Engineer Expert', href: ms('A5E118B2C41FD067') },
      { name: 'Azure Administrator Associate', href: ms('18CAD79BFA8C2AC4') },
      { name: 'Azure AI Engineer Associate', href: ms('2BBAACA039CF6E5') },
      { name: 'Azure Data Scientist Associate', href: ms('207E86445AF7A945') },
      { name: 'Power Platform App Maker Associate', href: ms('27F0602F9DF99D04') },
      { name: 'Azure Developer Associate', href: ms('1FBF497E8C74F430') },
      { name: 'Microsoft 365 Fundamentals', href: ms('75FE9A372DBABF39') },
      { name: 'Security, Compliance, and Identity Fundamentals', href: ms('C1CBC57EA4776DC8') },
      { name: 'Power Platform Fundamentals', href: ms('64014E2F9DEF622D') },
      { name: 'Azure AI Fundamentals', href: ms('1E6CA6093C776CF3') },
      { name: 'Azure Data Fundamentals', href: ms('167EB12B60F366B') },
      { name: 'Azure Fundamentals', href: ms('BD3F47E6770A318C') },
    ],
  },
  {
    issuer: 'AWS',
    items: [
      {
        name: 'Cloud Practitioner',
        href: 'https://www.credly.com/badges/611af53c-009f-4249-9ca4-26d8cab18010/public_url',
      },
      {
        name: 'AI Practitioner',
        href: 'https://www.credly.com/badges/2671dcca-7c15-48e4-937f-89835126651b/public_url',
      },
      {
        name: 'Developer Associate',
        href: 'https://www.credly.com/badges/f5f47bfe-087d-4ed8-8602-02d3df8c6e18',
      },
      {
        name: 'Data Lakehouse Demonstrated (microcredential)',
        href: 'https://www.credly.com/badges/056494bb-56ab-40f3-9a70-9cd40866b5bc',
      },
    ],
  },
  {
    issuer: 'GitHub',
    items: [
      { name: 'GitHub Copilot', href: ms('13D83629CF1BEF00') },
      {
        name: 'GitHub Actions',
        href: 'https://learn.microsoft.com/en-us/users/mariotristan/credentials/922cef1e9534a310',
      },
      {
        name: 'Applied Skills: Accelerate app development with GitHub Copilot',
        href: 'https://learn.microsoft.com/en-us/users/mariotristan/credentials/922cef1e9534a310',
      },
    ],
  },
  {
    issuer: 'OpenAI & Scrum',
    items: [
      {
        name: 'OpenAI Partner Network: API Deployment Practitioner',
        href: 'https://oaipartnernetwork.credential.net/c0919c39-b44c-4d83-b8e7-6148ff1ca2f7#acc.Ejt7nRkz',
      },
      {
        name: 'Scrum Foundation Professional Certification (SFPC)',
        href: 'https://www.credly.com/badges/9a3e130e-4b73-4872-a2da-ee7034f0a013/public_url',
      },
    ],
  },
];

// Titles were inferred from the LinkedIn URL slugs (LinkedIn blocks automated reads), so check wording against the originals.
export const articles = [
  {
    title: 'Same Loop, Different Levels: Human',
    href: 'https://www.linkedin.com/pulse/same-loop-different-levels-human-mario-tristan-h8ouc/',
  },
  {
    title: "The Robot Doesn't Sign the Consent Form",
    href: 'https://www.linkedin.com/pulse/robot-doesnt-sign-consent-form-mario-tristan-h8k5c/',
  },
  {
    title: "The Energy You Can't Fake",
    href: 'https://www.linkedin.com/pulse/energy-you-cant-fake-mario-tristan-gblic/',
  },
  {
    title: "AI Doesn't Have an Ego, and That's What Should Scare You",
    href: 'https://www.linkedin.com/pulse/ai-doesnt-have-ego-thats-what-should-scare-you-mario-tristan-cbzfc/',
  },
  {
    title: 'The Power of Mentoring',
    href: 'https://www.linkedin.com/pulse/power-mentoring-mario-tristan-qw2vc/',
  },
  {
    title: 'Your Career Cards',
    href: 'https://www.linkedin.com/pulse/your-career-cards-mario-tristan-woxwc/',
  },
  {
    title: 'Dark Matter Developers: The Backbone of Innovation and Stability',
    href: 'https://www.linkedin.com/pulse/dark-matter-developers-backbone-innovation-stability-mario-ekgie/',
  },
  {
    title: 'Passion and Purpose in Consulting: Why Loving Your Work',
    href: 'https://www.linkedin.com/pulse/passion-purpose-consulting-why-loving-your-work-tristan-martinez-h3x9f/',
  },
];

// Resume page content. Baseline supplied by Mario; phone number intentionally omitted (PII).
// The Slalom entries split the original single role into Director (current) and the earlier Senior Principal role.
export const resume = {
  name: 'Mario Tristan Martinez',
  title: 'Director, Client Delivery · Slalom',
  email: 'mariotristan@outlook.com',
  linkedin: 'https://www.linkedin.com/in/mariotristan/',
  summary:
    'Seasoned technology leader with over 20 years of experience driving digital transformation and solving complex business challenges across Insurance, Financial Services, Fintech, and SaaS. Expert in multi-cloud strategy (AWS, Azure, GCP) and modern platforms such as Kubernetes, with a proven track record of architecting scalable solutions, leading high-performing teams, and embedding DevOps and automation practices at enterprise scale. Recognized for fostering innovation, cultivating talent, and aligning technical vision with business outcomes to deliver measurable impact and sustainable growth.',
  highlights: [
    'Drive enterprise cloud transformation, leading adoption and large-scale migrations across AWS, Azure, and GCP to align technology with business growth objectives.',
    'Set infrastructure strategy by defining and implementing Infrastructure as Code (declarative and imperative), ensuring scalability, resilience, and operational efficiency.',
    'Architect CI/CD frameworks for distributed, mission-critical products, enabling faster release cycles and improved delivery predictability.',
    'Champion DevSecOps enablement, embedding regulatory compliance and security best practices into delivery pipelines to safeguard enterprise systems.',
    'Lead application modernization through containerization and orchestration, accelerating innovation and reducing operational overhead.',
    'Elevate quality engineering practices, enabling both new and legacy projects to meet enterprise standards for reliability and performance.',
    'Oversee program management of complex, multi-workstream initiatives, balancing resources, timelines, and risk to ensure successful delivery.',
    'Mentor and develop engineering leaders, fostering a culture of continuous improvement, innovation, and accountability across teams.',
  ],
  roles: [
    {
      title: 'Director, Client Delivery',
      company: 'Slalom',
      period: 'April 2025 – Present',
      bullets: [
        "Set strategic direction for multi-workstream engagements, aligning delivery outcomes with client business priorities and Slalom's growth objectives.",
        'Lead and manage direct reports and cross-capability teams, participating in Build operations and mentoring future leaders on delivery methodologies, ROI storytelling, and career development planning.',
        'Strengthen executive client relationships, connecting technical decisions to strategic goals and consistently demonstrating measurable business impact.',
        'Partner with business leaders to shape solution offerings, contribute to pursuit strategies, and ensure seamless transitions from sales to delivery.',
        'Oversee the operational and financial health of engagements, managing utilization, billable hours, and project financials while maintaining delivery quality and client satisfaction.',
        'Design cloud and DevOps architecture and champion innovation and emerging technologies (AI, automation agents) to enhance productivity, scalability, and long-term client outcomes.',
      ],
    },
    {
      title: 'Senior Principal Platform Engineer',
      company: 'Slalom',
      period: 'March 2025 – April 2025',
      bullets: [
        'Led cross-capability teams through complex migrations and modernization programs across AWS, GCP, and Azure, balancing risk, scope, and prioritization to ensure successful delivery.',
        'Drove adoption of Infrastructure as Code (Terraform) and automation practices (Ansible), embedding delivery excellence standards and coaching engineers to scale velocity and predictability.',
        'Reduced onboarding time by 67% by architecting a standardized multi-environment framework, accelerating delivery across diverse technology stacks and multidisciplinary teams.',
      ],
    },
    {
      title: 'DevOps Principal Engineer',
      company: 'Chubb Seguros',
      period: 'January 2024 – March 2025',
      bullets: [
        'Provided strategic leadership by directly managing and mentoring a high-performing team of DevOps Engineers, fostering a culture of innovation, accountability, and delivery excellence.',
        'Shaped operational strategy in partnership with Engineering leadership, driving efficiency across Development, QA, and Production environments to ensure scalability and resilience.',
        'Defined and implemented infrastructure and process improvements, aligning technical decisions with business priorities and long-term growth objectives.',
        'Influenced organizational culture by partnering with Principal Engineers to embed DevOps practices across the enterprise, accelerating adoption and maturity.',
        'Oversaw resource planning and risk management, ensuring accurate estimation of timelines, budgets, and dependencies for complex release cycles.',
        'Established release governance, guaranteeing readiness of code, documentation, and configuration assets while reducing technical debt through structured code review programs.',
        'Enabled enterprise cloud adoption by training new teams on cloud strategy, best practices, and standardized frameworks, driving faster onboarding and consistent delivery outcomes.',
      ],
    },
    {
      title: 'DevSecOps Manager',
      company: 'PwC',
      period: 'September 2023 – January 2024',
      bullets: [
        'Provided strategic leadership by managing and mentoring a team of DevOps Engineers, fostering a culture of innovation, accountability, and delivery excellence.',
        'Shaped operational strategy in partnership with Engineering leadership, driving efficiency across Development, QA, and Production environments to ensure scalability and resilience.',
        'Established sustainable production practices, overseeing triage and resolution of critical issues while embedding long-term reliability into systems and processes.',
        'Drove automation and knowledge management, ensuring repeatable, documented workflows that increase efficiency and reduce operational overhead.',
        'Defined and implemented infrastructure and process improvements, aligning technical decisions with business priorities and long-term growth objectives.',
        'Influenced stakeholders across departments, communicating complex technical strategies in business terms to secure alignment and executive buy-in.',
        'Oversaw release governance, managing resource planning, risk assessment, and readiness of code, documentation, and configuration assets for enterprise-scale deployments.',
        'Enabled enterprise cloud adoption, training new teams on cloud strategy, best practices, and standardized frameworks to accelerate onboarding and delivery outcomes.',
      ],
    },
    {
      title: 'Lead DevOps Engineer',
      company: 'Digital@FEMSA',
      period: 'January 2022 – August 2023',
      bullets: [
        'Collaborated with operations leadership to design and implement enterprise-wide deployment automation solutions, enabling faster, more reliable delivery across Digital@FEMSA products and initiatives.',
        'Architected modern technical frameworks with advanced automation to support complex, large-scale digital and enterprise applications, ensuring scalability and resilience.',
        'Instituted sustainable incident management practices, engaging developers as accountable owners of their code and leading cross-functional response efforts to minimize downtime and strengthen reliability.',
        'Established governance for change management, ensuring all code and configuration updates were automated, traceable, and repeatable to reduce risk and improve compliance.',
        'Leveraged open source, enterprise, and public cloud technologies to deliver best-in-class CI/CD solutions, accelerating innovation and enabling teams to release with confidence.',
        'Championed DevOps culture adoption, embedding practices that improved collaboration, accountability, and delivery velocity across engineering and product teams.',
      ],
    },
    {
      title: 'Principal DevOps Engineer',
      company: 'Solera',
      period: 'August 2021 – January 2022',
      bullets: [
        "Partnered with operations leadership to design and implement enterprise-wide deployment automation solutions, accelerating delivery and improving reliability across Solera's product portfolio.",
        'Built and scaled a high-performing engineering function, hiring, mentoring, and managing DevOps talent to enhance productivity, innovation, and team well-being.',
        'Transformed operational processes within enterprise-class systems, aligning workflows with business priorities and driving measurable efficiency gains.',
        "Provided executive-level technical vision, ensuring the Source Code Management (SCM) team's roadmap and execution strategy aligned with company objectives and long-term growth.",
        'Oversaw program governance, managing scope, resource estimation, and risk across complex release cycles to ensure predictable delivery outcomes.',
        'Led incident management strategy, participating in global on-call rotations while embedding sustainable practices to minimize downtime and strengthen system resilience.',
        'Delivered executive and C-level presentations, securing stakeholder buy-in and clearly communicating strategic goals, technical direction, and business impact.',
      ],
    },
    {
      title: 'DevOps Manager',
      company: 'Accenture',
      period: 'August 2019 – July 2021',
      bullets: [
        'Architected next-generation technical frameworks with advanced automation to support complex delivery across diverse digital and enterprise applications, ensuring scalability and resilience.',
        'Forged strategic partnerships with industry leaders (Microsoft, Amazon, Atlassian, Docker, CHEF), securing access to cutting-edge tools, solutions, and training to accelerate innovation.',
        'Led enterprise DevOps transformation, harnessing open source, enterprise, and public cloud technologies to deliver best-in-class CI/CD solutions via the Accenture DevOps Platform, enabling clients to innovate faster and more effectively.',
        'Established governance for change management, ensuring all code and configuration updates were automated, traceable, and repeatable to reduce risk and improve compliance.',
        'Directed Infrastructure as Code strategy, embedding provisioning and configuration practices with rigorous quality controls (versioning, reviews, testing) to align infrastructure with enterprise standards.',
        'Instituted sustainable incident management practices, engaging developers as accountable owners of their code and leading cross-functional response efforts to minimize downtime and strengthen reliability.',
      ],
    },
    {
      title: 'Information Technology & Records Manager',
      company: 'MMREIT Property Administration, a member of FIBRA Macquarie Group',
      period: 'January 2018 – July 2019',
      bullets: [
        'Chaired cross-functional committees to design and implement new enterprise processes across HR, Property Management, Office Administration, and Invoicing, driving operational efficiency and business alignment.',
        'Championed change management and Agile methodologies, embedding modern delivery practices to accelerate adoption and improve organizational resilience.',
        'Directed enterprise IT governance, overseeing network and data security, system audits, and compliance reporting to safeguard critical assets and ensure regulatory alignment.',
        'Defined IT strategy and policy, developing best-practice frameworks and operational guides to standardize processes and elevate organizational maturity.',
        'Designed and delivered enterprise training programs, equipping staff with modern tools, practices, and knowledge to improve productivity and adoption of new systems.',
        'Oversaw major IT initiatives, setting timeframes and managing execution for system updates, upgrades, migrations, and planned outages to minimize disruption and maximize business continuity.',
        'Managed IT financials, reporting on budget allocation and ensuring investments aligned with strategic priorities and ROI expectations.',
        'Provided vision and direction for IT teams, mentoring staff, identifying skill gaps, and creating opportunities for professional growth and advancement.',
      ],
    },
    {
      title: 'Software Engineer Team Lead / Technical Project Manager',
      company: 'Accenture (Monterrey, Mexico and Hartford, Connecticut)',
      period: 'July 2014 – December 2017',
      bullets: [
        'Handled several migration projects in parallel as the point of contact for the project team, business partners, and management: provided updates, resolved issues, set the delivery way of working, managed customer migration plans with the business, and rolled out migrations to get customers live on the new platform.',
        'Led project teams through the project life cycle, including approvals and the change management process.',
        'Brainstormed with clients to design next-generation IT architectures, including serverless and microservices implementations, and built proofs of concept for new or emerging technologies at client sites.',
        'Delivered solutions with an agile delivery method, using DevOps to bring them to life quickly for clients.',
        'Analyzed, designed, built, tested, implemented, and supported multiple system components and applications, gathering and interpreting user and system requirements into design specifications and developing system specifications and interfaces.',
      ],
    },
    {
      title: 'Systems Coordinator',
      company: 'FEMSA (Monterrey, Mexico)',
      period: 'May 2011 – July 2014',
      bullets: [
        'Contributed to decision making and provided a common language and concepts for communication between the teams in a project; took part in implementing new functionality and integrating new units according to the approved design, and coordinated support, development, and maintenance of the assigned applications.',
        'Designed the architecture of satellite systems, researching innovative technologies, architectural frameworks, and best practices, and understanding the business domain.',
        'Acted as liaison between internal clients and consultants, coordinating human resources in the projects implementing new and existing systems under my responsibility.',
        'Optimized hardware resource usage of applications to enable better use of computing resources, checking compliance with service level agreements for user support requests.',
      ],
    },
  ],
  expertise: [
    {
      area: 'Cloud platforms',
      lines: [
        'Azure (7 years): Networking, Functions, App Services, Blob Storage, API Management, Active Directory, Cosmos DB, Power Platform.',
        'AWS (6 years): Networking, Monitoring (CloudWatch and CloudTrail), EC2, ECS, EKS, Secrets Manager, S3, RDS.',
        'Multi-cloud strategy: led enterprise migrations and hybrid deployments across AWS, Azure, and GCP, aligning architecture with business outcomes.',
      ],
    },
    {
      area: 'CI/CD & DevOps enablement (7 years)',
      lines: [
        'Jenkins, GitHub Actions, TeamCity, Octopus, GitLab, Azure DevOps, AWS CodePipeline.',
        'Directed enterprise-scale CI/CD adoption, embedding automation, compliance, and delivery excellence across distributed teams.',
      ],
    },
    {
      area: 'Automation & Infrastructure as Code (7 years)',
      lines: [
        'Terraform, Ansible, Chef, Pulumi, Bash, PowerShell.',
        'Championed IaC adoption, embedding governance, versioning, and testing practices to align infrastructure with enterprise standards.',
      ],
    },
    {
      area: 'Containers & orchestration (7 years)',
      lines: [
        'Docker, Kubernetes.',
        'Drove containerization and orchestration strategies to modernize legacy applications and accelerate innovation.',
      ],
    },
    {
      area: 'Programming & scripting (15 years)',
      lines: [
        'C#, Python, Ruby, Node.js.',
        'Applied across automation, cloud-native development, and enterprise integrations.',
      ],
    },
    {
      area: 'Databases (15 years)',
      lines: [
        'SQL Server, Oracle, MySQL, MongoDB.',
        'Designed resilient data architectures and modernization strategies for mission-critical applications.',
      ],
    },
    {
      area: 'Systems & enterprise platforms',
      lines: [
        'Windows (8 years), Linux (5 years).',
        'Salesforce (2 years): development and administration.',
        'SAP SuccessFactors (2 years): development and functional consulting.',
      ],
    },
  ],
};
