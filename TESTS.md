# TESTS.md

# AI Spend Audit – Testing Strategy

## Overview

This document describes the testing approach used in the AI Spend Audit project.

The application includes:

* Automated unit testing
* CI validation
* ESLint verification
* Manual functional testing

The goal of the testing strategy was to ensure:

* Accurate audit calculations
* Stable recommendation logic
* Reliable production behavior
* Safe future refactoring

---

# Testing Stack

The following tools were used:

| Tool           | Purpose                 |
| -------------- | ----------------------- |
| Vitest         | Unit testing            |
| GitHub Actions | Continuous Integration  |
| ESLint         | Code quality validation |

---

# Automated Unit Tests

The project includes automated unit tests for the audit recommendation engine.

Test file:

```text id="ts1"
src/__tests__/auditEngine.test.ts
```

---

# Tested Scenarios

## 1. Cursor Overspending Detection

Verifies:

* Cursor Teams plans with small teams trigger optimization recommendations
* Savings calculations are correct

Expected behavior:

```text id="ts2"
Cursor Teams → Cursor Pro
```

---

## 2. Free Plan Overspending Detection

Verifies:

* Free plans with unexpected billing trigger alerts

Example:

```text id="ts3"
Claude Free + High Spend
```

Expected behavior:

* Recommend billing review
* Flag suspicious spend

---

## 3. Optimized Stack Validation

Verifies:

* Correctly priced subscriptions do not generate unnecessary recommendations

Expected behavior:

```text id="ts4"
Optimized Stack
```

---

## 4. Generic Overspending Detection

Verifies:

* Significant deviation from expected pricing triggers optimization suggestions

Expected behavior:

* Billing review recommendation
* Savings calculations generated

---

## 5. Yearly Savings Calculation

Verifies:

* Monthly savings are correctly multiplied by 12
* Total yearly savings remain accurate

---

# Running Tests Locally

## Install Dependencies

```bash id="ts5"
npm install
```

---

## Run Tests

```bash id="ts6"
npm test
```

Expected result:

```text id="ts7"
5 tests passed
```

---

# Linting

The project uses ESLint to enforce:

* React best practices
* Hook dependency validation
* TypeScript correctness
* General code quality

Run locally:

```bash id="ts8"
npm run lint
```

---

# Continuous Integration

GitHub Actions automatically runs:

* ESLint
* Unit tests

on every push to:

```text id="ts9"
main
```

CI pipeline file:

```text id="ts10"
.github/workflows/ci.yml
```

---

# Manual Testing

The following flows were manually tested in the deployed production application.

---

## Audit Flow

Validated:

* Adding multiple tool cards
* Plan selection
* Savings generation
* Recommendation rendering

---

## Lead Capture Flow

Validated:

* Email validation
* Supabase persistence
* Report saving
* Public report redirects

---

## Report Sharing

Validated:

* Public report accessibility
* Dynamic route generation
* Copy link functionality

---

## Local Storage Persistence

Validated:

* Form state survives refresh
* Tool cards restore correctly
* User inputs persist properly

---

## Honeypot Spam Protection

Validated:

* Hidden spam field blocks invalid submissions
* Human users unaffected

---

# Production Verification

The deployed application was tested on:

* Desktop browsers
* Mobile responsive layouts
* Production Supabase backend
* Vercel deployment environment

---

# Known Limitations

Current limitations include:

* No end-to-end browser automation tests
* No performance benchmarking suite
* No API mocking layer
* Rule engine is deterministic only

These were considered acceptable tradeoffs for the current project scope.

---

# Future Testing Improvements

Potential future enhancements:

* Playwright E2E testing
* Lighthouse automation
* Visual regression testing
* Backend integration tests
* Load testing
* Accessibility audits

---

# Conclusion

The project includes a solid foundational testing strategy:

* Automated validation
* CI/CD integration
* Unit testing
* Manual production verification

This approach helped maintain code quality and reduce regressions during development.
