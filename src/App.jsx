import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Navbar from "./assets/components/nav/Navbar";
import Movies from "./assets/components/Movies/Movies";
import { useState, useEffect } from "react";

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState({
    popular: [],
    top_rated: [],
    upcoming: [],
  });
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const key = "9e9fd6bbd062eaa9108d092b84c115e3";

    const popularRes = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    );
    const popularData = await popularRes.json();

    const topRatedRes = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    );
    const topRatedData = await topRatedRes.json();

    const upcomingRes = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    );
    const upcomingData = await upcomingRes.json();

    setMovies({
      popular: popularData.results,
      top_rated: topRatedData.results,
      upcoming: upcomingData.results,
    });
    setAllMovies([
      ...new Map(
        [
          ...popularData.results,
          ...topRatedData.results,
          ...upcomingData.results,
        ].map((movie) => [movie.id, movie]),
      ).values(),
    ]);
  }
  return (
    <>
      <Navbar
        logoName={"Movie Review"}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        movies={allMovies}
      >
        <a href="#Popular">Popular</a>
        <a href="#Top Rated">Top Rated</a>
        <a href="#Upcoming">Upcoming</a>
      </Navbar>
      <main className="mainC">
        <Movies sectionTitle="Popular" movies={movies.popular} />
        <Movies sectionTitle="Top Rated" movies={movies.top_rated} />
        <Movies sectionTitle="Upcoming" movies={movies.upcoming} />
      </main>
      <Footer>
        <a href="#Popular">Popular</a>
        <a href="#Top Rated">Top Rated</a>
        <a href="#Upcoming">Upcoming</a>
      </Footer>
    </>
  );
}

export default App;
