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
        <a href="#">link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
      </Navbar>
      <main className="mainC">
        <Movies />
      </main>
      <Footer>
        <a href="#">Link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
      </Footer>
    </>
  );
}

export default App;
