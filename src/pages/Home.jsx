import "../CSS/Home.css";

import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  // const movies = [
  //   { id: 1, title: "movieOne", release_date: "2006" },
  //   { id: 2, title: "movieTwo", release_date: "2007" },
  //   { id: 3, title: "movieThree", release_date: "2008" },
  // ];
  //basically a live variable that syncs when changed
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //if list is empty, we will only fetch the api once
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  //need to have async for await to work
  const handleSearch = async (e) => {
    // makes the text stay in the box after searching
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    //make search work for all movies (not just popular ones)
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      //reset error to none
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie..."
          className="search-input"
          value={searchQuery}
          //when the state is changed, the components are automatically rerendered
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
