import React from "react";
import "./Trivia.css";
import TriviaItem from "./TriviaItem";

let TriviaGrid = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <TriviaItem key={item.id} item={item}></TriviaItem>
      ))}
    </div>
  );
};

export default TriviaGrid;
