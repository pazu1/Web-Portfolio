import React from "react";
import "../styles/Projects.scss";
import { prcards } from "../prcards";

import PrCard from "./PrCard";

// TODO: fetch project cards' data from json file or similar

function Projects() {
    const cardComponents = prcards.map((c, i) => <PrCard data={c} />);
    return (
        <div className="projects">
            <div className="cardGrid">{cardComponents}</div>
        </div>
    );
}

export default Projects;
