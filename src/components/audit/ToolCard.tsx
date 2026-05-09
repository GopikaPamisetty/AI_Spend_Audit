"use client";

import { useState } from "react";
import { tools } from "@/constants/tools";

export default function ToolCard() {
  const [selectedToolId, setSelectedToolId] = useState(
    tools[0].id
  );

  const selectedTool = tools.find(
    (tool) => tool.id === selectedToolId
  );

  const [selectedPlan, setSelectedPlan] = useState(
    selectedTool?.plans[0].name || ""
  );

  const [monthlySpend, setMonthlySpend] =
    useState("");

  const [seats, setSeats] = useState("");

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
            value={selectedToolId}
            onChange={(e) =>
              setSelectedToolId(e.target.value)
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
            value={selectedPlan}
            onChange={(e) =>
              setSelectedPlan(e.target.value)
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

          <input
            type="number"
            value={monthlySpend}
            onChange={(e) =>
              setMonthlySpend(e.target.value)
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
            value={seats}
            onChange={(e) =>
              setSeats(e.target.value)
            }
            placeholder="Enter number of seats"
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>
    </div>
  );
}
