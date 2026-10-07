import Link from "next/link";

export const metadata = {
  title: "Transcript | Tirth Patel",
};

// Full-screen soft white page. "fixed inset-0" + high z-index covers the dark
// navbar/background from the root layout.
export default function TranscriptPage() {
  return (
    <main className="fixed inset-0 z-[100] overflow-y-auto bg-[#f4f4f1] text-neutral-900">
      <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center px-6 py-16 font-serif">
        {/* Title with a line on each side */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-900"></span>
          <h1 className="text-center font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em] text-neutral-900">
            On Honesty, Curiosity
            <br className="md:hidden" /> and Satisfaction
          </h1>
          <span className="h-px flex-1 bg-neutral-900"></span>
        </div>

        <p className="mb-5 text-base md:text-lg leading-relaxed text-neutral-700">
          You were told, honestly, that there was nothing here, and you were asked not to continue.
          <br />
          <span className="font-semibold text-neutral-900">That was honesty.</span>
        </p>

        <p className="mb-5 text-base md:text-lg leading-relaxed text-neutral-700">
          You clicked anyway.
          <br />
          <span className="font-semibold text-neutral-900">That was curiosity.</span>
        </p>

        <p className="mb-8 text-base md:text-lg leading-relaxed text-neutral-700">
          And you are still reading, because you wanted to know for certain.
          <br />
          <span className="font-semibold text-neutral-900">That is satisfaction.</span>
        </p>

        <p className="mb-8 text-sm md:text-base leading-relaxed text-neutral-600">
          I don&apos;t think that&apos;s a bad thing. The mentality of the good security worker
          applies here: &ldquo;There is nothing here&rdquo; is not an acceptable answer; investigate
          the obvious, double-check every statement and follow the chain of events until you reach
          a resolution. Satisfaction is the goal at the end of the journey, curiosity is the
          beginning.
        </p>

        <blockquote className="mb-10 border-l-4 border-neutral-900 pl-5 text-lg md:text-xl italic leading-snug">
          &ldquo;Curiosity killed the cat, but satisfaction brought it back.&rdquo;
        </blockquote>

        <p className="mb-10 text-sm text-neutral-500">
          My official transcript is available upon request at{" "}
          <a href="mailto:pateltirth1228@gmail.com" className="underline hover:text-neutral-900">
            pateltirth1228@gmail.com
          </a>
          
        </p>

        <Link
          href="/"
          className="self-start border border-neutral-900 px-4 py-2 font-mono text-xs transition-colors hover:bg-neutral-900 hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}