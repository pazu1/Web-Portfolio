import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/App.scss";
import Projects from "./Projects";
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";

export const PAGES = {
    PROJECTS: "/",
    CONTACT: "/contact",
    ABOUT: "/about",
};
function App() {
    return (
        <div className="appRoot" id="appRoot">
            <div className="headerContainer">
                <h1>Salle Helevä</h1>
                <br />
                <h2>Software Developer</h2>{" "}
                {/* TODO put a quirky animation here
                    Programmer
                    Student
                */}
            </div>
            <div className="appContent-main">
                <Router>
                    <br />
                    <NavBar />
                    <Switch>
                        <Route path={PAGES.ABOUT}>
                            <br />
                            <br />
                            <About />
                        </Route>
                        <Route path={PAGES.CONTACT}>
                            <br />
                            <br />
                            <Contact />
                        </Route>
                        <Route path={PAGES.PROJECTS}>
                            <br />
                            <br />
                            <Projects />
                            <br />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
