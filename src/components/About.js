import React from "react";

import "../styles/About.scss";

function About() {
  return (
    <div className="page">
      <div className="aboutContainer">
        <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          Hi!
          <br />
          <br />
          I'm a student of Information Technology at Tampere University,
          majoring in Software Engineering. My main interest is Web-based
          software development.
          <br />
          <br />
          This is my portfolio page displaying some of my projects.
        </p>
      </div>
    </div>
  );
}

export default About;
