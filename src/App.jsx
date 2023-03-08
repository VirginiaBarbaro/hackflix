import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { Routes, Route, Navigate } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NoMatch from "./components/NoMatch";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import FilteredFilms from "./components/FiltreredFilm";
// import { useNavigate } from "react-router-dom";

function App() {

  // const navigate = useNavigate();

  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="movie/:id" element={<Navigate replace to="/film/:id"/>} /> */}
        <Route path="/about-us" element={<AboutUs /> } /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/filtered-by-rating" element={<FilteredFilms />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
