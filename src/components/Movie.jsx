import { Link } from "react-router-dom";

function Movie({ film }) {
  return (
    <>
      {film && (
        <div className="container movie rounded p-4">
          <div className="d-flex justify-content-between w-100 p-1">
            <p className="p">Rating: {film.vote_average}</p>
          </div>
          <div className="w-100">
            <Link to={`/movie/${film.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w440_and_h660_face${film.poster_path}`}
                className=" img-fluid img rounded"
                alt={film.title}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
