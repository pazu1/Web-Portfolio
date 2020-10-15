import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { PAGES } from "./App";

import "../styles/NavBar.scss";

function NavBar({ history }) {
    const [selectedNav, setNav] = useState(PAGES.PROJECTS);
    history.listen((location) => {
        setNav(location.pathname);
    });
    return (
        <div className="navBar">
            {selectedNav === PAGES.PROJECTS ? (
                <h3>My projects</h3>
            ) : selectedNav === PAGES.CONTACT ? (
                <h3>Contact me</h3>
            ) : (
                <h3>About</h3>
            )}

            <div className="buttonsContainer">
                <Link to={PAGES.PROJECTS}>
                    <span>My projects</span>
                </Link>
                <Link to={PAGES.CONTACT}>
                    <span>Contact me</span>
                </Link>
                <Link to={PAGES.ABOUT}>
                    <span>About</span>
                </Link>
            </div>
        </div>
    );
}

export default withRouter(NavBar);
