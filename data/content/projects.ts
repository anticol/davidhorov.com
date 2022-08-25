import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Campiri",
    desc: "Airbnb for campervans",
    img: "https://www.campiri.com/static/images/og_image_campiri_main.png",
    link: "https://campiri.com",
    tags: ["React", "NextJS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "Festival Panel for Animefest",
    desc: "information panel for visitors of the festival",
    img: "https://www.davidhorov.com/images/portfolio/anime_fest_complete.png",
    tags: ["React", "CSS", "Firebase"],
  },
  {
    id: 2,
    title: "IB security",
    desc: "Webpage for security company",
    img: "https://www.davidhorov.com/images/portfolio/ibs_security_responsive.jpg",
    tags: ["React", "CSS"],
  },
  {
    id: 3,
    title: "Fee time in Brno",
    desc: "Web application mapping options of spending free time in Brno. It is a mashup application which collects open data from different sources and shows them on the map. ",
    img:"https://www.davidhorov.com/images/portfolio/volnycasvbrne.jpg",
    tags: ["Javascript", "CSS"],
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