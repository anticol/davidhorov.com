import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Campiri",
    desc: "Campiri is the largest online campervan and recreational vehicle rental site. I have been a part of frontend dev team, with the role of developer and leader. I have developed public sites, landing pages, whole booking flow, payments integration, connections to automated tools like Zapier,... ",
    img: "/static/projects/og_image_campiri_main.png",
    link: "https://campiri.com",
    tags: ["React", "Typescript", "NextJS", "CSS/styled-components", "Redux","Jotai","Turborepo","Zapier","cucumber",'Material UI',"Google Analytics","Stripe"],
  },

  {
    id: 1,
    title: "Dokempu",
    desc: "Dokempu is the largest online campsite guide with easy search. Choose from thousands of campsites for an ideal holiday in nature. We have migrated the old system to a new React/Next.js application with latest technologies used, including data migration and brand new design. ",
    img: "/static/projects/dokempu.png",
    link: "https://dokempu.cz",
    tags: ["React", "Typescript", "NextJS", "CSS/styled-components", "Jotai","Turborepo",'Material UI',"Google Analytics"],
  },

  {
    id: 2,
    title: "Boatsetter",
    desc: "Boatsetter - world’s leading boat rental community. With more than 50,000 boats in over 700 locations worldwide with yearly earning potential $20,000+ for boat owners. ",
    img: "/static/projects/boatsetter.png",
    link: "https://boatsetter.com",
    tags: ["React", "Typescript", "NextJS", "CSS/styled-components", "Redux"],
  },

  {
    id: 3,
    title: "Fee time in Brno",
    desc: "Web application mapping options of spending free time in Brno. It is a mashup application which collects open data from different sources and shows them on the map. It shows the possibilities of spending leisure time in Brno and its surroundings. Created application supports smart city concepts and was successfully deployed to the data portal of the city of Brno.  ",
    img:"/static/projects/volnycasvbrne.jpeg",
    tags: ["React","Javascript", "CSS",],
  },

  {
    id: 9,
    title: "Trisbee payment app",
    desc: "With Trisbee on your phone, you don’t have to worry anymore whether you have cash or a card with you. I was a part of development team building Frontend",
    img: "/static/projects/trisbee.png",
    link: 'https://trisbee.com/',
    tags: ["React", "Typescript", "NextJS","CSS", "Firebase","mailchimp"],
  },

  {
    id: 1,
    title: "Festival Panel for Animefest",
    desc: "The task of this university group project was to create an information screen and administration panel for the festival Animefest.cz. It contains multiple features such as displaying the current program from XML data, fetching images from Instagram with a specified hashtag, fully operational and responsive administration interface, showing static pages, iframes, news ticker. Application works on the basic of showing / hiding scenes based on the configuration file. Displaying news, Instagram posts and static pages work in cooperation with administration panel.",
    img: "/static/projects/anime_fest_complete.png",
    tags: ["React", "Typescript", "CSS", "Firebase"],
  },
  

  {
    id: 10,
    title: "Novelty",
    desc: "Project Novelty aims to create the news application for people with impaired vision and hearing, and to provide the integration into the application as a service. The concept of voice synthesizing is being progressively more used, but there is no application what would allow the news websites to have their source customized and integrated into the single app that will be used by people with vision impairment. With use of the IBM technologies, we are able to create a scalable solution for news integration, while building a single app that will contain all the news sources and will be used by the end-users.",
    img:"/static/projects/novelty.png",
    link: 'https://github.com/anticol/Novelty-IBM-cloud-project',
    tags: ["React", "Typescript", "CSS"],
  },
  

  {
    id: 6,
    title: "Source code inspector",
    desc: "Teachers of programming courses form their opinions about students mistakes based on their previous experience. This work qualitatively examines the programming problems in form of interviews with teachers and tries to verify or refute their hypotheses based on real data from source codes. Comparing real mistakes and rebellions of teachers offers an objective view of programming errors and good practice breaches. The output is automated bash script for searching for specified errors. The aim of this work is to analyze acquired data and on the basis of total data improve the quality of courses low-level programming and  C++ programming ",
    img:"/static/projects/script_example2.png",
    tags: ["Shell", "C", "C++"],
  },

   {
    id: 4,
    title: "Bmedic Education",
    desc: "Creating and modification of responsive websites providing courses tailored for students who would like to study general medicine, dentistry, physiotherapy biology, chemistry and physics at Masaryk University in Czechia. Websites/Eshops are using WordPress as main CMS system. I was customizing templates, plugins and UI. Integrating external systems for billing, currency changer. Writing own scripts for translations, deposits, emails modifications, logging in using Google and Facebook. Making speed and performance optimizations, etc,..",
    img:"/static/projects/bmedic.jpeg",
    link: "https://bmedic.cz/sk/",
    tags: ["Javascript", "CSS", "Wordpress" ,"PHP"],
  },
  {
    id: 5,
    title: "Riesime finance webpage",
    desc: "Creating responsive company website providing insurance and investment services. Website is using WordPress as main CMS system. During several meetings we have created an idea for this website from scratch. We defined features, which were implemented and regularly discussed.",
    img:"/static/projects/riesimefinancie.jpeg",
    tags: ["Javascript", "CSS", "Wordpress"],
  },
  
  {
    id: 7,
    title: "Smart Quiz",
    desc: "Creating smart testing platform providing questions and answers. Application is smart and remembers the answers of each student and consider that when choosing questions for students studying medicine, chemistry and physics. Administration interface for CRUD operations with questions was implemented as well.    ",
    img:"/static/projects/smartquiz2.77fc5d73.png",
    tags: ["React", "CSS" ,"PHP", "CSS"],
  },

  {
    id: 8,
    title: "He&She eshop",
    desc: "Creating a responsive eshop selling clothes and fashion accessories. Eshop is using Woocommerce. I was customizing template, plugins and UI. Integrating external systems for invoicing, transportation and paying with credit cards. Writing own scripts for email modifications and payment/transport restrictions. Making speed and performance optimizations. Creating campaigns for promotion at Facebook and Instagram." ,
    img:"/static/projects/heandshe.jpeg",
    tags: ["Javascript", "CSS", "Wordpress"],
  },

  {
    id: 12,
    title: "Markiza for HbbTV",
    desc: "TV Markíza is the most popular privately held television in Slovakia owned by CME. We have developed and launched the first HbbTV application. When the application was launched, it allowed the viewers to watch news from the server www.tvnoviny.sk, weather information and teletext, while in the latest update the list of applications was extended by video archive, EPG and several HbbTV games to give the audience more entertainment and information.",
    img:"/static/projects/markiza.png",
    tags: ["React", "Typescript", "CSS",],
  },

  {
    id: 14,
    title: "YouSee for Smart TVs",
    desc: "YouSee is the largest quadruple play service provider in Denmark and is a subsidiary of TDC Group. YouSee currently has 1.1 million customers in Denmark. We at Mautilus have developed and deployed for youSee an application for Samsung and LG TV platforms using our Smart TV SDK. It is one of our long-term ongoing project, with a unique application port from ST. During the development we've used the newest technology/libraries for ReactJS, in combination with our previously mentioned SDK 3.0. TDC Group is the largest telecommunications company in Denmark. TDC Group is the parent company of several subsidiaries and brands such as: Blockbuster, Dansk Kabel TV, Fullrate, Get AS, NetDesign, TDC Erhverv, Telmore and YouSee." ,
    img:"/static/projects/yousee.png",
    tags: ["React", "Typescript", "CSS",],
  },

  {
    id: 16,
    title:"O2 TV Sport",
    desc: "One of the first HbbTV applications in the world using the SMS payment gateway to allow access to a premium content. The application has been developed for O2 Czech Republic. The HbbTV application runs on the free-to-air O2 TV Sport channel and allows users to directly purchase the access to its premium content through SMS payment gateway from their mobile phones within a few seconds. In addition to that, users can also access the VOD archive, as they can use a start-over feature and go through the catch-up content that is available for up to 50 hours backwards. The application also includes the archive of free content produced by O2 TV." ,
    img:"/static/projects/o2.png",
    tags: ["React", "Typescript", "CSS",],

  },
  
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects