import Herosection from '@/app/components/Herosection';
import dynamic from 'next/dynamic';
import React from "react";
import Projects from "@/app/components/projects"
 import Skills from'@/app/components/Skills'
 import Contact from'@/app/components/contact'
export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-6">
        <div className='w-full flex flex-row gap-12 justify-center items-center '>
     <h1 className="font-normal animate-pulse font-sans italic text-4xl text-blue-900 ">Lets make your vision reality</h1>
     <img src='/images/code-removebg-preview.png' alt='pc image'></img>
     </div>
     <Herosection></Herosection>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     
      </div>
    </main>
  )
}
