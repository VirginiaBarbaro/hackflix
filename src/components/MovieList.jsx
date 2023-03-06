import Modal from "./Modal";
import Movie from "./Movie";
import { useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function MovieList({ films, fetchData }) {

  const [selectedMovie, setSelectedMovie] = useState(null);



  function openModal(film) {
    setSelectedMovie(film);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
  }


  return (
    <div className="container">
      <InfiniteScroll
        dataLength={films.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row">
          {films.map((film) => {
            return (
              <div key={film.id} className="col-3">
                <div>
                  <Movie film={film} openModal={openModal} />
                </div>
              </div>
            );
          })}
          {selectedMovie && (
            <Modal movie={selectedMovie} closeModal={handleCloseModal} />
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieList;
