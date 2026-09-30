# Febrian Portfolio - React Frontend

Editorial portfolio for **Febrian Tri Prasmanto**, built as a frontend-only React experience with project proof, case studies, business-domain context, career history, and direct links to public source/live deployments.

## Stack

- React + Vite
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Plain CSS
- No backend required

## Run locally

```bash
npm install
npm run dev
```

Or on Windows run `START.bat`.

## Production build

```bash
npm run build
```

Or on Windows run `BUILD.bat`.

## Content model

The main content file is:

```text
src/data/portfolio.js
```

It contains profile copy, engineering principles, project metadata, case-study content, work history, tech stack, tools, and contact links.

## Portfolio sections

1. Hero
2. About
3. How I Think
4. Expertise
5. ERP & Business Domains
6. Selected Work + Case Studies
7. More Project Experience
8. Experience + Education
9. How I Work
10. Tech & Tools
11. Contact

## Case-study system

Every Selected Work project now includes a structured case study:

- context
- problem
- personal contribution
- key engineering decisions
- system scope
- outcome
- proof / visibility status

The three flagship projects are visually prioritized, while supporting product/web/internal work remains available below them.

## Credibility labels

Projects explicitly identify whether evidence is:

- public source
- live deployment
- private work project
- internal system

Private/internal work does not expose company data or confidential source code.

## Linked portfolio projects

- Karunia ERP - private work project
- SOFTECH ERP - https://github.com/Febriantrip/softech-erp
- CemilIn - https://github.com/Febriantrip/Cemilin
- iInvitation - https://github.com/Febriantrip/iinvitation
- Multi-Industry Website Demo - https://github.com/Febriantrip/website-demo
- Job Report System - internal project

## Accessibility & metadata

- keyboard focus states
- Escape-to-close project case studies
- semantic dialog labels
- coarse-pointer cursor fallback
- reduced-motion behavior
- lazy-loaded project artwork
- Open Graph / Twitter metadata
- favicon and web manifest

The contact form is frontend-only and prepares an email in the visitor's default email application.

## AI-assisted development workflow

The portfolio presents AI as part of the development workflow, not as a job title. ChatGPT and Codex are used to accelerate implementation, debugging, refactoring, testing, architecture exploration, and documentation, while architecture, business rules, validation, and final technical decisions remain human-directed.
