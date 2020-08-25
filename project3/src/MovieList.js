import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  let movies = props.movieArray.map((movie) => {
    return (
      <div className="MovieListWholePage" key={movie.imdbID}>
        <Link to={"/MovieDetail/" + movie.imdbID}>
          <div className="card">
            <img src={movie.Poster} alt="No Poster Available" />
            <div className="container">
              <h4>{movie.Title}</h4>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="gallery">{movies}</div>;
};

export default MovieList;
