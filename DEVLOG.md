# DEVLOG.md

# AI Spend Audit – Development Log

## Project Overview

AI Spend Audit is a SaaS-style web application designed to help users analyze AI tooling expenses and identify cost optimization opportunities.

The project evolved from a simple calculator into a full-stack deployed platform with:

* Dynamic audits
* Recommendation engine
* Persistent reports
* CI/CD automation
* Public shareable URLs

---

# Day 1 – Project Planning & Setup

## Goals

* Understand assignment requirements
* Select technology stack
* Initialize project

## Decisions Made

Chosen stack:

* Next.js
* TypeScript
* Tailwind CSS
* Supabase
* Vercel

## Initial Work

* Created Next.js application
* Configured TypeScript
* Installed dependencies
* Set up Tailwind CSS
* Created GitHub repository

---

# Day 2 – Audit Engine Development

## Goals

* Build recommendation engine
* Design pricing model
* Implement savings calculations

## Work Completed

* Created centralized tools configuration
* Added pricing plans
* Built audit recommendation logic
* Implemented savings calculations
* Added optimized-state handling

## Challenges

Balancing realistic pricing logic while keeping the rule engine simple and deterministic.

---

# Day 3 – Dynamic UI Development

## Goals

* Build interactive audit experience
* Add multiple tool support
* Improve user experience

## Work Completed

* Created ToolCard component
* Added dynamic tool creation
* Implemented form validation
* Added localStorage persistence
* Implemented smooth scrolling

## UX Improvements

* Clear savings display
* Optimized-state messaging
* High-savings callouts

---

# Day 4 – Backend Integration

## Goals

* Persist reports
* Build public report pages
* Connect database

## Work Completed

* Created Supabase project
* Designed leads table schema
* Integrated Supabase client
* Implemented report saving
* Built dynamic report routes

## Challenges

Resolved:

* Supabase permission issues
* Row-level access problems
* Insert authorization errors

---

# Day 5 – Production Readiness

## Goals

* Add testing
* Configure CI/CD
* Deploy application

## Work Completed

* Added Vitest tests
* Configured GitHub Actions
* Fixed lint issues
* Added Open Graph metadata
* Implemented honeypot spam protection
* Deployed application to Vercel

## CI/CD

Automated pipeline now validates:

* ESLint
* Unit tests

on every push.

---

# Technical Challenges Faced

## React Hook Lint Issues

React 19 introduced stricter linting around:

```text id="dl1"
setState inside effects
```

Solution:

* Refactored effects
* Deferred updates using Promise.resolve()

---

## Alias Import Issues

Vitest initially failed to resolve:

```text id="dl2"
@
```

imports.

Solution:

* Switched to relative imports inside tests

---

## TypeScript Schema Errors

Deployment failed because:

```text id="dl3"
price
```

field did not exist in the Plan interface.

Solution:

* Removed invalid properties
* Standardized pricing schema

---

## Supabase Permissions

Insert operations initially failed due to:

* missing table privileges
* anonymous role restrictions

Solution:

* Granted insert permissions
* Verified public access behavior

---

# Product Decisions

## Why Rule-Based Recommendations?

Advantages:

* Fast implementation
* Predictable outputs
* Easier debugging
* No dependency on external AI APIs

Tradeoff:

* Less personalized than true LLM-generated analysis

---

## Why Public Reports?

Public URLs improve:

* Shareability
* Virality potential
* Product realism
* SaaS-style behavior

---

# Lessons Learned

## Engineering Lessons

* CI/CD catches issues missed locally
* TypeScript improves deployment reliability
* Production deployments reveal hidden bugs

## Product Lessons

* Small UX improvements matter significantly
* Clear savings visualization improves usability
* Honest “optimized” states increase credibility

---

# What Went Well

Successful outcomes:

* Full-stack deployment completed
* Automated tests implemented
* CI pipeline working
* Dynamic reports functioning
* Supabase integration stable

---

# What Could Be Improved

Future improvements:

* Real LLM-generated summaries
* Authentication system
* Team collaboration features
* PDF exports
* Advanced analytics
* Usage-based recommendations

---

# Final Reflection

The project evolved significantly beyond the original minimum requirements.

It became:

* a production-deployed application,
* a tested engineering system,
* and a realistic SaaS-style product prototype.

The development process provided valuable experience in:

* full-stack engineering,
* deployment workflows,
* CI/CD automation,
* debugging,
* and product-oriented decision making.
