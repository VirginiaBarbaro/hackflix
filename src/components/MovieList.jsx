import Movie from "./Movie";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function MovieList({ films, fetchData }) {

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
