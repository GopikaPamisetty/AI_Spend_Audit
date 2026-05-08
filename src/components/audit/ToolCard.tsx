export default function ToolCard() {
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

          <select className="w-full rounded-lg border p-3">
            <option>ChatGPT</option>
            <option>Cursor</option>
            <option>Claude</option>
            <option>GitHub Copilot</option>
            <option>Gemini</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Plan
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Free</option>
            <option>Pro</option>
            <option>Business</option>
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
