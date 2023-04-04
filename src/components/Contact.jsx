import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="form-admin-create-product w-50 m-auto form-login">
        <div className="container p-1 mt-5">
          <div className="row p-1 formulary mt-4 w-100">
            <form className="p-4">
              <div>
                <label htmlFor="inputPassword5" class="form-label"></label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control input-form-text"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Firstname"
                  
                />
                <label htmlFor="lastname" class="form-label"></label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control input-form-text"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Lastname"
                />
                <label htmlFor="email" class="form-label"></label>
                <input
                  type="email"
                  id="email"
                  className="form-control input-form-text"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Email"
                />
                <label htmlFor="comment" class="form-label"></label>
                <input
                  type="text"
                  id="email"
                  className="form-control input-form-text"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Your comment..."
                />
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <Link to="/" className="back-home-contact mt-4">
                      <i className="bi bi-arrow-left text-light back-home-contact"></i>
                    </Link>
                  </div>
                  <button type="button" className="btn btn-success btn-send">
                    Send
                  </button>
                </div>
              </div>
            </form>
            {/* <FormControl className=" col-sm-12 col-md-12 col-lg-12 m-auto form-control-contact">
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
              <div className="d-flex justify-content-between mt-4">
                <div>

                <Link to="/" className="back-home-contact mt-4">
                  <i className="bi bi-arrow-left text-light back-home-contact"></i>
                </Link>
                </div>
                <button type="button" className="btn btn-success btn-send">Send</button>
              </div>
            </FormControl> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
