function Movie({ openModal, film }) {

  function handleOpenModal() {
    openModal(film);
  }
  

  return (
    <>
    {film && (
      <div className="container movie rounded">
        <h5 className="h5">{film.title}</h5>
        <div className="d-flex justify-content-between w-100 p-1">
          <p className="p">Rating: {film.vote_average}</p>
          <button
            className="btn-open-modal text-light rounded-pill"
            onClick={handleOpenModal}
          >
            More +
          </button>
        </div>
        <div className="w-100">
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${film.poster_path}`}
            className=" img-fluid img rounded"
            alt={film.title}
          ></img>
        </div>
      </div>
    )}
    </>
  );
}

export default Movie;
