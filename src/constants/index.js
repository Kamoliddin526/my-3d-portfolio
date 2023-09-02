import {
  editor,
  bmw,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  ibs,
  foodzilla,
  jobit,
  relaxan,
  threejs,
  usmon,
  sharof,
  ilhom
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Video Editor",
    icon: editor,
  },
  {
    title: "Car Enthusiast",
    icon: bmw,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "IBS",
    icon: ibs,
    iconBg: "#383E56",
    date: "January 2023 - September 2023",
    points: [
      "Using React.js and other related technologies to develop and maintain web applications",
      "Creating interactive websites by collaborating designers and other related developers.",
      "Responsive design and ensuring cross-browser compatibility.",
      "Getting useful feedbacks by the teacher in code reviews.",
    ],
  },
  {
    title: "Editor",
    company_name: "Tesla",
    icon: editor,
    iconBg: "#E6DEDD",
    date: "During 2023",
    points: [
      "Creating awesome edits and posting them on instagram",
      "Collaborating with other car enthusiasts and posting reels",
      "Creting advertisement and growing communication skills and networks",
      "Helping small accounts to grow bigger and create quality videos",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I personally think, Kamoliddin is a problem-solver when it comes to finding bugs",
    name: "Sharofbek",
    designation: "Web Developer",
    image: sharof,
  },
  {
    testimonial:
      "He always helps when I get stuck so I should thank him a lot. Appreciate you!",
    name: "Usmon",
    designation: "Web Developer",
    image: usmon,
  },
  {
    testimonial:
      "We discussed a lot of topics about web development. He is my pupil.",
    name: "Ilhom",
    designation: "Project Manager",
    image: ilhom,
  },
];

const projects = [
  {
    name: "Food Site",
    description:
      "Choosing and ordering different kinds of meal.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: foodzilla,
    source_code_link: "https://github.com/Kamoliddin526/functionalportfolio2",
  },
  {
    name: "Threejs Project",
    description:
      "Awesome customizable clothe site using powerful threejs",
    tags: [
      {
        name: "tailwincss",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Kamoliddin526/project-with-threejs",
  },
  {
    name: "Drug Site",
    description:
      "A site where you can see and buy different treatments",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: relaxan,
    source_code_link: "https://github.com/Kamoliddin526/relaxan_tilda",
  },
];

export { services, technologies, experiences, testimonials, projects };
