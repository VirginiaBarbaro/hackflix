import React from "react";
import "../movie.css";

function Modal({ closeModal, movie }) {

  const {title, overview, vote_count, release_date} = movie

  return (
    <div className="container-modal">
      <div>
        <button className="btn-close-modal" onClick={closeModal}>
          <i className="bi bi-x-circle"></i>
        </button>
        <h6 className="text-center">{title}</h6>
        <p>{overview}</p>
      </div>
      <div className="d-flex justify-content-around">
        <small>Release Date {release_date}</small>
        <small>Vote: {vote_count}</small>
      </div>
    </div>
  );
}

export default Modal;
