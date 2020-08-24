import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://www.omdbapi.com/?apikey=4d3f7a95&page=1&i=tt0111161`)
      .then((response) => {
        console.log(this.movieId);
        // const movieId = this.props.match.params.movieId;
        // for (let i = 0; i < response.data.length; i++) {
        //   if (response.data[i].imdbID == movieId)
        {
          this.setState({
            title: response.data.Title,
            year: response.data.Year,
            rated: response.data.Rated,
            genre: response.data.Genre,
            director: response.data.Director,
            actors: response.data.Actors,
            plot: response.data.Plot,
            ratings: response.data.Ratings,
            poster: response.data.Poster,
          });
        }
      });
  };

  render() {
    return (
      <div className="wholepage">
        <h2>Movie Detail</h2>
        <h1>{this.state.title}</h1>
        <img src={this.state.poster} alt="" />
        <h4>Plot</h4>
        {this.state.plot}
        <h4>Actors</h4>
        {this.state.actors}
        <br></br>
        {this.state.director}
        {this.state.reviews}
      </div>
    );
  }
}
export default MovieDetail;
