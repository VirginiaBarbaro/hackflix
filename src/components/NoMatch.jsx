import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="main-noMatch">
      <div className="alert alert-warning noMatch" role="alert">
        Page not found!
      </div>
      <Link to="/">
      <div className="btn-noMatch">
        <button className="btn btn-success"> ← Back Home</button>
      </div>
      </Link>
    </div>
  );
}

export default NoMatch;
