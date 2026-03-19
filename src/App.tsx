import {Hero} from "@/sections/Hero.tsx" 
import {About} from "@/sections/About.tsx" 
import {Experience} from "@/sections/Experience.tsx" 
import {Contact} from "@/sections/Contact.tsx" 
import {Projects} from "@/sections/Projects.tsx" 
import {Navbar} from "@/layout/Navbar.tsx" 

function App() {
  return (
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
      </div>
  )
}

export default App
