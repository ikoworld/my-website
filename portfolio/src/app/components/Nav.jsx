import React from 'react';
import Link from 'next/link';

export default  function Navbar () {
return (
    <>
    <nav className="sticky w-full h-16  ">
        <div className="w-full h-full flex flex-row items-center justify-center gap-12 m-2 uppercase font-medium">
        <Link href="/">home</Link>
        <Link href="/">about me</Link>
        <Link href="/">contact</Link>
        </div>
    </nav>
    </>
)
}