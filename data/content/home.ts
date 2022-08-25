type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },

  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "SQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/postgresql.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "His was was allrays done on time and in hight quality beyond my expectations",
    name: "Denis Staník",
    job: "CEO of RiesimeFinancie",
  },
  {
    quote:
     "David was very helpful with setting up everyitng what we needed. His work was always done in time and in hight quality.",
    name: "Lucie Ulrichová",
    job: "CEO of Bmedic education",
  },
  {
    quote:
     "Given the quality of the developed application and high quality of the thesis text, I nominated him for the Dean’s award, which he successfully got. ",
    name: "doc. Mgr. Hana Rudová, PhD.",
    job: "Associate professor at Masaryk University in Brno"
  },

  {
    quote:
     "I highly recommend Dávid as a very valuable part of any development team because of his sustained effort to deliver things on time and with very good quality.",
    name: "Antonín Pospíšil",
    job: "Product Lead at Trisbee s.r.o.",
  },

];
