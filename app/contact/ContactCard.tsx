"use client"

import { Linkedin, Github, Mail, Phone } from "lucide-react"

export default function ContactCard() {
  return (
    <div className="w-full md:w-[70%] h-[50dvh] flex flex-col text-center sm:text-left">
      <h2 className="text-2xl font-bold ">Contact Me</h2>
      <div className="flex flex-col items-center sm:items-start gap-1">
        <a 
          href="https://www.linkedin.com/in/rohit-kumar-114037328/" 
          target="_blank" 
          className="flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <Linkedin size={20} />
          <span>LinkedIn :- rohit-kumar-114037328</span>
        </a>

        <a 
          href="https://github.com/rohitkumar91131" 
          target="_blank" 
          className="flex items-center  space-x-2 text-gray-800 hover:underline"
        >
          <Github size={20} />
          <span>GitHub :- @rohitkumar91131</span>
        </a>

        <a 
          href="mailto:rk34190100@example.com" 
          className="flex items-center space-x-2  hover:underline"
        >
          <Mail size={20} />
          <span>Email :- rk34190100@gmail.com</span>
        </a>

        {/* <a 
          href="tel:+911234567890" 
          className="flex items-center justify-center space-x-2 text-green-600 hover:underline"
        >
          <Phone size={20} />
          <span>+91 12345 67890</span>
        </a> */}
      </div>
    </div>
  )
}
