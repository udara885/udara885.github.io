import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col items-start font-arial md:inline-flex">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
