"use client"

import { Linkedin, Github, Mail } from "lucide-react"

export default function ContactCard() {
  return (
    <div
      className="w-full md:w-[70%] h-[50dvh] flex flex-col text-center sm:text-left"
      style={{ color: "var(--text)" }}
    >
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <div className="flex flex-col items-center sm:items-start gap-1">
        <a
          href="https://www.linkedin.com/in/rohit-kumar-114037328/"
          target="_blank"
          className="flex items-center space-x-2 hover:underline"
          style={{ color: "var(--link-primary)" }}
        >
          <Linkedin size={20} />
          <span>LinkedIn :- rohit-kumar-114037328</span>
        </a>

        <a
          href="https://github.com/rohitkumar91131"
          target="_blank"
          className="flex items-center space-x-2 hover:underline"
          style={{ color: "var(--link-secondary)" }}
        >
          <Github size={20} />
          <span>GitHub :- @rohitkumar91131</span>
        </a>

        <a
          href="mailto:rk34190100@example.com"
          className="flex items-center space-x-2 hover:underline"
          style={{ color: "var(--text)" }}
        >
          <Mail size={20} />
          <span>Email :- rk34190100@gmail.com</span>
        </a>
      </div>
    </div>
  )
}
