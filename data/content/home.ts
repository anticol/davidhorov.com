
type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string,
  company?: string,
  image?: string,
};

type LOR = {
  title: string,
  path: string,
}

type Timeline = {
  heading: string,
  image?: string,
  date: string,
  position: string,
  description: string,
  education?: boolean,
  lor?: Array<LOR>,
};

export const skills: Skill[] = [
  // Essential - Core Frontend
  {
    title: "React 19",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  // State Management & Data
  {
    title: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    title: "Relay",
    icon: "https://relay.dev/img/relay.svg",
  },
  {
    title: "React Query",
    icon: "https://miro.medium.com/v2/resize:fit:380/1*4g9gB2zUU9x1bZTOJXtZWA.png",
  },
  {
    title: "Jotai",
    icon: "https://cdn.candycode.com/jotai/jotai-mascot.png",
  },
  {
    title: "XState",
    icon: "https://raw.githubusercontent.com/statelyai/xstate/main/assets/logo.svg",
    style: { filter: "invert(1)" },
  },

  // Styling
  {
    title: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "styled-components",
    icon: "https://styled-components.com/logo.png",
  },
  {
    title: "Material-UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },

  // Testing
  {
    title: "Jest",
    icon: "https://www.svgrepo.com/show/353930/jest.svg",
  },
  {
    title: "Testing Library",
    icon: "https://testing-library.com/img/octopus-64x64.png",
  },
  {
    title: "Playwright",
    icon: "https://playwright.dev/img/playwright-logo.svg",
  },

  // Forms & Validation
  {
    title: "React Hook Form",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png",
  },
  {
    title: "Zod",
    icon: "https://zod.dev/logo.svg",
  },

  // Internationalization
  {
    title: "react-intl",
    icon: "https://formatjs.io/img/logo.svg",
  },

  // API & Backend Integration
  {
    title: "OpenAPI",
    icon: "https://www.svgrepo.com/show/306500/openapi-initiative.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Design & Component Libraries
  {
    title: "Storybook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  // Fundamentals
  {
    title: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  // DevOps & Tools
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "ESLint",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png",
  },

  // Analytics & Automation
  {
    title: "Google Analytics",
    icon: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
  },
  {
    title: "Mixpanel",
    icon: "https://pbs.twimg.com/profile_images/1646922666119684096/7rKdBYmN_400x400.png",
  },
  {
    title: "Zapier",
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_kmxr4Gm2zB3Fj45CMBgTKlmavwj7vAQaja9g5dBws_kQ=s900-c-k-c0x00ffffff-no-rj",
  },

  // Database
  {
    title: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];


export const testimonials: Testimonial[] = [
  {
    quote:
      "David is a dedicated, skilled, and charismatic frontend developer. His proactive approach means we never had to worry about his workload—he consistently reaches out to ensure he's aligned with the team's highest-priority tasks.",
    name: "Stian Tornholm Grimsgaard",
    job: "CTO & Co-founder at Noddi",
    company: "Noddi",
    image: "/static/companies/noddi.jpeg",
  },
  {
    quote:
      "Highly recommend David as an exceptional front-end software engineer. He has consistently demonstrated outstanding technical skills.",
    name: "Nikita Rogachev",
    job: "Engineering Manager at Tesla",
    company: "Tesla",
    image: "/static/companies/tesla.svg",
  },
  {
    quote:
      "David consistently demonstrates a remarkable attention to detail, tackling a high volume of tasks with precision and dedication to quality.",
    name: "Ashkan Paya",
    job: "Sr. Staff Software Development Engineer at Tesla",
    company: "Tesla",
    image: "/static/companies/tesla.svg",
  },
  {
    quote:
      "David's technical expertise was central to advancing our product, driving significant improvements in functionality and performance, while also elevating the quality of our codebase and frontend to new standards.",
    name: "Roberto J. Sánchez",
    job: "Staff Software Engineer at Tesla",
    company: "Tesla",
    image: "/static/companies/tesla.svg",
  },

  {
    quote:
      "David is notable for his substantial level of dedication, consistently getting things done no matter the task at hand. His hard working attitude and steadfast reliability speak volumes about his professional commitment.",
    name: "Jan Pospíšil",
    job: "CTO of Iguana",
    company: "Iguana",
    image: "/static/companies/iguana.jpeg",
  },

  {
    quote:
      "Given the quality of the developed application and high quality of the thesis text, I nominated him for the Dean’s award, which he successfully got. ",
    name: "doc. Mgr. Hana Rudová, PhD.",
    job: "Associate professor at Masaryk University in Brno",
    company: "Masaryk University",
  },

  {
    quote:
      "I highly recommend Dávid as a very valuable part of any development team because of his sustained effort to deliver things on time and with very good quality.",
    name: "Antonín Pospíšil",
    job: "Product Lead at Trisbee s.r.o.",
    company: "Trisbee",
    image: "/static/companies/trisbee.jpeg",
  },

  {
    quote:
      "His work was always done on time and in high quality beyond my expectations.",
    name: "Denis Staník",
    job: "CEO of Riesime Financie",
    company: "Riesime Financie",
  },


  // {
  //   quote:
  //     "The communication with me and my clients and web development itself was done perfectly.",
  //   name: "Houssam All",
  //   job: "Project manager"
  // },

  {
    quote:
      "David can work diligently with a reasonable amount of independence and reliability. When necessary, he was readily able to investigate and learn new skills.",
    name: "Martin Ukrop",
    job: "Researcher, teacher, PhD candidate",
    company: "Masaryk University",
  },
  {
    quote:
      "David was very helpful with setting up everyitng what we needed. His work was always done in time and in hight quality.",
    name: "Lucie Ulrichová",
    job: "CEO of Bmedic Education",
    company: "Bmedic Education",
  },
];

export const timelineItems: Timeline[] = [
  {
    heading: "Kiwi",
    image: '/static/companies/kiwi.png',
    date: "January 2025 - Present",
    position: 'Senior software engineer',
    description: "Kiwi.com is a travel-tech company offering innovative solutions for booking airline tickets. It combines flights to create unique routes and find better prices, with 100 million daily searches and 70,000 tickets sold each day. I am optimizing payment flow experiences, driving cross-platform innovations, delivering impactful customer-facing features, ensuring financial safety through fraud prevention, and transforming business requirements into seamless technical solutions.",
  },

  {
    heading: "Noddi",
    image: '/static/companies/noddi.jpeg',
    date: "June 2025 - December 2025",
    position: 'Frontend developer',
    description: "Contributes to the development of a robust frontend architecture for a customer, admin, and worker management platform, streamlining home-delivered car maintenance services. Focused on building efficient, scalable, and user-friendly solutions that drive operational power and seamless experiences across all user roles.",
    lor: [
      {
        title: 'Recommendation letter - Stian Tornholm Grimsgaard - CTO & Co-founder',
        path: '/static/documents/lor_stian_grimsgaard.pdf'
      }]
  },


  {
    heading: "Tesla",
    image: '/static/companies/tesla.svg',
    date: "January 2024 - June 2024",
    position: 'Software engineer (React)',
    description: "Designing and developing scalable software systems (in React) to enhance Tesla's Berlin Gigafactory operations with the focus on frontend development. Creating robust solutions to boost production efficiency, increase automation, and support sustainable growth, integrating advanced technologies to meet evolving needs.",
    lor: [
      {
        title: 'Recommendation letter - Ashkan Paya - Sr. Staff Software Development Engineer',
        path: '/static/documents/ashkan_paya_lor.pdf'
      },
      {
        title: 'Recommendation letter - Roberto J. Sánchez - Staff Software Enginee',
        path: '/static/documents/lor_roberto_jimenez_sanchez.pdf'
      }]
  },
  {
    heading: "Iguana",
    image: '/static/companies/iguana.jpeg',
    date: "November 2020 - October 2023",
    position: 'Lead Frontend developer',
    description: "Developing React/Next.js applications for various clients. Leading junior Frontend devs.",
    lor: [{
      title: 'Recommendation letter - Jan Pospíšil - CTO',
      path: '/static/documents/lor_jan_pospisil.pdf'
    }]
  },

  {
    heading: "Trisbee",
    image: '/static/companies/trisbee.jpeg',
    date: "February 2020 - December 2020",
    position: 'Fronted developer',
    description: "Developing React/Next.js applications in the area of fintech. Tech stack and tools: React, Next.js, SASS, Bootstrap, Avocode, Figma ",
    lor: [{
      title: 'Recommendation letter - Antonin Pospisil',
      path: '/static/documents/lor_antonin_pospisil.pdf'
    }]
  },

  {
    heading: "Master's degree programme",
    date: "December 2017 - February 2020",
    position: "Masaryk University, Faculty of Informatics",
    description: "I was studying Service Science, Management and Engineering. Holder of deans award",
    education: true,
    lor: [{
      title: 'Recommendation letter - Masaryk University',
      path: '/static/documents/lor_hana_rudova.pdf'

    }
    ]
  },

  {
    heading: "Freelancing",
    date: "December 2017 - February 2020",
    position: 'Web developer',
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
    position: "University of Balearic Islands, Faculty of Science",
    description: "I took 4 courses with an average grade of 1.37",
    education: true,
  },

  {
    heading: "Mautilus",
    date: "November 2016 - November 2017",
    position: 'Frontend developer',
    description: "Development of javascript applications for Smart TV, HbbTV and related technologies, ensuring the technical feasibility of UI/UX designs, transforming mockups into code pixel by pixel, helping back-end developers and QA engineers with troubleshooting, writing functional requirement documents and guides, collaborating with other team members and stakeholders. Using: React, Redux, HTML5, CSS3, jQuery, Grunt, Git, Jira, Confluence, Gimp, Source Tree"
  },


  {
    heading: "Exchange student",
    date: "February 2016 - July 2016",
    position: "University of Porto, Faculty of Engineering",
    description: "While studying abroad I discovered new ways of thinking and problem solving. I took 5 courses with an average grade of 1.30",
    education: true,
  },
  {
    heading: "Bachelor's degree programme",
    date: "September 2014 - June 2017",
    position: "Masaryk University, Faculty of Informatics",
    description: "I studied Computer Science. I successfully completed 51 courses, graduating in the 88th percentile.",
    education: true,
    lor: [{
      title: 'Recommendation letter - Masaryk University',
      path: '/static/documents/lor_hana_rudova.pdf'
    }
    ]
  }


];

