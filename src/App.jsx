import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Navbar from "./assets/components/nav/Navbar";
import Movies from "./assets/components/Movies/Movies";
import { useState, useEffect } from "react";
import Watchlist from "./assets/components/Watchlist/Watchlist";

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState({
    popular: [],
    top_rated: [],
    upcoming: [],
  });
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  async function getMovies() {
    setFetching(true);
    setError(false);

    try {
      const key = "9e9fd6bbd062eaa9108d092b84c115e3";
      const popularRes = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
      );
      const topRatedRes = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
      );
      const upcomingRes = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
      );
      if (!upcomingRes.ok || !topRatedRes.ok || !popularRes.ok) {
        throw new Error("Failed to fetch movies");
      }
      const popularData = await popularRes.json();
      const topRatedData = await topRatedRes.json();
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

      setFetching(false);
    } catch (err) {
      console.error(err);
      setFetching(false);
      setError(true);
    }
  }

  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  const handleBookmark = (movie) => {
    setWatchlist((prev) => {
      const bookmarked = prev.some((savedMovie) => savedMovie.id === movie.id);
      if (bookmarked) {
        return prev.filter((savedMovie) => savedMovie.id !== movie.id);
      }
      return [...prev, movie];
    });
    setWatched((prev) =>
      prev.filter((savedMovie) => savedMovie.id !== movie.id),
    );
  };
  const [watched, setWatched] = useState(() => {
    const savedWatched = localStorage.getItem("watched");
    return savedWatched ? JSON.parse(savedWatched) : [];
  });
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  const handleWatched = (movie) => {
    setWatched((prev) => {
      const watched = prev.some((savedMovie) => savedMovie.id === movie.id);
      if (watched) {
        return prev.filter((savedMovie) => savedMovie.id !== movie.id);
      }
      return [...prev, movie];
    });
    setWatchlist((prev) =>
      prev.filter((savedMovie) => savedMovie.id !== movie.id),
    );
  };

  return (
    <>
      <Navbar
        logoName={"Movie Review"}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        movies={allMovies}
      >
        <a href="#Popular">Popular</a>
        <a href="#Top_Rated">Top Rated</a>
        <a href="#Upcoming">Upcoming</a>
        <a href="#Watchlist">Watchlist</a>
        <a href="#Watched">Watched</a>
      </Navbar>
      <main className="mainC">
        {fetching && <p style={{ textAlign: "center" }}>Loading movies...</p>}
        {error && (
          <div className="errorC">
            <p>Unable to load movies.</p>
            <button onClick={getMovies}>Try again</button>
          </div>
        )}
        {!fetching && !error && (
          <>
            <Movies
              sectionTitle="Popular"
              movies={movies.popular}
              watchlist={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />
            <Movies
              sectionTitle="Top_Rated"
              movies={movies.top_rated}
              watchlist={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />
            <Movies
              sectionTitle="Upcoming"
              movies={movies.upcoming}
              watchlist={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />
          </>
        )}
        {!fetching && (
          <>
            <Watchlist
              movies={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />

            <Movies
              sectionTitle="Watched"
              movies={watched}
              watchlist={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />
          </>
        )}
      </main>
      <Footer>
        <a href="#Popular">Popular</a>
        <a href="#Top_Rated">Top Rated</a>
        <a href="#Upcoming">Upcoming</a>
      </Footer>
    </>
  );
}

export default App;
