import { Link } from "react-router-dom";

function Movie({ film }) {
  return (
    <>
      {film && (
        <div className="container movie rounded p-4 card-film">
          <div className="w-100" id="container-img">
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
