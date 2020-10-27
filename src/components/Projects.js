import React from "react";
import "../styles/Projects.scss";
import { prcards } from "../prcards";

import PrCard from "./PrCard";

function Projects() {
  const cardComponents = prcards.map((c, i) => <PrCard data={c} />);
  return (
    <div className="projects">
      <div className="cardGrid">{cardComponents}</div>
      <br />
    </div>
  );
}

export default Projects;
