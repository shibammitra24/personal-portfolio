import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="sm:p-3 p-4 flex justify-center">
      <div className="w-[1104px] space-y-2">
        <NavBar />
        <Hero />
        <SkillsSection />

        <div className="grid sm:grid-cols-2 gap-2">
          <div className="bg-blue-500 ">Project 1</div>
          <div className="bg-green-500 ">Project 2</div>
        </div>

        <div className="grid sm:grid-cols-1">
          <div className="bg-orange-500">Contact section</div>
        </div>
      </div>
    </div>
  );
}
