"use client"

import { useState } from "react"
import Image from "next/image"

type ProjectType = {
  title: string
  photoUrl: string
  description: string
  techStack: string
}

function Projects() {
  const [allProjects] = useState<ProjectType[]>([
    {
      title: "Portfolio Website",
      photoUrl: "/portfolio.png",
      description: "A modern portfolio website built with Next.js and TailwindCSS.",
      techStack: "Next.js, Tailwind, TypeScript"
    },
    {
      title: "Chat App",
      photoUrl: "/chat.png",
      description: "A real-time chat app with WebSocket and Node.js backend.",
      techStack: "React, Node.js, Socket.IO"
    },
    {
      title: "E-commerce Store",
      photoUrl: "/store.png",
      description: "An online store with authentication, cart, and payment gateway.",
      techStack: "React, Redux, Express, MongoDB"
    },
    {
      title: "Blog Platform",
      photoUrl: "/blog.png",
      description: "A customizable blogging platform with markdown support.",
      techStack: "Next.js, Prisma, PostgreSQL"
    },
    {
      title: "Weather App",
      photoUrl: "/weather.png",
      description: "A weather forecasting app using OpenWeather API.",
      techStack: "React, Tailwind, API Integration"
    },
    {
      title: "Task Manager",
      photoUrl: "/tasks.png",
      description: "A productivity app for managing tasks with drag-and-drop UI.",
      techStack: "React, Redux Toolkit, Firebase"
    },
    {
      title: "Video Streaming",
      photoUrl: "/video.png",
      description: "A YouTube-like platform for streaming and uploading videos.",
      techStack: "Next.js, Node.js, MongoDB"
    },
    {
      title: "AI Image Generator",
      photoUrl: "/ai.png",
      description: "Generate images using AI with a simple user interface.",
      techStack: "Next.js, OpenAI API, TailwindCSS"
    },
    {
      title: "Fitness Tracker",
      photoUrl: "/fitness.png",
      description: "Track workouts, calories, and progress with charts.",
      techStack: "React Native, Expo, SQLite"
    },
    {
      title: "Travel Booking App",
      photoUrl: "/travel.png",
      description: "A full-stack app for booking hotels, flights, and tours.",
      techStack: "React, Node.js, MySQL"
    }
  ])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 h-[100dvh] overflow-y-auto">
      {allProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white h-24 w-full shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={project.photoUrl}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <span className="inline-block mt-3 text-sm bg-gray-200 px-3 py-1 rounded-full">
              {project.techStack}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
