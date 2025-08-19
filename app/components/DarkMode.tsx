'use client'
import { useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function DarkMode() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    if (!dark) {
      root.style.setProperty("--bg", "black")
      root.style.setProperty("--text", "white")
    } else {
      root.style.setProperty("--bg", "white")
      root.style.setProperty("--text", "black");
      root.style.setProperty("--card-text" ,"#d1d5db")
    }
    setDark(!dark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-5 py-2 rounded-full cursor-pointer flex items-center gap-2 font-medium transition-all duration-300 backdrop-blur-md border border-white/30 shadow-lg"
      style={{
        background: "var(--text)",
        color: "var(--bg)"
      }}
    >
      {dark ? <Sun size={40} /> : <Moon size={40} />}
      
    </button>
  )
}
