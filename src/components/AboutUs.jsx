import React from "react";

function AboutUs() {
  return (
    <div className="container-row d-flex">
      <div className="img-about">
        <img src="https://images.unsplash.com/photo-1649110458068-fc092543c056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZpbG1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="img-about" />
      </div>
      <div className="col-6 about-title">
        <h2 className="h2-about">The Hackflix story</h2>
        <h3 className="h3-about">
          Stories move us. They make us feel more emotion, see new perspectives, and bring us closer
          to each other.
        </h3>
      </div>
    </div>
  );
}

export default AboutUs;
