import React from "react";
import "./AboutMe.css";
import Typewriter from "typewriter-effect";

const typewriter = ["Student", "Developer", "Designer"];

function AboutMe() {
  return (
    <div className="AboutMe">
      <p style={{ fontSize: "15px", margin: "0px" }}>ABOUT ME</p>
      <p className="TypeWriterWrap">
        <Typewriter
          options={{
            strings: ["Student", "Developer", "Optimist", "Problem Solver"],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <p className="aboutDescription">
        I'm Alva, an engineering student in information and communication
        technology at KTH in Stockholm. I have experience in both functional and
        object-oriented programming languages. Most of my projects are made with
        Java or React but I also have knowledge of Elixir and C. I am currently
        looking for new opportunities to learn more and grow as a developer!
      </p>
    </div>
  );
}

export default AboutMe;
