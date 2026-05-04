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

          },
          {
            title: 'WEB DESIGN',
            image: '/services/webdesign.png',

          },
          {
            title: 'LANDING PAGE',
            image: '/services/landing.png',

          },
          {
            title: 'MOBILE APP',
            image: '/services/mobile.png',
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