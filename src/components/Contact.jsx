import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="form-admin-create-product w-50 m-auto form-login">
        <div className="container p-3 mt-5">
          <div className="row p-3 formulary mt-4">
            <FormControl className="col-md-8 col-lg-8 m-auto form-control-contact">
              <h4 className="title-contact-us">Contact us</h4>
              <label htmlFor="firstname" id="firstname"></label>
              <TextField
                id="standard-basic"
                label="Firstname"
                variant="standard"
                className="my-2 input-form"
                name="name"
              />

              <label htmlFor="lastname" id="lastname"></label>
              <TextField
                id="standard-basic"
                label="Lastname"
                variant="standard"
                className="my-2"
                name="description"
              />

              <label htmlFor="email" id="email"></label>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className="my-2"
                name="price"
              />

              <label htmlFor="comment" id="comment"></label>
              <TextField
                id="standard-basic"
                label="Your comment"
                variant="standard"
                className="my-2"
                name="stock"
              />
              <div className="d-flex justify-content-between">
                <Link to="/" className="back-home-contact mt-4">
                  <i className="bi bi-arrow-left text-light back-home-contact"></i>
                </Link>
                <button type="button" class="btn btn-outline-success btn-send-contact">Send</button>
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
