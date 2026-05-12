# METRICS.md

# AI Spend Audit – Product Metrics

## Overview

This document outlines the key metrics that would be used to evaluate the success, usability, and growth of AI Spend Audit.

The goal of these metrics is to measure:

* user engagement,
* product usefulness,
* conversion efficiency,
* and long-term business viability.

---

# Product Goals

The product aims to:

* help users reduce AI tooling costs,
* improve spending visibility,
* and encourage optimization behavior.

The metrics below are aligned with those objectives.

---

# Core Product Metrics

## 1. Audit Completion Rate

### Definition

Percentage of users who:

* start an audit
  and
* successfully complete it.

Formula:

```text id="mt1"
Completed Audits / Started Audits
```

---

## Why It Matters

This measures:

* onboarding friction,
* UI clarity,
* and user engagement.

A low completion rate may indicate:

* confusing UX,
* excessive inputs,
* or unclear value proposition.

---

# 2. Lead Conversion Rate

## Definition

Percentage of users who:

* complete an audit
  and
* submit their email.

Formula:

```text id="mt2"
Email Submissions / Completed Audits
```

---

## Why It Matters

This measures:

* perceived value,
* trust,
* and willingness to continue engagement.

Higher conversion suggests:

* users find recommendations useful.

---

# 3. Average Estimated Savings

## Definition

Average monthly savings identified across audits.

Formula:

```text id="mt3"
Total Monthly Savings / Total Audits
```

---

## Why It Matters

Large savings numbers:

* strengthen product value,
* increase sharing behavior,
* and improve retention potential.

---

# 4. Report Share Rate

## Definition

Percentage of generated reports that are:

* copied,
* shared,
* or revisited.

Formula:

```text id="mt4"
Shared Reports / Total Reports
```

---

## Why It Matters

This measures:

* virality potential,
* and usefulness of public reports.

Public sharing can improve:

* organic growth,
* SEO,
* and product exposure.

---

# 5. Consultation Conversion Rate

## Definition

Percentage of users who:

* see high-savings alerts
  and
* click:

```text id="mt5"
Book Credex Consultation
```

---

## Why It Matters

This measures:

* monetization potential,
* and B2B interest.

Strong consultation conversion may indicate:

* enterprise demand,
* or operational pain points.

---

# Growth Metrics

## 6. Monthly Active Users (MAU)

Tracks:

* unique monthly users,
* repeat engagement,
* and retention trends.

---

# 7. Returning User Rate

Measures:

* how many users revisit the platform.

This may indicate:

* recurring optimization interest,
* or ongoing AI spend management needs.

---

# 8. Traffic Sources

Important acquisition channels to monitor:

* LinkedIn
* Twitter/X
* Reddit
* SEO
* shared reports
* direct traffic

---

# Engineering Metrics

## 9. Deployment Stability

Measured using:

* CI pass rate
* deployment success rate
* production uptime

---

## 10. Error Rate

Tracks:

* failed report submissions
* Supabase insert failures
* client-side crashes
* build failures

---

# Performance Metrics

## 11. Page Load Speed

Important because:

* users expect fast SaaS tools,
* especially for lightweight audits.

Metrics:

* Lighthouse score
* Time to Interactive
* Largest Contentful Paint

---

## 12. Mobile Responsiveness

Tracks:

* mobile usability,
* and responsive layout quality.

This is important because many users may access:

* reports,
* or audit links
  from mobile devices.

---

# Business Metrics

## 13. Customer Acquisition Cost (Future)

Potential future calculation:

```text id="mt6"
Marketing Spend / New Users
```

---

## 14. Lifetime Value (Future)

Potential SaaS metric:

```text id="mt7"
Average Revenue per User × Retention
```

---

# Success Benchmarks

Example healthy targets:

| Metric                | Example Target |
| --------------------- | -------------- |
| Audit Completion Rate | >70%           |
| Lead Conversion Rate  | >25%           |
| Report Share Rate     | >10%           |
| Lighthouse Score      | >90            |
| CI Success Rate       | 100%           |

---

# Instrumentation Possibilities

Future analytics tools:

* Vercel Analytics
* PostHog
* Google Analytics
* Mixpanel
* Plausible

---

# Most Important Metrics

The most critical early-stage metrics are likely:

1. Audit completion rate
2. Lead conversion rate
3. Average savings identified
4. Report sharing behavior

These directly measure:

* product usefulness,
* engagement,
* and viral potential.

---

# Limitations

Current project version:

* does not yet include analytics tracking,
* event instrumentation,
* or dashboards.

Metrics definitions are conceptual rather than production-monitored.

---

# Conclusion

The proposed metrics framework focuses on:

* product usefulness,
* engagement quality,
* operational stability,
* and growth potential.

These metrics provide a foundation for evaluating whether AI Spend Audit delivers meaningful value to users while supporting long-term SaaS growth opportunities.
