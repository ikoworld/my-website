import Link from "next/link";
import React from "react";
 

export default function Footer(){
    return (
        <>
        <nav className="flex flex-row justify-center items-center">
           
            
            <div className="w-full h-full flex flex-row items-center justify-center gap-12 m-2 uppercase font-medium">
        <Link href="/">home</Link>
        <Link href="/">about me</Link>
        <Link href="/">contact</Link>
        </div>  
            
        </nav>
        </>
    )
}