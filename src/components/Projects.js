import React from "react";
import "../styles/Projects.scss";

import PrCard from "./PrCard";

// TODO: fetch project cards' data from json file or similar

function Projects() {
    return (
        <div className="projects">
            <h3 className="projectHeader">My projects</h3>
            <div className="cardGrid">
                <PrCard />
                <PrCard />
                <PrCard />
                <PrCard />
                <PrCard />
            </div>
        </div>
    );
}

export default Projects;
