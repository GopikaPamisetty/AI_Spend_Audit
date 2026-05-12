# DEPLOYMENT.md

# AI Spend Audit – Deployment Guide

## Overview

This document explains how AI Spend Audit was deployed to production using:

* Vercel
* Supabase
* GitHub
* GitHub Actions

The deployment process includes:

* frontend hosting,
* backend integration,
* CI/CD automation,
* and environment configuration.

---

# Production Stack

## Frontend Hosting

* Vercel

## Backend Infrastructure

* Supabase
* PostgreSQL

## Source Control

* GitHub

## CI/CD

* GitHub Actions

---

# Deployment Architecture

```text id="dp1"
GitHub Repository
        |
        v
GitHub Actions CI
        |
        v
Vercel Deployment
        |
        v
Production Frontend
        |
        v
Supabase Backend
```

---

# Step 1 – Push Code to GitHub

Repository:

```text id="dp2"
https://github.com/GopikaPamisetty/AI_Spend_Audit
```

Basic workflow:

```bash id="dp3"
git add .
git commit -m "your message"
git push
```

GitHub Actions automatically validates:

* lint checks
* unit tests

before deployment.

---

# Step 2 – Create Supabase Project

Supabase was used to provide:

* PostgreSQL database
* RESTful API access
* backend persistence

Configured items:

* leads table
* public insert access
* project environment variables

---

# Step 3 – Configure Database Schema

Main table:

```sql id="dp4"
create table leads (
  id uuid default gen_random_uuid()
  primary key,
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

# Step 4 – Configure Environment Variables

Create:

```text id="dp5"
.env.local
```

Variables:

```env id="dp6"
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

# Step 5 – Deploy to Vercel

Deployment platform:

```text id="dp7"
Vercel
```

Deployment steps:

1. Import GitHub repository
2. Select Next.js preset
3. Add environment variables
4. Deploy project

---

# Step 6 – Production Deployment

Live application:

```text id="dp8"
https://ai-spend-audit-peach.vercel.app/
```

---

# CI/CD Pipeline

GitHub Actions workflow file:

```text id="dp9"
.github/workflows/ci.yml
```

Pipeline responsibilities:

* install dependencies
* run ESLint
* execute Vitest tests

Triggered automatically on:

```text id="dp10"
git push
```

---

# Deployment Challenges Faced

## 1. TypeScript Build Failures

Production builds initially failed because:

* interface properties were inconsistent.

Example:

```text id="dp11"
price
```

did not exist in the:

```text id="dp12"
Plan
```

interface.

Solution:

* standardized pricing schema
* removed invalid properties

---

## 2. Supabase Permissions

Insert requests initially failed because:

* anonymous users lacked insert permissions.

Solution:

* granted appropriate permissions
* verified public submission flow

---

## 3. React Linting Issues

React 19 introduced stricter lint rules involving:

* hook dependencies
* state updates inside effects

Solution:

* refactored effects
* adjusted update flow

---

# Production Verification

The deployed application was manually verified for:

* audit generation
* report saving
* public report sharing
* responsive layouts
* CI/CD stability

---

# SEO & Metadata

Production deployment includes:

* Open Graph metadata
* Twitter card metadata
* SEO descriptions

This improves:

* link previews
* discoverability
* social sharing

---

# Security Considerations

Implemented protections:

* environment variable isolation
* honeypot spam protection
* managed infrastructure hosting

Not yet implemented:

* authentication
* rate limiting
* RBAC
* advanced monitoring

---

# Why Vercel Was Chosen

Advantages:

* seamless Next.js support
* fast deployments
* simple GitHub integration
* preview deployments
* good developer experience

---

# Why Supabase Was Chosen

Advantages:

* PostgreSQL backend
* fast setup
* easy API integration
* generous free tier
* developer-friendly tooling

---

# Lessons Learned

The deployment process reinforced:

* importance of CI/CD
* production build validation
* environment isolation
* strict TypeScript safety
* deployment debugging skills

---

# Conclusion

AI Spend Audit successfully demonstrates:

* production deployment,
* backend integration,
* CI/CD automation,
* and cloud-hosted SaaS architecture.

The project is publicly deployed and production-accessible using modern full-stack tooling.
