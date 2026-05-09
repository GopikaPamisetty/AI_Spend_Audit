"use client";
import { useEffect, useState,useRef } from "react";
import ToolCard from "./ToolCard";
import { tools } from "@/constants/tools";
import { AuditTool } from "@/types/audit";
import { Recommendation } from "@/types/recommendation";
import { generateRecommendations } from "@/lib/auditEngine";

export default function AuditForm() {
const [recommendations, setRecommendations] =
  useState<Recommendation[]>([]);
const [isLoaded, setIsLoaded] =
  useState(false);
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
const resultsRef =
  useRef<HTMLDivElement | null>(null);
const [teamSize, setTeamSize] =
  useState("");

const [useCase, setUseCase] =
  useState("Coding");
  
  
 const runAudit = () => {
  const results =
    generateRecommendations(toolCards);

  setRecommendations(results);

  setTimeout(() => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

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
useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem(
    "audit-form-data",
    JSON.stringify({
      toolCards,
      teamSize,
      useCase,
    })
  );
}, [toolCards, teamSize, useCase, isLoaded]);
useEffect(() => {
  const savedData = localStorage.getItem(
    "audit-form-data"
  );

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    setToolCards(parsedData.toolCards || []);

    setTeamSize(parsedData.teamSize || "");

    setUseCase(parsedData.useCase || "Coding");
  }

  setIsLoaded(true);
}, []);
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
  value={teamSize}
  onChange={(e) =>
    setTeamSize(e.target.value)
  }
  placeholder="Enter team size"
  className="w-full rounded-lg border p-3"
/>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Primary Use Case
          </label>

          <select
  value={useCase}
  onChange={(e) =>
    setUseCase(e.target.value)
  }
  className="w-full rounded-lg border p-3"
>
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
<button
  onClick={runAudit}
  className="w-full rounded-xl bg-green-600 px-5 py-3 font-medium text-white"
>
  Run Free Audit
</button>
      </div>
      {recommendations.length > 0 && (
  <div ref={resultsRef} className="mt-10 space-y-4">

    <h2 className="text-2xl font-bold">
      Audit Results
    </h2>

    {recommendations.map(
      (recommendation, index) => (
        <div
          key={index}
          className="rounded-xl border p-5"
        >

          <h3 className="text-lg font-semibold">
            {recommendation.currentTool}
          </h3>

          <p className="mt-2">
            Recommended Plan:
            {" "}
            <span className="font-medium">
              {recommendation.recommendedPlan}
            </span>
          </p>

          <p className="mt-2">
            Monthly Savings:
            {" "}
            <span className="font-medium text-green-600">
              ${recommendation.monthlySavings}
            </span>
          </p>

          <p className="mt-2">
            Yearly Savings:
            {" "}
            <span className="font-medium text-green-600">
              ${recommendation.yearlySavings}
            </span>
          </p>

          <p className="mt-4 text-gray-600">
            {recommendation.reason}
          </p>

        </div>
      )
    )}
  </div>
)}
    </section>
  );
}
