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
            src: "/azad-hero.png"
        }]
    }
    if(srv === "stat"){
      return[
        { value: 325, suffix: "+", label: "Happy Client" },
        { value: 5,   suffix: "+", label: "Years Exp." },
        { value: 100, suffix: "+", label: "Completed Project" },
        { value: 25,  suffix: "M+", label: "In tracked Revenue" },
      ];
    }
    if (srv === "services") {
    return {
      sectionTitle: "Our Services",
      sectionDescription:
      "We provide modern digital solutions including design, development, and creative production to help your business grow.",
    
      items: [
      {
        title: "Web Design",
        video: "/video/web.mp4",
      },
      {
        title: "Custom Development",
        video: "/video/custom.mp4",
      },
      {
        title: "Graphic Design",
        video: "/video/web.mp4",
      },
      {
        title: "Video Editing",
        video: "/video/video.mp4",
      },
    ],
    };
    }
    if(srv === "coreExpertise"){
      return{
        sectionTitle: "Core Expertise",
        sectionDescription:
        "We combine design, development, and creative strategy to deliver high-quality digital solutions that help businesses grow and stand out.",
        items:[
         {
         num: "1",
         title: "Web Design",
         desc: "We design modern, user-friendly, and responsive websites that create strong digital impressions.",
         btn: "SPEAK TO OUR EXPERTS",
         backgroundImage:
          "/bg/bg-web.webp",
         items: {
           cardTitle: "User-Centered Design",
           cardDesc:
           "We focus on clean layouts, intuitive UX, and responsive design to deliver seamless user experiences across all devices.",
           imageSrc: [
              "/slide/web-1.webp",
              "/slide/web-2.webp",
              "/slide/web-3.webp",
              "/slide/web-4.webp",
           ],
           },
          },
          {
            num: "2",
            title: "Custom\nDevelopment",
            desc: "We build scalable and high-performance custom software tailored to your business needs.",
            btn: "SPEAK TO OUR EXPERTS",
            backgroundImage:
            "/bg/bg-custom.webp",
            items: {
            cardTitle: "Built for Performance",
            cardDesc:
            "Through modern frameworks and clean architecture, we deliver fast, secure, and scalable digital solutions.",
            imageSrc: [
              "/slide/custom-1.webp",
              "/slide/custom-2.webp",
              "/slide/custom-3.webp",
              "/slide/custom-4.jpg",
           ],
            },
            },
            {
            num: "3",
            title: "Graphic Design",
            desc: "We create visually compelling designs that strengthen your brand identity and communication.",
            btn: "SPEAK TO OUR EXPERTS",
            backgroundImage:
            "/bg/bg-graphics.webp",
            items: {
            cardTitle: "Creative Visual Identity",
            cardDesc:
            "From branding to marketing assets, we craft designs that make your brand stand out with clarity and impact.",
            imageSrc: [
              "/slide/graphics-1.webp",
              "/slide/graphics-2.webp",
              "/slide/graphics-3.webp",
              "/slide/graphics-4.webp",
           ],
            },
           },
           {
            num: "4",
            title: "Video Editing",
            desc: "We produce high-quality video content that engages audiences and tells powerful stories.",
            btn: "SPEAK TO OUR EXPERTS",
            backgroundImage:
            "/bg/bg-videos.webp",
            items: {
            cardTitle: "Cinematic Storytelling",
            cardDesc:
            "We transform raw footage into engaging, professional videos with smooth transitions, sound, and storytelling flow.",
            imageSrc: [
              "/slide/videos-1.webp",
              "/slide/videos-2.webp",
              "/slide/videos-3.webp",
              "/slide/videos-4.webp",
           ],
            },
           },
      ]}
    }
    if (srv === "gallery") {
    return [
    "/azad/azad-1.png",
    "/azad/azad-2.jpg",
    "/azad/azad-3.jpg",
    "/azad/azad-4.jpg",
    "/azad/azad-5.jpg",
    "/azad/azad-6.jpg",
    "/azad/azad-25.jpg",
    "/azad/azad-7.jpg",
    "/azad/azad-8.jpg",
    "/azad/azad-9.jpg",
    "/azad/azad-10.jpg",
    "/azad/azad-11.jpg",
    "/azad/azad-12.jpg",
    "/azad/azad-13.jpg",
    "/azad/azad-14.webp",
    "/azad/azad-15.webp",
    "/azad/azad-17.webp",
    "/azad/azad-18.jpg",
    "/azad/azad-19.jpg",
    "/azad/azad-20.jpg",
    "/azad/azad-21.jpg",
    "/azad/azad-22.webp",
    "/azad/azad-23.webp",
    "/azad/azad-24.jpg",
    ];
    }
    if (srv === "process") {
    return{
      head:{title:"Our Process",desc:"A comprehensive guide to our development workflow, from initial concept to final delivery."},
      body:[
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
      ]};
    }
    if(srv === "Project"){
        return {
          head:{
            title: `We let <span class="text-orange-400">our work</span><br />speak for itself.`,
            description:"Our experts develop customized native apps and software solutions using innovative technologies for your success.",
            btn:"GET IN TOUCH NOW"
          },
          body:[
            {
              id: 1,
              client: "KTM",
              category: "Case study",
              url:"#",
              bgColor: "#7c2c00",
              accentColor: "#ff6a00",
              image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              imageAlt: "KTM motorcycle app on laptop and phone",
            },
            {
              id: 2,
              client: "Vetain",
              category: "Case study",
              url:"#",
              bgColor: "#3a3830",
              accentColor: "#b5a48a",
              image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
              imageAlt: "Vetain mobile app screens",
            },
            {
              id: 3,
              client: "FinFlow",
              category: "Case study",
              url:"#",
              bgColor: "#0a2a4a",
              accentColor: "#2196f3",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
              imageAlt: "FinFlow dashboard",
            },
            {
              id: 4,
              client: "Medica",
              category: "Case study",
              url:"#",
              bgColor: "#1a3a2a",
              accentColor: "#22c55e",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
              imageAlt: "Medica health app",
            },
            {
              id: 5,
              client: "Archi",
              category: "Case study",
              url:"#",
              bgColor: "#2a1a3a",
              accentColor: "#a855f7",
              image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80",
              imageAlt: "Archi design platform",
            },
            {
              id: 6,
              client: "NovaPay",
              category: "Case study",
              url:"#",
              bgColor: "#111827",
              accentColor: "#60a5fa",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
              imageAlt: "NovaPay fintech mobile app",
            },
            {
              id: 7,
              client: "Shopora",
              category: "Case study",
              url:"#",
              bgColor: "#3b0a2a",
              accentColor: "#fb7185",
              image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
              imageAlt: "Shopora ecommerce platform",
            },
            {
              id: 8,
              client: "CloudNest",
              category: "Case study",
              url:"#",
              bgColor: "#0f172a",
              accentColor: "#38bdf8",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
              imageAlt: "CloudNest dashboard analytics",
            },
            {
              id: 9,
              client: "Buildify",
              category: "Case study",
              url:"#",
              bgColor: "#1c1917",
              accentColor: "#f59e0b",
              image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
              imageAlt: "Buildify construction management app",
            },
            {
              id: 10,
              client: "EduSpark",
              category: "Case study",
              url:"#",
              bgColor: "#0b2a1a",
              accentColor: "#34d399",
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
              imageAlt: "EduSpark learning platform UI",
            },
          ] 
        }
    }
    if(srv==="testimonial"){
      return[
        {
          id: 1,
          name: "Jason Miller",
          role: "Client Work",
          initials: "JM",
          text: "The level of detail and dedication shown by this solo designer truly impressed our team. Every phase of the design process from research to wireframes to final UI was handled thoughtfully. It's rare to find someone who can combine creativity with strategic thinking in this way.",
        },
        {
          id: 2,
          name: "Sarah Chen",
          role: "Product Design",
          initials: "SC",
          text: "Working with this designer transformed how we think about our product. The attention to user flows and micro-interactions elevated our app far beyond what we imagined. Delivery was on time and the communication throughout was outstanding.",
        },
        {
          id: 3,
          name: "Marcus Webb",
          role: "Brand Identity",
          initials: "MW",
          text: "Our rebrand needed someone who understood both strategy and aesthetics. The final identity system is cohesive, flexible, and instantly recognizable. We've received more compliments on our brand in the past month than in the previous five years combined.",
        },
        {
          id: 4,
          name: "Priya Sharma",
          role: "UX Research",
          initials: "PS",
          text: "The research-first approach made all the difference. Instead of jumping straight to pixels, we had a solid foundation of real user insights. The resulting designs felt intuitive from day one — our onboarding completion rate jumped by 38%.",
        },
        {
          id: 5,
          name: "Daniel Torres",
          role: "Motion Design",
          initials: "DT",
          text: "I've collaborated with many motion designers and few match this level of craft. Every transition feels purposeful, never decorative for its own sake. The animations guide users naturally through the experience without ever feeling intrusive.",
        },
        {
          id: 6,
          name: "Lena Hoffmann",
          role: "Design Systems",
          initials: "LH",
          text: "Building a design system from scratch is no small feat. The component library delivered was thorough, well-documented, and immediately adoptable by our engineering team. It's already saving us hours every sprint and will scale with us for years.",
        },
      ];
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
    if(srv==="skill"){
      return {
           title: "Skills",
           skillData: [
            {
              title: "UI & UX",
              icons: ["/icons/figma.svg", "/icons/xd.svg", "/icons/wordpress.svg"],
            },
            {
              title: "Graphic Design",
              icons: ["/icons/ai.svg", "/icons/ps.svg"],
            },
            {
              title: "Web Design",
              icons: ["/icons/html.svg", "/icons/css.svg", "/icons/js.svg", "/icons/bootstrap.svg"],
            },
          ],
        };
    }
    if(srv==="badge"){
      return [
        {
          label: "WON AT",
          glowColor: "#C9A84C",
          logo: "/logo/logo-1.webp",
        },
        {
          label: "AS KNOWN FROM",
          glowColor: "#E8A020",
          logo:"/logo/logo-2.webp",
        },
        {
          label: "LISTED AT",
          glowColor: "#e0e0e0",
          logo: "/logo/logo-3.webp",
        },
        {
          label: "PARTNER OF",
          glowColor: "#4A90D9",
          logo: "/logo/logo-4.webp",
        },
        {
          label: "PARTNER OF",
          glowColor: "#E84040",
          logo: "/logo/logo-5.webp",
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