import React from 'react'
import FilmRow from './FilmRow'
const FilmListing = (props) => {
    let allFilms = props.db.films.map( (film, index) => (<FilmRow filmTitle={film.title} 
    filmId={film.id} filmDate={new Date().getFullYear(film.release_date)} filmPoster={film.poster_path}/>));
    return (
        <div>
        <h1 className="section-title">FILMS</h1> 
        <div>
            {allFilms}
        </div>
        </div>
        
    )
}

export default FilmListing
