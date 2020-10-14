import React from "react";
import "../styles/App.scss";

import Projects from "./Projects";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="appRoot" id="appRoot">
            <div className="headerContainer">
                <h1>FName LName</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="appContent-main">
                <br />
                <NavBar />
                <br />
                <Projects />
                <br />
            </div>
        </div>
    );
}

export default App;
