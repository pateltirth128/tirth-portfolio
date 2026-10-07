"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, MousePointerClick, Linkedin, Github, Instagram } from "lucide-react";
import { personalInfo } from "@/lib/data";

type Props = { open: boolean; onClose: () => void };

const socials = [
  { name: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { name: "GitHub", href: personalInfo.github, icon: Github },
  { name: "Instagram", href: personalInfo.instagram, icon: Instagram },
];

export default function SiteModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false); // createPortal needs the browser DOM, so wait until the page has loaded
  const [show, setShow] = useState(false);       // switches on one frame later so the open animation plays

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) { setShow(false); return; }
    const raf = requestAnimationFrame(() => setShow(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // lock the page behind the popup so it does not scroll
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md transition-opacity duration-200 ${show ? "opacity-100" : "opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // clicking inside the box should not close it
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-md rounded-2xl border border-neon/20 bg-[#0d0d0d] shadow-[0_0_40px_rgba(0,255,65,0.12)] transition-all duration-200 ${show ? "scale-100 translate-y-0" : "scale-95 translate-y-2"}`}
      >
        {/* Close button in the top-right corner */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-gray-500 hover:text-neon transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-7 pt-9">
          <h3 className="text-2xl font-bold font-mono text-white mb-3 pr-8">
            You&apos;re <span className="text-neon">already here.</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            This is the website I&apos;m talking about, the one you&apos;re on right now. I built it
            with Next.js, TypeScript, and Tailwind CSS, with every section driven from one data file.
          </p>

          <p className="text-sm font-mono text-gray-500 mb-3">Want to know more about me?</p>

          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 bg-neon text-dark font-mono font-bold hover:opacity-90 transition-all rounded-sm flex items-center justify-center gap-2 mb-5"
          >
            <MousePointerClick size={16} /> Click Here
          </a>

          <div className="flex items-center justify-center gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="h-11 w-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/40 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}