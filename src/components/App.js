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
// <div style={{ height: "100vh" }}>void</div>
function App() {
    return (
        <div className="appRoot" id="appRoot">
            <div className="headerContainer">
                <h1>FName LName</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="appContent-main">
                <Router>
                    <br />
                    <NavBar />
                    <Switch>
                        <Route path={PAGES.ABOUT}>
                            <About />
                        </Route>
                        <Route path={PAGES.CONTACT}>
                            <Contact />
                        </Route>
                        <Route path={PAGES.PROJECTS}>
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
