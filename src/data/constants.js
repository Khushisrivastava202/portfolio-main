
import weather from "./images/weather.png";
import simon from "./images/simon.png";

import blog from "./images/techtraverse.png"
import calculator from "./images/calculator.png"
import movie from "./images/movie.png"
import newshub from "./images/newsuhb.png"
import todo from "./images/To-do.png"
import familytravel from "./images/family-travel.png"
import capitalQuiz from "./images/capital-quiz.png"
import drumKit from "./images/drum-kit.png"
import bookNotes from "./images/bookNotes.png"
import genai from "./images/gen-ai1.png"



export const Bio = {
  name: "Khushi Srivastava",
  roles: [
    "Full Stack Developer",
  ],
  description:
    "A passionate Software developer currently persuing Bachelor's degree in Computer Science, I am driven by a curiosity to explore and master the world of technology. My focus lies in becoming a proficient MERN stack developer, with a solid foundation in both front-end and back-end developmen",
  github: "https://github.com/Khushisrivastava202",
  resume:
    "https://drive.google.com/file/d/1VHLnSObmpuSi3VABG8C2HR-GoXCT0n6O/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/-khushi-srivastava-",
  twitter: "https://github.com/Khushisrivastava202",
  insta: "https://www.instagram.com/_khushi_srivastava_",
  // youtube: "https://www.youtube.com/channel/UCiO3jHJTOi-LRoE1Ta4bMLw/featured",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      // {
      //   name: "React Native",
      //   image:
      //     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      // },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      // {
      //   name: "Next Js",
      //   image:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      // },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      // {
      //   name: "Material UI",
      //   image:
      //     "data:image/png;base64,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",
      // },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },

      // {
      //   name: "Python",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      // },
      // {
      //   name: "MySQL",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      // },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },

    ],
  },
  {
    title: "Cloud Services",
    skills: [
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "AWS",
        image: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAD09PT6+voEBAT5+fkICAgNDQ2/v7/w8PDz8/Pt7e0QEBB3d3fk5OQoKCjS0tKcnJzd3d1DQ0NfX19JSUmlpaWvr6+AgIBZWVmDg4NPT0/FxcVoaGgkJCQdHR25ubk8PDwxMTEz/HPtAAAEAUlEQVR4nO3bDVOjMBAGYJZNQj+lxdrTau/U//8jbxNEsFUKNh2SzPt4d9Ob0Zu8F2AJYbMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsb2l2bmqQdyMxKN3Z/JarKlG1FLtJeE89m544qqlCMy6yPtcp1uRJ29ENFs6mHc0vyeFD0sph7GDe3JKEPbqYdxE1IodLZckZGv1VI+p3cuavm9JmXRWj7nUw/IN3urVhHJMWoU2YqR3p2NBNrJhbSQL6Ld1KO5Bc5mJOegPUqNrRjJTWHGUila9/P0EmbbTkBDf6Yejn93pRT7RqHKu6kH5N3aXkc/51DR49QD8smW90pmsJ1D+3mT0jpRkjyR6s6hJHxKKKEEmdmAnTk0cmczq290UsBa31PnGHUZZY2hk7mvYakUkkipbj75yzaVgJm++3syg/XV5t9dMhEfqTDnCRUdph6YL5uzdHXZN7ZiJOG5ewp2I9Lz1EPzQM601++n0JE1RuwVQ2eLt56ED/PYy75UvH1PQKJ99FWfZU3Rp1xGPIf10A/flMJWvcaI+N6GbaU4L4WdhLZi6FjvwbU9w36qFA1j1xg60nPR7aXZR099AWXB8ZLFOod23CWZ3oRqpeg92stpnvO2J1xrG+sDcJ0t+ytFI9o1Bl+oFK1o1xg/rClOKbWKb43BH0+fikFzaOw+RmxXGzve1/5i35nEeuc7qsuN2zsrL9TC9ihVVGaR1UT77tNe5mbYHNr9tr19UWPqYY+R88LuhQ6aQ7e3T4vobr/Xg6avFd0+xmY1MiFVUw95HD4OLPaNgo5xHaWvFxZN5wlNPO9KuXdIy+5u4UAlx1IxOBtRKRp2v20/9ciHW7r9s1EJ3ffP43hio+3Tp7GnYf0Dj7EcppW7Exs5h+4HqihePc15N3L6Wk9RJJRK8c1e2qB5jOTt2vxt/En4kdDQWwx339vfBpSSUcTwdm3+y3R1RKI87Mtpzjx2TXHqwEE/0OChT596bIKeRNtPca1j0LsYejZy0XTOuH2MELmFga0UVyZU9J6H2cHnhrT9xaLpNKHrxwgwoNtLmxdDH5H2JlT2yWl4Ee3/+uHCXtqwhIYOAeZzfWnVleHqhIWcikF28LH2UCkaQXbw1Z13vgS5xnCdd34E2sG3H7iXNiRhaB18Tedd4SkghdfB99l55ylgcB18beedL8F18LnOu7HPgPsE18HnOu/UacPBFYLr4PvaeedLUB18w959GieoDr4vnXe+BNXBt/Z5HW2YgHa+r3/69JNQ3pXSi3m+yH1z/+jU0W6KA3oTjG/ytg8HdEtzo8rMAVV8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz/4DvI0hODn6aTMAAAAASUVORK5CYII=",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },


      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      },
      {
        name: "Insomnia",
        image:
          "https://asset.brandfetch.io/idXm9-qoQu/idJufaSqVM.jpeg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Odoo_logo_rgb.svg/2560px-Odoo_logo_rgb.svg.png",
    role: "Software Developer Intern",
    company: "Odoo Pvt. Ltd.",
    companyLink: "https://www.odoo.com/",
    date: "Current",
    desc: " 🔯I contribute to the development of open-source solutions globally, using Python, JavaScript, and PostgreSQL.I collaborate with a diverse team of over 150 developers across various domains, from apps to infrastructure.Constantly learning, I adapt to new challenges, delivering impactful solutions for Odoo's success.",
    skills: [
      "Python",
      "Javascript",
      "PostgreSQL",
      // "CSS",
      // "JavaScript",
    ]
  },
  {
    id: 1,
    img: "https://bharatintern.live/b/icons/logoNoBg.png",
    role: "Web Developer ",
    company: "Bharat Intern | Online Internship",
    companyLink: "https://bharatintern.live/b/i/index.html",
    date: "Jan 2024 - Feb 2024",
    desc:
      "I learnt HTML, CSS, and JavaScript, utilizing Node.js for server-side functionality. My project demonstrates expertise in crafting responsive interfaces, interactive elements, and clean layouts. This hands-on experience solidified my skills in these technologies, paving the way for dynamic and efficient web solutions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node Js",
      "Express Js",
      "Netlify",
    ],
  },
  {
    id: 2,
    img: "https://ugc.production.linktr.ee/a99849c1-13bf-452e-ad85-ee4514c3e26d_logos.jpeg?io=true&size=avatar-v3_0",
    role: "Web Design & development",
    company: "Code Casa Pvt. Ltd. | Online Internship",
    date: "Dec 2024 - Jan-202",
    desc: " 🔯 Simplified login and registration with Google Authentication, 🔯 Ensured site responsiveness across devices using (2) Bootstrap ,Hosting full stack websites using render",
    skills: [
      "NodeJs",
      "HTML",
      "CSS",
      "JavaScript",
      "Render",
      "MongoDB",
    ],
  },
  


];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/ta/6/68/PTU_logo.jpg",
    school: "IK Gujral Punjab Technical University",
    date: "Sept 2020 - June 2024",
    grade: "7.8 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at IK Gujral Punjab Technical University. I have completed 7 semesters and have a CGPA of 7.8. I have taken courses in Data Structures, Algorithms,Computer Networks, Object-Oriented Programming, Database Management Systems, Operating Systems, AI, ML, Network security & Cryptograpy and Blockchain, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://www.sacgic.com/upload/about/1653897604247373890.png",
    school: "St. Anthony's Convent Girl's Inter College",
    date: "july 2018 , July 2020",
    grade: "78.6%, 75%",
    desc: "I completed my class Inter and high school education at St. Anthony's Convent Girls Inter College",
    degree: "UP(XII) with PCM & UP(X) wit Maths",
  },
  // {
  //   id: 2,
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_50qtTMT1F33m6M_1_kjXyUoYAH3MVprtxg&usqp=CAU",
  //   school: "St. Anthony's Conve",
  //   date: "Apr 2013 - Apr 2019",
  //   grade: "92.00%",
  //   desc: "I completed my class 10 education at Jawahar Navodaya Vidyalaya Bikaner, where I studied Science with Computer Application.",
  //   degree: "CBSE(X), Science",
  // },
];

