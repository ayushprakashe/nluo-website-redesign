# NLUO Website Redesign

> An independent website redesign concept for National Law University Odisha (NLUO). This repository is a development prototype and is **not** the University's official website.

A modern, student-centred institutional website concept built with Next.js, React, TypeScript and a proposed Prisma/PostgreSQL CMS data model. The design direction is premium, minimal and academic, with restrained scroll interactions and clearer navigation for students, applicants, faculty and visitors.

## Preview locally

### Requirements

- Node.js 20 or later (Node.js 22 is also suitable)
- npm
- Git (optional, but recommended)

### Run

```bash
git clone https://github.com/YOUR-USERNAME/nluo-website-redesign.git
cd nluo-website-redesign
npm install
npm run dev
```

Open **http://localhost:3000**. The admin concept is at **http://localhost:3000/admin**.

If you downloaded the ZIP from ChatGPT instead of cloning, extract it, open the extracted folder in a terminal, and run the same `npm install` and `npm run dev` commands.

## GitHub setup

1. Sign in to GitHub and create a new repository, for example `nluo-website-redesign`.
2. Keep the repository empty when creating it (do not add a second README, `.gitignore`, or licence).
3. Extract this project and open a terminal in its root folder.
4. Run the following commands, replacing the remote URL with your repository URL:

```bash
git init
git add .
git commit -m "Initial NLUO website redesign"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nluo-website-redesign.git
git push -u origin main
```

After pushing, GitHub will display the source code, README, folders and commit history. To preview the running website online, use a Next.js-compatible host such as Vercel and import the GitHub repository. GitHub is the code repository; it does not automatically run this Next.js application just because the source is uploaded.

## What's included

- Responsive institutional homepage and navigation concept.
- Section landing-page routes for About, Academics, Admissions, Research, People, Students, Campus, Accreditation, Notices, Tenders, News and Contact.
- Desktop mega-navigation and mobile-friendly layout.
- CMS dashboard visual concept with content categories, status indicators, search and local create-as-draft interaction.
- Prisma/PostgreSQL schema proposal for users, roles, content, documents, revisions and audit logs.
- Scroll reading-progress indicator, reveal-on-scroll transitions, staggered entrances and restrained hero parallax.
- GitHub-ready repository files, contribution guidance, security notes, issue template, pull-request template and CI workflow.

## Useful commands

```bash
npm run dev          # Start local development server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
npm run db:validate  # Validate Prisma schema
npm run build        # Create a production build
npm start            # Run the production build locally
```

## Current limitations — read before deployment

This is a **starter prototype**, not a finished or production-ready University website.

- The `/admin` page is a front-end demonstration. It has no production authentication, API, persistent database connection, secure file upload, enforced approval workflow or real audit logging.
- Public section pages are structured placeholders. A complete page-by-page content migration, verified URL inventory and redirect map are still required.
- The original NLUO campus background video and official logo/crest have not yet been supplied and verified. The current visual uses placeholders. Do not redraw or approximate the official seal.
- The CMS vendor and final architecture remain to be approved. The Prisma schema is only a proposed custom-CMS data model.
- No production build or browser QA has been certified in this package. GitHub Actions is configured to run lint, type-check, Prisma validation and build checks on pushes and pull requests.

Do not expose the prototype admin page publicly with real data. Before institutional launch, obtain written University approval, authorised brand/video assets, complete content verification, security review, accessibility testing, backups and institution-controlled hosting.

## Scroll and accessibility

The scroll interactions are intentionally subtle. They include a top reading-progress bar, reveal-on-scroll transitions, staggered card entrances and a restrained hero parallax effect. They respect the visitor's `prefers-reduced-motion` preference.

## Design system

- Midnight navy: `#10283F`
- Warm ivory: `#F5F3ED`
- Muted teal: `#367C78`
- Copper accent: `#B77B52`
- Typography direction: Playfair Display + DM Sans

## Project status

Early development scaffold. Contributions and review are welcome, but factual institutional content and official brand assets must be verified and authorised before publication.
