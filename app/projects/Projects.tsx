"use client"

import Image from "next/image"

type ProjectType = {
  title?: string
  photoUrl?: string
  description?: string
  techStack?: string[]
  websiteUrl?: string
}

function Projects() {
  const allProjects: ProjectType[] = [
    {
      title: "Task Manager",
      photoUrl: "/task-manager.png",
      description: "A web application to create, edit, delete, and manage tasks efficiently with status tracking and a user-friendly interface.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      websiteUrl: "https://task-manager-frontend-6ylm.onrender.com/"
    },    
    {
      title: "IMDb Clone",
      photoUrl: "/Imdb.png",
      description: "A full-featured movie database clone with search, ratings, and detailed movie information.",
      techStack: ["Next.js", "TypeScript", "OMDB API", "TailwindCSS"],
      websiteUrl: "https://imdb-two-ebon.vercel.app/"
    },
    {
      title: "Sound Pollution Detector",
      photoUrl: "/soundpollution.png",
      description: "An interactive web app that visualizes real-time sound levels on a dynamic canvas",
      techStack: ["Next.js", "Canvas"],
      websiteUrl: "https://soundpollutiondetector.vercel.app/"
    },
    {
      title: "File Sharing App",
      photoUrl: "/FileShare.png",
      description: "A peer-to-peer file sharing application built with WebRTC and React for seamless file transfer.",
      techStack: ["React", "WebRTC", "Node.js", "Socket.IO"],
      websiteUrl: "https://file-sharing-web-app-rvor.onrender.com"
    },
    {
      title: "Chat App (Vartalaap)",
      photoUrl: "/Vartalaap.png",
      description: "A secure chat application featuring login, registration, and JWT-based session management.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      websiteUrl: "https://authentication-frontend-mdye.onrender.com"
    },
    {
      title: "Group Video Call",
      photoUrl: "/VideoCall.png",
      description: "A real-time group video conferencing app powered by WebRTC and Socket.IO.",
      techStack: ["React", "WebRTC", "Node.js", "Socket.IO"],
      websiteUrl: "https://group-video-call-frontend.onrender.com"
    }
  ]

  return (
    <div className="w-full md:w-[70%]" id="projects">
      <p className="text-center !m-4">My Projects</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects?.map((project, index) => (
          <a
            key={index}
            href={project?.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 !p-3"
          >
            {project?.photoUrl && (
              <Image
                src={project?.photoUrl || "/placeholder.png"}
                alt={project?.title || "Project Image"}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{project?.title}</h2>
              <p className="text-gray-600 mt-2 text-center">{project?.description}</p>

              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {project?.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
