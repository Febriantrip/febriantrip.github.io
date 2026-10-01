export const portfolio = {
  name: 'FEBRIAN',
  fullName: 'Febrian Tri Prasmanto',
  shortRole: 'FULL-STACK PROGRAMMER · ERP IMPLEMENTATOR · SYSTEM BUILDER',
  heroTop: 'FEBRIAN',
  heroBottom: 'PROGRAMMER',
  location: 'BANDUNG, INDONESIA · AVAILABLE FOR PROJECTS',
  email: 'febrian.trip@gmail.com',
  whatsapp: 'https://wa.me/6285706060202',
  linkedin: 'https://www.linkedin.com/in/febriantrip',
  intro: 'I BUILD DIGITAL SYSTEMS THAT CONNECT CODE, PEOPLE, AND REAL BUSINESS OPERATIONS.',
  about: [
    'I am a full-stack programmer with a background in accounting, ERP implementation, and IT operations. I turn business requirements into practical systems that people can actually use every day.',
    'My experience spans full-stack development, ERP implementation, UAT, user training, troubleshooting, reporting, API integration, and team coordination, giving me a view of software beyond the codebase.'
  ],
  stats: [
    { value: 'ERP', label: 'Implementation & systems' },
    { value: 'WEB', label: 'Product development' },
    { value: 'OPS', label: 'IT & business operations' },
  ],
  principles: [
    {
      number: '01',
      title: 'BUSINESS RULES BEFORE UI',
      text: 'I start with the operational rule, the user decision, and the edge case. The interface comes after the workflow makes sense.'
    },
    {
      number: '02',
      title: 'DATA INTEGRITY BEFORE CONVENIENCE',
      text: 'For transactional systems, a fast screen is not useful if stock, money, status, or audit history can quietly drift out of sync.'
    },
    {
      number: '03',
      title: 'BUILD FOR THE PEOPLE WHO OPERATE IT',
      text: 'The best system is one users can understand under real pressure, not only one that looks clean in a demo.'
    },
  ],
  expertise: [
    { number: '01', title: 'WEB DEVELOPMENT', text: 'Responsive web products and operational interfaces built around clear user flows and maintainable components.', icon: '↗' },
    { number: '02', title: 'ERP & BUSINESS SYSTEMS', text: 'Sales, inventory, accounting, AR/AP, tax, POS, permissions, master data, reporting, and workflow automation.', icon: '✦' },
    { number: '03', title: 'SYSTEM ANALYSIS', text: 'Translating business rules, user requirements, and edge cases into practical application logic and data flows.', icon: '⌘' },
    { number: '04', title: 'UAT & IMPLEMENTATION', text: 'Data validation, user acceptance testing, rollout support, troubleshooting, documentation, and user training.', icon: '◎' },
    { number: '05', title: 'API, REPORTING & AUTOMATION', text: 'Integrating systems, shaping operational data, automating workflows, and delivering reports that support day-to-day decisions.', icon: '◇' },
    { number: '06', title: 'IT OPERATIONS', text: 'Production support, access management, infrastructure coordination, SLA monitoring, and team coordination.', icon: '＋' },
  ],
  domains: [
    'SALES', 'INVENTORY', 'ACCOUNTING', 'AR / AP', 'TAX', 'POS', 'SFA', 'REPORTING', 'API INTEGRATION', 'IT OPERATIONS'
  ],
  projects: [
    {
      slug: 'karunia-erp',
      featured: true,
      title: 'KARUNIA ERP',
      type: 'ERP · TEXTILE OPERATIONS',
      year: '2026',
      image: '/projects/karunia.svg',
      accent: 'Modular ERP for textile operations, roll-level stock, orders, purchasing, finance, security, reporting, and branch workflows.',
      role: 'System Analysis · Full-stack Development · Business Logic',
      stack: 'Laravel · PHP · MySQL · Redis · Vite',
      status: 'PRIVATE WORK PROJECT',
      statusTone: 'private',
      repositoryLabel: 'PRIVATE REPOSITORY',
      caseStudy: {
        context: 'A textile operation where stock is not just a quantity. Roll identity, allocation, ordering, purchasing, payment, receivable, settlement, audit, and branch behavior all affect the same operational picture.',
        problem: 'Generic CRUD flows are not enough for roll-level textile operations. The system has to preserve stock identity and business restrictions while keeping order, purchasing, finance, security, and reporting connected.',
        contribution: 'I work across business-rule analysis, implementation, debugging, UAT, workflow refinement, data behavior, and day-to-day production improvements with users and operations in mind.',
        decisions: [
          'Keep business domains separated through modular application boundaries instead of growing one monolithic feature file.',
          'Treat roll-level stock rules and allocation behavior as business logic, not presentation-only filtering.',
          'Share security, audit, reporting, realtime, and branch foundations across operational modules.',
          'Refine workflows from production feedback instead of freezing the design after the first release.'
        ],
        capabilities: ['Roll-level stock', 'Order workflow', 'Purchasing & receiving', 'Payments & receivables', 'Audit & security', 'Branch/LAN support'],
        outcome: 'A single operational system that keeps textile stock, transactions, finance-oriented workflows, access control, and reporting under one modular structure.',
        proof: 'PRIVATE / EMPLOYER PROJECT',
        note: 'Repository and production data remain private. Portfolio content is limited to sanitized architecture and workflow descriptions.'
      }
    },
    {
      slug: 'softech-erp',
      featured: true,
      title: 'SOFTECH ERP',
      type: 'ERP · DISTRIBUTION',
      year: '2026',
      image: '/projects/softech.svg',
      accent: 'Distributor ERP connecting sales, procurement, warehouse, inventory, AR/AP, cash/bank, accounting, and multi-entity workflows.',
      role: 'Architecture · Full-stack Development · ERP Workflow',
      stack: 'React · Vite · Go · PostgreSQL 18 · Redis',
      status: 'PUBLIC SOURCE',
      statusTone: 'public',
      repository: 'https://github.com/Febriantrip/softech-erp',
      caseStudy: {
        context: 'Distributor operations cross many domains: order capture, reservation, warehouse execution, procurement, receivables, payables, cash, accounting periods, and entity/site context.',
        problem: 'The system needed clear domain boundaries without sacrificing transactional consistency across operational and financial workflows.',
        contribution: 'I designed the architecture baseline, domain boundaries, frontend/backend integration, database-backed transaction flows, PostgreSQL migrations, and iterative ERP milestones.',
        decisions: [
          'Use a Go modular monolith first, keeping domains explicit while retaining one transactional database boundary.',
          'Use PostgreSQL as the system of record and Redis only for supporting cache, queue, and lock concerns.',
          'Keep critical commands transaction-backed, with idempotency and locking/version checks where concurrency matters.',
          'Build multi-entity and governance foundations into the ERP instead of treating them as late UI additions.'
        ],
        capabilities: ['Sales & shipment', 'Procurement', 'Inventory & warehouse', 'AR / AP', 'GL & periods', 'Multi-entity foundations'],
        outcome: 'Operational and financial workflows share one coherent ERP architecture with explicit business-domain boundaries and production-backed transaction paths.',
        proof: 'LIVE DEPLOYMENT + PUBLIC SOURCE',
        note: 'The repository is a sanitized public portfolio snapshot of an actively developed ERP.'
      }
    },
    {
      slug: 'cemilin',
      featured: true,
      title: 'CEMILIN',
      type: 'ECOMMERCE · SELLER OPS',
      year: '2026',
      image: '/projects/cemilin.svg',
      accent: 'Full-stack commerce platform with storefront, Seller Center, stock reservation, payment review, purchasing, accounting, and Railway deployment.',
      role: 'Full-stack Development · Deployment · Business Logic',
      stack: 'React · TypeScript · Node.js · Express · MySQL · Railway',
      status: 'LIVE · PUBLIC SOURCE',
      statusTone: 'live',
      repository: 'https://github.com/Febriantrip/Cemilin',
      live: 'https://cemilin-production.up.railway.app',
      caseStudy: {
        context: 'A small commerce operation needs more than a catalog. Customer checkout has to stay aligned with available stock, payment review, seller actions, purchasing, and accounting records.',
        problem: 'Without order-state controls and stock reservation, a simple storefront can quickly create operational inconsistencies when customers, payment proof, and seller processing overlap.',
        contribution: 'I built the customer storefront, Seller Center, backend APIs, transaction rules, production preparation, Railway deployment, and accounting/purchase-costing expansion.',
        decisions: [
          'Reserve stock inside the checkout transaction and restore it through eligible cancellation or expiry flows.',
          'Model payment verification as explicit order states instead of trusting uploaded proof as payment confirmation.',
          'Serve the production frontend and API from one Express origin to simplify session and deployment behavior.',
          'Keep seller operations, purchasing, and accounting in the same product so operational data can flow forward.'
        ],
        capabilities: ['Storefront & cart', 'Stock reservation', 'Payment review', 'Seller Center', 'Purchasing', 'Accounting reports'],
        outcome: 'A deployable transaction system that connects the customer shopping experience with seller operations, stock control, payment handling, purchasing, and accounting.',
        proof: 'LIVE DEPLOYMENT + PUBLIC SOURCE',
        note: 'Production credentials and uploaded customer/payment data are intentionally excluded from the public repository.'
      }
    },
    {
      slug: 'iinvitation',
      featured: false,
      title: 'IINVITATION',
      type: 'WEB PRODUCT · INVITATION',
      year: '2026',
      image: '/projects/iinvitation.svg',
      accent: 'Multi-client digital invitation platform with CMS, guest personalization, RSVP, guestbook, check-in, media, and client review workflow.',
      role: 'Product Design · Full-stack Development · UX',
      stack: 'React · TypeScript · Node.js · Express · MySQL',
      status: 'LIVE · PUBLIC SOURCE',
      statusTone: 'live',
      repository: 'https://github.com/Febriantrip/iinvitation',
      live: 'https://febriantrip.github.io/iinvitation/',
      caseStudy: {
        context: 'Invitation projects often repeat the same operational work: content setup, guest personalization, RSVP, event-side check-in, media, client review, and publication.',
        problem: 'Treating every invitation as a one-off page makes repeated work harder to manage and gives no shared operational workflow for multiple clients.',
        contribution: 'I shaped the product structure, frontend/backoffice experience, Express API, MySQL persistence, guest workflows, review flow, and reusable template foundations.',
        decisions: [
          'Separate public invitation experiences from admin/backoffice and client-review flows while keeping one product model.',
          'Use personalized guest tokens for invitation and check-in workflows instead of duplicating pages per guest.',
          'Keep media, section configuration, template choice, review, and publication state inside the CMS workflow.',
          'Publish only sanitized demo data and keep customer uploads, production tokens, and credentials outside source control.'
        ],
        capabilities: ['Multi-client CMS', 'Guest links', 'RSVP & wishes', 'Guestbook & check-in', 'Client review', 'Realtime events'],
        outcome: 'A reusable invitation product ecosystem rather than a collection of isolated landing pages.',
        proof: 'PUBLIC SOURCE',
        note: 'The public repository uses synthetic demo identities and excludes customer-specific data and production secrets.'
      }
    },
    {
      slug: 'website-demo',
      featured: false,
      title: 'MULTI-INDUSTRY WEBSITE DEMO',
      type: 'WEBSITE · BUSINESS',
      year: '2026',
      image: '/projects/webprojects.svg',
      accent: 'One React company-profile engine adapted into six industry-specific digital experiences from a shared content and component system.',
      role: 'Frontend Development · UI System · Deployment',
      stack: 'React · JavaScript · CSS · Vite · GitHub Pages',
      status: 'LIVE · PUBLIC SOURCE',
      statusTone: 'live',
      repository: 'https://github.com/Febriantrip/website-demo',
      live: 'https://febriantrip.github.io/website-demo/',
      caseStudy: {
        context: 'Distributor, retail, fashion, textile, manufacturing, and service companies need very different messaging even when the technical website foundation is similar.',
        problem: 'Maintaining separate codebases for each demo would duplicate layout and interaction work while making every improvement harder to propagate.',
        contribution: 'I built one reusable React experience with industry-driven content, visual treatment, interaction states, WhatsApp lead handoff, and automated GitHub Pages deployment.',
        decisions: [
          'Centralize industry content in one structured configuration layer.',
          'Reuse shared UI components while allowing each industry to change copy, metrics, showcase material, process, and visual direction.',
          'Keep the product frontend-only and route quote requests directly to WhatsApp.',
          'Use GitHub Actions and GitHub Pages for a simple public deployment path.'
        ],
        capabilities: ['6 industry modes', 'Shared component system', 'Interactive showcases', 'Responsive UX', 'WhatsApp lead flow', 'GitHub Pages CI/CD'],
        outcome: 'Six distinct business narratives delivered from one maintainable frontend codebase.',
        proof: 'LIVE DEPLOYMENT + PUBLIC SOURCE',
        note: 'NEXORA and all business metrics/contact details in the demo are fictional portfolio content.'
      }
    },
    {
      slug: 'job-report',
      featured: false,
      title: 'JOB REPORT SYSTEM',
      type: 'INTERNAL SYSTEM · REPORTING',
      year: '2024—2026',
      image: '/projects/jobreport.svg',
      accent: 'Web-based operational job reporting system designed to give internal work a clearer reporting trail and workflow visibility.',
      role: 'System Development · Reporting · Workflow',
      stack: 'JavaScript · PHP · SQL',
      status: 'INTERNAL SYSTEM',
      statusTone: 'internal',
      caseStudy: {
        context: 'Internal support and operational work needs a consistent reporting trail so status, activity, and follow-up are easier to see than in scattered messages or ad-hoc notes.',
        problem: 'Operational reporting becomes difficult to review when records are inconsistent or spread across informal channels.',
        contribution: 'I worked on the system flow, web implementation, reporting structure, and practical day-to-day usage around internal operational work.',
        decisions: [
          'Keep the workflow focused on operational reporting instead of turning it into an oversized general-purpose platform.',
          'Structure records so users can follow work history and status more consistently.',
          'Design around internal usage patterns and practical reporting needs.',
          'Keep company-specific implementation details out of the public portfolio.'
        ],
        capabilities: ['Operational reports', 'Workflow visibility', 'Structured history', 'Internal usage'],
        outcome: 'A dedicated internal reporting surface for operational work and follow-up visibility.',
        proof: 'INTERNAL PROJECT',
        note: 'No source code or internal company data is published.'
      }
    },
  ],
  moreProjects: [
    { title: 'ORLANSOFT ERP IMPLEMENTATION', meta: 'Sales · Inventory · Accounting · AR/AP · Tax · SFA · Drivermate · POS' },
    { title: 'HR / ATTENDANCE SYSTEM', meta: 'Internal business system' },
    { title: 'API & REPORTING INTEGRATION', meta: 'System integration · Operational reporting' },
    { title: 'DCS CLAIM DISTRIBUTOR', meta: 'Distributor claim workflow system' },
  ],
  experience: [
    {
      period: 'APR 2026 — PRESENT',
      company: 'PT KARUNIA TEXTILE INDONESIA',
      role: 'FULL-STACK PROGRAMMER',
      summary: 'Developing and maintaining internal business systems, ERP modules, web applications, integrations, databases, and workflow improvements across frontend and backend.'
    },
    {
      period: 'OCT 2024 — APR 2026',
      company: 'WAC GROUP',
      role: 'COORDINATOR IT SUPPORT',
      summary: 'Coordinated daily IT support operations, ERP/application continuity, access management, technical troubleshooting, vendor coordination, reporting, user training, and team improvement.'
    },
    {
      period: 'SEP 2022 — OCT 2024',
      company: 'PT ORLANSOFT DATA SYSTEM',
      role: 'STAFF FUNCTIONAL CONSULTANT',
      summary: 'ERP implementation, user training, data verification, UAT with users, post-implementation support, troubleshooting, and cross-functional project execution.'
    },
  ],
  education: {
    school: 'UNIVERSITAS PASUNDAN BANDUNG',
    degree: "BACHELOR'S DEGREE IN ACCOUNTING",
    period: '2017 — 2021'
  },
  aiWorkflow: {
    label: 'AI-ASSISTED, HUMAN-DIRECTED DEVELOPMENT',
    text: 'I use AI to accelerate implementation, debugging, refactoring, testing, architecture exploration, and documentation while keeping business rules, validation, architecture, and final technical decisions under human review.',
    tools: ['ChatGPT', 'Codex', 'AI-Assisted Coding', 'Debugging', 'Refactoring', 'Test Generation', 'Architecture Exploration', 'Documentation']
  },
  process: [
    { number: '01', title: 'UNDERSTAND', text: 'Map the real business process, users, constraints, and success criteria.' },
    { number: '02', title: 'DESIGN', text: 'Turn requirements into a clean flow, data model, and modular solution.' },
    { number: '03', title: 'BUILD', text: 'Implement the product with maintainable code and practical UX.' },
    { number: '04', title: 'TEST', text: 'Validate business rules, edge cases, data, and user acceptance.' },
    { number: '05', title: 'SHIP', text: 'Deploy, document, train users, and support the rollout.' },
    { number: '06', title: 'IMPROVE', text: 'Use real operational feedback to refine the system.' },
  ],
  stack: [
    'React', 'TypeScript', 'JavaScript', 'PHP', 'Laravel', 'Go', 'Node.js', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'REST API', 'Tailwind', 'Vite', 'Docker', 'Git'
  ],
  tools: [
    'GitHub', 'VS Code', 'XAMPP', 'Railway', 'Google Sheets', 'Apps Script', 'phpMyAdmin', 'pgAdmin', 'PowerShell'
  ],
  socials: [
    { label: 'GITHUB', href: 'https://github.com/Febriantrip' },
    { label: 'EMAIL', href: 'mailto:febrian.trip@gmail.com' },
    { label: 'WHATSAPP', href: 'https://wa.me/6285706060202' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/febriantrip' },
  ]
}
