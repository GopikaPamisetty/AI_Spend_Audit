import { tools } from "@/constants/tools";
import { AuditTool } from "@/types/audit";
import { Recommendation } from "@/types/recommendation";

function getPlanPrice(
  toolId: string,
  planName: string
) {

  const tool = tools.find(
    (tool) => tool.id === toolId
  );

  const plan = tool?.plans.find(
    (plan) => plan.name === planName
  );

  return plan?.monthlyPrice || 0;
}

export function generateRecommendations(
  auditTools: AuditTool[]
): Recommendation[] {

  const recommendations: Recommendation[] = [];

  auditTools.forEach((tool) => {

    const currentSpend =
      Number(tool.monthlySpend);

    const seats =
      Number(tool.seats);

    // -----------------------------------
    // FREE PLAN OVESPEND RULE
    // -----------------------------------

    if (
      tool.plan === "Free" &&
      currentSpend > 0
    ) {

      recommendations.push({
        currentTool:
          `${tool.toolId.toUpperCase()} Free`,

        recommendedPlan:
          "Review Billing Setup",

        monthlySavings:
          currentSpend,

        yearlySavings:
          currentSpend * 12,

        reason:
          "A free-tier plan should not generate recurring monthly costs. You may be paying for duplicate subscriptions, API usage, or inactive tooling.",
      });
    }// -----------------------------------
// GENERIC OVESPEND RULE
// -----------------------------------

const expectedCost =
  getPlanPrice(
    tool.toolId,
    tool.plan
  ) * Math.max(seats, 1);

if (

  // Normal overspending
  (
    expectedCost > 0 &&
    currentSpend >
      expectedCost * 1.2
  )

  ||

  // Enterprise/custom suspicious spend
  (
    expectedCost === 0 &&
    currentSpend > 500
  )

) {

  const monthlySavings =
    currentSpend -
    expectedCost;

  recommendations.push({
    currentTool:
      `${tool.toolId.toUpperCase()} ${tool.plan}`,

    recommendedPlan:
  "Billing Review Recommended",

    monthlySavings,

    yearlySavings:
      monthlySavings * 12,

    reason:
      `Your reported spend is significantly higher than the expected pricing for the ${tool.plan} plan. This may indicate duplicate subscriptions, incorrect billing, inactive seats, or unnecessary API usage.`,
  });
}

    // -----------------------------------
    // CURSOR RULE
    // -----------------------------------

    if (
      tool.toolId === "cursor" &&
      tool.plan === "Teams" &&
      seats <= 2
    ) {

      const recommendedPrice =
        getPlanPrice(
          "cursor",
          "Pro"
        ) * seats;

      const monthlySavings =
        currentSpend -
        recommendedPrice;

      recommendations.push({
        currentTool:
          "Cursor Teams",

        recommendedPlan:
          "Cursor Pro",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "Cursor Teams is expensive for very small teams. Cursor Pro provides similar functionality at lower cost.",
      });
    }

    // -----------------------------------
    // CHATGPT RULE
    // -----------------------------------

    if (
      tool.toolId === "chatgpt" &&
      tool.plan === "Team" &&
      seats <= 2
    ) {

      const recommendedPrice =
        getPlanPrice(
          "chatgpt",
          "Plus"
        ) * seats;

      const monthlySavings =
        currentSpend -
        recommendedPrice;

      recommendations.push({
        currentTool:
          "ChatGPT Team",

        recommendedPlan:
          "ChatGPT Plus",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "ChatGPT Team is typically unnecessary for very small teams. ChatGPT Plus offers strong value for lighter collaboration needs.",
      });
    }

    // -----------------------------------
    // GEMINI RULE
    // -----------------------------------

    if (
      tool.toolId === "gemini" &&
      tool.plan === "Ultra" &&
      seats <= 1
    ) {

      const recommendedPrice =
        getPlanPrice(
          "gemini",
          "Pro"
        );

      const monthlySavings =
        currentSpend -
        recommendedPrice;

      recommendations.push({
        currentTool:
          "Gemini Ultra",

        recommendedPlan:
          "Gemini Pro",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "Gemini Ultra may be excessive for solo usage. Gemini Pro provides most capabilities at significantly lower cost.",
      });
    }

  });

  // -----------------------------------
  // OPTIMIZED STATE
  // -----------------------------------

  if (
    recommendations.length === 0
  ) {

    recommendations.push({
      currentTool:
        "Optimized Stack",

      recommendedPlan:
        "No Changes Needed",

      monthlySavings: 0,

      yearlySavings: 0,

      reason:
        "Your current AI tooling setup already appears cost-efficient based on the provided usage.",
    });
  }

  return recommendations;
}
