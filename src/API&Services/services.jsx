
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
        steps: [
          {
            title: "Initial Understanding",
            duration: "15 minutes",
            description:
              "We begin by understanding your idea, goals, and expectations in detail. This helps us align on the project vision, identify key requirements, and establish a strong foundation for smooth communication and clear direction throughout the entire development process.",
          },
          {
            title: "Requirement Analysis",
            duration: "20 minutes",
            description:
              "We carefully analyze your business needs, target audience, and technical requirements. This ensures we clearly define features, scope, and constraints so the project starts with accurate planning and avoids confusion or misalignment later.",
          },
          {
            title: "Project Roadmap",
            duration: "10 minutes",
            description:
              "We create a structured roadmap outlining the full development journey, including milestones, timelines, and deliverables. This gives you a clear overview of how the project will progress from start to final delivery.",
          },
        ],
      },
    },

    {
      phase: { id: 1, label: "UI / UX Design" },
      detail: {
        steps: [
          {
            title: "User Flow Design",
            duration: "1 day",
            description:
              "We design user flows that map how users will interact with the product. This ensures smooth navigation, logical structure, and a user-friendly experience that aligns with your business goals and improves engagement.",
          },
          {
            title: "Wireframing",
            duration: "1 day",
            description:
              "We create wireframes that define layout structure and content placement. This helps visualize the product early, ensuring clarity before moving into visual design and reducing the need for major changes later.",
          },
          {
            title: "UI Design System",
            duration: "1 day",
            description:
              "We build a consistent design system including colors, typography, and components. This ensures visual harmony across the product and speeds up development with reusable, scalable UI elements.",
          },
        ],
      },
    },

    {
      phase: { id: 2, label: "Development" },
      detail: {
        steps: [
          {
            title: "Frontend Development",
            duration: "3–5 days",
            description:
              "We convert UI designs into responsive and interactive interfaces using modern frameworks. Focus is on performance, scalability, and ensuring a smooth user experience across all devices and screen sizes.",
          },
          {
            title: "Backend Development",
            duration: "4–6 days",
            description:
              "We build secure and scalable backend systems including APIs, authentication, and database structure. This ensures the application runs efficiently with strong data handling and system reliability.",
          },
          {
            title: "Integration",
            duration: "2–3 days",
            description:
              "We connect frontend and backend systems, ensuring seamless data flow and feature functionality. This step ensures everything works together as a complete, fully functional product.",
          },
        ],
      },
    },

    {
      phase: { id: 3, label: "Quality Assurance" },
      detail: {
        steps: [
          {
            title: "Functional Testing",
            duration: "2 days",
            description:
              "We test all features to ensure they work as expected in real-world scenarios. This includes checking user flows, forms, logic, and overall application behavior for consistency and reliability.",
          },
          {
            title: "Cross-Device Testing",
            duration: "2 days",
            description:
              "We test the application across different browsers, devices, and screen sizes to ensure responsive design and consistent performance everywhere.",
          },
          {
            title: "Performance Optimization",
            duration: "1 day",
            description:
              "We optimize loading speed, reduce unnecessary code, and improve overall performance to ensure fast and smooth user experience under all conditions.",
          },
        ],
      },
    },

    {
      phase: { id: 4, label: "Go Live" },
      detail: {
        steps: [
          {
            title: "Production Deployment",
            duration: "1 day",
            description:
              "We deploy the application to a live production environment with proper configuration, ensuring stability, security, and zero downtime during launch.",
          },
          {
            title: "Final Verification",
            duration: "1 day",
            description:
              "We perform final checks after deployment to ensure everything is working correctly in the live environment, including APIs, UI, and performance.",
          },
          {
            title: "Post Launch Support",
            duration: "Ongoing",
            description:
              "We provide continuous support after launch, handling bug fixes, improvements, and monitoring to ensure long-term stability and smooth operation.",
          },
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