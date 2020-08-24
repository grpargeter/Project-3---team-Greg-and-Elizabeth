import React, { Component } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import axios from "axios";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieId: "",
      movieArray: [],
      title: "",
      poster: "",
      search: "",
    };
  }
  componentDidMount = () => {
    this.getMovies();
  };
  getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s=summer&apikey=4d3f7a95&page=1`)
      .then((response) => {
        this.setState({
          movieArray: response.data.Search,
          title: response.data.Search[0].Title,
          poster: response.data.Search[0].Poster,
          movieId: response.data.Search[0].imdbID,
        });
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
      .get(`http://www.omdbapi.com/?s=${this.state.search}&apikey=4d3f7a95`)
      .then((response) => {
        console.log(response);
        this.setState({    
          movieArray: response.data.Search,
        });
      });
      // console.log(this.props)
      // this.props.history.push("/")
      
  };

  render() {
     return (
      <div className="App">
        <nav>
          <h1> Welcome to Movie Search</h1>
          <Link to='/'>MovieList</Link>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleSearch}
            />
             <input type="submit" value="submit" />
          </form>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <MovieList movieArray={this.state.movieArray} />}
            />
            <Route
              path="/MovieDetail/:imdbID"
              render={(routerProps) => (
                <MovieDetail
                  {...routerProps}/>
              )}
            />
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
