import React from "react";
import "./App.css";
import {Link} from 'react-router-dom'

const MovieList = props => {
  let movies = props.movieArray.map(movie => {
    return (
      <div> 
        <h2>{movie.Title}</h2>

<img src={movie.Poster} alt=""/>
      </div>
    );
  });
  return <div className = "gallery">{movies}</div>;
};

export default MovieList;
