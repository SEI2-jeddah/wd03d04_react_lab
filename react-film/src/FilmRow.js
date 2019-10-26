import React from 'react'
import FilmPoster from './FilmPoster'
const FilmRow = (props) => {
    
    return (
<div className="film-row">
  <FilmPoster filmPoster={props.filmPoster}/>

  <div className="film-summary">
    <h1>{props.filmTitle}</h1>
    <p>{props.filmDate}</p>
  </div>
</div>
    )
}

export default FilmRow
