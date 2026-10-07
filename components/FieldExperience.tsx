"use client";
import { fieldExperience } from "@/lib/data";
import { Cpu, MapPin } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import LogoTile from "./LogoTile";

export default function FieldExperience() {
  return (
    <section id="field-experience" className="py-24 px-6 md:px-32 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Field Experience</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {fieldExperience.map((job, i) => (
          <SpotlightCard key={i} className="p-8 group">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <LogoTile
                    src={job.logo}
                    alt={job.company}
                    wide={job.logoWide}
                    light={job.logoLight}
                    fallback={<Cpu size={22} />}
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
                      <MapPin size={12} /> {job.department} · {job.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded w-fit flex-shrink-0">
                  {job.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">{job.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {job.highlights.map((group, g) => (
                  <div key={g}>
                    <h4 className="font-mono text-neon text-sm mb-3">{group.title}</h4>
                    <ul className="space-y-3">
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
        ))}
      </div>
    </section>
  );
}