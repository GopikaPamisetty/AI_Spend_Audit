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

          <select className="w-full rounded-lg border p-3">
            {selectedTool?.plans.map((plan) => (
              <option key={plan.name}>
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
            placeholder="Enter number of seats"
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>
    </div>
  );
}
