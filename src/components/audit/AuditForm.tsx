"use client";
import { supabase }
from "@/lib/supabase";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter }
from "next/navigation";
import ToolCard from "./ToolCard";

import { tools } from "@/constants/tools";

import { AuditTool } from "@/types/audit";

import { Recommendation } from "@/types/recommendation";

import { generateRecommendations } from "@/lib/auditEngine";
import { generateSummary } from "@/lib/generateSummary";
export default function AuditForm() {

  const [
    recommendations,
    setRecommendations,
  ] = useState<Recommendation[]>([]);
  const [summary, setSummary] =
  useState("");
  const [email, setEmail] =
  useState("");

const [company, setCompany] =
  useState("");

const [role, setRole] =
  useState("");
  const [error, setError] =
  useState("");
  const [isSaving, setIsSaving] =
  useState(false);

  const [isLoaded, setIsLoaded] =
    useState(false);
const router = useRouter();
  const [toolCards, setToolCards] =
    useState<AuditTool[]>([
      {
        toolId: tools[0].id,
        plan: tools[0].plans[0].name,
        monthlySpend: "",
        seats: "",
      },
    ]);

  const [teamSize, setTeamSize] =
    useState("");

  const [useCase, setUseCase] =
    useState("Coding");

  const resultsRef =
    useRef<HTMLDivElement | null>(null);

  const totalMonthlySavings =
    recommendations.reduce(
      (total, recommendation) =>
        total +
        recommendation.monthlySavings,
      0
    );

  const totalYearlySavings =
    recommendations.reduce(
      (total, recommendation) =>
        total +
        recommendation.yearlySavings,
      0
    );

  const hasHighSavings =
    totalMonthlySavings >= 500;

  const isOptimized =
    totalMonthlySavings === 0;

  
  const runAudit = () => {

  setError("");

  for (const tool of toolCards) {

    if (
      !tool.monthlySpend ||
      Number(tool.monthlySpend) < 0
    ) {

      setError(
        "Please enter a valid monthly spend amount."
      );

      return;
    }

    if (
      !tool.seats ||
      Number(tool.seats) <= 0
    ) {

      setError(
        "Please enter a valid number of seats."
      );

      return;
      }
       
  }

  const results =
    generateRecommendations(
      toolCards
    );

  setRecommendations(results);

  const calculatedMonthlySavings =
    results.reduce(
      (total, recommendation) =>
        total +
        recommendation.monthlySavings,
      0
    );

    const generatedSummary =
    generateSummary(
      results,
      calculatedMonthlySavings
    );

  setSummary(generatedSummary);

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

    const updatedCards = [
      ...toolCards,
    ];

    updatedCards[index] =
      updatedCard;

    setToolCards(updatedCards);
  };

  const addToolCard = () => {

    setToolCards([
      ...toolCards,
      {
        toolId: tools[0].id,
        plan:
          tools[0].plans[0].name,
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

  }, [
    toolCards,
    teamSize,
    useCase,
    isLoaded,
  ]);

  useEffect(() => {

    const savedData =
      localStorage.getItem(
        "audit-form-data"
      );

    if (savedData) {

      const parsedData =
        JSON.parse(savedData);

      setToolCards(
        parsedData.toolCards || []
      );

      setTeamSize(
        parsedData.teamSize || ""
      );

      setUseCase(
        parsedData.useCase ||
          "Coding"
      );
    }

    setIsLoaded(true);

  }, []);
  const saveLead = async () => {

  if (!email) {

  alert(
    "Please enter email"
  );

  return;
}

  setIsSaving(true);

  const totalMonthlySavings =
    recommendations.reduce(
      (total, recommendation) =>
        total +
        recommendation.monthlySavings,
      0
    );

  const totalYearlySavings =
    recommendations.reduce(
      (total, recommendation) =>
        total +
        recommendation.yearlySavings,
      0
    );

  const {data, error } =
    await supabase
      .from("leads")
      .insert([
  {
    email,
    company,
    role,
    team_size:
      Number(teamSize),
    use_case: useCase,
    audit_data: toolCards,
    total_monthly_savings:
      totalMonthlySavings,
    total_yearly_savings:
      totalYearlySavings,
  },
])
.select()
.single();

  setIsSaving(false);

 if (error) {

  console.error(error);

  alert(
    "Failed to save report."
  );

  return;
}

if (!data) {

  alert(
    "No report data returned."
  );

  return;
}

alert(
  "Audit report saved successfully!"
);

router.push(
  `/report/${data.id}`
);
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
            value={teamSize}
            onChange={(e) =>
              setTeamSize(
                e.target.value
              )
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
              setUseCase(
                e.target.value
              )
            }
            className="w-full rounded-lg border p-3"
          >

            <option>
              Coding
            </option>

            <option>
              Writing
            </option>

            <option>
              Research
            </option>

            <option>
              Data
            </option>

            <option>
              Mixed
            </option>

          </select>
        </div>

       <button
  onClick={addToolCard}
  className="rounded-xl bg-black px-5 py-3 text-white"
>
  + Add Tool
</button>

        <div className="mt-8 space-y-6">

          {toolCards.map(
            (card, index) => (

              <ToolCard
                key={index}
                toolData={card}
                onUpdate={(
                  updatedCard
                ) =>
                  updateToolCard(
                    index,
                    updatedCard
                  )
                }
              />
            )
          )}

        </div>

        <button
          onClick={runAudit}
          className="w-full rounded-xl bg-green-600 px-5 py-3 font-medium text-white"
        >
          Run Free Audit
        </button>
        {error && (
  <p className="mt-3 text-sm font-medium text-red-600">
    {error}
  </p>
)}

      </div>
      

      {recommendations.length > 0 && (

        <div
          ref={resultsRef}
          className="mt-10 space-y-6"
        >

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-green-50 p-6">

              <p className="text-sm font-medium text-green-700">
                Potential Monthly Savings
              </p>

              <h2 className="mt-2 text-4xl font-bold text-green-800">
                ${totalMonthlySavings}
              </h2>

            </div>

            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="text-sm font-medium text-blue-700">
                Potential Yearly Savings
              </p>

              <h2 className="mt-2 text-4xl font-bold text-blue-800">
                ${totalYearlySavings}
              </h2>

            </div>

          </div>

          {hasHighSavings && (

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

              <h2 className="text-2xl font-bold text-green-800">
                Significant Savings Opportunity Detected
              </h2>

              <p className="mt-2 text-green-700">
                Your team may be overspending on AI tooling by more than
                {" "}
                <span className="font-semibold">
                  ${totalMonthlySavings}/month
                </span>.
              </p>

              <button className="mt-5 rounded-xl bg-green-700 px-5 py-3 font-medium text-white">
                Book Credex Consultation
              </button>

            </div>
          )}

          {isOptimized && (

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

              <h2 className="text-2xl font-bold text-blue-800">
                Your AI Spend Looks Optimized
              </h2>

              <p className="mt-2 text-blue-700">
                Based on your current usage, your AI tooling setup already appears efficient.
                We’ll continue monitoring for future optimization opportunities.
              </p>

              <button className="mt-5 rounded-xl bg-blue-700 px-5 py-3 font-medium text-white">
                Notify Me About Future Savings
              </button>

            </div>
          )}
          <div className="rounded-2xl border bg-gray-50 p-6">

  <h2 className="text-2xl font-bold">
    Get Full Audit Report
  </h2>

  <p className="mt-2 text-gray-600">
    Receive your personalized AI spend audit report and future optimization recommendations.
  </p>

  <div className="mt-6 space-y-4">

    <input
      type="email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      placeholder="Email Address"
      className="w-full rounded-lg border p-3"
    />

    <input
      type="text"
      value={company}
      onChange={(e) =>
        setCompany(e.target.value)
      }
      placeholder="Company Name (Optional)"
      className="w-full rounded-lg border p-3"
    />

    <input
      type="text"
      value={role}
      onChange={(e) =>
        setRole(e.target.value)
      }
      placeholder="Role (Optional)"
      className="w-full rounded-lg border p-3"
    />

   <button
  onClick={saveLead}
  disabled={isSaving}
  className="w-full rounded-xl bg-black px-5 py-3 font-medium text-white disabled:opacity-50"
>
  {isSaving
    ? "Saving..."
    : "Send My Report"}
</button>

  </div>

</div>

          <div className="space-y-4">
<div className="rounded-2xl border bg-white p-6 shadow-sm">

  <h2 className="text-2xl font-bold">
    AI Audit Summary
  </h2>

  <p className="mt-4 leading-7 text-gray-700">
    {summary}
  </p>

</div>
            <h2 className="text-2xl font-bold">
              Audit Results
            </h2>

            {recommendations.map(
              (
                recommendation,
                index
              ) => (

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

        </div>
      )}

    </section>
  );
}
