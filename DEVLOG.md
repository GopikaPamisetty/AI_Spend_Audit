# DEVLOG.md

# AI Spend Audit – Development Log

---

## Day 1 — 2026-05-06

**Hours worked:** 4

**What I did:**
- Read the complete Credex assignment carefully
- Planned the application architecture
- Chose Next.js + TypeScript + Tailwind CSS + Supabase stack
- Initialized the Next.js project
- Configured Tailwind CSS
- Created the GitHub repository
- Set up initial folder structure

**What I learned:**
- The assignment focuses more on shipping a real product than solving isolated coding problems
- Product thinking and documentation are equally important as code quality
- Planning architecture early reduces later refactoring

**Blockers / what I'm stuck on:**
- Initially unsure how detailed the audit logic should be
- Needed to research current AI tool pricing models

**Plan for tomorrow:**
- Build the pricing configuration system
- Start implementing the recommendation engine

---

## Day 2 — 2026-05-07

**Hours worked:** 5

**What I did:**
- Created centralized pricing configuration
- Added supported AI tools and plans
- Built the recommendation engine
- Implemented savings calculation logic
- Added optimized-state handling
- Added downgrade recommendation rules

**What I learned:**
- Hardcoded deterministic logic is more reliable than AI-generated financial calculations
- Centralized pricing data makes maintenance much easier
- Rule-based systems are easier to debug and test

**Blockers / what I'm stuck on:**
- Balancing realistic pricing logic while keeping implementation simple
- Needed to normalize plan naming across vendors

**Plan for tomorrow:**
- Build dynamic frontend UI
- Add multiple tool support
- Improve audit experience

---

## Day 3 — 2026-05-08

**Hours worked:** 6

**What I did:**
- Built the AuditForm component
- Created reusable ToolCard component
- Added dynamic “Add Tool” functionality
- Implemented form validation
- Added localStorage persistence
- Added smooth scrolling to results section
- Improved mobile responsiveness

**What I learned:**
- Dynamic React forms become difficult to manage without clean state updates
- Small UX improvements significantly improve perceived quality
- Validation improves trustworthiness of recommendations

**Blockers / what I'm stuck on:**
- Faced issues updating nested tool state correctly
- Needed multiple iterations to stabilize dynamic rendering

**Plan for tomorrow:**
- Integrate Supabase backend
- Add report persistence
- Build shareable report URLs

---

## Day 4 — 2026-05-09

**Hours worked:** 5

**What I did:**
- Created Supabase project
- Designed leads database schema
- Connected frontend to Supabase
- Implemented lead capture
- Added report saving functionality
- Built dynamic public report pages
- Added unique shareable report URLs

**What I learned:**
- Backend integration introduces many edge cases around null values and permissions
- Public shareable URLs make the product feel significantly more realistic
- Row-level security configuration is critical in Supabase

**Blockers / what I'm stuck on:**
- Faced Supabase insert permission errors
- Had issues retrieving inserted rows after save operations

**Plan for tomorrow:**
- Add tests
- Configure CI/CD pipeline
- Deploy application

---

## Day 5 — 2026-05-10

**Hours worked:** 6

**What I did:**
- Added Vitest testing setup
- Wrote audit engine tests
- Configured GitHub Actions CI workflow
- Fixed ESLint issues
- Added honeypot spam protection
- Added Open Graph metadata
- Deployed application to Vercel

**What I learned:**
- CI/CD pipelines quickly expose issues missed during local development
- TypeScript catches deployment-time bugs before production
- Automated testing improves confidence while refactoring

**Blockers / what I'm stuck on:**
- Vitest initially failed to resolve alias imports
- Deployment failed because of invalid TypeScript schema fields

**Plan for tomorrow:**
- Improve audit summaries
- Refine recommendation messaging
- Polish UI and documentation

---

## Day 6 — 2026-05-11

**Hours worked:** 5

**What I did:**
- Improved recommendation quality
- Added AI-style audit summary generation
- Improved optimized-state messaging
- Added high-savings callout sections
- Fixed React Hook linting issues
- Stabilized report rendering
- Improved error handling

**What I learned:**
- Honest “no savings found” messaging improves product credibility
- React 19 lint rules are stricter around effect state updates
- Clear messaging is just as important as accurate calculations

**Blockers / what I'm stuck on:**
- Initially attempted browser-side OpenAI integration which caused security/runtime issues
- Had to redesign summary generation strategy

**Plan for tomorrow:**
- Finish documentation
- Review assignment requirements line-by-line
- Finalize production readiness

---

## Day 7 — 2026-05-12

**Hours worked:** 6

**What I did:**
- Reviewed assignment requirements carefully
- Completed README documentation
- Wrote architecture explanation
- Added GTM and economics analysis
- Completed metrics documentation
- Improved landing page copy
- Performed final UI polish
- Verified deployment functionality
- Finalized repository structure

**What I learned:**
- Documentation quality strongly affects perceived engineering maturity
- Product positioning matters even for technical projects
- Small deployment issues can consume significant debugging time

**Blockers / what I'm stuck on:**
- Needed to reorganize documentation multiple times to match exact assignment requirements
- Lighthouse optimization still requires additional future improvements

**Plan for tomorrow:**
- Submit assignment
- Prepare for potential Round 2 interview/build task
