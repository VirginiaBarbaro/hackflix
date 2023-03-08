import React from "react";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";

function FilteredFilms() {
  const [rating, setRating] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getMovie = async function () {
      const response = await axios.get(
        `
      https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${
          rating * 2 - 2
        }&vote_average.lte=${rating * 2}
      &with_watch_monetization_types=flatrate`,
      );
      setFilteredFilms((prevFilms) => [...prevFilms, ...response.data.results]);
      setIsLoading(false);
    };
    getMovie();
  }, [page]);

  useEffect(() => {
    const getMovie = async function () {
      const response = await axios.get(
        `
      https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${
          rating * 2 - 2
        }&vote_average.lte=${rating * 2}
      &with_watch_monetization_types=flatrate`,
      );
      setFilteredFilms(response.data.results);
      setIsLoading(false);
    };
    getMovie();
  }, [rating]);

  const handleRating = (rate) => {
    setRating(rate);
    setPage(1);
  };

  const handleNextPage = () => {
    console.log(`Termina page: ${page}`);
    setPage((prevPage) => prevPage + 1);
  };

  const searchByTitle = async () => {
    const response = await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&query=title${title}&include_adult=false`);
    setTitle(response.data.results);
  };

  useEffect(() => {
    searchByTitle();
  }, []);

  const handleSearch = (e) => {
    setTitle(e.target.value);
    console.log("Busqueda: " + e.target.value);
  };

  // onSubmit={(event)
  // (event) => setTitle(event.target.value)

  return (
    <div>
      <h5 className="header-h5">Filter by rating or title</h5>
      <div className="text-center form-rating">
        <form className="form-rating">
          <label className="label-search">
            <i className="bi bi-search"></i>
          </label>
          <input className="input-search" type="text" onChange={handleSearch} />
          <button className="badge rounded-pill text-bg-success btn-search" type="submit">
            Search
          </button>
        </form>
        <Rating onClick={(value) => handleRating(value)} initialValue={rating} />
      </div>
      <InfiniteScroll
        dataLength={filteredFilms.length} //This is important field to render the next data
        next={handleNextPage}
        hasMore={true}
        style={{ overflow: "hidden" }}
        loader={
          <div className="spinner">
            <button className="btn btn-success" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
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
          {filteredFilms.map((film) => {
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

export default FilteredFilms;
