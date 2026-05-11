import React from 'react'

const serviceCall = (srv)=>{
    if(srv==="navbar"){
        return [
           { label: "Home", href: "#" },
           { label: "Services", href: "#" },
           { label: "Works", href: "#" },
           { label: "Testimonials", href: "#" },
           { label: "Pricing", href: "#" },
           { label: "Contact", href: "/contact" },
        ]
    }
    if(srv==="hero"){
        return [{
            title: "Hello, Azad",
            name:"Azad",
            description: "Let's make something meaningful together.",
        }]
    }
    if(srv==="EducationAndExperience"){
        return [
            {
            title: "Skill Experience",
            institute: "Tech University",
            postion: "Software Engineer",
            point:"GPA 80%",
            date: "2020-2024",
            description: "I have experience in React, Node.js, and more."
         },
            {
            title: "Skill Experience",
            institute: "Tech University",
            postion: "Software Engineer",
            point:"GPA 80%",
            date: "2020-2024",
            description: "I have experience in React, Node.js, and more."
         },
            {
            title: "Skill Experience",
            institute: "Tech University",
            postion: "Software Engineer",
            point:"GPA 80%",
            date: "2020-2024",
            description: "I have experience in React, Node.js, and more."
         },
            {
            title: "Skill Experience",
            institute: "Tech University",
            postion: "Software Engineer",
            point:"GPA 80%",
            date: "2020-2024",
            description: "I have experience in React, Node.js, and more."
         },

      ]
    }

    if(srv==="services"){
        return [
          {
            title: 'UI/UX DESIGN',
            image: 'https://i.ibb.co.com/rGS7GrXX/e479bfea714d6dba2971c7155f820e2a8b8bba6c.png',

          },
          {
            title: 'WEB DESIGN',
            image: 'https://i.ibb.co.com/rGS7GrXX/e479bfea714d6dba2971c7155f820e2a8b8bba6c.png',

          },
          {
            title: 'LANDING PAGE',
            image: 'https://i.ibb.co.com/rGS7GrXX/e479bfea714d6dba2971c7155f820e2a8b8bba6c.png',

          },
          {
            title: 'MOBILE APP',
            image: 'https://i.ibb.co.com/rGS7GrXX/e479bfea714d6dba2971c7155f820e2a8b8bba6c.png',
          },
        ];
    }

    if(srv === "stat"){
      return[
        { value: 325, suffix: "+", label: "Happy Client" },
        { value: 5,   suffix: "+", label: "Years Exp." },
        { value: 100, suffix: "+", label: "Completed Project" },
        { value: 25,  suffix: "M+", label: "In tracked Revenue" },
      ];
    }

    if (srv === "discovery") {
  return [
    {
      phase: { id: 0, label: "Discovery" },
      detail: {
        title: "Free Initial Consultation",
        duration: "45 minutes",
        description: [
          "We begin with a detailed conversation to fully understand your idea, business goals, target audience, and expectations. This session helps us identify core requirements, potential challenges, and define a clear project direction before moving into planning and execution.",
          "During this phase, we carefully analyze your needs and gather all necessary information about features, functionality, and technical constraints. This ensures we are aligned on scope, priorities, and success criteria so the project starts with clarity and confidence.",
          "The outcome of this stage is a structured understanding of your project vision, along with a clear roadmap that guides the design and development process, reducing risk and ensuring efficient execution from start to finish."
        ],
      },
    },
    {
      phase: { id: 1, label: "UI / UX Design" },
      detail: {
        title: "Solution Planning & Offer Preparation",
        duration: "2–3 days",
        description: [
          "We translate your requirements into structured user flows, wireframes, and design concepts that focus on usability, clarity, and user experience, ensuring the product is intuitive and aligned with your business objectives and customer needs.",
          "Our design process includes analyzing user behavior, interface structure, and visual hierarchy to create a seamless experience. We ensure every screen serves a purpose and supports both functionality and aesthetic consistency across the entire product.",
          "At the end of this stage, you receive a complete design direction along with a well-defined solution plan, including features, layout structure, and development roadmap, making the next phase efficient and predictable."
        ],
      },
    },
    {
      phase: { id: 2, label: "Development" },
      detail: {
        title: "Product Development",
        duration: "1–2 weeks",
        description: [
          "We convert approved designs into a fully functional product using modern frameworks and clean architecture, ensuring scalability, performance, and maintainability while following best practices in frontend and backend development.",
          "During development, we focus on building secure, optimized, and responsive features that work smoothly across devices. Continuous integration and structured coding practices ensure stability and reduce future maintenance complexity.",
          "You receive regular updates throughout the development cycle, allowing transparency and feedback integration, so the final product matches your expectations and business requirements without unnecessary delays or rework."
        ],
      },
    },
    {
      phase: { id: 3, label: "Quality Assurance" },
      detail: {
        title: "Testing & Optimization",
        duration: "3–5 days",
        description: [
          "We perform thorough testing across browsers, devices, and screen sizes to ensure the application works reliably in all environments, identifying and resolving any functional or visual issues before deployment.",
          "Our QA process includes performance optimization, bug fixing, and usability checks to ensure smooth interactions, fast loading times, and a consistent experience for every user regardless of platform or device.",
          "The goal of this stage is to deliver a stable, production-ready product that meets quality standards, ensuring users experience a seamless and error-free interface from the moment of launch."
        ],
      },
    },
    {
      phase: { id: 4, label: "Go Live" },
      detail: {
        title: "Deployment & Launch",
        duration: "1 day",
        description: [
          "We deploy your project to a live production environment with careful configuration to ensure zero downtime, smooth migration, and proper setup of all services required for stable operation.",
          "Security, performance, and reliability are verified during deployment to ensure everything runs correctly under real-world conditions, minimizing risks and ensuring a smooth launch experience for users.",
          "After launch, we remain available for support, monitoring, and quick adjustments, ensuring your product continues to run efficiently and any unexpected issues are resolved promptly."
        ],
      },
    },
  ];
}

    return []
  
}

 function services(conditions) {
    if (!conditions) {
        // Perform some logic based on conditions
        return [];
    }  
        return  serviceCall(conditions) || [];
}

export default services