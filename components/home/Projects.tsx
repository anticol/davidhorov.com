import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";

import ProjectCard from "../projects/ProjectCard";

const personalProjects = projects.filter((p) => p.personal);
const workProjects = projects.filter((p) => !p.personal);

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Personal Projects" />
      </div>
      <p className="text-fun-gray-light mb-8 max-w-2xl">
        Side projects I built and launched solo—from idea to production.
      </p>

      <div className="grid grid-cols-1 gap-8 md:gap-6 lg:gap-8 md:grid-cols-3 items-start">
        {personalProjects.slice(0, 3).map((item, index) => {
          return (
            <div
              key={item.id}
              className="fade-in-section"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard project={item} />
            </div>
          );
        })}
      </div>

      <section className="mt-16">
        <SectionTitle title="Featured Projects" />
        <p className="text-fun-gray-light mb-8 max-w-2xl">
          A selection of projects I've worked on, from travel platforms to fintech applications.
        </p>

        <div className="grid grid-cols-1 gap-8 md:gap-6 lg:gap-8 md:grid-cols-3 items-start">
          {workProjects.slice(0, 3).map((item, index) => {
            return (
              <div
                key={item.id}
                className="fade-in-section"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProjectCard project={item} />
              </div>
            );
          })}
        </div>
      </section>

      <div className="relative w-full mt-10">
        <Link href="/projects">
          <div className="glow-button max-w-xs mx-auto text-center w-full whitespace-nowrap px-8 py-4 rounded-full text-fun-pink border-2 border-fun-pink/50 hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-all duration-300 cursor-pointer font-semibold flex items-center justify-center gap-2">
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
