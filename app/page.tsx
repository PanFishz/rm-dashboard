import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600 opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-pink-500 opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-cyan-500 opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Built by Rin Meyers
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            My Projects
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-md mx-auto">
            A collection of things I&apos;ve built. Click any card to visit.
          </p>
        </header>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
