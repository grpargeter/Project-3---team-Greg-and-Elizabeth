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
      movieArray: [],
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
          movieArray: response.data.Search,
          title: response.data.Search[0].Title,
          poster: response.data.Search[0].Poster,
        });
        console.log(this.movieArray)
      });
  };
  render() {
    return (
      <div className="App">
        <nav>
          <h1> Welcome to Movie Search</h1>
          <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <input onClick={this.handleSubmit} type="submit" value="submit" />
        </form>
        </nav>
        <MovieList movieArray={this.state.movieArray}/>
        <MovieDetail />
      </div>
    );
  }
}

export default App;
