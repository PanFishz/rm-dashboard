import { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl p-[2px] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative rounded-2xl bg-gray-950/80 backdrop-blur-sm p-6 h-full flex flex-col gap-3">
        <span className="text-4xl">{project.emoji}</span>
        <div className="flex items-start justify-between gap-2">
          <h2 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.name}
          </h2>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
          {project.description}
        </p>
        <div className={`mt-auto text-xs font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
          Visit project →
        </div>
      </div>
    </a>
  );
}
