import { supabase }
from "@/lib/supabase";
import CopyLinkButton
from "@/components/report/CopyLinkButton";
interface ReportPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportPage({
  params,
}: ReportPageProps) {

  const { id } = await params;

  const { data, error } =
    await supabase
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

  if (error || !data) {

    return (
      <div className="p-10 text-xl">
        Report not found.
      </div>
    );
  }

  return (

    <main className="mx-auto max-w-4xl p-8">

      <h1 className="text-4xl font-bold">
        AI Spend Audit Report
      </h1>

      <p className="mt-3 text-gray-600">
        Public shareable audit summary.
      </p>
		<CopyLinkButton />
      <div className="mt-10 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-green-50 p-6">

          <p className="text-sm font-medium text-green-700">
            Monthly Savings
          </p>

          <h2 className="mt-2 text-4xl font-bold text-green-800">
            ${data.total_monthly_savings}
          </h2>

        </div>

        <div className="rounded-2xl bg-blue-50 p-6">

          <p className="text-sm font-medium text-blue-700">
            Yearly Savings
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-800">
            ${data.total_yearly_savings}
          </h2>

        </div>

      </div>

      <div className="mt-10">

  <h2 className="text-2xl font-bold">
    Audited Tools
  </h2>

  <div className="mt-6 space-y-4">

    {data.audit_data.map(
      (
        tool: {
          toolId: string;
          plan: string;
          monthlySpend: string;
          seats: string;
        },
        index: number
      ) => (

        <div
          key={index}
          className="rounded-2xl border p-6 shadow-sm"
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-semibold capitalize">
                {tool.toolId}
              </h3>

              <p className="mt-1 text-gray-600">
                Current Plan:
                {" "}
                {tool.plan}
              </p>

            </div>

            <div className="text-right">

              <p className="text-sm text-gray-500">
                Monthly Spend
              </p>

              <p className="text-2xl font-bold text-red-600">
                ${tool.monthlySpend}
              </p>

            </div>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <p className="text-gray-600">
              Seats:
              {" "}
              {tool.seats}
            </p>

            <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              Active Tool
            </div>

          </div>

        </div>
      )
    )}

  </div>

</div>

    </main>
  );
}
