import React, { Component } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import MovieTrivia from "./Triva Components/MovieTrivia";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieId: "",
      movieArray: [],
      title: "",
      poster: "",
      search: "",
      triviaArray: [],
    };
  }
  componentDidMount = () => {
    this.getMovies();
  };
  getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s=vegas&type=movie&apikey=4d3f7a95&page=1`)
      .then((response) => {
        this.setState({
          movieArray: response.data.Search,
          title: response.data.Search[0].Title,
          poster: response.data.Search[0].Poster,
          movieId: response.data.Search[0].imdbID,
        });
      });
  };

  getTrivia = async () => {
    let response = await axios(
      `https://opentdb.com/api.php?amount=25&category=11`
    );
    console.log(response);
    this.setState({
      triviaArray: response,
    });
  };

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.search}&type=movie&apikey=4d3f7a95`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          movieArray: response.data.Search,
        });
      });
    console.log(this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1> Welcome_to_The_Movies!!!</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="keyword search"
              onChange={this.handleSearch}
            />
            <input type="submit" value="submit" />
          </form>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <MovieList movieArray={this.state.movieArray} />}
            />
            <Route
              path="/MovieDetail/:imdbID"
              render={(routerProps) => <MovieDetail {...routerProps} />}
            />
            <Route path="/MovieTrivia/" component={MovieTrivia} />
          </Switch>
        </main>
        <footer>
          This Awesome Movie App was created by Elizabeth and Greg!!
        </footer>
      </div>
    );
  }
}

export default App;
