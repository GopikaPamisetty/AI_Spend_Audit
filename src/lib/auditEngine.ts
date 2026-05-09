import { tools } from "@/constants/tools";
import { AuditTool } from "@/types/audit";
import { Recommendation } from "@/types/recommendation";

export function generateRecommendations(
  auditTools: AuditTool[]
): Recommendation[] {

  const recommendations: Recommendation[] = [];

  auditTools.forEach((tool) => {

    if (
      tool.toolId === "cursor" &&
      tool.plan === "Teams" &&
      Number(tool.seats) <= 2
    ) {

      
      const currentSpend =
  Number(tool.monthlySpend);

const recommendedPrice = 20;

const monthlySavings =
  currentSpend - recommendedPrice;

      recommendations.push({
        currentTool: "Cursor Teams",

        recommendedPlan: "Cursor Pro",

        monthlySavings,

        yearlySavings: monthlySavings * 12,

        reason:
          "Cursor Teams is expensive for very small teams. Cursor Pro provides similar functionality at lower cost.",
      });
    }
  });

  return recommendations;
}
