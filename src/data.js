// All site content lives here. Edit this file; markup is rendered by main.js.

export const profile = {
  name: 'Mario Tristan',
  tagline: 'I love solving problems, building products, and working with technology.',
  intro:
    "I'm an engineer who works with code and hardware to find the right tool for the job. I help teams understand and improve their applications and business processes through technology. Let's build something great together.",
  resume: 'files/MarioTristan_2024.pdf',
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
