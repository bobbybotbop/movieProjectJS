import "./CSS/App.css";
import MovieCard from "./Components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        {
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        }
      </main>
    </div>
  );
}

export default App;
