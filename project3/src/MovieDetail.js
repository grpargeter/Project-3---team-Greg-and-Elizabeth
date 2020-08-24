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
      imdbID: ""
    };
  }
  componentDidMount = (props) => {
    console.log(this.props)
    axios
      .get(`http://www.omdbapi.com/?apikey=4d3f7a95&page=1&i=${this.props.match.params.imdbID}`)
      .then((response) => {
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
         <h1>{this.state.title}</h1> <h4>({this.state.year})</h4> 
         <h4>Rated {this.state.rated}</h4>  
         {this.state.genre}<br></br>
        <img src={this.state.poster} alt=""/>
        <h4>Plot</h4>
        {this.state.plot}
         <h4>Actors</h4>
        {this.state.actors}
        <h4>Director</h4>
        {this.state.director}
        {this.state.reviews}
      </div>
    );
  }
}

export default MovieDetail;
