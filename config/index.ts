export const CONFIG = {
  resume: "/resume.pdf",
  home: {
    name: 'Andrew Johnston',
    avatar: './images/avatar.png',
    portrait: '/images/avatar-portrait.jpg',
    description: "I'm a Full-stack Developer based In USA",
    year: 8
  },
  contacts: {
    phone: "(754)399-4018",
    email: "ajohnstondev@gmail.com",
    address: "837 Ivydale Ave, Reisterstown, MD 21136",
    github: "github.com/ajohnstondev",
    linkedin: "linkedin.com/in/ajohnston-developer",
  },
  // "about" has array of paragraph texts
  about: [
    "Solutions-driven professional with hands-on experience developing consumer-focused solutions by using modern technical.",
    "Proven track record of bringing wireframes of the UX designer to life as well as creating a stellar finished product by collaborating with Back-End developers.",
    "Proficient in improving the end-user experience by liaising with key stakeholders, identifying bottlenecks, and building improvements. Instrumental in optimizing applications for maximum speed by maintaining code on a routine basis and debugging issues.",
    "Adept at eliminating procedural inconsistencies and redundancies by authoring functional requirement documents and guides."
  ],
  experience: [
    {
      company: "Avery",
      logo: "./brands/avery.svg",
      link: "https://www.avery.com/",
      position: "Sr. Full Stack Engineer",
      startDate: "Mar 2020",
      endDate: "May 2022",
      brief: "During my tenure as a Senior Software Engineer, I had the opportunity to utilize my skills in Angular/Typescript and Java/Spring to design and develop both front-end and back-end systems for customer configuration tools such as Avery WePrint. Collaborating with technical leads, project managers and business analysts, I helped them configure the website more easily.",
      description: [
        "Building new components and refactoring code for the new Avery Design & Print Online user interface using HTML5, CSS3, Angular, and Typescript.",
        "Developing Server Side REST services for front-end UI using Spring MVC.",
        "Troubleshooting product features by quickly and efficiently resolving user-reported bugs in an Agile Safe team environment, which led to a 30% increase in team productivity.",
        "Delivering product feature enhancements based on client requests.",
        "Communicating effectively with customers to explain feature functionality and generating quotes for development tasks."
      ],
      tools: [ "HTML5", "CSS3", "TypeScript", "Angular", "Tailwind CSS", "Java", "Spring MVC", "Microsoft SQL Server", "Payment Gateways" ],
      location: "Brea, CA · Remote",
      type: "Full-time",
    },
    {
      company: "MedStar Health",
      logo: "./brands/medstar-health.jpeg",
      link: "https://www.medstarhealth.org/",
      position: "Software Engineer",
      startDate: "Jun 2015",
      endDate: "Jan 2020",
      brief: "During my tenure as a Software Engineer, I have developed entire frontend and backend modules using javascript and Java Spring framework.",
      description: [
        "Designing the User Interface by coding in HTML5, CSS3, React, Typescript, Tailwind CSS, and Bootstrap to build SPA (Single Page Application).",
        "Creating some dynamically changing websites using JavaScript/Typescript and Node.",
        "Implementing Restful APIs and services using best practices to interact within the microservices and with the front end. Using Java spring MVC and spring rest.",
        "Converting existing AWS infrastructure to server less architecture (AWS Lambda, Kinesis) deployed via Apache Lib Cloud, Terraform and AWS Cloud formation."
      ],
      tools: [ "React", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "SASS", "Tailwind CSS",  "Java", "SQL", "Amazon Web Services (AWS)", "Git" ],
      location: "Columbia, MD · On-site",
      type: "Full-time",
    }
  ],
  education: [
    {
      university: "Towson University, Maryland",
      degree: "B.Sc. Computer Science",
      link: "https://www.towson.edu/",
      mark: "/images/TU_mark.png",
      duration: "2011 - 2015",
      relevantCourseworks: [
        "Computer Architecture and Organization",
        "Data Structures and Algorithms",
        "Database Systems",
        "Software Engineering",
      ]
    },
  ],
  projects: [
    {
      link: "https://www.medstarhealth.org/",
      image: "/projects/med-star.png",
      title: "MedStar Health",
      brief: "Leading healthcare provider in Maryland, DC, and Virginia",
      role: "Fullstack Developer",
      timeline: "2 yrs with 4 members",
      scope: `
        I designed the user interface by coding in HTML5, CSS3, React, Typescript, and Tailwind CSS to create a single-page application.
        In addition, I implemented Restful APIs and services using Java spring MVC and spring rest to facilitate communication between the frontend and backend.
        As part of the backend development, I improved SQL queries, stored procedures, functions, triggers, cursors, sequences, and indexes to enable efficient data retrieval and storage. 
      `,
      challenge: "One of the primary challenges was ensuring that the backend was efficient and responsive. To achieve this, I designed and developed Restful APIs and services using Java spring MVC and spring rest. I also optimized the database by writing SQL queries, stored procedures, functions, triggers, cursors, sequences, and indexes, which helped to improve the system's overall performance and responsiveness.",
      stacks: ["HTML5", "CSS3", "React", "Typescript", "Tailwind CSS", "Java", "Spring", "PostgreSQL"]
    },
    {
      link: "https://www.avery.com/",
      image: "/projects/avery.png",
      title: "Avery",
      brief: "Landing page for Free Label Making Software",
      role: "Fullstack Developer",
      timeline: "1 yr 8 mos with 10 members",
      scope: `
        I was responsible for designing and developing various components of the system.
        I built new components and designed the user interface using HTML5, CSS3, Angular 10, Typescript, and NgRx, RxJs to create a progressive web application (PWA). 
        In addition, I developed server-side REST services for the front-end UI using Spring MVC.
        Furthermore, I optimized the system to handle a database of 30 million product reviews stored in MySQL.
      `,
      challenge: `
        One of the primary challenges was designing a multi-layered backend infrastructure to replace an existing system that could handle heavy loads and was optimized for system performance.
        To overcome this challenge I designed a system that could handle up to 1200 requests per second during peak usage while storing 30 million records of product reviews in a MySQL database. The result was a significant 500% increase in throughput, which demonstrated the effectiveness of my design in enhancing system performance.
      `,
      stacks: ["HTML5", "CSS3", "Angular 10", "Typescript", "Java", "Spring", "MySQL"]
    },
    {
      link: "https://fractional.art/",
      image: "/projects/fractional-art.png",
      title: "Fractional",
      brief: "A decentralized protocol that enables collective ownership and governance of one or more NFTs.",
      role: "Frontend Vue Developer",
      timeline: "1yr 2 mos from start to finish",
      scope: `
        I designed the frontend and smart contracts for the Fractional protocol, using Vue/Nuxt and Web3. 
        In addition to frontend development, I architected, implemented, and maintained the backend service tools and frameworks using Node and Ethers.
        To enhance the efficiency of the development process, I developed a streamlined process that enabled faster turnaround times for testing new features and bug fixes.
        This involved automating several testing processes, including the use of the Cypress open-source plugin, to ensure that the system was stable, reliable, and provided an excellent user experience.
      `,
      challenge: "One of the key challenges I faced was working with the complexities of blockchain technology, particularly in the context of developing smart contracts for the Fractional protocol.",
      stacks: ["Vue", "Nuxt", "Tailwind CSS", "Web3", "Node", "Typescript", "Cypress", "Smart Contract"]
    },
    {
      link: "https://versured.com/",
      image: "/projects/versured.png",
      title: "Versured",
      brief: "A simplified site where you can get quotes for car or houses along with new insurance technology that makes it possible to combine multiple quotes in one seamless process.",
      role: "Fullstack Developer",
      timeline: "11 mos with 7 members",
      scope: `
        I implemented visual and interactive elements that engaged users using React and Next.js to create a dynamic user interface that was visually appealing and responsive.
        In addition, I ensured a high level of functionality on the server side using Node/Express to handle complex user interactions seamlessly.
        To communicate with external applications and services, enhancing its functionality and usability, I connected it to an external system using a third-party API.
        Finally, I used both manual and automation testing approaches to deliver a high-quality product.
      `,
      challenge: "To make the application more flexible, I connected it to an external system using a third-party API such as Hubspot and Intercom. However, this presented some challenges as I had to ensure that the connection was secure, reliable, and did not impact system performance.",
      stacks: ["React", "Next", "Redux", "Styled components", "Node", "Express", "Mocha", "Jest", "MongoDB"]
    },
    {
      link: "https://axieinfinity.com/",
      image: "/projects/axieinfinity.png",
      title: "Axie Infinity",
      brief: "Blockchain gaming website",
      role: "Frontend Developer",
      timeline: "1 yr 3 mos from start to finish",
      scope: `
        I designed and delivered user-friendly web pages using React/Next, GSAP and Material UI to implement modularity and scalability to the platform.
        Also I utilized Web3 to solve digital identity challenges by enabling Ethereum addresses and ENS profiles to serve as secure, censorship-resistant, and anonymous logins across multiple platforms.
        Successfully integrated Ethereum addresses and ENS profiles into the platform, ensuring a seamless and secure user experience.
      `,
      challenge: "The main challenge I faced was implementing a secure, user-friendly digital identity solution using Ethereum addresses and ENS profiles. This required a deep understanding of blockchain technology and Web3, as well as the ability to integrate these technologies effectively into the platform.",
      stacks: ["React", "Next", "Material UI", "Ethereum", "Web3"]
    },
    {
      link: "https://webflix-web.vercel.app/",
      image: "/projects/webflix.png",
      title: "Webflix",
      brief: "A Netflix-inspired movie app that allows users to browse and search for films and series",
      role: "React & Firebase Developer",
      timeline: "N/A",
      scope: `
        This is my attempt at mimicking the Netflix UI layout with basic functionalities of browsing and searching for films and series,
        I designed and developed using React, Node.js, Styled-Components, Firebase Authentication, Firestore, Fuse.js (live search).
      `,
      challenge: `
        The main challenge was to implement basic functionalities of browsing and searching for films and series, and to ensure that the search function is fast and accurate. This required knowledge of search algorithms such as Fuse.js.
        And to implement Firebase Authentication and Firestore for user authentication and data storage, it was required knowledge of Firebase's authentication and database services, as well as experience with integrating third-party services into a web application.
      `,
      stacks: ["React", "Styled components", "Node", "Firebase", "Fuse.js"]
    },
  ],
  skills: [
    {
      title: "Front-end",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
      ]
    },
    {
      title: "Back-end",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
      ]
    },
    {
      title: "Others",
      skills: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      ]
    },

  ],
  certifications: [
    {
      title: "React + Redux Course Certificate - Sololearn",
      image: "/certifications/cert-sololearn-react_redux.png",
      link: "https://www.sololearn.com/certificates/CT-CMFQ4C0Q",
    },
    {
      title: "Angular + Nest Course Certificate - Sololearn",
      image: "/certifications/cert-sololearn-angular_nest.png",
      link: "https://www.sololearn.com/certificates/CT-DNE6BLPQ",
    },
    {
      title: "C# Intermediate Course Certificate - Sololearn",
      image: "/certifications/cert-sololearn-csharp.png",
      link: "https://www.sololearn.com/certificates/CC-CBXH5TGX",
    },
    {
      title: "PHP Course Certificate - Sololearn",
      image: "/certifications/cert-sololearn-php.png",
      link: "https://www.sololearn.com/certificates/CT-2NVRSBSB",
    },
    {
      title: "Problem Solving Certificate - HackerRank",
      image: "/certifications/cert-hackerrank-pro_solving.png",
      link: "https://www.hackerrank.com/certificates/84b28c4cd787",
    },
    {
      title: "Javascript Certificate - HackerRank",
      image: "/certifications/cert-hackerrank-javascript.png",
      link: "https://www.hackerrank.com/certificates/50d55243a435",
    },
    {
      title: "Vue(Hard) Certificates - TestDome",
      image: "/certifications/cert-testdome-vue.png",
      link: "https://www.testdome.com/certificates/2ed4025351484851ae5f08d5d1adc08b",
    },
  ]
};
