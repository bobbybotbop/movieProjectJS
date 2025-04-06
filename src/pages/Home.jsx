import MovieCard from "../Components/MovieCard";
import { useState } from "react";

function Home() {
  const movies = [
    { id: 1, title: "movieOne", release_date: "2006" },
    { id: 2, title: "movieTwo", release_date: "2007" },
    { id: 3, title: "movieThree", release_date: "2008" },
  ];
  //basically a live variable that syncs when changed
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    // makes the text stay in the box after searching
    e.preventDefault();
    alert(searchQuery);
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

      <div className="movieGrid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
