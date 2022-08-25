import { React, useRef } from "react";
import "./Projects.css";
import snakeGame from "./images/SnakeGame.png";

function Projects() {
  return (
    <div className="Projects">
      <p className="Title">RECENT PROJECTS</p>
      <div className="AllProjects">
        <div className="SliderWrap">
          <div className="Slider">
            <div className="Project">
              <img
                className="SnakeGame"
                src={snakeGame}
                onClick={() => window.open("https://github.com/alvalh/Snake")}
              />
              <p className="MiddleDescription">
                This snake game is written in <br />
                Java with JFrame <br />
                <br />
                <br />
                <br />
                Press the image <br />
                to see the code on GitHub
              </p>
              <p style={{ textAlign: "center", fontFamily: "Silkscreen" }}>
                Snake
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
