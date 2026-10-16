import { useEffect } from "react";

const movies = () => {
  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    const key = `426e3d03941f8dac8e95c16d9881b22a`;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    );
    const data = await res.json();
    console.log(data);
  }
  return <div></div>;
};

export default movies;