export const projects = [

  {
    id: 0,
    title: "Tech-Traverse",
    date: "Jan 2024 ",
    description:
      "Developed a dynamic MERN stack blog platform empowering administrators to effortlessly publish content. Users can engage with posts through comments and likes, creating an interactive space. Implemented robust authentication ensures only admins have posting privileges, providing a secure and seamless experience for both content creators and readers😉.",
    image: blog,
    tags: ["React-Vite", "JavaScript", "NodeJs", "ExpressJS","MongoDB","JWT token","Redux-toolkit", "Firebase","Google Auth"],
    category: "Web app",
    github: "https://github.com/Khushisrivastava202/Mern-blog-final",
    webapp: "https://mern-blog-mtn5.onrender.com/",
    // member: [
    //   {
    //     name: "Khushi Srivastava",
    //     img: "https://i.postimg.cc/c1mV5QtY/Screenshot-2024-02-01-034432.png",
    //     // linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     // github: "https://github.com/laxmikant007",
    //   }
    // ],

  },
  {
    id: 1,
    title: "Gen-AI",
    date: "Feb-2024",
    description:
      "🔯 GENAI: AI-driven innovation featuring with multifaceted capabilities in image generation and content summarization via OpenAI API, With an intuitive UI/UX design. Image Generator: Generate realistic images based on textual prompts, Search existing images by other users, and download generated images.Link Summarizer: Auto-summarize articles into digestible snippets by giving URL input ; integrate local storage for browsing history, dynamically update clipboard with summarized text on copy button click.",
    image: genai ,
    tags: [
      "OpenAI API",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux-toolkit", 
      "Firebase",
      "Axios",
      "Tailwind"
    ],
    category: "web app",
    github: "https://github.com/Khushisrivastava202/GEN-AI",
    webapp: "https://gen-ai-tools.netlify.app/",
    // member: [
    //   // {
    //   //   name: "Laxmiaknt Saraswat",
    //   //   img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //   //   linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //   //   github: "https://github.com/laxmikant007",
    //   // }
    // ],
  },
  {
    id: 2,
    title: "News-Hub",
    date: "Nov 2023",
    description:
      "Created a lively news hub with React and Axios, using the News API. Users can easily discover handpicked articles in categories like sports and technology. The platform ensures a personalized news experience, delivering the latest updates in a user-friendly and comprehensive way.",
    image: newshub,
    tags: ["ReactJs", "News-API", "AXIOS", "NodeJS"],
    category: "React",
    github: "https://github.com/Khushisrivastava202/News-hub",
    // webapp: "https://crewrental.co/",
    member: [
      // {
      //   name: "Laxmiaknt Saraswat",
      //   img: "https://avatars.githubusercontent.com/u/74814381?v=4",
      //   linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
      //   github: "https://github.com/laxmikant007",
      // },
      

    ],
  },
  {
    id: 3,
    title: "Book Notes",
    date: "Oct 2023",
    description:
      "👨‍💻This website allows user to add, update, delete books . It saves the book details to PostgreSQL database. Open Library API is used to fetch Book Cover Image based on ISBN of books.",
    image: bookNotes,
    // "https://drive.google.com/u/0/uc?id=1GYN32qwXyuUYwsvItq6gcB7gQINaIK45&export=download",
    tags: [
      "NodeJs",
      "PostgreSQL",
      "ExpressJs",
      "EJS"

    ],
    category: "web app",
    github: "https://github.com/Khushisrivastava202/Book-Notes",
  //   webapp: "https://laxmikant007.github.io/News-Tech",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  },
  {
    id: 4,
    title: "Family-Travel-Tracker",
    date: "Oct 2023",
    description:
      "The family travel tracker is a web application built using PostgreSQL, Express, and Node.js. It allows family members to keep track of the countries they have visited. Each family member has a profile where they can add travel history. The application uses PostgreSQL as the database to store information about family members, their profiles, and the countries they have visited.😉.",
    image: familytravel,
    tags: [
      "NodeJs",
      "PostgreSQL",
      "ExpressJs",
      "EJS"
    ],
    category: "Web App",
    github: "https://github.com/Khushisrivastava202/Family-travel-tracker",
    // webapp: "https://snappy-7nr7.onrender.com",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 5,
    title: "Streamify",
    date: "August 2023",
    description:
      " Stremify, your ultimate movie hub powered by TMDB API. Dive into a world of cinematic wonders. Explore and discover your favorite movies seamlessly on our user-friendly platform 😉.",
    image: movie,
    tags: ["Reactjs", "TMDB API", "Bootsrap", "CSS"],
    category: "Web app",
    github: "https://github.com/Khushisrivastava202/streamify",
    // webapp: "https://65bb9fc8b45aca0988467154--superlative-palmier-cefd41.netlify.app/",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 6,
    title: "To-Do-App",
    date: "June 2023",
    description:
      "This project is a simple To-Do website that allows users to perform CRUD (Create, Read, Update, Delete) operations. It uses PostgreSQL as the database to store task information and Express.js as the backend server.😉.",
    image: todo,
    tags: ["EJS", "PostgreSQL", "Node Js", "Express Js","CSS"] ,
    category: "web app",
    github: "https://github.com/Khushisrivastava202/CRUD-operations-To-do-app-",
    // webapp: "https://laxmikant007.github.io/Universal-Movies1",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 7,
    title: "Capital-Quiz",
    date: "June 2023",
    description:
      "This site uses imdb API to manage and display various movies rating , cast, release date and much more interesting information of your favorite movies😉.",
    image: capitalQuiz,
    tags: ["EJS", "Node Js", "Express Js", "PostgreSQL","CSS"],
    category: "web app",
    github: "https://github.com/Khushisrivastava202/Capital-quiz",
    // webapp: "https://laxmikant007.github.io/Universal-Movies1",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },




  {
    id: 8,
    title: "Weather App",
    date: "July 2023",
    description:
      "Experience real-time weather updates on our responsive website. Crafted with HTML, CSS, and JavaScript, our intuitive design provides a user-friendly interface. Get accurate forecasts, interactive maps, and personalized weather details for an enhanced browsing experience. Stay informed with style!😉.",
    image: weather,
    tags: ["HTML","CSS","JS", "Weather-API"],
    category: "web app",
    github: "https://github.com/Khushisrivastava202/weather-app",
    webapp: "https://khushisrivastava202.github.io/weather-app/",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 9,
    title: "Simon Game",
    date: "June 2023",
    description:
      "Engage in memory-enhancing fun with our Simon Game project. Follow the sequence of lights and sounds, challenging your memory skills. A classic electronic game brought to life with interactive programming and vibrant design.",
    image: simon,
    tags: ["HTML", "CSS", "JS"],
    category: "Web app",
    github: "https://github.com/Khushisrivastava202/simon-game",
    webapp: "https://khushisrivastava202.github.io/simon-game/",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 10,
    title: "Drum Kit",
    date: "June 2023",
    description:
      "Explore drum kit for all skill levels. Quality sound, durable build elevate your rhythm game ,explore our collection and unleash your musical passion now!",
    image: drumKit,
    tags: ["HTML", "CSS", "JS"],
    category: "Web app",
    github: "hhttps://github.com/Khushisrivastava202/Udemy-learning/tree/main/Drum%20Kit",
    // webapp: "https://khushisrivastava202.github.io/simon-game/",
    // member: [
    //   {
    //     name: "Laxmiaknt Saraswat",
    //     img: "https://avatars.githubusercontent.com/u/74814381?v=4",
    //     linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
    //     github: "https://github.com/laxmikant007",
    //   }
    // ],
  },
  {
    id: 11,
    title: "Calculator",
    date: "June 2023",
    description:
      "Discover seamless calculation with online calculator website. Whether it's basic arithmetic, complex equations, or financial calculations, our user-friendly platform ensures accuracy and efficiency. Accessible from any device, our calculator simplifies math tasks with intuitive design. Elevate your computational experience with our reliable and convenient online calculator tool.",
    image: calculator,
    tags: ["HTML", "CSS", "JS","VS code","Git","GitHub"],
    // category: "Android App",
    github: "https://github.com/Khushisrivastava202/Calculator",
    webapp: "https://khushisrivastava202.github.io/Calculator/",
    member: [
      // {
      //   name: "Khushi Srivastava",
      //   img: "https://avatars.githubusercontent.com/u/74814381?v=4",
      //   linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
      //   github: "https://github.com/laxmikant007",
      // }
    ],
  },
];


