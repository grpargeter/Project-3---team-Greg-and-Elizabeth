import React, { Component } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieId: "",
    };
  }
  render() {
    return (
      <div className="App">
        Hello Project 3
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
