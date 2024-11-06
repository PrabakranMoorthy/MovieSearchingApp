import { useState } from "react";
import Navbar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";
import SearchBar from "./Components/SearchBar";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch data with debouncing
  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=112b26a6`
      );
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(allMovieData);
  return (
    <div className="bg">
      <Navbar />
      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        fetchMovieData={fetchMovieData}
      />
      {allMovieData && allMovieData.length > 0 ? (
        <MovieCard allMovieData={allMovieData} loading={loading} />
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "100px", opacity: "0.8" }}>
          Search Movies
        </h1>
      )}
    </div>
  );
}

export default App;
