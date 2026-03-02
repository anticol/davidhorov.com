import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const modal = (
    <>
      <style jsx global>{`
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes panelSlideUp {
          from { opacity: 0; transform: translateY(60px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .modal-backdrop { animation: backdropFadeIn 0.25s ease-out forwards; }
        .modal-panel    { animation: panelSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Full-viewport backdrop */}
      <div
        className="modal-backdrop"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "0",
        }}
        onClick={onClose}
      >
        {/* Panel — bottom sheet on mobile, centered on desktop */}
        <div
          className="modal-panel"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            height: "92vh",
            margin: "0 auto",
            background: "#000a1f",
            border: "1px solid rgba(0,199,255,0.18)",
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,199,255,0.04)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 10,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
          >
            ✕
          </button>

          {/* Top — image */}
          <div style={{ position: "relative", height: "280px", flexShrink: 0, overflow: "hidden" }}>
            <Image
              src={project.img}
              alt={`Screenshot of ${project.title}`}
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, #000a1f 100%)",
              }}
            />
          </div>

          {/* Bottom — scrollable content */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                overflowY: "auto",
                overscrollBehavior: "contain",
                padding: "28px 40px 48px",
              }}
            >
              {project.personal && (
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    marginBottom: "16px",
                    background: "rgba(0,199,255,0.1)",
                    color: "#00c7ff",
                    border: "1px solid rgba(0,199,255,0.25)",
                  }}
                >
                  Personal Project
                </span>
              )}

              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2, paddingRight: "40px" }}>
                {project.title}
              </h2>

              <p style={{ color: "#9aa8c2", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                <span dangerouslySetInnerHTML={{ __html: project.desc }} />
              </p>

              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9aa8c2", opacity: 0.5, marginBottom: "12px" }}>
                Tech Stack
              </p>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", marginBottom: "40px", padding: 0 }}>
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Link href={`/projects/tag/${kebabCase(tag)}`}>
                      <span
                        onClick={onClose}
                        style={{
                          display: "inline-block",
                          borderRadius: "999px",
                          fontSize: "12px",
                          padding: "4px 12px",
                          background: "rgba(0,199,255,0.08)",
                          border: "1px solid rgba(0,199,255,0.2)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,199,255,0.18)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,199,255,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,199,255,0.08)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,199,255,0.2)";
                        }}
                      >
                        {tag}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      borderRadius: "999px",
                      background: "#00c7ff",
                      color: "#000a1f",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "opacity 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  >
                    Visit Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      borderRadius: "999px",
                      background: "transparent",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      border: "1px solid rgba(0,199,255,0.3)",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,199,255,0.7)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,199,255,0.3)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  >
                    View on GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (!mounted) return null;
  return ReactDOM.createPortal(modal, document.body);
}

function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <div
        className="max-w-sm mx-auto flex flex-col group cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Image card */}
        <div className="w-full relative rounded-2xl overflow-hidden glass-card p-2 transition-all duration-300 hover:shadow-2xl hover:shadow-fun-pink/10">
          <div className="rounded-xl overflow-hidden relative" style={{ height: "192px" }}>
            <Image
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              src={project.img}
              alt={`Screenshot of ${project.title}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-fun-pink/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              View Details →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="w-full mt-5 px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold group-hover:text-fun-pink transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center space-x-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image src="/static/icons/external-link.svg" width={18} height={18} alt="External Link" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image src="/static/icons/github.svg" width={18} height={18} alt="Github" />
                </a>
              )}
            </div>
          </div>

          <p
            className="text-fun-gray text-left text-sm mt-2 leading-relaxed"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: project.desc }} />
          </p>

          <ul className="flex flex-wrap items-center mt-3 gap-2 list-none">
            {project.tags.slice(0, 6).map((tag) => (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <span
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block rounded-full text-xs bg-fun-pink/10 border border-fun-pink/20 py-1 px-3 cursor-pointer hover:bg-fun-pink/20 hover:border-fun-pink/40 transition-all"
                  >
                    {tag}
                  </span>
                </Link>
              </li>
            ))}
            {project.tags.length > 6 && (
              <li>
                <span className="inline-block rounded-full text-xs bg-fun-pink/10 border border-fun-pink/20 py-1 px-3">
                  +{project.tags.length - 6}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default ProjectCard;
