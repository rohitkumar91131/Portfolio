"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[70dvh] flex flex-col items-center justify-center text-center  px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-600">Rohit Kumar</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl " style={{ color: "var(--card-text)" }}>
          I build modern, scalable web apps with <span className="font-semibold">React, Next.js, Node.js</span> & WebRTC.
        </p>

        <div className="!mt-3 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            scroll={true}
            className="!p-2 bg-blue-600 text-white  rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
          <Link
            href="/#about"
            className="!p-2 border text-black border-gray-400 text-gray-800 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <span className="text-gray-500">↓ Scroll</span>
      </div>
    </section>
  )
}
