"use client";

import { useState } from "react";
import ToolCard from "./ToolCard";
import { tools } from "@/constants/tools";
import { AuditTool } from "@/types/audit";
export default function AuditForm() {
 const [toolCards, setToolCards] = useState<
  AuditTool[]
>([
  {
    toolId: tools[0].id,
    plan: tools[0].plans[0].name,
    monthlySpend: "",
    seats: "",
  },
]);
const updateToolCard = (
  index: number,
  updatedCard: AuditTool
) => {
  const updatedCards = [...toolCards];

  updatedCards[index] = updatedCard;

  setToolCards(updatedCards);
};
const addToolCard = () => {
  setToolCards([
    ...toolCards,
    {
      toolId: tools[0].id,
      plan: tools[0].plans[0].name,
      monthlySpend: "",
      seats: "",
    },
  ]);
};
 return (
    <section className="mx-auto mt-12 max-w-3xl rounded-2xl border p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Audit Your AI Spend
      </h2>

      <p className="mt-2 text-gray-600">
        Enter your current AI tools and spending details.
      </p>

      <div className="mt-8 space-y-6">
        
        <div>
          <label className="mb-2 block font-medium">
            Team Size
          </label>

          <input
            type="number"
            placeholder="Enter team size"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Primary Use Case
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Coding</option>
            <option>Writing</option>
            <option>Research</option>
            <option>Data</option>
            <option>Mixed</option>
          </select>
        </div>

        <button
  onClick={addToolCard}
  className="rounded-xl bg-black px-5 py-3 text-white"
>
          + Add Tool
        </button>
        <div className="mt-8 space-y-6">
        
  {toolCards.map((card, index) => (
    <ToolCard
  key={index}
  toolData={card}
  onUpdate={(updatedCard) =>
    updateToolCard(index, updatedCard)
  }
/>
  ))}
</div>
      </div>
    </section>
  );
}
