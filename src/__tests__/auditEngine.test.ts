import { describe, it, expect }
from "vitest";

import {
  generateRecommendations,
} 
from "../lib/auditEngine";

describe(
  "Audit Engine",
  () => {

    it(
      "detects Cursor overspending",
      () => {

        const result =
          generateRecommendations([
            {
              toolId: "cursor",
              plan: "Teams",
              monthlySpend: "798",
              seats: "2",
            },
          ]);

        expect(
          result[0].monthlySavings
        ).toBeGreaterThan(0);
      }
    );

    it(
      "detects free plan overspending",
      () => {

        const result =
          generateRecommendations([
            {
              toolId: "claude",
              plan: "Free",
              monthlySpend: "500",
              seats: "1",
            },
          ]);

        expect(
          result[0].monthlySavings
        ).toBe(500);
      }
    );

    it(
  "returns optimized stack",
  () => {

    const result =
      generateRecommendations([
        {
          toolId: "copilot",
          plan: "Pro",
          monthlySpend: "10",
          seats: "1",
        },
      ]);

    expect(
      result[0].currentTool
    ).toBe(
      "Optimized Stack"
    );
  }
);

    it(
      "detects generic overspending",
      () => {

        const result =
          generateRecommendations([
            {
              toolId: "gemini",
              plan: "AI Pro",
              monthlySpend: "5000",
              seats: "2",
            },
          ]);

        expect(
          result[0].monthlySavings
        ).toBeGreaterThan(0);
      }
    );

    it(
      "calculates yearly savings",
      () => {

        const result =
          generateRecommendations([
            {
              toolId: "cursor",
              plan: "Teams",
              monthlySpend: "500",
              seats: "2",
            },
          ]);

        expect(
          result[0].yearlySavings
        ).toBe(
          result[0].monthlySavings * 12
        );
      }
    );

  }
);
