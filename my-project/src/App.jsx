import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";

function App() {
  return (
    <div className="bg-[#6075c1] h-auto w-full overflow-hidden">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

       <section id="education">
        <Education />
      </section>


      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
