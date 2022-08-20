import "./App.css";
import { Button } from "@mui/material";
import { React, useRef } from "react";
import Home from "./components/Home.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

const myButtons = {
  color: "#7C838A",
};

const myText = {
  color: "#7C838A",
};

function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const handleHomeClick = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutMeClick = () => {
    aboutMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projects.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <header>
        <logo style={myText}>A</logo>
        <buttons>
          <Button style={myButtons} onClick={handleHomeClick}>
            Home
          </Button>
          <Button style={myButtons} onClick={handleAboutMeClick}>
            About Me
          </Button>
          <Button style={myButtons} onClick={handleProjectsClick}>
            Projects
          </Button>
          <Button style={myButtons} onClick={handleContactClick}>
            Contact
          </Button>
        </buttons>
      </header>
      <div className="Content">
        <div ref={home}>
          <Home />
        </div>
        <div ref={aboutMe}>
          <AboutMe />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
