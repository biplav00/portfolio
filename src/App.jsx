import "./App.scss";
import { useEffect, useRef } from "react";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <section className="menu-container">
        <div className="menu-item" onClick={() => scrollToComponent(homeRef)}>
          Home
        </div>
        <div className="menu-item" onClick={() => scrollToComponent(aboutRef)}>
          About
        </div>
        <div
          className="menu-item"
          onClick={() => scrollToComponent(projectRef)}
        >
          Projects
        </div>
        <div
          className="menu-item"
          onClick={() => scrollToComponent(contactRef)}
        >
          Contact
        </div>
      </section>

      <div className="page-container">
        <div className="fullScreen" ref={homeRef}>
          <Home />
        </div>
        <div className="fullScreen" ref={aboutRef}>
          <About />
        </div>
        <div className="fullScreen" ref={projectRef}>
          <Project />
        </div>
        <div className="fullScreen" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
