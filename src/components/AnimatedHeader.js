import React from "react";
import Typical from "react-typical";

import "../styles/AnimatedHeader.scss";

const DELAY = 3400;
function AnimatedHeader(props) {
  const { headers } = props;
  const text = ["", DELAY / 3];
  headers.forEach((h) => {
    text.push(h);
    text.push(DELAY);
  });
  return <Typical steps={text} loop={1} wrapper="h2" />;
}

export default AnimatedHeader;
