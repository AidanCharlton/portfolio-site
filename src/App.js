import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import CV from "./Sections/CV";
import Contact from "./Sections/Contact";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <Projects />
      <CV />
      <Contact />
    </SmoothScroll>
  );
}

export default App;
