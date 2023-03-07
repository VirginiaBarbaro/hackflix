import Movie from "./Movie";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

function MovieList() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchData() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newFilms = data.results;
      setPage((prevPage) => prevPage + 1);
      setFilms((prevFilms) => [...prevFilms, ...newFilms]);
    } catch (err) {
      console.log(err);
    }
  }

  // llamo la funcion fetch data al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="carousel mb-4">
        <Carousel />
      </div>
      <InfiniteScroll
        dataLength={films.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        style={{ overflow: "hidden" }}
        loader={
          <div className="spinner">
            <button class="btn btn-success" type="button" disabled>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
        }
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
