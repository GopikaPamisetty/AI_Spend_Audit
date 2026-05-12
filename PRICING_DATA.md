# PRICING_DATA.md

# AI Spend Audit – Pricing Data & Assumptions

## Overview

This document explains the pricing assumptions and recommendation logic used within the AI Spend Audit application.

The application uses a deterministic rule-based audit engine to compare:

* reported user spending
  against
* expected subscription pricing.

The goal is to identify:

* overspending,
* unnecessary upgrades,
* inactive seats,
* or billing inefficiencies.

---

# Pricing Philosophy

The pricing system was intentionally designed to be:

* simple,
* understandable,
* and deterministic.

The project does not currently integrate:

* real-time vendor billing APIs,
* live SaaS pricing feeds,
* or enterprise procurement systems.

Instead, pricing values are maintained manually inside:

```text id="pd1"
src/constants/tools.ts
```

This approach improves:

* predictability,
* debugging simplicity,
* and implementation speed.

---

# Supported Tools

The current version supports auditing for:

| Tool           | Vendor    |
| -------------- | --------- |
| ChatGPT        | OpenAI    |
| Claude         | Anthropic |
| Cursor         | Anysphere |
| GitHub Copilot | GitHub    |
| Gemini         | Google    |

---

# Pricing Structure

Each tool includes:

* plan name
* monthly pricing
* enterprise availability
* pricing model type

Example structure:

```ts id="pd2"
{
  name: "Pro",
  monthlyPrice: 20
}
```

---

# Pricing Categories

The project currently supports:

* flat pricing
* per-user pricing

Potential future support:

* usage-based billing
* API metering
* enterprise custom pricing

---

# Example Pricing Assumptions

## ChatGPT

| Plan     | Monthly Price |
| -------- | ------------- |
| Free     | $0            |
| Plus     | $20           |
| Business | $25           |

---

## Cursor

| Plan  | Monthly Price |
| ----- | ------------- |
| Hobby | $0            |
| Pro   | $20           |
| Teams | $40           |

---

## Claude

| Plan | Monthly Price |
| ---- | ------------- |
| Free | $0            |
| Pro  | $20           |
| Max  | $100          |

---

## GitHub Copilot

| Plan | Monthly Price |
| ---- | ------------- |
| Free | $0            |
| Pro  | $10           |
| Pro+ | $39           |

---

## Gemini

| Plan    | Monthly Price |
| ------- | ------------- |
| Free    | $0            |
| AI Plus | $20           |
| AI Pro  | $40           |

---

# Recommendation Logic

The audit engine compares:

```text id="pd3"
user reported spend
```

against:

```text id="pd4"
expected calculated spend
```

Savings are calculated as:

```text id="pd5"
reported spend - expected pricing
```

---

# Current Recommendation Categories

## 1. Free Plan Overspending

If:

```text id="pd6"
plan = Free
```

but:

```text id="pd7"
monthly spend > 0
```

the system flags:

* billing anomalies,
* duplicate subscriptions,
* or hidden API costs.

---

## 2. Generic Overspending

If reported spending significantly exceeds expected pricing:

* optimization recommendations are generated,
* and potential savings are calculated.

---

## 3. Small Team Downgrade Suggestions

Example:

```text id="pd8"
Cursor Teams → Cursor Pro
```

for small teams with low seat counts.

This models common SaaS optimization behavior.

---

# Why Rule-Based Instead of AI-Based?

The recommendation engine was intentionally kept deterministic because:

* outputs remain predictable,
* calculations are transparent,
* debugging is easier,
* and no external API dependency exists.

Tradeoff:

* less personalization compared to LLM-generated analysis.

---

# Assumptions & Simplifications

Several simplifications were intentionally made:

## 1. Monthly Pricing Only

Annual discounts were not modeled.

---

## 2. No Tax Handling

Regional taxes and currency conversion were excluded.

---

## 3. No Real Billing Integrations

The system does not currently connect to:

* Stripe
* vendor APIs
* accounting systems

---

## 4. Estimated Pricing

Pricing values represent:

* approximate public pricing,
* not contractual enterprise pricing.

---

# Data Freshness

Pricing data may become outdated because AI vendors frequently:

* change subscription structures,
* adjust pricing,
* and introduce bundled offerings.

Future improvements could include:

* scheduled pricing sync,
* automated scraping,
* or API integrations.

---

# Future Improvements

Potential enhancements:

* real-time pricing APIs
* enterprise pricing support
* seat utilization analysis
* usage-based recommendations
* regional pricing
* billing import integrations

---

# Why This Approach Was Chosen

The assignment prioritized:

* engineering quality,
* recommendation logic,
* and product reasoning.

A lightweight pricing model allowed focus on:

* UX,
* testing,
* deployment,
* and overall product execution.

---

# Conclusion

The pricing system provides:

* understandable calculations,
* deterministic outputs,
* and realistic optimization behavior.

Although simplified, it successfully demonstrates:

* SaaS pricing analysis,
* recommendation logic,
* and AI tooling cost optimization workflows.
