import React from 'react'

const FilmPoster = ({data}) => {
    return <div>
    <img src={`https://image.tmdb.org/t/p/w780/${data}`} alt="pic" />

    </div>
}

export default FilmPoster;