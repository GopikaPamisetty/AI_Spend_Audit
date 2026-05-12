# DECISIONS.md

# AI Spend Audit – Engineering & Product Decisions

## Overview

This document explains the key engineering, architectural, and product decisions made during the development of AI Spend Audit.

The project involved several tradeoffs related to:

* speed,
* simplicity,
* scalability,
* product realism,
* and implementation complexity.

---

# Technology Decisions

## Why Next.js?

Chosen because:

* full-stack support
* App Router architecture
* built-in routing
* strong TypeScript support
* production deployment simplicity

Next.js also integrates seamlessly with:

* Vercel
* modern React workflows
* SEO features

---

## Why TypeScript?

TypeScript was chosen to improve:

* type safety
* deployment reliability
* refactoring confidence
* developer experience

This became especially valuable during:

* deployment debugging,
* schema validation,
* and audit engine development.

---

## Why Tailwind CSS?

Tailwind was selected because:

* rapid UI iteration
* utility-first styling
* minimal CSS overhead
* responsive design support

This enabled faster frontend development while maintaining consistent styling.

---

## Why Supabase?

Supabase was selected because:

* PostgreSQL support
* fast backend setup
* easy frontend integration
* generous free tier
* RESTful APIs

Compared to building a custom backend, Supabase significantly reduced implementation complexity.

---

# Product Decisions

## Why AI Spend Optimization?

AI tooling adoption is growing rapidly.

Many users now subscribe to:

* ChatGPT
* Claude
* Cursor
* GitHub Copilot
* Gemini

This creates:

* subscription overlap,
* cost visibility problems,
* and optimization opportunities.

The product idea was chosen because it:

* feels timely,
* has clear ROI,
* and supports SaaS-style workflows.

---

## Why Rule-Based Recommendations?

The recommendation engine intentionally uses deterministic logic instead of LLM-generated outputs.

Advantages:

* predictable behavior
* easier debugging
* transparent calculations
* no external API dependency

Tradeoff:

* less personalization.

This was considered acceptable for the current project scope.

---

## Why Public Reports?

Public report URLs improve:

* shareability
* virality potential
* SaaS realism
* onboarding simplicity

Tradeoff:

* limited privacy controls.

The product currently prioritizes:

* ease of use
  over
* strict access control.

---

# UX Decisions

## Why “Optimized Stack” Exists

Many audit-style products generate recommendations even when unnecessary.

This project intentionally supports:

```text id="dc1"
No Changes Needed
```

states.

Reason:

* improves trustworthiness
* increases realism
* avoids manipulative UX patterns

---

## Why Quantified Savings Are Prominent

Savings are displayed prominently because:

* quantified ROI improves engagement,
* communicates value quickly,
* and creates emotional impact.

Examples:

```text id="dc2"
Potential Monthly Savings
Potential Yearly Savings
```

---

## Why Lightweight Onboarding?

The application avoids:

* mandatory signup
* long forms
* complex configuration

Goal:

* maximize completion rate
* reduce friction
* encourage experimentation

---

# Engineering Tradeoffs

## Why No Authentication Yet?

Authentication was intentionally excluded because:

* it increases implementation complexity,
* slows onboarding,
* and was not essential for MVP functionality.

Tradeoff:

* reports remain public.

---

## Why No Real Billing Integrations?

Real billing integrations would require:

* vendor APIs
* OAuth flows
* usage permissions
* backend complexity

Instead, the project uses:

* deterministic pricing assumptions.

This allowed focus on:

* UX,
* deployment,
* and recommendation logic.

---

## Why Minimal State Management?

The application uses:

* React hooks only.

No Redux/Zustand/etc. were added because:

* application complexity remained manageable,
* and simpler architecture improved maintainability.

---

# Testing Decisions

## Why Vitest?

Vitest was selected because:

* lightweight setup
* fast execution
* TypeScript compatibility
* modern developer experience

---

## Why GitHub Actions?

GitHub Actions enabled:

* automated linting
* automated tests
* CI validation

This improved:

* deployment confidence
* and engineering professionalism.

---

# Security Decisions

## Why Honeypot Instead of CAPTCHA?

Honeypot spam protection was chosen because:

* low friction
* simple implementation
* no external dependencies
* good enough for MVP-level abuse prevention

Tradeoff:

* weaker than enterprise anti-bot systems.

---

# Deployment Decisions

## Why Vercel?

Advantages:

* seamless Next.js deployment
* fast setup
* preview deployments
* GitHub integration

This significantly simplified production deployment.

---

# Scalability Decisions

The current architecture intentionally favors:

* implementation simplicity
* rapid iteration
* maintainability

over:

* enterprise-scale optimization.

Future scalability improvements can be added incrementally.

---

# Biggest Lessons Learned

Important takeaways:

* CI/CD catches hidden issues
* deployment environments expose different bugs
* TypeScript improves production reliability
* UX trustworthiness matters
* product thinking is as important as engineering

---

# Conclusion

The decisions made throughout the project prioritized:

* simplicity,
* realism,
* developer productivity,
* and product clarity.

The resulting system demonstrates:

* practical engineering tradeoffs,
* full-stack implementation,
* and SaaS-oriented product thinking.
