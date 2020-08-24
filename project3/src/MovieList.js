import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

const MovieList = (props) => {
  let movies = props.movieArray.map((movie) => {
    return (
  <div className="MovieCode" key={movie.imdbID}>
    <Link to={"/MovieDetail/" + movie.imdbID}>
      <h4>{movie.Title}</h4>
         <img src={movie.Poster} alt="" />
    </Link>
  </div>
    );
  });
  return <div className="gallery">{movies}</div>;
};

export default MovieList;
