import React from "react";


export default function Skills(){
 const experties=[
  {
title:"Html & Css",
image:"/images/html.png"
 },  {
  title:"Javascript",
  image:"/images/java.png"
   },  {
    title:"Next js",
    image:"/images/next.png"
     },  {
      title:"git",
      image:"/images/git.png"
       },  {
        title:"github",
        image:"/images/GitHub-logo.png"
         },  {
          title:"Tailwind",
          image:"/images/Tailwind_CSS_Logo.svg.png"
           },]

    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-medium capitalize my-10 text-2xl">my experties</h1>
    <div className=" w-11/12 grid grid-cols-6 gap-4 ">
           { experties.map((element,index)=>
           <div key={index} className="card bg-base-100 shadow-xl p-4 ">
  <div className="card-body">
    <h2 className="card-title">{element.title}</h2>
   
  </div>
  <figure><img src={element.image} alt={element.title} /></figure>
</div>
) }
   </div>
</div>

     
        
        </>
    )
}