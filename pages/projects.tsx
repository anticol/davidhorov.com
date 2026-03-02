import Heading from "components/projects/Heading";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import SectionTitle from "components/global/SectionTitle";
import projects from "@/data/content/projects";
import React from "react";

const personalProjects = projects.filter((p) => p.personal);
const workProjects = projects.filter((p) => !p.personal);

function ProjectsPage() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <div className="text-left px-4">
        <section className="mb-16">
          <SectionTitle title="Personal Projects" />
          <p className="text-fun-gray-light mb-8 max-w-2xl">
            Self-directed initiatives I designed, built, and shipped end-to-end—demonstrating ownership, product thinking, and the ability to deliver from concept to production.
          </p>
          <Projects overwriteProjects={personalProjects} />
        </section>
        <section>
          <SectionTitle title="Featured Projects" />
          <p className="text-fun-gray-light mb-8 max-w-2xl">
            A selection of projects I've worked on, from travel platforms to fintech applications.
          </p>
          <Projects overwriteProjects={workProjects} />
        </section>
      </div>
    </Page>
  );
}

export default ProjectsPage;
