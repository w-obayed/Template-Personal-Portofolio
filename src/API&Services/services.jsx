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
            image: '/services/uiux.png',
            bg: 'from-indigo-500 via-purple-500 to-pink-500',
          },
          {
            title: 'WEB DESIGN',
            image: '/services/webdesign.png',
            bg: 'from-cyan-400 via-sky-500 to-blue-600',
          },
          {
            title: 'LANDING PAGE',
            image: '/services/landing.png',
            bg: 'from-emerald-300 via-teal-400 to-cyan-500',
          },
          {
            title: 'MOBILE APP',
            image: '/services/mobile.png',
            bg: 'from-orange-400 via-rose-500 to-pink-600',
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