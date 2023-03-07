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
        <div className="container container-details ">
          <div className="row">
            <div className="col-4">
              <div className="container-detail-img">
                <img
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face${selectedMovie.poster_path}`}
                  className="img-fluid rounded w-75"
                  alt={selectedMovie.title}
                />
              </div>
            </div>
            <div className="info-container col-8">
              <h2 className="detail-title">{selectedMovie.title}</h2>
              <p className="detail-description">{selectedMovie.overview}</p>
              <div className="middle-div">
                <p className="text-white">Release date: {selectedMovie.release_date}</p>
                <small className="text-white">
                  {selectedMovie.vote_count} people voted for this movie
                </small>
                <p className="text-white">Rating: {selectedMovie.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      )}
    </>
  );
}

export default MovieDetails;
