# PROMPTS.md

# AI Spend Audit – Prompt Documentation

## Overview

This document records how AI-assisted prompting was used during the development of AI Spend Audit.

AI tools were primarily used for:

* debugging,
* architecture guidance,
* documentation support,
* testing assistance,
* and frontend/backend implementation help.

The goal was not to generate the entire application automatically, but to accelerate engineering workflows and problem-solving.

---

# AI Tools Used

During development, the following AI tools were referenced:

* ChatGPT
* Cursor
* GitHub Copilot

Primary assistance came from:

```text id="pm1"
ChatGPT
```

---

# Categories of Prompts Used

## 1. Debugging Prompts

Used for:

* Next.js build failures
* React Hook lint errors
* Supabase integration issues
* TypeScript type mismatches
* deployment failures

Example topics:

* invalid JSX syntax
* React useEffect dependency handling
* CI/CD failures
* Vercel deployment debugging

---

# Example Debugging Prompt

```text id="pm2"
Why is GitHub Actions failing while local builds pass?
```

---

# 2. Architecture Guidance

Used for:

* project structure decisions
* backend integration planning
* deployment workflows
* CI/CD configuration

Example topics:

* Supabase architecture
* Next.js routing structure
* testing strategy
* deployment setup

---

# Example Architecture Prompt

```text id="pm3"
What is a clean architecture for a lightweight SaaS-style Next.js application?
```

---

# 3. UI/UX Assistance

Used for:

* improving landing page structure
* savings messaging
* audit result presentation
* CTA wording

Example topics:

* improving credibility
* handling optimized states
* SaaS dashboard patterns

---

# Example UX Prompt

```text id="pm4"
How should a SaaS audit product present optimization opportunities clearly?
```

---

# 4. Testing Assistance

Used for:

* Vitest setup
* unit testing
* CI configuration
* lint issue debugging

Example topics:

* alias import issues
* React lint compliance
* GitHub Actions workflows

---

# Example Testing Prompt

```text id="pm5"
How do I configure Vitest with a Next.js TypeScript project?
```

---

# 5. Documentation Assistance

Used for:

* architecture documentation
* reflection writing
* economics reasoning
* GTM strategy documentation

AI assistance helped structure:

* technical explanations
* engineering decisions
* and business reasoning.

---

# Prompting Workflow

Typical workflow:

1. Attempt implementation manually
2. Identify blocker or uncertainty
3. Ask targeted technical question
4. Apply suggested fix
5. Test locally
6. Validate in production

This iterative approach improved:

* debugging speed,
* learning efficiency,
* and development momentum.

---

# Areas Where AI Was Most Helpful

## CI/CD Debugging

AI assistance was especially valuable for:

* GitHub Actions setup
* lint debugging
* deployment troubleshooting

---

## React Hook Errors

React 19 lint rules introduced several issues that required:

* restructuring effects
* understanding dependency arrays
* and improving state update handling

AI explanations helped clarify these concepts.

---

## TypeScript Errors

AI assistance accelerated:

* interface debugging
* schema alignment
* and build validation fixes

---

# Limitations of AI Assistance

AI-generated suggestions were not always correct immediately.

Several recommendations required:

* manual adjustment,
* iterative debugging,
* or production verification.

This reinforced the importance of:

* understanding the code,
* rather than blindly copying outputs.

---

# Human Decision Making

Important engineering decisions were still made manually, including:

* architecture choices
* pricing logic
* recommendation behavior
* product positioning
* and UX tradeoffs

The project remained:

* developer-directed,
* not fully AI-generated.

---

# Key Learning

One major takeaway was that AI tools are most effective when:

* prompts are specific,
* debugging context is clear,
* and outputs are validated carefully.

Good prompting significantly improved:

* productivity,
* iteration speed,
* and technical learning.

---

# Conclusion

AI assistance played a meaningful supporting role during development by helping with:

* debugging,
* architecture guidance,
* testing setup,
* and documentation generation.

However, successful implementation still required:

* manual reasoning,
* engineering validation,
* and iterative problem-solving.

The project demonstrates a practical workflow where AI tools augment developer productivity rather than fully replacing engineering judgment.
