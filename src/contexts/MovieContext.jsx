import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //load old favorites
    const storeFavs = localStorage.getItem("favorites");
    if (storeFavs) setFavorites(JSON.parse(storeFavs));
  }, []);

  //update with new favorite if it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    //appends list with new favorite movie
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieID) => {
    //search list to remove movie
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavorite = (movieID) => {
    return favorites.some((movie) => movie.id === movieID);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};
