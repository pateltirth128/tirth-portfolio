"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Folder, ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import SiteModal from "./SiteModal";

type ProjectExtras = {
  logo?: string;
  logoLight?: boolean;
  logoWide?: boolean;
  link?: string;
};

export default function Projects() {
  const [siteOpen, setSiteOpen] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 md:px-32 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Projects</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, i) => {
          const project = item as typeof item & ProjectExtras;
          const isThisSite = project.slug === "portfolio-website";

          return (
            <SpotlightCard key={i} className="h-full group">
              <div className="p-8 flex flex-col h-full">
                {/* Project logo on the left, impact badge on the right */}
                <div className="flex justify-between items-start mb-6">
                  {project.logo ? (
                    <div
                      className={`h-12 ${project.logoWide ? "w-32" : "w-12"} rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center ${project.logoLight ? "bg-white p-1.5" : ""}`}
                    >
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={128}
                        height={48}
                        unoptimized
                        className={`h-full w-full ${project.logoLight || project.logoWide ? "object-contain" : "object-cover"}`}
                      />
                    </div>
                  ) : (
                    <Folder size={40} className="text-neon" />
                  )}
                  {project.impact && (
                    <span className="text-[10px] font-mono border border-neon/30 text-neon px-2 py-1 rounded bg-neon/5 shadow-[0_0_6px_rgba(0,255,65,0.12)]">
                      {project.impact}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.shortDesc}</p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <li key={t} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Case study link and external link, pinned to the bottom of the card */}
                <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-neon text-sm font-mono hover:gap-3 transition-all"
                  >
                    Read case study <ArrowRight size={14} />
                  </Link>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 text-gray-300 text-sm font-mono hover:text-neon hover:border-neon/40 transition-colors"
                    >
                      <Github size={16} /> GitHub ↗
                    </a>
                  ) : isThisSite ? (
                    <button
                      onClick={() => setSiteOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 text-gray-300 text-sm font-mono hover:text-neon hover:border-neon/40 transition-colors"
                    >
                      <Globe size={16} /> Website ↗
                    </button>
                  ) : null}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <SiteModal open={siteOpen} onClose={() => setSiteOpen(false)} />
    </section>
  );
}