import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between py-2">
      <Link href="/">
        <span className="font-black text-xl flex items-center cursor-pointer group">
          {"DavidHorov.com".split("").map((letter, index) => {
            return (
              <span 
                key={index} 
                className="hover:text-fun-pink hover:-translate-y-1 transition-all duration-300 hover:duration-100 inline-block"
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {letter}
              </span>
            );
          })}
        </span>
      </Link>
      
      <ul className="flex items-center gap-2">
        {routes.map((item, index) => {
          const isActive = currentPage === item.title;
          return (
            <li key={index} className="list-none">
              <Link href={item.path}>
                <span className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                  ${isActive 
                    ? "bg-fun-pink/10 text-fun-pink border border-fun-pink/30" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }
                `}>
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
        <li className="list-none ml-2">
          <a 
            href="/static/DAVID_HOROV_CV.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-sm font-medium bg-fun-pink text-white hover:bg-fun-pink-light transition-all duration-300 inline-block"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
