import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20 px-6 md:px-32 selection:bg-neon selection:text-black relative">
      <div className="bg-noise"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-neon font-mono text-sm mb-10 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          cd ..
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tighter">
          {project.title}
        </h1>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-12 -mt-6 px-4 py-2 text-sm font-mono border border-neon/50 text-neon rounded hover:bg-neon/10 transition-colors"
          >
            View on GitHub ↗
          </a>
        )}

        <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl">
          <div 
            className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-headings:font-mono prose-li:text-gray-400 max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
