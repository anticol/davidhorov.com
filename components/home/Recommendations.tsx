import React from "react";
import SectionTitle from "../global/SectionTitle";
import { timelineItems } from "@/data/content/home";

// Company/institution logos and colors
const companyBranding: Record<string, { logo?: string; color: string; icon?: string }> = {
  "Noddi": { logo: "/static/companies/noddi.jpeg", color: "from-emerald-500/20 to-emerald-600/10" },
  "Tesla": { logo: "/static/companies/tesla.svg", color: "from-red-500/20 to-red-600/10" },
  "Iguana": { logo: "/static/companies/iguana.jpeg", color: "from-green-500/20 to-green-600/10" },
  "Trisbee": { logo: "/static/companies/trisbee.jpeg", color: "from-emerald-500/20 to-emerald-600/10" },
  "Master's degree programme": { 
    color: "from-blue-500/20 to-blue-600/10",
    icon: "education"
  },
  "Bachelor's degree programme": { 
    color: "from-blue-500/20 to-blue-600/10",
    icon: "education"
  },
  "Freelancing": { 
    color: "from-purple-500/20 to-purple-600/10",
    icon: "briefcase"
  },
};

// Extract all LORs from timeline items with company info
const allRecommendations = timelineItems
  .filter(item => item.lor && item.lor.length > 0)
  .flatMap(item => 
    item.lor!.map(lor => ({
      ...lor,
      company: item.heading,
      image: item.image,
      branding: companyBranding[item.heading],
    }))
  );

// Icon components
const BriefcaseIcon = () => (
  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422m-6.16 3.422v7.055" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6 text-fun-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

function Recommendations() {
  return (
    <div className="flex flex-col relative">
      <SectionTitle title="Letters of Recommendation" />
      <p className="text-fun-gray-light text-center md:text-left mb-10 max-w-2xl">
        Written endorsements from colleagues, managers, and clients I've collaborated with throughout my career.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allRecommendations.map((lor, index) => {
          const branding = lor.branding || { color: "from-fun-pink/20 to-fun-pink/10" };
          const displayName = lor.title
            .replace('Recommendation letter - ', '')
            .replace(' - ', '\n');
          
          return (
            <a
              key={index}
              href={lor.path}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-fun-pink/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${branding.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              
              {/* Header with logo and company */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center overflow-hidden border border-white/[0.1]">
                  {branding.logo ? (
                    <img 
                      src={branding.logo} 
                      alt={lor.company}
                      className="w-8 h-8 object-contain"
                    />
                  ) : branding.icon === "briefcase" ? (
                    <BriefcaseIcon />
                  ) : branding.icon === "education" ? (
                    <EducationIcon />
                  ) : (
                    <DocumentIcon />
                  )}
                </div>
                <div>
                  <span className="text-sm font-semibold text-white">{lor.company}</span>
                </div>
                
                {/* PDF badge */}
                <div className="ml-auto px-2.5 py-1 rounded-lg text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                  PDF
                </div>
              </div>
              
              {/* Recommender info */}
              <div className="relative flex-1">
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed whitespace-pre-line">
                  {displayName}
                </p>
              </div>
              
              {/* Footer with action hint */}
              <div className="relative flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
                <span className="text-xs text-fun-gray group-hover:text-fun-pink transition-colors">
                  View letter
                </span>
                <div className="w-8 h-8 rounded-full bg-fun-pink/10 flex items-center justify-center group-hover:bg-fun-pink/20 transition-colors">
                  <svg className="w-4 h-4 text-fun-pink transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      
      {/* Summary */}
      <div className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]">
          <div className="text-center">
            <span className="text-2xl font-bold text-fun-pink">{allRecommendations.length}</span>
            <p className="text-xs text-fun-gray">Letters</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <span className="text-2xl font-bold text-fun-pink">{timelineItems.filter(item => item.lor && item.lor.length > 0).length}</span>
            <p className="text-xs text-fun-gray">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
