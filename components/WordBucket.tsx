import { personalInfo } from "@/lib/data";

export default function WordBucket() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-40 pb-8">
      <div
        id="word-line"
        aria-hidden="true"
        className="h-[2px] w-full bg-neon/70 shadow-[0_0_12px_rgba(0,255,65,0.7)] rounded-full"
      />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 font-mono text-[11px] text-gray-600">
        <p className="text-center sm:text-left">© {year} {personalInfo.name}</p>

        <div className="text-center leading-relaxed">
          <p className="text-gray-700">Thank you for taking the time to visit my portfolio.</p>
        </div>

        <p className="text-center sm:text-right">
          <span className="text-neon/70">$</span> designed &amp; built by{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
          >
            {personalInfo.name}
          </a>
          <span className="inline-block w-1.5 h-3 bg-neon/70 ml-1 align-middle animate-pulse" />
        </p>
      </div>
    </footer>
  );
}