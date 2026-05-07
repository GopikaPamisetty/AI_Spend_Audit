export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">AI Spend Audit</h1>

      <button className="rounded-lg bg-black px-4 py-2 text-white">
        Start Audit
      </button>
    </nav>
  );
}
