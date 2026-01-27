import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-fun-pink opacity-20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-[120px] pointer-events-none" />
        
        <p className="text-xl mb-5 text-fun-gray-light fade-in-section">
          <span className="inline-block animate-pulse">👋</span> Hey, I'm David.
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          I enjoy{" "}
          <span className="gradient-text">coding</span>{" "}
          web apps and doing{" "}
          <span className="gradient-text">frontend</span>.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <ScrollLink
            activeClass="active"
            to="learnmore"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            role="button"
            tabIndex={0}
            aria-label="Scroll to learn more about David Horov"
            className="glow-button cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-fun-pink bg-fun-pink hover:bg-fun-pink-light transition-all duration-300 shadow-lg shadow-fun-pink/20 inline-block"
          >
            More about me
          </ScrollLink>
          
          <a 
            href="/static/DAVID_HOROV_CV.pdf" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Download David Horov's CV (opens in new tab)"
            className="glow-button cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-pink border-2 text-xl rounded-full border-fun-pink bg-transparent hover:bg-fun-pink hover:text-white transition-all duration-300 inline-block"
          >
            Download my CV
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <span className="text-xs text-fun-gray-light mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-fun-gray-light rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-fun-gray-light rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;