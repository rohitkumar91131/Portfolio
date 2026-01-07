import AboutPage from "./about/page"
import Education from "./components/About/Education"
import Hero from "./components/About/HeroSection"
import NavBar from "./components/NavBar"
import ContactCard from "./contact/ContactCard"
import ProjectPage from "./projects/page"
import Projects from "./projects/Projects"

function Home() {
  return (
    <div className="w-[100dvw] flex flex-col gap-4">
        <div>
        <Hero/>
        </div>
        <div className="w-full flex justify-center">
        <Projects/>
        </div>
        <div>
        <Education/>
        </div>
        <div className="w-full flex justify-center">
        <ContactCard/>
        </div>
    </div>
  )
}

export default Home
