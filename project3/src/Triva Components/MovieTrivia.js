import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Trivia.css";
import TriviaGrid from "./triviagrid"

const MovieTrivia = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getTrivia = async () => {
  let response = await axios(`https://opentdb.com/api.php?amount=100&category=11&encode=url3986`);
  console.log(response.data.results[0]);
  setItems(response.data.results)
  }
  getTrivia()
}, [])

return(
  <div>
  <nav className="homepage">
          <Link to="/">return to Movie Home Page</Link><br></br>

  </nav>
    <TriviaGrid items={items} />
  </div>
  )
}


export default MovieTrivia