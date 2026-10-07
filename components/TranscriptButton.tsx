"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, X } from "lucide-react";

export default function TranscriptButton() {
  const [open, setOpen] = useState(false);

  // Close the popup with the Escape key and stop the page behind it from scrolling
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Same size and style as the Download CV button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="h-11 min-w-[170px] px-5 inline-flex items-center justify-center gap-2 font-mono text-sm rounded-sm transition-all border border-gray-700 text-neon hover:bg-neon/10"
      >
        <FileText size={16} /> Transcript
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gpa-title"
        >
          {/* Rounded card, same look as the website popup */}
          <div
            className="relative w-full max-w-lg rounded-3xl border border-neon/25 bg-[#0f0f0f] p-8 md:p-10 shadow-[0_0_60px_rgba(0,255,65,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-6 top-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <h2 id="gpa-title" className="mb-4 text-2xl md:text-3xl font-bold font-mono text-white">
              Why Only <span className="text-neon">GPA?</span>
            </h2>

            <p className="mb-4 text-base md:text-lg leading-relaxed text-gray-400 font-sans">
              A GPA can measure academic performance, but it cannot measure:
            </p>

            <ul className="mb-5 grid grid-cols-2 gap-x-6 gap-y-2 text-base text-gray-200 font-sans">
              {["Character", "Kindness", "Courage", "Resilience", "Integrity", "Growth under pressure"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-neon">›</span> {item}
                  </li>
                )
              )}
            </ul>

            <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-300 font-sans">
              A number shows performance.{" "}
              <span className="text-neon">A person shows potential.</span>
            </p>

            <p className="mb-4 font-mono text-sm text-yellow-400/90">
              I haven&apos;t attached it, so please do not continue.
            </p>

            <Link
              href="/transcript"
              className="w-full h-14 inline-flex items-center justify-center gap-2 bg-neon text-dark font-mono font-bold text-base rounded-lg hover:opacity-90 transition-all"
            >
              Continue to Transcript →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}