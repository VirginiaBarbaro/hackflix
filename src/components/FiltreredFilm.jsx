import React from "react";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./Header";

function FilteredFilms() {
  const [rating, setRating] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovie = async function () {
      const response = await axios.get(
        `
      https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${
        rating * 2 - 2
      }&vote_average.lte=${rating * 2}
      &with_watch_monetization_types=flatrate`
      );
      console.log(response.data);
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
      &with_watch_monetization_types=flatrate`
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
    https://api.themoviedb.org/3/search/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&query=${title}&include_adult=false`);
    setTitle(response.data.results);
  };

  useEffect(() => {
    searchByTitle();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredResults = filteredFilms.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="text-center form-rating col-8 mx-auto">
            <div className="form-control-contact searcher-form">
              <form className="mb-4">
                <label
                  htmlFor="inputAddress"
                  className="form-label text-light fs-4"
                >
                  <i className="bi bi-search"></i> Search
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a title"
                  name="title"
                  id="title"
                  value={search}
                  onChange={handleSearchChange}
                  required
                />
              </form>
            </div>
            <Rating
              onClick={(value) => handleRating(value)}
              initialValue={rating}
              fillColor="green"
            />
          </div>
          <div className="container">
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
                {filteredResults.map((film) => {
                  return (
                    <div
                      key={film.id}
                      className="col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <div>
                        <Movie film={film} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredFilms;
