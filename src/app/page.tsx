import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectOne from "@/components/ProjectOne";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="sm:p-3 p-4 flex justify-center">
      <div className="w-[1104px] space-y-2">
        <NavBar />
        <Hero />
        <SkillsSection />
        <ProjectOne />
        <Footer />
      </div>
    </div>
  );
}
