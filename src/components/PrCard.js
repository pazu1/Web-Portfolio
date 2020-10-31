import React, { useRef, lazy, Suspense, useState } from "react";
import { useSpring, animated } from "react-spring";
import { MarkGithubIcon, LinkExternalIcon } from "@primer/octicons-react";
import "../styles/Projects.scss";
const PrPreview = lazy(() => import("./PrPreview"));

const LABELS = {
  react: "react-logo.png",
  nodejs: "nodejs-logo.png",
  expressjs: "expressjs-logo.png",
  psql: "psql-logo.png",
  "C++": "cpp-logo.png",
  QML: "qml-logo.png",
};

const orig = (bb) => [bb.x + bb.width / 2, bb.y + bb.height / 2];
const calc = (x, y, o) => [-(y - o[1]) / 20, (x - o[0]) / 20, 1.05];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x / 10}deg) rotateY(${y / 10}deg) scale(${s})`;

function PrCard(props) {
  const { title, img, site, labels, source, description, notitle } = props.data;
  const [hoverOn, setHoverOn] = useState("");
  const [aniProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  let componentRef = useRef();

  return (
    <animated.div
      ref={componentRef}
      className="prCard"
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({
          xys: calc(x, y, orig(componentRef.current.getBoundingClientRect())),
        })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: aniProps.xys.interpolate(trans) }}
    >
      <Suspense fallback={<div>Loading preview...</div>}>
        <PrPreview img={img} title={title} />
      </Suspense>
      <div className="sidebar">
        <span>
          {notitle ? null : (
            <>
              <strong>{title}</strong>
              <br />
              <br />
            </>
          )}
          {description}
        </span>
        <table className="imgContainer">
          {" "}
          {labels.map((l) => (
            <span
              className="techimgContainer"
              onMouseMove={() => setHoverOn(l)}
              onMouseLeave={() => setHoverOn("")}
            >
              <span className={hoverOn === l ? "techimgtt-hover" : "techimgtt"}>
                {l}
              </span>
              <img width="32px" src={LABELS[l]} alt={l}></img>
            </span>
          ))}
        </table>
        {site ? (
          <a href={site} target="_blank" rel="noopener noreferrer">
            <button className="webBtn">
              <LinkExternalIcon />
              Live website
            </button>
          </a>
        ) : null}
        <a href={source} target="_blank" rel="noopener noreferrer">
          <button className="ghBtn">
            <MarkGithubIcon />
            Source code
          </button>
        </a>
      </div>
    </animated.div>
  );
}

export default PrCard;
