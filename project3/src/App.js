import React, { Component } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieId: "",
      initialMovie: [],
      title: "",
      poster: "",
    };
  }
  componentDidMount = () => {
    this.getMovies();
  };
  getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s=summer&apikey=4d3f7a95&page=1`)
      .then((response) => {
        // let movieArray = [response.data.Search];
        console.log(response.data.Search[0].Poster);
        this.setState({
          title: response.data.Search[1].Title,
          poster: response.data.Search[1].Poster,
        });
      });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <img src={this.state.poster} alt="" />
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
