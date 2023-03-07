import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { useParams } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  const [rating, setRating] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)

  async function fetchData () {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&vote_average.gte=${rating * 2 - 2}&vote_average.lte=${rating * 2}&with_watch_monetization_types=flatrate`

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newFilms = data.results;
      setPage((prevPage) => prevPage + 1)
      setFilms((prevFilms) => [...prevFilms, ...newFilms])
    } catch (err) {
      console.log(err)
    }
  }

  // llamo la funcion fetch data al montar el componente
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    const getMovie = async function () {
      const response = await axios.get(
        `
      https://api.themoviedb.org/3/discover/movie?api_key=8616bd50fe3be649603bd33d955499f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=${
       rating * 2 - 2 
      }&vote_average.lte=${rating * 2}&with_watch_monetization_types=flatrate`
      );
      setFilms(response.data.results);
      setIsLoading(false);
      console.log(response.data.results);
    };
    getMovie();
  }, [rating]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="main-container">
      <div className="text-center mb-3 header">
        <Header />
        <Rating
          onClick={(value) => handleRating(value)}
          initialValue={rating}
        />
      <Routes>
        <Route path="/" element={<MovieList films={films} fetchData={fetchData}/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
