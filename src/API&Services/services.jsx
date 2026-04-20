import React from 'react'

const serviceCall = (srv)=>{
    if(srv==="navbar"){
        return [
           { label: "Home", href: "#" },
           { label: "Services", href: "#" },
           { label: "Works", href: "#" },
           { label: "Testimonials", href: "#" },
           { label: "Pricing", href: "#" },
           { label: "Contact", href: "#" },
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