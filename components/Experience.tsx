"use client";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, Leaf, GraduationCap, UtensilsCrossed } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import LogoTile from "./LogoTile";

const icons: Record<string, React.ElementType> = {
  leaf: Leaf,
  cap: GraduationCap,
  food: UtensilsCrossed,
};

const highlightCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Other Experience</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {experiences.map((job, i) => {
          const Icon = icons[job.icon] ?? Briefcase;
          const cols = highlightCols[job.highlights.length] ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

          return (
            <SpotlightCard key={i} className="p-6 md:p-8 group">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <LogoTile
                      src={job.logo}
                      alt={job.company}
                      wide={job.logoWide}
                      light={job.logoLight}
                      fallback={<Icon size={22} />}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono">
                        {job.role}{" "}
                        {job.url ? (
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-neon hover:underline underline-offset-4">
                            @ {job.company} ↗
                          </a>
                        ) : (
                          <span className="text-neon">@ {job.company}</span>
                        )}
                      </h3>
                      <p className="flex items-center gap-2 text-gray-500 font-mono text-xs mt-2">
                        <MapPin size={12} /> {job.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {job.current && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-neon border border-neon/30 bg-neon/5 px-2 py-1 rounded">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse"></span> CURRENT
                      </span>
                    )}
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded w-fit">
                      {job.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">{job.summary}</p>

                <div className={`grid ${cols} gap-x-8 gap-y-6 mb-8`}>
                  {job.highlights.map((group, g) => (
                    <div key={g}>
                      <h4 className="font-mono text-neon text-sm mb-3">{group.title}</h4>
                      <ul className="space-y-2">
                        {group.points.map((point, p) => (
                          <li key={p} className="text-gray-400 text-sm flex items-start">
                            <span className="text-neon font-mono mr-3 flex-shrink-0 mt-[2px]">▹</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tools.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-neon border border-neon/20 bg-neon/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}