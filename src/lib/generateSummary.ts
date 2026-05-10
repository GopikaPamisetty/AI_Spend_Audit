import { Recommendation } from "@/types/recommendation";

export function generateSummary(
  recommendations: Recommendation[],
  totalMonthlySavings: number
) {

  if (totalMonthlySavings === 0) {

    return `
Your current AI tooling setup already appears cost-efficient based on the provided usage patterns. At this time, no major optimization opportunities were detected, though future pricing or usage changes may create new savings opportunities.
    `;
  }

  const topRecommendation =
    recommendations[0];

  return `
Your current AI tooling setup shows potential overspending opportunities. By following the recommended optimization strategies, your team could save approximately $${totalMonthlySavings} per month. The most impactful recommendation is switching from ${topRecommendation.currentTool} to ${topRecommendation.recommendedPlan}, which can significantly reduce costs while maintaining similar functionality and productivity benefits.
  `;
}
