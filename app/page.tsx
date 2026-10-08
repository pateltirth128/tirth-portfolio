import ScrollReset from "@/components/ScrollReset";
import TerminalHero from "@/components/TerminalHero";
import WordFountain from "@/components/WordFountain";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import FieldExperience from "@/components/FieldExperience";
import Experience from "@/components/Experience";
import Volunteering from "@/components/Volunteering";
import Projects from "@/components/Projects";
import WordBucket from "@/components/WordBucket";
import { skills } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon selection:text-black">
      <div className="bg-noise"></div>
      <ScrollReset />
      <WordFountain />
      <TerminalHero />

      <div className="border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-center gap-x-8 gap-y-3 flex-wrap max-w-6xl mx-auto px-6 md:px-8">
          {skills.map((skill) => (
            <span key={skill} className="font-mono text-sm text-gray-500 hover:text-neon transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Education />
      <Projects />
      <FieldExperience />
      <Experience />
      <Volunteering />
      <Certifications />

      <WordBucket />
    </main>
  );
}