import { px } from "framer-motion";
import {
  mobile,
  backend,
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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  silent_classrooms,
  taxwise_ai,
  orgmind,
  threejs,
} from "../assets";
import { interleaveAttributes } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intermediate Drawing Exam",
    company_name: "MIDE",
    icon: starbucks,
    iconBg: "#A2E4F5",
    date: "Nov 2019",
    points: [
      "🎨 In 7th grade, I achieved an A grade in the Intermediate Drawing Exam, a recognition of my progress and skill refinement in drawing and design.",
      "This milestone strengthened my ability to combine creativity with discipline, a quality I continue to apply in my engineering studies and projects today.",
      "These exams are more advanced and require more complex skills.",
      "I achieve an A grade in the Intermediate Drawing Examination are awarded 15 additional marks.",
    ],
  },
  
  {
    title: "NCC 'A' Certificate Achievement",
    company_name: "National Cadet Corps",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "Jan 2021 ",
    points: [
      "🚢 During my school years, I had the privilege of training with the National Cadet Corps (NCC) under the 1 Mah Naval Unit, NCC Mumbai-B, representing New English School, Vasai.",
      "In 2021, I successfully earned the prestigious 'A' Certificate with Grade A, awarded by the Ministry of Defence, Government of India.",
      "This experience instilled in me valuable qualities such as discipline, leadership, teamwork, and a commitment to excellence.",
      "As an NCC Cadet, I gained exposure to essential skills in time management, responsibility, and resilience—qualities I now actively apply in my academic and professional pursuits as a engineering student.",
      "I am proud of this accomplishment and remain inspired to carry forward the principles of NCC throughout my career.",
    ],
  },
  
  {
    title: "Certified in Computerised Accounting with GST ",
    company_name: "Tally",
    icon: shopify,
    iconBg: "#005D8C",
    date: "July 2022 ",
    points: [
      "💼 In July 2022, I successfully completed the Computerised Accounting with GST course, earning an 'A' grade from CompuSkill Pvt. Ltd., an ISO 9001:2015 certified company",
      "This certification equipped me with practical knowledge in accounting principles, GST compliance, and Tally software, widely used in the industry.",
      "This accomplishment highlights my ability to work with financial data, tax regulations, and accounting software, adding a strong technical and analytical skillset to my engineering profile.",
      "I look forward to applying these skills in projects that require a blend of technical expertise and financial acumen.",
    ],
  },
  {
    title: "INSPIRE Awards MANAK Competition",
    company_name: "Inspire-Manak",
    icon: meta,
    iconBg: "#FFFFFF",
    date: "Feb 2021",
    points: [
      "I am thrilled to share my experience in the INSPIRE Awards – MANAK Competition, a national initiative by the Department of Science & Technology (DST) and the National Innovation Foundation (NIF). The program promotes creativity and innovation among students by encouraging them to develop ideas that address real-world challenges.",
      "My journey began with the idea of 'The Two-Way Tweezer', a tool designed to safely lift heavy and hot pots, solving a common household issue. This innovative concept was recognized at the Taluka Level, and after refining my presentation and idea, I advanced to the District Level. These stages helped me understand the fundamentals of idea validation and taught me how to present my solution effectively to a panel of judges.",
      "At the State-Level Practice Camp in Gujarat, I worked under the guidance of experienced mentors to improve my project's prototype and align it with real-world needs.This stage was a game-changer for me as I learned Prototype Development, Business Thinking, Presentation Skills, etc ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Rodrigues",
    designation: "HOD",
    company: "ECS",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a student who truly cares about their carrier and future' success like Shreyas does.",
    name: "Joshua Micheal",
    designation: "Teacher",
    company: "Python",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "As a 1st year engineeering student, this thing is very imapactful.",
    name: "Lisa Rebello",
    designation: "HOD",
    company: "Computer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " Silent Classrooms",
    description:
      "Silent Classrooms is an AI-powered web application designed to make classroom learning accessible and effective for students with hearing impairments. Traditional education systems rely heavily on spoken communication, which creates a major barrier for deaf and hard-of-hearing students in understanding concepts in real time.",
    tags: [
      {
        name: "GEMINI API",
        color: "blue-text-gradient",
      },
      {
        name: "PSE",
        color: "green-text-gradient",
      },
      {
        name: "YOUTUBE DATA API",
        color: "pink-text-gradient",
      },
    ],
    image: silent_classrooms,
    source_code_link: "https://github.com/Shreyas04venom/silence-classroom.git",
  },
  {
    name: "Taxwise AI",
    description:
      "Tax-Wise AI is a chatbot-style tool that assists users in understanding taxation concepts. It provides quick explanations, answers tax-related queries, and breaks down topics in a simplified manner. The project focuses on making financial and GST knowledge accessible for students and beginners through an AI-based conversational interface.",
    tags: [
      {
        name: "OCR",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "SUPABASE",
        color: "pink-text-gradient",
      },
    ],
    image: taxwise_ai,
    source_code_link: "https://github.com/Shreyas04venom/taxwise.git",
  },
  {
    name: "OrgMind",
    description:
      "OrgMind is an AI-powered enterprise platform that centralizes organizational knowledge and enhances decision-making through intelligent search, decision tracking, and expert discovery. It uses AI-driven workflows and a scalable full-stack architecture to improve productivity and reduce information silos across teams.",
    tags: [
      {
        name: "Edge Functions",
        color: "blue-text-gradient",
      },
      {
        name: "SUPABASE",
        color: "green-text-gradient",
      },
      {
        name: "GEMINI API",
        color: "pink-text-gradient",
      },
    ],
    image: orgmind,
    source_code_link: "https://github.com/Shreyas04venom/orgMind.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
