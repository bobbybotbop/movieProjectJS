function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="move-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            {"<3"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_dates}</p>
      </div>
    </div>
  );
}

export default MovieCard;
