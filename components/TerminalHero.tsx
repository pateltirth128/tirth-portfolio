"use client";
import Typewriter from "typewriter-effect";
import { Terminal, Download, FolderOpen } from "lucide-react";
import { personalInfo, heroTyping, heroIntro } from "@/lib/data";
import TranscriptButton from "./TranscriptButton";

const btnClass =
  "h-11 min-w-[170px] px-5 inline-flex items-center justify-center gap-2 font-mono text-sm rounded-sm transition-all border border-gray-700 text-neon hover:bg-neon/10";

export default function TerminalHero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-6xl mx-auto pt-20">
      <div className="flex items-center gap-2 text-gray-500 font-mono mb-6 text-sm">
        <Terminal size={16} />
        <span>{personalInfo.terminalUser}</span>
        <span className="w-2 h-4 bg-neon animate-pulse block"></span>
      </div>

      <h1 className="text-4xl md:text-7xl font-bold font-mono mb-8 leading-tight">
        <span className="text-white">Introducing </span>
        <span className="text-neon block md:inline">
          <Typewriter
            options={{
              strings: heroTyping,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-sans">
        {heroIntro.line1} <strong className="text-white">{heroIntro.highlight}</strong>.{" "}
        {heroIntro.line2}
        <br /><br />
        {heroIntro.line3}
      </p>

      <div className="flex flex-wrap gap-4">
        <a href="#projects" className={btnClass}>
          <FolderOpen size={16} /> View Projects
        </a>
        <a
          href={personalInfo.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
        >
          <Download size={16} /> Download CV
        </a>
        <TranscriptButton />
      </div>
    </section>
  );
}