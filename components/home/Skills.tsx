import React from "react";
import Image from "next/image";
import SectionTitle from "../global/SectionTitle";

// Curated skills with reliable icons
const skillCategories = [
  {
    name: "Core",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { title: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { title: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ]
  },
  {
    name: "State & Data",
    color: "from-purple-500 to-pink-400",
    skills: [
      { title: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { title: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { title: "React Query", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
    ]
  },
  {
    name: "Styling",
    color: "from-cyan-500 to-blue-400",
    skills: [
      { title: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { title: "styled-comp", icon: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.svg" },
      { title: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    ]
  },
  {
    name: "Testing",
    color: "from-green-500 to-emerald-400",
    skills: [
      { title: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { title: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { title: "Testing Lib", icon: "https://testing-library.com/img/octopus-64x64.png" },
    ]
  },
  {
    name: "Tools",
    color: "from-orange-500 to-yellow-400",
    skills: [
      { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { title: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
      { title: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ]
  },
];

const additionalSkills: { title: string; icon: string; invert?: boolean }[] = [
  { title: "Zod", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zod.svg", invert: true },
  { title: "React Hook Form", icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" },
  { title: "react-intl", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/i18next.svg", invert: true },
  { title: "XState", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/xstate.svg", invert: true },
  { title: "OpenAPI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openapiinitiative.svg" },
  { title: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { title: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { title: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
  { title: "Jotai", icon: "https://cdn.candycode.com/jotai/jotai-mascot.png" },
  { title: "Mixpanel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mixpanel.svg", invert: true },
];

// Expertise areas (text only, no icons needed)
const expertiseAreas = [
  "Performance Optimization",
  "Core Web Vitals",
  "SEO",
  "LLM Integration",
  "AI/ML APIs",
  "Accessibility (a11y)",
  "Code Review",
  "Technical Leadership",
  "Agile/Scrum",
  "CI/CD",
];

function Skills() {
  return (
    <div className="flex flex-col relative">
      <SectionTitle title="My Tech Stack" />
      
      <p className="text-fun-gray-light text-center md:text-left mb-12 max-w-2xl">
        With <span className="text-fun-pink font-semibold">9+ years</span> of experience building production applications, 
        here are the technologies I work with daily.
      </p>
      
      {/* Main skill categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {skillCategories.map((category, catIndex) => (
          <div 
            key={category.name}
            className="group relative rounded-2xl p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
              <span className="text-xs font-semibold text-fun-gray uppercase tracking-wider">
                {category.name}
              </span>
            </div>
            
            {/* Skills in category */}
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="flex items-center gap-3 group/skill"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover/skill:bg-white/[0.1] transition-colors">
                    <Image 
                      src={skill.icon} 
                      alt={`${skill.title} logo`}
                      width={24}
                      height={24}
                      className={`object-contain ${skill.invert ? 'invert' : ''}`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-white/80 group-hover/skill:text-white transition-colors">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`} />
          </div>
        ))}
      </div>
      
      {/* Additional skills */}
      <div className="mt-12 text-center">
        <p className="text-xs text-fun-gray uppercase tracking-wider mb-6">Also experienced with</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {additionalSkills.map((skill) => (
            <div 
              key={skill.title}
              className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-full hover:bg-white/[0.06] hover:border-white/[0.1] transition-all cursor-default group"
            >
              <Image 
                src={skill.icon} 
                alt={`${skill.title} logo`}
                width={20}
                height={20}
                className={`object-contain opacity-70 group-hover:opacity-100 transition-opacity ${skill.invert ? 'invert' : ''}`}
                loading="lazy"
              />
              <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expertise areas */}
      <div className="mt-10 text-center">
        <p className="text-xs text-fun-gray uppercase tracking-wider mb-6">Areas of expertise</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {expertiseAreas.map((area) => (
            <span 
              key={area}
              className="px-4 py-2 text-sm text-fun-pink bg-fun-pink/5 border border-fun-pink/20 rounded-full hover:bg-fun-pink/10 hover:border-fun-pink/30 transition-all cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
