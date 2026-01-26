import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  const [showMore, setShowMore] = React.useState(false);

  const hasLink = project.link || project.github;
  
  const ImageContent = () => (
    <>
      <div className="project-image-container rounded-xl overflow-hidden">
        <img
          className={`w-full h-48 object-cover rounded-xl transition-transform duration-500 ${hasLink ? 'group-hover:scale-105' : ''}`}
          src={project.img}
          alt={project.title}
        />
      </div>
      {/* Hover overlay with view text - only show if has link */}
      {hasLink && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-fun-pink/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            View Project →
          </span>
        </div>
      )}
    </>
  );

  return (
    <div
      className="max-w-sm mx-auto flex flex-col group"
      key={project.id}
    >
      {hasLink ? (
        <a
          href={project.link || project.github}
          target="_blank"
          rel="noreferrer"
          className="w-full relative rounded-2xl overflow-hidden glass-card p-2 transition-all duration-300 hover:shadow-2xl hover:shadow-fun-pink/10"
        >
          <ImageContent />
        </a>
      ) : (
        <div className="w-full relative rounded-2xl overflow-hidden glass-card p-2">
          <ImageContent />
        </div>
      )}
      
      <div className="w-full mt-5 px-1">
        <div className="flex items-center justify-between">
          {hasLink ? (
            <a href={project.link || project.github} target="_blank" rel="noreferrer">
              <h3 className="text-lg font-bold hover:text-fun-pink transition-colors">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="text-lg font-bold">
              {project.title}
            </h3>
          )}
          <div className="flex items-center space-x-3">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/static/icons/external-link.svg"
                  width={18}
                  height={18}
                  alt="External Link"
                />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/static/icons/github.svg"
                  width={18}
                  height={18}
                  alt="Github"
                />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-fun-gray text-left text-sm mt-2 leading-relaxed">
          {showMore === false && project?.desc.length > 300 ? (
            <>
              {project.desc.slice(0, 300)}...{" "}
              <button 
                onClick={() => setShowMore(true)}
                className="text-fun-pink hover:text-fun-pink-light underline underline-offset-2 italic transition-colors"
              >
                Show more
              </button>
            </>
          ) : (
            project.desc
          )}
        </p>
        
        <ul className="flex flex-wrap items-center mt-3 gap-2 list-none">
          {project.tags.slice(0, 5).map((tag) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <span className="inline-block rounded-full text-xs bg-fun-pink/10 border border-fun-pink/20 py-1 px-3 cursor-pointer hover:bg-fun-pink/20 hover:border-fun-pink/40 transition-all">
                    {tag}
                  </span>
                </Link>
              </li>
            );
          })}
          {project.tags.length > 5 && (
            <li className="text-xs text-fun-gray">+{project.tags.length - 5} more</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;