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

export const industries = [
  'Banking & financial services',
  'Insurance',
  'Retail',
  'Food & beverage',
  'Healthcare',
  'Fitness',
  'Telecommunications',
];

export const technologies = [
  {
    area: 'Cloud',
    items: [
      ['Azure', 'microsoftazure'], ['AWS', 'amazonwebservices'], ['Google Cloud', 'googlecloud'],
      ['Azure Networking', 'microsoftazure'], ['Azure Functions', 'microsoftazure'],
      ['Azure App Service', 'microsoftazure'], ['Azure Blob Storage', 'microsoftazure'],
      ['Azure API Management', 'microsoftazure'], ['Azure Active Directory', 'microsoftazure'],
      ['Azure Cosmos DB', 'microsoftazure'], ['Power Platform', 'microsoftazure'],
      ['Azure Kubernetes Service (AKS)', 'microsoftazure'],
      ['AWS Networking', 'amazonwebservices'], ['Amazon CloudWatch', 'amazonwebservices'],
      ['AWS CloudTrail', 'amazonwebservices'], ['Amazon EC2', 'amazonwebservices'],
      ['Amazon ECS', 'amazonwebservices'], ['Amazon EKS', 'amazonwebservices'],
      ['AWS Secrets Manager', 'amazonwebservices'], ['Amazon S3', 'amazonwebservices'],
      ['Amazon RDS', 'amazonwebservices'],
    ],
  },
  {
    area: 'Containers',
    items: [['Kubernetes', 'kubernetes'], ['Kustomize', 'kustomize', 'png'], ['Docker', 'docker']],
  },
  {
    area: 'CI/CD',
    items: [
      ['GitHub', 'github'], ['GitHub Actions', 'githubactions'], ['Jenkins', 'jenkins'], ['TeamCity', 'teamcity'],
      ['Octopus', 'octopusdeploy'], ['GitLab', 'gitlab'], ['Azure DevOps', 'azuredevops'],
      ['AWS CodePipeline', 'amazonwebservices'],
    ],
  },
  {
    area: 'Automation',
    items: [
      ['Terraform', 'terraform'], ['Ansible', 'ansible'], ['Chef', 'chef'], ['Pulumi', 'pulumi'],
      ['Bash', 'gnubash'], ['PowerShell', 'powershell'],
    ],
  },
  {
    area: 'Development',
    items: [['C#', 'csharp'], ['Python', 'python'], ['Ruby', 'ruby'], ['Node.js', 'nodedotjs'], ['Angular', 'angular']],
  },
  {
    area: 'Data',
    items: [['SQL Server', 'microsoftsqlserver'], ['Oracle', 'oracle'], ['MySQL', 'mysql'], ['MongoDB', 'mongodb']],
  },
  {
    area: 'Platforms',
    items: [['Windows', 'windows'], ['Linux', 'linux'], ['Salesforce', 'salesforce'], ['SAP SuccessFactors', 'sap']],
  },
];

