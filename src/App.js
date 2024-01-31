import { useState, useEffect } from "react";
import "./App.css";
import { prettyDOM } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchicon from "./search.svg";
import Moviecard from './Moviecard'
//dec4feb3
const API_URL = "http://www.omdbapi.com?apikey=dec4feb3";

const App = () => {
  const [movies, Setmovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')



  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    Setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const movie1 = {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <h1>FILMORA</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={Searchicon} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>

    {
      movies.length > 0 ? <div className="container">
      {movies.map((movie) => (
        <Moviecard movie={movie}/>
      ))}
    </div> : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )
    }




      
    </div>
  );
};

export default App;
