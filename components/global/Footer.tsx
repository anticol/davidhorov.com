import Link from "next/link";
import Image from "next/image";
import React from "react";
import { footer } from "@/data/global";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-screen px-5 py-12 border-t border-white/5 bg-bg/80 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-fun-pink/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/">
              <span className="text-xl font-bold hover:text-fun-pink transition-colors cursor-pointer">
                DavidHorov.com
              </span>
            </Link>
            <p className="text-fun-gray text-sm mt-3">
              Frontend developer crafting beautiful web experiences
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footer.columns[0].links.map((link, index) => (
                <Link key={index} href={link.link}>
                  <span className="text-fun-gray hover:text-fun-pink transition-colors cursor-pointer text-sm">
                    {link.name}
                  </span>
                </Link>
              ))}
              <a 
                href="/static/DAVID_HOROV_CV.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="text-fun-gray hover:text-fun-pink transition-colors text-sm"
              >
                Resume
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {footer.columns[1].links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-fun-pink/20 border border-white/10 hover:border-fun-pink/30 flex items-center justify-center transition-all group"
                  title={link.name}
                >
                  <Image 
                    src={link.icon!} 
                    alt={`${link.name} icon - Visit my ${link.name} profile`}
                    width={20}
                    height={20}
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-fun-gray">
            <span>Built with</span>
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={16}
                height={16}
                alt="React framework logo"
                className="opacity-60"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width={28}
                height={16}
                className="invert opacity-60"
                alt="Next.js framework logo"
              />
            </span>
          </div>
          
          <p className="text-xs text-fun-gray">
            © {new Date().getFullYear()} David Horov. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed right-5 bottom-5 w-12 h-12 rounded-full bg-fun-pink/10 hover:bg-fun-pink/20 border border-fun-pink/30 hover:border-fun-pink/50 flex items-center justify-center transition-all group z-50"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-5 h-5 text-fun-pink group-hover:transform group-hover:-translate-y-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;