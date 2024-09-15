import Contact from "@/Components/Shared/Contact/Contact";
import Education from "@/Components/Shared/Education/Education";
import Footer from "@/Components/Shared/Footer/Footer";
import HomeAbout from "@/Components/Shared/HomeAbout/HomeAbout";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import ParticlesCom from "@/Components/Shared/ParticlesCom/ParticlesCom";
import Projects from "@/Components/Shared/Projects/Projects";
import Skills from "@/Components/Shared/Skills/Skills";

export default function Home() {
 
  return (
    <main>
      <div className="relative z-40">
        <ParticlesCom />
        <div className="absolute top-0 left-0 h-full min-h-screen w-full bg-transparent" id="about">
          <Navbar />
          <HomeAbout />
        </div>
      </div>
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
