"use client";

import { useEffect } from "react";
import { tools } from "@/constants/tools";
import { AuditTool } from "@/types/audit";

interface ToolCardProps {
  toolData: AuditTool;
  onUpdate: (updatedCard: AuditTool) => void;
}

export default function ToolCard({
  toolData,
  onUpdate,
}: ToolCardProps) {

  const selectedTool = tools.find(
    (tool) => tool.id === toolData.toolId
  );
const selectedPlanData =
  selectedTool?.plans.find(
    (plan) =>
      plan.name === toolData.plan
  );

const expectedMonthlyCost =
  (selectedPlanData?.monthlyPrice || 0) *
  Number(toolData.seats || 0);
  useEffect(() => {
    if (
      selectedTool &&
      !selectedTool.plans.some(
        (plan) => plan.name === toolData.plan
      )
    ) {
      onUpdate({
        ...toolData,
        plan: selectedTool.plans[0].name,
      });
    }
  }, [toolData.toolId]);

  return (
    <div className="rounded-xl border p-5">
      <h3 className="mb-4 text-lg font-semibold">
        Tool Details
      </h3>

      <div className="space-y-4">

        <div>
          <label className="mb-2 block font-medium">
            Tool
          </label>

          <select
            value={toolData.toolId}
            onChange={(e) =>
              onUpdate({
                ...toolData,
                toolId: e.target.value,
              })
            }
            className="w-full rounded-lg border p-3"
          >
            {tools.map((tool) => (
              <option
                key={tool.id}
                value={tool.id}
              >
                {tool.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Plan
          </label>

          <select
            value={toolData.plan}
            onChange={(e) =>
              onUpdate({
                ...toolData,
                plan: e.target.value,
              })
            }
            className="w-full rounded-lg border p-3"
          >
            {selectedTool?.plans.map((plan) => (
              <option
                key={plan.name}
                value={plan.name}
              >
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Monthly Spend ($)
          </label>
          <p className="mt-2 text-sm text-gray-500">
  Expected Monthly Cost:
  {" "}
  <span className="font-medium">
    ${expectedMonthlyCost}
  </span>
</p>

          <input
            type="number"
            value={toolData.monthlySpend}
            onChange={(e) =>
              onUpdate({
                ...toolData,
                monthlySpend: e.target.value,
              })
            }
            placeholder="Enter monthly spend"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Number of Seats
          </label>

          <input
            type="number"
            value={toolData.seats}
            onChange={(e) =>
              onUpdate({
                ...toolData,
                seats: e.target.value,
              })
            }
            placeholder="Enter number of seats"
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>
    </div>
  );
}
