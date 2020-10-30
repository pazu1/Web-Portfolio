import React from "react";

import "../styles/Projects.scss";

function Preview(props) {
  const { img, title } = props;
  return (
    <div
      className="preview"
      style={
        img
          ? {
              backgroundImage: `url(${img})`,
            }
          : null
      }
    >
      {!img ? title : null}
    </div>
  );
}

export default Preview;
