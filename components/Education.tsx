"use client";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-32 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Academic History</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, i) => (
          <SpotlightCard key={i} className="p-8 group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={100} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-mono">
                  {edu.url ? (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neon transition-colors underline-offset-4 hover:underline"
                    >
                      {edu.school} ↗
                    </a>
                  ) : (
                    edu.school
                  )}
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded mt-2 md:mt-0 w-fit">
                  {edu.period}
                </span>
              </div>

              <div>
                <span className="text-neon font-mono text-sm border border-neon/20 bg-neon/5 px-2 py-1 rounded">
                  {edu.degree}
                </span>
                {edu.grade && <span className="ml-3 text-gray-400 text-sm">// {edu.grade}</span>}
              </div>

              {edu.details && edu.details.length > 0 && (
                <ul className="space-y-4 mt-6">
                  {edu.details.map((detail, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start">
                      <span className="text-neon font-mono mr-3 flex-shrink-0 mt-[2px]">▹</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
