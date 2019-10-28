import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
const FilmRow = (props) => {
let handleDetailsClick = (film) => {
  console.log('Fetching details for');
  
}

    return (

<div className="film-row" onClick={()=> handleDetailsClick('Hello')}>
  <FilmPoster filmPoster={props.filmPoster}/>

  <div className="film-summary">
    
    <h1>{props.filmTitle}</h1>
    <p>{props.filmDate}</p>
  </div>
  <Fave /> 
</div>
    )
}

export default FilmRow
