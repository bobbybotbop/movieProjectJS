import "../CSS/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>no favorite movies yet</h2>
        <p>start adding ur favorite movie!!!</p>
      </div>
    );
  }
}
export default Favorites;
