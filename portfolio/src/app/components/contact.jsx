import Link from "next/link";
import React from "react";
 

export default function Contact(){
    return (
        <>
        <main className="flex flex-col justify-center items-center ">
           <h1 className="text-2xl font-medium capitalize my-10"> Wanna collaborate !</h1>
            <div>
              please contact me by sending an email <Link href="/about" className="font-bold">know more about me</Link>
            </div>
            <div className="flex flex-col">
  <h1>FormSubmit Demo</h1>
  <form target="_blank" action="https://formsubmit.co/bouchrabichou638@email.com" method="POST">
    <div className="form-group">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div className="flex flex-col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div className=" w-full">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
        </main>
        </>
    )
}