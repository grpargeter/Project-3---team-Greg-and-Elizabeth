import React from 'react'

let TriviaItem = ({ item }) => {
    console.log(item)
    return (
        <div className='triviacard'>
        <div className='card-inner'>
        <div className='card-front'>
           <h3> {decodeURIComponent(item.question)} </h3>
            </div>
        <div className='card-back'>
        <h3><strong>{decodeURIComponent(item.correct_answer)}</strong> </h3>
        </div>
        </div>
      </div>
    )
  }
export default TriviaItem