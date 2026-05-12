# ARCHITECTURE.md

# AI Spend Audit – System Architecture

## Overview

AI Spend Audit is a full-stack SaaS-style web application that helps teams analyze their AI tooling expenses, identify overspending, and receive optimization recommendations.

The platform allows users to:

* Enter AI tools and subscription details
* Compare current spending against expected pricing
* Generate optimization recommendations
* Save audit reports
* Share public audit report links

The application is deployed publicly using Vercel and uses Supabase as the backend database layer.

---

# High-Level Architecture

```text
User Browser
     |
     v
Next.js Frontend (Vercel)
     |
     v
Audit Engine Logic
     |
     v
Supabase Database
     |
     v
Public Shareable Reports
```

---

# Frontend Architecture

## Framework

The frontend was built using:

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

The application uses the App Router architecture provided by Next.js.

---

# Main Frontend Components

## Landing Page

The landing page introduces the product and explains the value proposition:

* Reduce AI tool overspending
* Audit subscriptions
* Discover cheaper alternatives

Main sections:

* Hero section
* Audit form
* Audit results
* Lead capture form

---

## AuditForm Component

Primary responsibilities:

* Manage audit inputs
* Store form state
* Run audit calculations
* Save leads
* Generate reports

Key features:

* Dynamic tool cards
* Validation
* Local storage persistence
* Smooth scrolling
* Savings calculations
* Honeypot spam protection

---

## ToolCard Component

Each ToolCard represents one AI tool entry.

Responsibilities:

* Tool selection
* Plan selection
* Seat count input
* Monthly spend input

Tool configuration is driven from centralized constants.

---

## Report Page

Dynamic report pages are generated using:

```text
/report/[id]
```

Responsibilities:

* Fetch saved audit reports
* Display savings summaries
* Show audited tools
* Provide shareable URLs

---

# Backend Architecture

## Database

Backend infrastructure uses:

* Supabase
* PostgreSQL

The database stores:

* Lead information
* Audit tool data
* Savings summaries
* Generated reports

---

# Leads Table Schema

```sql
create table leads (
  id uuid primary key,
  email text not null,
  company text,
  role text,
  team_size integer,
  use_case text,
  audit_data jsonb,
  total_monthly_savings numeric,
  total_yearly_savings numeric,
  created_at timestamp default now()
);
```

---

# Data Flow

## Audit Flow

1. User enters AI tools
2. Audit engine analyzes spending
3. Recommendations are generated
4. Summary is created
5. Results displayed in UI

---

## Save Report Flow

1. User enters email
2. Frontend validates data
3. Honeypot spam check runs
4. Supabase insert operation executes
5. Public report URL generated
6. User redirected to report page

---

# Audit Engine

The audit engine is rule-based.

Implemented recommendation categories:

* Free-plan overspending detection
* Generic overspending detection
* Cursor Teams optimization
* ChatGPT Team optimization
* Gemini optimization

The engine calculates:

* Expected plan cost
* Monthly savings
* Yearly savings

---

# State Management

The application uses:

* React useState
* React useEffect

No external state management library was required because application complexity remained manageable.

---

# Persistence Strategy

## Local Storage

Audit form state is persisted using browser localStorage.

Stored data:

* Tool cards
* Team size
* Use case

This improves user experience during refreshes or accidental navigation.

---

# Security Considerations

## Environment Variables

Sensitive keys are stored using:

* `.env.local`
* Vercel Environment Variables

Secrets are never committed to GitHub.

---

## Honeypot Spam Protection

A hidden honeypot field was implemented to reduce automated spam submissions.

Bots that populate hidden fields are rejected before saving reports.

---

# Testing Strategy

The project uses:

* Vitest
* GitHub Actions CI

Implemented automated tests:

* Overspending detection
* Optimized stack validation
* Savings calculations
* Rule engine behavior

CI pipeline automatically runs:

* ESLint
* Unit tests

on every GitHub push.

---

# Deployment Architecture

## Hosting

Frontend deployment:

* Vercel

Backend infrastructure:

* Supabase

---

# CI/CD Pipeline

GitHub Actions pipeline performs:

1. Dependency installation
2. ESLint checks
3. Automated testing

This ensures production stability before deployment.

---

# SEO & Metadata

The application includes:

* Open Graph metadata
* Twitter card metadata
* SEO descriptions

This improves social sharing previews and discoverability.

---

# Scalability Considerations

Future improvements could include:

* Real AI-generated summaries using LLM APIs
* Usage-based pricing analytics
* Organization accounts
* Authentication
* Team dashboards
* Billing integrations
* PDF report exports
* Real-time analytics

---

# Tradeoffs & Engineering Decisions

## Why Next.js?

Chosen because:

* Full-stack support
* Fast deployment
* Excellent developer experience
* Built-in routing
* Strong TypeScript support

---

## Why Supabase?

Chosen because:

* Fast backend setup
* PostgreSQL support
* Easy integration
* Free tier availability
* RESTful APIs

---

## Why Rule-Based Recommendations?

A deterministic rule engine was selected because:

* Easier to debug
* Predictable outputs
* Faster implementation
* No dependency on paid AI APIs

---

# Conclusion

The project successfully demonstrates:

* Full-stack engineering
* SaaS-style architecture
* Backend integration
* CI/CD workflows
* Automated testing
* Production deployment
* Practical product thinking

The application is production-deployed and publicly accessible.

