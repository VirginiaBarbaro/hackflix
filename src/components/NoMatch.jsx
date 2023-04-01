import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="text-center error">
    <img src="/Error404.png" alt="404 error" className="w-50 img-error" />
    <h1>There's nothing here: Error 404! </h1>
    <Link to={"/"}>
      <button className="btn text-white footer-cta mt-4">Back home</button>
    </Link>
  </div>
  );
}

export default NoMatch;