export const experience = [
  {
    role: 'Director, Client Delivery',
    company: 'Slalom',
    logo: 'slalom',
    url: 'https://www.slalom.com/',
    period: 'September 2026 – Present',
    summary:
      'Fosters a high-performance culture and manages delivery of multiple projects through strategic thinking, influencing and coaching teams. Leads cloud migrations for major clients on multimillion-dollar GCP and AWS accounts, manages direct reports, and grows Slalom\'s business through excellent delivery.',
  },
  {
    role: 'Senior Principal, Client Delivery',
    company: 'Slalom',
    logo: 'slalom',
    url: 'https://www.slalom.com/',
    period: 'April 2025 – Present',
    summary:
      'Led cross-capability teams through cloud migrations and modernization across AWS, GCP and Azure, drove Infrastructure as Code (Terraform) and automation (Ansible), and cut onboarding time by 67% with a standardized multi-environment framework.',
  },
  {
    role: 'Principal Engineer',
    company: 'Chubb',
    logo: 'chubb',
    url: 'https://www.chubb.com/mx-es/',
    period: 'Jan 2024 – March 2025',
    summary:
      'Monterrey, Mexico. Participated in a digital transformation effort with state-of-the-art technologies.',
  },
  {
    role: 'DevSecOps Manager',
    company: 'PwC México',
    logo: 'pwc',
    url: 'https://www.pwc.com/mx/es.html',
    period: 'Sep 2023 – Jan 2024',
    summary:
      'Worked with engineering teams to improve operational efficiency and maintain Development, QA and Production environments.',
  },
  {
    role: 'DevSecOps Engineer, Loyalty Program (Spin Premia)',
    company: 'FEMSA',
    logo: 'femsa',
    url: 'https://www.femsa.com/es/unidades-de-negocio/digital-femsa/',
    period: 'Jan 2022 – Aug 2023',
    summary:
      'Ensured all code and configuration changes were automated, traceable and repeatable, and implemented deployment automation with other operations leads for Digital@FEMSA products.',
    link: { label: 'Spin Premia', href: 'https://spinpremia.com/' },
  },
  {
    role: 'Principal DevOps Engineer',
    company: 'Solera',
    logo: 'solera',
    url: 'https://www.solera.com/',
    period: 'Aug 2021 – Jan 2022',
    summary:
      'Engineering execution excellence and technical direction for the source code management team.',
  },
  {
    role: 'Manager (DevOps Location Supervisor for Monterrey Delivery Center)',
    company: 'Accenture',
    logo: 'accenture',
    url: 'https://www.accenture.com/',
    period: 'Mar 2021 – Aug 2021',
    summary:
      'Across the 2019–2021 Accenture roles, used open source, enterprise and public cloud technology and the Accenture DevOps Platform to deliver CI/CD solutions.',
  },
  {
    role: 'Associate Manager',
    company: 'Accenture',
    logo: 'accenture',
    url: 'https://www.accenture.com/',
    period: 'Sep 2019 – Mar 2021',
  },
  {
    role: 'Information Technology & Records Manager',
    company: 'Macquarie Group',
    logo: 'fibra',
    url: 'https://www.fibramacquarie.com/es.html',
    period: 'Jan 2018 – Jul 2019',
    summary: 'Developed and implemented IT policy and best-practice guides.',
  },
  {
    role: 'Software Engineer Team Lead / Technical Project Manager',
    company: 'Accenture',
    logo: 'accenture',
    url: 'https://www.accenture.com/',
    period: 'Jul 2014 – Jan 2018',
    summary:
      'Analysis, design, build, test and support of system components and applications.',
  },
  {
    role: 'HR Systems Coordinator',
    company: 'FEMSA',
    logo: 'femsa',
    url: 'https://www.femsa.com/',
    period: 'May 2011 – Jul 2014',
    summary:
      'Architecture design of satellite systems, researching technologies and frameworks, and understanding the business domain.',
  },
  {
    role: 'Senior Developer - Contractor',
    company: 'FEMSA',
    logo: 'femsa',
    url: 'https://www.femsa.com/',
    period: 'Sep 2007 – May 2011',
    summary:
      'Developed satellite systems for the global HR department, integrating applications with SAP using Microsoft technologies.',
  },
  {
    role: 'Developer',
    company: 'Ermilo E. Richer A.A.',
    logo: 'ericher',
    url: 'https://ericher.com/',
    period: 'May 2006 – Sep 2007',
    summary:
      'Developed the first web reports using Microsoft technologies, provided business analysis and technical support in the Laredo office, and maintained networks across both offices.',
  },
  {
    role: 'Developer',
    company: 'Central de Importaciones de Nuevo Laredo (CONATRAM)',
    logo: 'conatram',
    url: 'https://conatram.mx/',
    period: 'Nov 2005 – May 2006',
    summary:
      'Maintained VB 6 and SQL 2000 applications, developed a customs declaration system with ASP.NET and Crystal Reports, and supported carrier users.',
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
    logo: 'microsoft',
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
    logo: 'aws',
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
    logo: 'github',
    items: [
      { name: 'GitHub Copilot', href: ms('13D83629CF1BEF00') },
      {
        name: 'Microsoft Pro Badge: GitHub Copilot - Proficient',
        href: 'https://www.credly.com/badges/c788acce-bb15-4762-a4fb-12a439930c50/public_url',
      },
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
    issuer: 'OpenAI',
    logo: 'openai',
    items: [
      {
        name: 'OpenAI Partner Network: ChatGPT Deployment Practitioner',
        href: 'https://oaipartnernetwork.credential.net/018f7727-0b34-4057-9ab4-37b6ac5dab3b',
      },
      {
        name: 'OpenAI Partner Network: API Deployment Practitioner',
        href: 'https://oaipartnernetwork.credential.net/c0919c39-b44c-4d83-b8e7-6148ff1ca2f7#acc.Ejt7nRkz',
      },
    ],
  },
  {
    issuer: 'Scrum',
    logo: 'scrum',
    items: [
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
// Employment titles and dates follow the LinkedIn profile export supplied by Mario.
export const resume = {
  name: 'Mario Tristan Martinez',
  title: 'Director, Client Delivery · Slalom',
  email: 'mariotristan@outlook.com',
  linkedin: 'https://www.linkedin.com/in/mariotristan/',
  summary:
    'Technology and delivery leader guiding cloud modernization and DevOps transformation across AWS, Azure, and Google Cloud. At Slalom, I lead client delivery and teams, support engagement financial health, and help deliver cloud migrations for multimillion-dollar accounts. My experience spans banking and financial services, insurance, retail, food and beverage, healthcare, fitness, and telecommunications.',
  highlights: [
    {
      title: 'Cloud strategy',
      summary: 'Lead cloud adoption and migrations across AWS, Azure, and GCP, aligning technology with business goals.',
    },
    {
      title: 'Delivery & automation',
      summary: 'Build infrastructure and CI/CD automation that improves delivery; a standardized multi-environment framework reduced onboarding time by 67%.',
    },
    {
      title: 'Leadership',
      summary: 'Lead teams and client engagements, develop leaders and relationships, and support financial health while managing delivery risk.',
    },
    {
      title: 'Governance',
      summary: 'Embed security, compliance, and quality practices into delivery pipelines and enterprise systems.',
    },
  ],
  roles: [
    {
      title: 'Director, Client Delivery',
      company: 'Slalom',
      logo: 'slalom',
      period: 'September 2026 – Present',
      intro: 'I lead client delivery and coach teams, connecting project outcomes with client and business goals.',
      bullets: [
        'Help deliver cloud migrations for multimillion-dollar AWS and Google Cloud accounts.',
        'Support engagement financial health and build client relationships.',
        'Manage direct reports and develop talent across delivery teams.',
      ],
    },
    {
      title: 'Senior Principal, Client Delivery',
      company: 'Slalom',
      logo: 'slalom',
      period: 'April 2025 – Present',
      intro: 'I work with clients and cross-capability teams on cloud modernization and complex, multi-workstream engagements.',
      bullets: [
        'Reduced onboarding time by 67% with a standardized multi-environment framework.',
        'Led migrations across AWS, Google Cloud, and Azure and promoted Terraform and Ansible practices.',
        'Mentored leaders, strengthened executive relationships, and supported engagement financial health.',
      ],
    },
    {
      title: 'Principal Engineer',
      company: 'Chubb',
      logo: 'chubb',
      period: 'January 2024 – March 2025',
      intro: 'I managed and mentored DevOps engineers while working with engineering leaders to improve operations.',
      bullets: [
        'Improved infrastructure and processes across development, QA, and production.',
        'Led resource planning, risk management, and release governance.',
        'Trained teams on cloud strategy and DevOps practices.',
      ],
    },
    {
      title: 'DevSecOps Manager',
      company: 'PwC México',
      logo: 'pwc',
      period: 'September 2023 – January 2024',
      intro: 'I led a DevOps team and partnered with engineering leaders to strengthen delivery and production operations.',
      bullets: [
        'Improved production reliability through incident triage and sustainable practices.',
        'Introduced automation and documented workflows to improve repeatability.',
        'Oversaw release readiness and trained teams on cloud practices.',
      ],
    },
    {
      title: 'DevSecOps Engineer, Loyalty Program (Spin Premia)',
      company: 'FEMSA',
      logo: 'femsa',
      period: 'January 2022 – August 2023',
      intro: 'I worked with operations leaders to improve deployment and delivery for Digital@FEMSA products.',
      bullets: [
        'Designed deployment automation and CI/CD solutions for enterprise applications.',
        'Established repeatable, traceable change-management practices.',
        'Led cross-functional incident response and promoted shared ownership.',
      ],
    },
    {
      title: 'Principal DevOps Engineer',
      company: 'Solera',
      logo: 'solera',
      period: 'August 2021 – January 2022',
      intro: 'I provided technical direction and developed the engineering team supporting source code management.',
      bullets: [
        'Partnered with operations leaders on deployment automation.',
        'Hired, mentored, and managed DevOps engineers.',
        'Led incident management and communicated technical strategy to executives.',
      ],
    },
    {
      title: 'Manager (DevOps Location Supervisor for Monterrey Delivery Center)',
      company: 'Accenture',
      logo: 'accenture',
      period: 'March 2021 – August 2021',
      intro: 'Across this role and my Associate Manager role, I supported enterprise DevOps transformation and delivery automation.',
      bullets: [
        'Delivered CI/CD solutions using the Accenture DevOps Platform.',
        'Directed infrastructure-as-code and change-management practices.',
        'Built technology partnerships and supported incident management.',
      ],
    },
    {
      title: 'Associate Manager',
      company: 'Accenture',
      logo: 'accenture',
      period: 'September 2019 – March 2021',
      intro: 'I worked on the shared Accenture DevOps initiatives described in the Manager role above.',
      bullets: [],
    },
    {
      title: 'Information Technology & Records Manager',
      company: 'Macquarie Group',
      logo: 'fibra',
      period: 'January 2018 – July 2019',
      intro: 'I led IT operations and governance, working across departments to improve enterprise processes.',
      bullets: [
        'Oversaw security, system audits, compliance reporting, and IT policy.',
        'Managed system updates, migrations, outages, and IT budgets.',
        'Led cross-functional process improvements and staff training.',
      ],
    },
    {
      title: 'Software Engineer Team Lead / Technical Project Manager',
      company: 'Accenture',
      logo: 'accenture',
      period: 'July 2014 – January 2018',
      intro: 'I led project teams and worked with clients on migrations and application development.',
      bullets: [
        'Coordinated parallel customer migrations from planning through rollout.',
        'Designed serverless and microservices architectures and built proofs of concept.',
        'Designed, coded, tested, and supported application components.',
      ],
    },
    {
      title: 'HR Systems Coordinator',
      company: 'FEMSA',
      logo: 'femsa',
      period: 'May 2011 – July 2014',
      intro: 'I coordinated the development and support of HR applications and satellite systems.',
      bullets: [
        'Designed satellite-system architecture and researched technologies and best practices.',
        'Coordinated internal clients and consultants on system implementations.',
        'Improved hardware resource use and monitored support service levels.',
      ],
    },
    {
      title: 'Senior Developer - Contractor',
      company: 'FEMSA',
      logo: 'femsa',
      period: 'September 2007 – May 2011',
      intro: 'I developed satellite systems for the global HR department using Microsoft technologies.',
      bullets: [
        'Integrated applications with SAP to support HR systems and workflows.',
      ],
    },
    {
      title: 'Developer',
      company: 'Ermilo E. Richer A.A.',
      logo: 'ericher',
      period: 'May 2006 – September 2007',
      intro: 'I combined development, business analysis, and technical support in the Laredo office.',
      bullets: [
        'Developed the first web reports using Microsoft technologies.',
        'Maintained networks across both offices.',
      ],
    },
    {
      title: 'Developer',
      company: 'Central de Importaciones de Nuevo Laredo (CONATRAM)',
      logo: 'conatram',
      period: 'November 2005 – May 2006',
      intro: 'I developed and supported applications for customs operations and carrier users.',
      bullets: [
        'Maintained existing VB 6 and SQL 2000 applications.',
        'Developed a customs declaration capture and printing system using ASP.NET and Crystal Reports.',
        'Provided technical support to carrier users.',
      ],
    },
  ],
  expertise: [
    {
      area: 'Cloud platforms',
      logos: [
        ['Azure', 'microsoftazure'], ['AWS', 'amazonwebservices'], ['Google Cloud', 'googlecloud'],
      ],
      lines: [
        'Azure (7 years): Networking, Functions, App Services, Blob Storage, API Management, Active Directory, Cosmos DB, Power Platform, AKS.',
        'AWS (6 years): Networking, Monitoring (CloudWatch and CloudTrail), EC2, ECS, EKS, Secrets Manager, S3, RDS.',
        'Multi-cloud strategy: led enterprise migrations and hybrid deployments across AWS, Azure, and GCP, aligning architecture with business outcomes.',
      ],
    },
    {
      area: 'CI/CD & DevOps enablement (7 years)',
      logos: [
        ['Jenkins', 'jenkins'], ['GitHub Actions', 'githubactions'], ['TeamCity', 'teamcity'],
        ['Octopus Deploy', 'octopusdeploy'], ['GitLab', 'gitlab'], ['Azure DevOps', 'azuredevops'],
        ['AWS CodePipeline', 'amazonwebservices'],
      ],
      lines: [
        'Jenkins, GitHub Actions, TeamCity, Octopus, GitLab, Azure DevOps, AWS CodePipeline.',
        'Directed enterprise-scale CI/CD adoption, embedding automation, compliance, and delivery excellence across distributed teams.',
      ],
    },
    {
      area: 'Automation & Infrastructure as Code (7 years)',
      logos: [
        ['Terraform', 'terraform'], ['Ansible', 'ansible'], ['Chef', 'chef'], ['Pulumi', 'pulumi'],
        ['Bash', 'gnubash'], ['PowerShell', 'powershell'],
      ],
      lines: [
        'Terraform, Ansible, Chef, Pulumi, Bash, PowerShell.',
        'Championed IaC adoption, embedding governance, versioning, and testing practices to align infrastructure with enterprise standards.',
      ],
    },
    {
      area: 'Containers & orchestration (7 years)',
      logos: [['Docker', 'docker'], ['Kubernetes', 'kubernetes']],
      lines: [
        'Docker, Kubernetes.',
        'Drove containerization and orchestration strategies to modernize legacy applications and accelerate innovation.',
      ],
    },
    {
      area: 'Programming & scripting (15 years)',
      logos: [['C#', 'csharp'], ['Python', 'python'], ['Ruby', 'ruby'], ['Node.js', 'nodedotjs']],
      lines: [
        'C#, Python, Ruby, Node.js.',
        'Applied across automation, cloud-native development, and enterprise integrations.',
      ],
    },
    {
      area: 'Databases (15 years)',
      logos: [
        ['SQL Server', 'microsoftsqlserver'], ['Oracle', 'oracle'], ['MySQL', 'mysql'], ['MongoDB', 'mongodb'],
      ],
      lines: [
        'SQL Server, Oracle, MySQL, MongoDB.',
        'Designed resilient data architectures and modernization strategies for mission-critical applications.',
      ],
    },
    {
      area: 'Systems & enterprise platforms',
      logos: [
        ['Windows', 'windows'], ['Linux', 'linux'], ['Salesforce', 'salesforce'], ['SAP SuccessFactors', 'sap'],
      ],
      lines: [
        'Windows (8 years), Linux (5 years).',
        'Salesforce (2 years): development and administration.',
        'SAP SuccessFactors (2 years): development and functional consulting.',
      ],
    },
  ],
};
