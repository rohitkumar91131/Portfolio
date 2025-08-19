import { Home, User, FolderGit2, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

function NavBar() {
  const navBarItems = [
    { name: "Home", url: "/#", icon: <Home size={20} /> },
    { name: "About", url: "/#about", icon: <User size={20} /> },
    { name: "Projects", url: "/#projects", icon: <FolderGit2 size={20} /> },
    { name: "Github", url: "https://github.com/rohitkumar91131", icon: <Github size={20} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rohit-kumar-114037328/", icon: <Linkedin size={20} /> },
    // { name: "X", url: "/x", icon: <Twitter size={20} /> }
  ]

  return (
    <div className="w-[100dvw] h-fit flex items-center justify-center fixed bottom-3 !p-2 ">
      <div className="w-full md:w-[60%] h-fit flex justify-around items-center border rounded-md !p-2 shadow relative backdrop-blur-md bg-white/10">
        {navBarItems?.map((item, index) => (
          <span key={index}>
           <Link href={item.url} scroll={true} className={`flex items-center gap-1 cursor-pointer peer !p-2`}>
            {item.icon}
           </Link>
           <Link href={item.url} className="peer-hover:visible invisible absolute bottom-0">{item?.name}</Link>
          </span>
        ))}
      </div>
    </div>
  )
}

export default NavBar
