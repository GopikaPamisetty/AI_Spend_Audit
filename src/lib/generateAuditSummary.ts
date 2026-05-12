import { openai } from "./openai";

interface AuditTool {
  toolId: string;
  plan: string;
  monthlySpend: string;
  seats: string;
}

interface Recommendation {
  currentTool: string;
  recommendedPlan: string;
  monthlySavings: number;
  yearlySavings: number;
  reason: string;
}

export async function generateAuditSummary(
  auditTools: AuditTool[],
  recommendations: Recommendation[],
  totalMonthlySavings: number
) {

  try {

    const toolSummary =
      auditTools
        .map(
          (tool) =>
            `${tool.toolId} (${tool.plan})`
        )
        .join(", ");

    const recommendationSummary =
      recommendations
        .map(
          (rec) =>
            `${rec.currentTool} → ${rec.recommendedPlan}`
        )
        .join(", ");

    const prompt = `
You are an AI SaaS cost optimization consultant.

Analyze the following AI tooling stack.

Tools:
${toolSummary}

Recommendations:
${recommendationSummary}

Estimated Monthly Savings:
$${totalMonthlySavings}

Write a concise professional summary in 120 words maximum.
Focus on:
- overspending risks
- optimization opportunities
- operational efficiency
- practical recommendations
`;

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.7,
      });

    return (
      completion.choices[0]
        ?.message?.content ||
      fallbackSummary(
        totalMonthlySavings
      )
    );

  } catch (error) {

    console.error(error);

    return fallbackSummary(
      totalMonthlySavings
    );
  }
}

function fallbackSummary(
  totalMonthlySavings: number
) {

  if (
    totalMonthlySavings > 0
  ) {

    return `
Your AI tooling stack shows potential optimization opportunities. 
Reducing unnecessary subscriptions and reviewing current billing configurations could help improve operational efficiency and lower recurring software expenses.
`;
  }

  return `
Your current AI tooling setup appears relatively optimized based on the provided usage information. No major cost inefficiencies were detected at this time.
`;
}
