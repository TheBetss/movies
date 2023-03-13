import React from "react";
import { NotFoundPage } from "./404";
import Movie from "./Movie";
export default function Movies(props) {
  const {movies = []} = props;
  
  return (
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} />
      )) : <NotFoundPage />}
    </div>
  )
}