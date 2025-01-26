import Asritha from "./components/asritha"
import Navbar from "./components/navbar"
import Skills from "./components/skills"
import Experience from "./components/Experience";
import Projects from "./components/projects";
import Education from "./components/Education";
import Contact from "./components/contact";
import icon from './assets/icon.png';

export default function App() {
  return (
    <div>
      <head>
        <link rel="icon" href={icon} />
        <link rel="apple-touch-icon" href={icon} />
      </head>
    
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#555555] selection:text-[#ffffff]">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-gradient-to-b from-black via-gray-900 to-gray-800">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side, rgba(0,0,0,0.3), rgba(0,0,0,0))] opacity-70"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side, rgba(0,0,0,0.3), rgba(0,0,0,0))] opacity-70"></div>
        </div>
      </div>           
      <div className="container mx-auto px-8">
        <Navbar/>
        <Asritha/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
    </div>
    </div>
  )
}

