import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      rated: "",
      genre: "",
      director: "",
      actors: "",
      plot: "",
      ratings: [],
      poster: "",
      imdbID: "",
    };
  }
  componentDidMount = (props) => {
    console.log(this.props);
    axios
      .get(
        `http://www.omdbapi.com/?apikey=4d3f7a95&page=1&i=${this.props.match.params.imdbID}`
      )
      .then((response) => {
        console.log(response.data);
        let ratings = response.data.Ratings.map((rating) => {
          return (
            <h4>
              {rating.Source} = {rating.Value}
            </h4>
          );
        });
        this.setState({
          title: response.data.Title,
          year: response.data.Year,
          rated: response.data.Rated,
          genre: response.data.Genre,
          director: response.data.Director,
          actors: response.data.Actors,
          plot: response.data.Plot,
          ratings: ratings,
          poster: response.data.Poster,
        });
      });
  };

  render() {
    return (
      <div className="wholepage">
        <nav className="homepage">
          <Link to="/">return to Movie Home Page</Link>
          <br></br>
          <Link to="/MovieTrivia">check out some movie trivia</Link>
        </nav>
        <div className="header">
          {" "}
          <h2>{this.state.title}</h2>
        </div>
        <div className="content">
          <div className="leftside">
            <img
              className="poster"
              src={this.state.poster}
              alt="no poster available"
            />
          </div>
          <div className="rightside">
            <h4>Year: {this.state.year}</h4>
            <h4>Rated: {this.state.rated}</h4>
            <h4>Genre: {this.state.genre}</h4>
            <h4>Plot: {this.state.plot}</h4>
            <h4>Actors: {this.state.actors}</h4>
            <h4>Director: {this.state.director}</h4>
            {this.state.ratings}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
