import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AuditForm from "@/components/audit/AuditForm";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AuditForm />
    </main>
  );
}
