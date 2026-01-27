import React from "react";
import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

// Helper to get clean initials (filters out titles like doc., Mgr., PhD., etc.)
const getInitials = (name: string): string => {
  const titles = ['doc.', 'mgr.', 'phd.', 'phd', 'ing.', 'bc.', 'dr.', 'prof.', 'jr.', 'sr.'];
  const parts = name.split(' ').filter(part => {
    const lower = part.toLowerCase().replace(',', '');
    return !titles.includes(lower) && part.length > 1;
  });
  return parts.map(n => n[0]).join('').substring(0, 2);
};

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="What People Say" />
      <p className="text-fun-gray-light text-center md:text-left mb-8 max-w-2xl">
        I've had the privilege of working with amazing teams and clients. Here's what they have to say about our collaboration.
      </p>
      
      <div className="max-w-6xl m-auto grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 items-stretch">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="testimonial-card relative glass-card p-6 rounded-2xl h-full flex flex-col justify-between group"
            >
              {/* Company badge */}
              {item.company && (
                <div className="absolute -top-3 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1]">
                  {item.image && (
                    <Image 
                      src={item.image} 
                      alt={`${item.company} company logo`}
                      width={20}
                      height={20}
                      className="object-contain rounded"
                    />
                  )}
                  <span className="text-xs font-medium text-white/70">{item.company}</span>
                </div>
              )}
              
              {/* Quote icon */}
              <div className="absolute -top-3 -left-2 w-10 h-10 bg-fun-pink/20 rounded-full flex items-center justify-center">
                <span className="text-fun-pink text-2xl font-serif">"</span>
              </div>
              
              <div>
                <p className="text-base leading-relaxed text-white/90 mt-6">
                  {item.quote}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                {/* Avatar placeholder with initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fun-pink to-fun-pink-light flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {getInitials(item.name)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{item.name}</p>
                  <p className="text-xs text-fun-gray truncate">{item.job}</p>
                </div>
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fun-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
