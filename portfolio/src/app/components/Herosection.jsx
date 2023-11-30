import Link from "next/link";
import React from "react";
 

export default function Herosection(){
    return (
        <>
        <main className="flex flex-row justify-center items-center">
            <div>
           <img src="/images/Design sans titre (13).png" alt="" />
            </div>
            <div>
                i am a frontend developper with hand on experience with next js javascript and many programming languages <Link href="/about" className="font-bold">know more about me</Link>
            </div>
        </main>
        </>
    )
}