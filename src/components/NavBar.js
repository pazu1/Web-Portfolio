import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Transition } from "react-spring/renderprops";

import "../styles/NavBar.scss";

const NAVPATHS = [
  { s: "My projects", p: "/" },
  { s: "About", p: "/about" },
  { s: "Contact me", p: "/contact" },
];

function NavBar({ history, location }) {
  const [selectedNav, setNav] = useState(location.pathname);
  history.listen((location) => {
    setNav(location.pathname);
  });
  return (
    <div className="navBar">
      {NAVPATHS.map((obj) => {
        let show = obj.p === selectedNav;
        return (
          // place the headers on top of each other to have a complete flip animation
          <Transition
            items={show}
            enter={{ position: "absolute" }}
            from={{ opacity: 0, transform: "scaleY(0)" }}
            enter={{ opacity: 1, transform: "scaleY(1)" }}
            leave={[
              { position: "absolute", opacity: 0, transform: "scaleY(0)" },
            ]}
          >
            {(show) =>
              show &&
              ((props) => (
                <h3 style={props} to={obj.p}>
                  {obj.s}
                </h3>
              ))
            }
          </Transition>
        );
      })}

      <div className="buttonsContainer">
        {NAVPATHS.map((obj) => {
          let show = obj.p !== selectedNav;
          return (
            <Transition
              items={show}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ display: "none" }}
            >
              {(show) =>
                show &&
                ((props) => (
                  <Link style={props} to={obj.p}>
                    <strong>{obj.s}</strong>
                  </Link>
                ))
              }
            </Transition>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(NavBar);
