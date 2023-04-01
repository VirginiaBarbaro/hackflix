import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header"
import Footer from "./Footer";

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
    <Header />
      {selectedMovie ? (
        <><div className="big-container">
            <div className="container">
              <div className="row g-5 justify-content-evenly">
                <div className="col-md-12 col-lg-9">
                  <div className="card details-movie">
                    <div className="row g-0">
                      <div className="col-8 col-md-5 m-auto">
                        <img
                          src={`https://image.tmdb.org/t/p/w440_and_h660_face${selectedMovie.poster_path}`}
                          className="card-img img-fluid rounded"
                          alt={selectedMovie.title} />
                      </div>
                      <div className="col-6 col-md-7 col-sm-12 m-auto g-3">
                        <div className="mb-5 card-description-details text-center">
                          <h2 className="card-title text-white my-5">{selectedMovie.title}</h2>
                          <h6 className="text-white card-text my-5">{selectedMovie.overview}</h6>
                          <h6 className="text-white card-text my-5">
                            Release date:<strong className="text-success"> {selectedMovie.release_date} </strong>
                          </h6>
                          <h6 className="text-white card-text my-5">
                            <strong className="text-success">{selectedMovie.vote_count}</strong> people voted for this movie
                          </h6>
                          <h6 className="text-white my-5"> Rating: <strong className="text-success">{selectedMovie.vote_average}</strong></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><Footer /></>
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
