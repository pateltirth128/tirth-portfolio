"use client";
import { certifications } from "@/lib/data";
import { ShieldCheck, ExternalLink } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-32 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-white">Verified Credentials</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <SpotlightCard key={i} className="group">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={100} />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white font-mono group-hover:text-neon transition-colors">
                  {cert.name}
                </h3>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-neon transition-colors flex-shrink-0 mt-1" />
              </div>

              <span className="inline-block text-neon font-mono text-sm border border-neon/20 bg-neon/5 px-2 py-1 rounded">
                {cert.issuer}
              </span>

              <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mt-6">
                // issued {cert.date}
              </p>
            </div>
          </a>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
