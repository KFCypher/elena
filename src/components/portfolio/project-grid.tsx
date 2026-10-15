import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio";
export function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-7">
      {projects.map((project) => (
        <Link key={project.title} to="/work" className="project-link group">
          <div className="overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              width={1024}
              height={1280}
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between pt-5">
            <p className="eyebrow text-muted-foreground">{project.brand}</p>
            <ArrowUpRight size={18} />
          </div>
          <h3 className="font-display text-2xl mt-2">{project.title}</h3>
        </Link>
      ))}
    </div>
  );
}
