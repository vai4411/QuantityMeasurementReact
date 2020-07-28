import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link to="/">
        <a href>Quanment</a>
      </Link>
      <Link to="/history">
        <li>History</li>
      </Link>
    </div>
  );
}

export default header;
