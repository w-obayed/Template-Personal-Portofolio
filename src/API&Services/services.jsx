import React from 'react'

const serviceCall = (srv)=>{
    if(srv==="navbar"){
        return navlist
    }
    if(srv==="hero"){
        return [{
            title: "Hero Section",
            description: "Welcome to my portfolio!"
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
  
}

const servivesList={
  "navbar":()=>{
      return serviceCall("navbar")
    },
   "EducationAndExperience":()=>{
         return serviceCall("EducationAndExperience")
   },
   "hero":()=>{

   },
   "hero":()=>{

   },
   "hero":()=>{

   },
}

const navlist=[
    {
        name:"Home",
        link:"#"
    },
    {
        name:"About",
        link:"#about"
    },
    {
        name:"Works",
        link:"#works"
    },
    {
        name:"Resume",
        link:"#resume"
    }
]



 function services(conditions) {
    if (!conditions) {
        // Perform some logic based on conditions
        return [];
    }  
    const serviceComponent = servivesList[conditions];
    if (serviceComponent) {
        return  serviceComponent();
    } else {
        return [];
    }
}

export default services