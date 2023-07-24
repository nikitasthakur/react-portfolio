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
    threejs,
    accenture,
    slalom,
    uic,
    posture,
    cvd,
    mychart,
    portfolio,
    chicagocrime,
    pc
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Data Visualization",
      icon: backend,
    },
    {
      title: "Makerspace",
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
      title: "Full Stack Software Engineer Intern",
      company_name: "Slalom Build",
      icon: slalom,
      iconBg: "#383E56",
      date: "June 2022 - August 2022",
      points: [
        "Collaborated on building a Responsive Web application that controlled an IOT device for Slalom Employees to facilitate internal event management across 15 Build Centers.",
        "Implemented RESTful API endpoints for application services with AWS' API Gateway, Lambda, DynamoDB (NoSQL), CloudFormation, Cognito User Pools, and AWS IoT Core.",
        "Developed UI components and application features with React, TypeScript, and Redux.",
        "PAuthored unit tests, resolved app build failures, reviewed pull requests, and actively participated in sprint planning sessions and backlog refinement.",
        "Worked in a fast-paced Agile SCRUM environment with a cross-capability team."
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "October 2017 - July 2021",
      points: [
        "Created IBM Sterling Maps and Trading Partner Configurations for complete EDI customer onboarding for 25+ customers.",
        "Enhanced efficiency of manual client processes via Robotic Process Automation using Automation Anywhere, Splunk and Python, resulting in 40% reduction in client efforts.",
        "Created 100+ complex workflows using Business Process Modeling Language (BPML) and Server level scripting in Linux.",
        "Supported in 12+ Global System Upgrade and Maintenance activities as well as the System Cloud Migration to Azure.",
        "Accomplishments: Accenture Celebrates Excellence Award (2019 and 2020), Tech Star 2021."
      ],
    },
    {
      title: "Graduate Research Assistant",
      company_name: "University of Illinois Chicago - Makerspace",
      icon: uic,
      iconBg: "#383E56",
      date: "May 2022 - May 2023",
      points: [
        "Managed the Digital Fab Labs and Machine shop and Makerspace project submission systems, learnt and taught how to use a variety of the latest manufacturing equippments like 3D printers, laser cutters and their respective software tools effectively and safely.",
        "Enabled Makerspace staff, graduate research assistants, and undergraduate staff in helping Makerspace users with a variety of engineering projects in IOT, Biomedical, and Computer Science domains.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nikita has ramped up to the demands of B2B monitoring team at a speed that is incomparable at her level of experience. She has started making in-roads into other challenging areas of application support like L3 changes. She is very clear in her communications.",
      name: "Pradeep Mudaliar",
      designation: "Senior Manager",
      company: "Accenture",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "You did great in your research project, including with your presentation, and I hope you will consider pursuing (fully funded) doctoral studies. You've accomplished quite a bit during a one term MS project, and your clients were extremely happy with the outcome! I would grade your performance as an A+.",
      name: "Dr. Liz Marai",
      designation: "Professor of Computer Science",
      company: "University of Illinois Chicago",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Nikita did great during her internship with Slalom, and made visible progress in her grasp of the technologies. She is prompt in asking questions and getting things clarified for the entire team.",
      name: "Andy kong",
      designation: "Principal",
      company: "Slalom Build",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Health Inequities in EPIC MyChart activation",
      description:
        "A web application that enables visual data analysis and hypothesis generation to study differences in patient portal activation, with interactive features to aid efficient data analysis.",
      tags: [
        {
          name: "d3.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mychart,
      source_code_link: "https://github.com/nikitasthakur/Chicago_PortalActivation_Study",
    },
    {
      name: "React Portfolio",
      description:
        "Professional portfolio showcasing my skills, work experiences and awesome 3D animations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framermotion",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/nikitasthakur/portfolio",
    },
    {
      name: "Cardiovascular Disease Visualization",
      description:
        "An Interactive dashboard with patient data from Columbian Hospitals that allows the users to explore the different trends in the blood works, risk factors and medical history of patients suffering from cardiovascular diseases.",
      tags: [
        {
          name: "d3.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cvd,
      source_code_link: "https://github.com/nikitasthakur/CVD-Disease-Visualization-D3Js",
    },
    {
      name: "Posture Mapping for Future Ailment Prediction",
      description:
        "A novel UI based tool created using R and Shiny to predict potential postural ailments, extrapolated on mapped data for the daily work routine of 500+ students and faculty",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "shiny",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "pca",
          color: "orange-text-gradient",
        },
      ],
      image: posture,
      source_code_link: "https://github.com/",
    },
    {
      name: "Programmable Calculator in C++ and Ruby",
      description:
        "A Programmable Calculator that lets its users specify sequences of arithmetic operations on 4 registers, denoted by x, y, w, and z. To use the PC a user would typically enter a sequence of arithmetic expressions in a file named “pc input.txt”.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "green-text-gradient",
        },
      ],
      image: pc,
      source_code_link: "https://github.com/nikitasthakur/CS474-OOLE",
    },
    {
      name: "Chicago Crime Index",
      description:
        "This is a study on effect of weather, population, and socioeconomic variables on Crime Rates in different Chicago Neighbourhoods",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "gradientboosting",
          color: "pink-text-gradient",
        },
        {
          name: "randomforest",
          color: "orange-text-gradient",
        },
      ],
      image: chicagocrime,
      source_code_link: "https://github.com/CS418/group-project-akatsuki",
    },
  ];

  // add CRF using adversarial, sentiment analysis, CRF using pytorch, Chicago Crime Analysis, Android Apps
  
  export { services, technologies, experiences, testimonials, projects };