import Movie from "./Movie";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from "./Carousel";

function MovieList({ films, fetchData }) {
  return (
    <div className="container">
          <div className="carousel mb-4">
            <Carousel />
          </div>
      <InfiniteScroll
        dataLength={films.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4 className="text-white">Loading...</h4>}
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
                  <Movie film={film} />
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieList;
