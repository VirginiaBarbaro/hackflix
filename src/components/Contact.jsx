import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1 className="h1-contact">Contact Us</h1>
      <form className="contact-form">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label label-contact">
            Fullname
          </label>
          <input
            type="text"
            className="form-control input-contact" 
            id="exampleFormControlInput1"
            placeholder="Type your name"
          />
          <label for="exampleFormControlInput1" className="form-label label-contact">
            Email
          </label>
          <input
            type="email"
            className="form-control input-contact"
            id="exampleFormControlInput1"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label  label-contact">
            Comment
          </label>
          <textarea
            className="form-control input-contact"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write here..."
          ></textarea>
        </div>
        <div className="btn-contact">
          <Link to="/">
          <button className="btn btn-primary"> ← Back Home</button>
          </Link>
          <button className="btn btn-success">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
