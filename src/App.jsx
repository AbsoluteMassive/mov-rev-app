import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Navbar from "./assets/components/nav/Navbar";
import Movies from "./assets/components/Movies/Movies";
import { useState } from "react";

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  return (
    <>
      <Navbar
        logoName={"Movie Review"}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
      >
        <a href="#Popular">Popular</a>
        <a href="#Top Rated">Top Rated</a>
        <a href="#Upcoming">Upcoming</a>
      </Navbar>
      <main className="mainC">
        <Movies sectionTitle="Popular" />
        <Movies sectionTitle="Top Rated" />
        <Movies sectionTitle="Upcoming" />
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
