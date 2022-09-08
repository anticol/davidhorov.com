
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

type LOR = {
  title: string,
  path: string,
}

type Timeline = {
  heading: string,
  date: string,
  position: string,
  description: string,
  education?:boolean,
  lor?: Array<LOR>,
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

  {
    quote:
      "His work was allways done on time and in hight quality beyond my expectations",
    name: "Denis Staník",
    job: "CEO of Riesime Financie",
  },
  {
    quote:
      "David was very helpful with setting up everyitng what we needed. His work was always done in time and in hight quality.",
    name: "Lucie Ulrichová",
    job: "CEO of Bmedic Education",
  },

  {
    quote:
      "The communication with me and my clients and web development itself was done perfectly.",
    name: "Houssam All",
    job: "Project manager"
  },

  {
    quote:
      "David can work diligently with a reasonable amount of independence and reliability. When necessary, he was readily able to investigate and learn new skills.",
    name: "Martin Ukrop",
    job: "Researcher, teacher, PhD candidate"
  },

];

export const timelineItems: Timeline[] = [
  {
    heading: "Prague Labs",
    date: "December 2020 - Present",
    position:'Lead frontend developer',
    description: "Developing React/Next.js applications for various clients. Leading junior Frontend devs.",
  },

  {
    heading: "Trisbee",
    date: "February 2020 - December 2020",
    position:'Fronted developer',
    description: "Developing React/Next.js applications in the area of fintech. Tech stack and tools: React, Next.js, SASS, Bootstrap, Avocode, Figma ",
    lor: [{
      title: 'Recommendation letter - Antonin Pospisil',
      path: '/static/documents/lor_antonin_pospisil.pdf'
   }
]
  },

  {
    heading: "Master's degree programme",
    date: "December 2017 - February 2020",
    position:"Masaryk University, Faculty of Informatics",
    description: "I was studying Service Science, Management and Engineering. Holder of deans award",
    education:true,
    lor: [{
      title: 'Recommendation letter - Masaryk University',
      path: '/static/documents/lor_hana_rudova.pdf'

   }
]
  },
  
  {
    heading: "Freelancing",
    date: "December 2017 - February 2020",
    position:'Web developer',
    description: "Working remotely. Mostly focused on front-end developement. External collaboration with digital agencies, companies and individuals. Using HTML5, CSS3, JavaScript, Vue.js jQuerry, Bootstrap, PHP, SQL, SAAS, LEES, GIT, Jira, Confluence, Gimp,...",
    lor: [
      {
        title: 'Recommendation letter - Bmedic Education s.r.o.',
        path: '/static/documents/lor-bmedic-education.pdf'

      },
      {
        title: 'Recommendation letter - He&She s.r.o',
        path: '/static/documents/lor-heandshe.pdf'
      },
      {
        title: 'Recommendation letter - Riesime Financie s.r.o.',
        path: '/static/documents/lor-riesime-financie.pdf'

      },
      {
        title: 'Recommendation letter - Houssam All',
        path: '/static/documents/lor-houssam-all.pdf'

      },
]
  },
  {
    heading: "Exchange student",
    date: "February 2018 - July 2018",
    position:"University of Balearic Islands, Faculty of Science",
    description: "I took 4 courses with an average grade of 1.37",
    education:true,
  },

  {
    heading: "Mautilus",
    date: "November 2016 - November 2017",
    position:'Frontend developer',
    description: "Development of javascript applications for Smart TV, HbbTV and related technologies, ensuring the technical feasibility of UI/UX designs, transforming mockups into code pixel by pixel, helping back-end developers and QA engineers with troubleshooting, writing functional requirement documents and guides, collaborating with other team members and stakeholders. Using: React, Redux, HTML5, CSS3, jQuery, Grunt, Git, Jira, Confluence, Gimp, Source Tree"
  },
 

  {
    heading: "Exchange student",
    date: "February 2016 - July 2016",
    position:"University of Porto, Faculty of Engineering",
    description: "While studying abroad I discovered new ways of thinking and problem solving. I took 5 courses with an average grade of 1.30",
    education:true,
  },
  {
    heading: "Bachelor's degree programme",
    date: "September 2014 - June 2017",
    position:"Masaryk University, Faculty of Informatics",
    description: "I studied Computer Science. I successfully completed 51 courses, graduating in the 88th percentile.",
    education:true,
    lor: [{
          title: 'Recommendation letter - Masaryk University',
          path: 'abc'
       }
    ]
  }


];

