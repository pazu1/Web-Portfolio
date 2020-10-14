import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { MarkGithubIcon, LinkExternalIcon } from "@primer/octicons-react";
import "../styles/Projects.scss";

const orig = (bb) => [bb.x + bb.width / 2, bb.y + bb.height / 2];
const calc = (x, y, o) => [-(y - o[1]) / 20, (x - o[0]) / 20, 1.05];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x / 10}deg) rotateY(${
        y / 10
    }deg) scale(${s})`;

function PrCard(props) {
    const { title, img, site, labels, source, description } = props.data;
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
                    xys: calc(
                        x,
                        y,
                        orig(componentRef.current.getBoundingClientRect())
                    ),
                })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: aniProps.xys.interpolate(trans) }}
        >
            <div
                style={
                    img
                        ? {
                              backgroundImage: `url(${img})`,
                          }
                        : null
                }
                className="preview"
            >
                {!img ? title : null}
            </div>
            <div className="sidebar">
                {description}
                {site ? (
                    <button className="webBtn">
                        <LinkExternalIcon />
                        Live website
                    </button>
                ) : null}
                <button className="ghBtn">
                    <MarkGithubIcon />
                    Source code
                </button>
            </div>
        </animated.div>
    );
}

export default PrCard;