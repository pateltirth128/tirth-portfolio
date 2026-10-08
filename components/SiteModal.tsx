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
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) { setShow(false); return; }
    const raf = requestAnimationFrame(() => setShow(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain px-4 py-4 bg-black/85 transform-gpu transition-opacity duration-150 ${show ? "opacity-100" : "opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="relative my-auto w-full max-w-md max-h-[calc(100svh-2rem)] overflow-y-auto rounded-none border border-neon/40 bg-[#0d0d0d] shadow-[6px_6px_0_0_rgba(0,255,65,0.35)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-gray-500 hover:text-neon transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-6 pt-9 md:p-7 md:pt-9">
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
            className="w-full px-6 py-3 bg-neon text-dark font-mono font-bold hover:opacity-90 transition-opacity rounded-none flex items-center justify-center gap-2 mb-5"
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
                className="h-11 w-11 rounded-none border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/40 transition-colors"
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