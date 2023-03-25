import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();

  const [selectedMovie, setSelectedMovie] = useState([]);

  const getMovieDetails = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US`,
      )
      .then((response) => setSelectedMovie(response.data));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      {selectedMovie ? (
        <div className="big-container">
        <div className="container">
          <div className="row g-5 justify-content-evenly">
            <div className="col-lg-8">
              <div className="card details-movie">
                <div className="row g-0">
                  <div className="col-8 col-md-5 m-auto">
                    <img
                      src={`https://image.tmdb.org/t/p/w440_and_h660_face${selectedMovie.poster_path}`}
                      className="card-img img-fluid rounded"
                      alt={selectedMovie.title}
                    />
                  </div>
                  <div className="col-6 col-md-7 col-sm-12 m-auto">
                    <div className="card-body d-flex flex-column">
                      <div className="h-100 ms-5 mb-5">
                        <h2 className="card-title text-white">{selectedMovie.title}</h2>
                        <p className="text-white card-text">{selectedMovie.overview}</p>
                        <p className="text-white card-text">
                          Release date: {selectedMovie.release_date}
                        </p>
                        <p className="text-white card-text">
                          {selectedMovie.vote_count} people voted for this movie
                        </p>
                        <p className="text-white">Rating: {selectedMovie.vote_average}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : (
        // </div>
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      )}
    </>
  );
}

export default MovieDetails;
