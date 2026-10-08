"use client";
import { volunteering } from "@/lib/data";
import { PawPrint } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import LogoTile from "./LogoTile";

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-24 px-6 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Volunteering</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className={`grid grid-cols-1 ${volunteering.length > 1 ? "lg:grid-cols-2" : ""} gap-8`}>
        {volunteering.map((v, i) => (
          <SpotlightCard key={i} className="p-6 md:p-8 group h-full">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <LogoTile
                    src={v.logo}
                    alt={v.organization}
                    wide={v.logoWide}
                    light={v.logoLight}
                    fallback={<PawPrint size={22} />}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">{v.role}</h3>
                    <p className="text-neon font-mono text-sm mt-2">
                      {v.url ? (
                        <a href={v.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                          @ {v.organization} ↗
                        </a>
                      ) : (
                        <>@ {v.organization}</>
                      )}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded w-fit flex-shrink-0">
                  {v.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{v.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}