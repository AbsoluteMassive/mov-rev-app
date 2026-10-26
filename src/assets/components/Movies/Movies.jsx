import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import "./Movies.css";
const Movies = () => {
  const [movies, Setmovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    const key = `426e3d03941f8dac8e95c16d9881b22a`;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    );
    const data = await res.json();
    Setmovies(data.results);
  }
  /* const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase()),
  ); */
  return (
    <>
      <div className="titleC">
        <h2>Popular</h2>
        <p>Top {movies.length}</p>
      </div>
      <section className="grid-section">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
};

export default Movies;
