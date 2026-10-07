"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Terminal, ChevronDown, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const DiscordIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.332-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.332-.946 2.418-2.157 2.418z" />
  </svg>
);

const socials = [
  { href: personalInfo.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
  { href: personalInfo.github, label: "GitHub", icon: <Github size={18} /> },
  { href: personalInfo.instagram, label: "Instagram", icon: <Instagram size={18} /> },
  { href: personalInfo.discord, label: "Discord", icon: <DiscordIcon size={18} /> },
];

// Menu order: About, Academic History, Projects, Experience (dropdown), Verified Credentials
// Each link goes to its own section.
const mainLinks = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Academic History" },
  { href: "/#projects", label: "Projects" },
];

const credentialsLink = { href: "/#certifications", label: "Verified Credentials" };

// Sub-options inside Experience
const experienceLinks = [
  { href: "/#field-experience", label: "Field Experience" },
  { href: "/#experience", label: "Other Experience" },
  { href: "/#volunteering", label: "Volunteering" },
];

export default function Navbar() {
  const [expOpen, setExpOpen] = React.useState(false);       // desktop Experience dropdown
  const [menuOpen, setMenuOpen] = React.useState(false);     // mobile three-line menu
  const [mobileExpOpen, setMobileExpOpen] = React.useState(false); // Experience inside mobile menu

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileExpOpen(false);
  };

  // Close the mobile menu with the Escape key
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/70 border-b border-white/5">
      <div className="px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-mono text-neon font-bold text-lg tracking-tighter">
          <Terminal size={18} />
          <span>{personalInfo.handle}</span>
        </Link>

        {/* Full menu on large screens */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-mono text-gray-400">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-neon transition-colors">
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setExpOpen(true)}
            onMouseLeave={() => setExpOpen(false)}
          >
            <button
              type="button"
              onClick={() => setExpOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-neon transition-colors"
              aria-expanded={expOpen}
            >
              Experience
              <ChevronDown size={14} className={`transition-transform ${expOpen ? "rotate-180" : ""}`} />
            </button>

            {expOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[190px] rounded-lg border border-white/10 bg-dark/95 backdrop-blur-md p-2 shadow-[0_8px_30px_-12px_rgba(0,255,65,0.35)]">
                  {experienceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setExpOpen(false)}
                      className="block px-3 py-2 rounded hover:bg-neon/10 hover:text-neon transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={credentialsLink.href} className="hover:text-neon transition-colors">
            {credentialsLink.label}
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
                title={s.label}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-4 py-2 text-xs font-mono border border-neon/50 text-neon rounded hover:bg-neon/10 transition-colors"
          >
            Contact Me
          </a>

          {/* Three-line menu button, only on smaller screens */}
          <button
            type="button"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="lg:hidden text-gray-300 hover:text-neon transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Drop-down menu panel for smaller screens */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-dark/95 backdrop-blur-md px-6 py-4">
          <div className="flex flex-col font-mono text-sm text-gray-300">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="py-3 border-b border-white/5 hover:text-neon transition-colors"
              >
                <span className="text-neon mr-2">›</span>
                {l.label}
              </Link>
            ))}

            {/* Experience with its 3 sub-options */}
            <button
              type="button"
              onClick={() => setMobileExpOpen((o) => !o)}
              className="py-3 flex items-center justify-between text-left hover:text-neon transition-colors"
              aria-expanded={mobileExpOpen}
            >
              <span>
                <span className="text-neon mr-2">›</span>
                Experience
              </span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileExpOpen && (
              <div className="ml-5 mb-2 border-l border-neon/30 pl-4 flex flex-col">
                {experienceLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="py-2 text-gray-400 hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href={credentialsLink.href}
              onClick={closeMenu}
              className="py-3 border-t border-white/5 hover:text-neon transition-colors"
            >
              <span className="text-neon mr-2">›</span>
              {credentialsLink.label}
            </Link>
          </div>

          {/* Social icons inside the menu, for phones where the top icons are hidden */}
          <div className="sm:hidden flex items-center gap-5 pt-4 mt-2 border-t border-white/10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}