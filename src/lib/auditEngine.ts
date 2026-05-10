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

    // Cursor Rule
    if (
      tool.toolId === "cursor" &&
      tool.plan === "Teams" &&
      Number(tool.seats) <= 2
    ) {

      const currentSpend =
        Number(tool.monthlySpend);

      const recommendedPrice =
        getPlanPrice("cursor", "Pro") *
        Number(tool.seats);

      const monthlySavings =
        currentSpend - recommendedPrice;

      recommendations.push({
        currentTool: "Cursor Teams",

        recommendedPlan: "Cursor Pro",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "Cursor Teams is expensive for very small teams. Cursor Pro provides similar functionality at lower cost.",
      });
    }

    // ChatGPT Rule
    if (
      tool.toolId === "chatgpt" &&
      tool.plan === "Team" &&
      Number(tool.seats) <= 2
      
    ) {

      const currentSpend =
        Number(tool.monthlySpend);

      const recommendedPrice =
        getPlanPrice("chatgpt", "Plus") *
        Number(tool.seats);

      const monthlySavings =
        currentSpend - recommendedPrice;

      recommendations.push({
        currentTool: "ChatGPT Team",

        recommendedPlan: "ChatGPT Plus",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "ChatGPT Team is typically unnecessary for very small teams. ChatGPT Plus offers strong value for lighter collaboration needs.",
      });
    }

    // Gemini Rule
    if (
      tool.toolId === "gemini" &&
      tool.plan === "Ultra" &&
      Number(tool.seats) <= 1
    ) {

      const currentSpend =
        Number(tool.monthlySpend);

      const recommendedPrice =
        getPlanPrice("gemini", "Pro");

      const monthlySavings =
        currentSpend - recommendedPrice;

      recommendations.push({
        currentTool: "Gemini Ultra",

        recommendedPlan: "Gemini Pro",

        monthlySavings,

        yearlySavings:
          monthlySavings * 12,

        reason:
          "Gemini Ultra may be excessive for solo usage. Gemini Pro provides most capabilities at significantly lower cost.",
      });
    }

  });

  if (recommendations.length === 0) {
    recommendations.push({
      currentTool: "Optimized Stack",

      recommendedPlan: "No Changes Needed",

      monthlySavings: 0,

      yearlySavings: 0,

      reason:
        "Your current AI tooling setup already appears cost-efficient based on the provided usage.",
    });
  }

  return recommendations;
}
