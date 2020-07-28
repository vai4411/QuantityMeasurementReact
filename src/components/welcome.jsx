import React from "react";

function welcome(props) {
  return (
    <div className="welcome">
      <p>{props.msg}</p>
    </div>
  );
}
export default welcome;
