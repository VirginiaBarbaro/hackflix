import "./App.css";
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NoMatch from "./components/NoMatch";
import AboutUs from "./components/AboutUs";
import FilteredFilms from "./components/FiltreredFilm";

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/filtered-by-rating" element={<FilteredFilms />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
