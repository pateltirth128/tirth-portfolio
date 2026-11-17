import TerminalHero from "@/components/TerminalHero";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import FieldExperience from "@/components/FieldExperience";
import Experience from "@/components/Experience";
import Volunteering from "@/components/Volunteering";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { skills } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon selection:text-black">
      <div className="bg-noise"></div>

      <TerminalHero />

      <div className="border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto px-6">
          {skills.map((skill) => (
            <span key={skill} className="font-mono text-sm text-gray-500 hover:text-neon transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Education />
      <Certifications />
      <FieldExperience />
      <Experience />
      <Volunteering />
      <Projects />

      <Footer />
    </main>
  );
}
