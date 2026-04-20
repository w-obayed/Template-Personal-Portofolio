import React from 'react'

const serviceCall = (srv)=>{
    if(srv==="navbar"){
        return navlist
    }
  
}

const servivesList={
  "navbar":()=>{
      return serviceCall("navbar")
    },
   "hero":()=>{

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



async function services(conditions) {
    if (conditions) {
        // Perform some logic based on conditions
        return <div>Services with conditions met</div>;
    }  
    const serviceComponent = servivesList[conditions];
    if (serviceComponent) {
        return await serviceComponent();
    } else {
        return <div>No service found for the given conditions</div>;
    }
}

export default services