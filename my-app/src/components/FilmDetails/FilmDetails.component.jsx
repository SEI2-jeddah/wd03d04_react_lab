import React from "react";
// import './FilmDetails.styles.scss'
const FilmDetails = ({ film }) => {
  film ? console.log(film) : console.log("no film yet");
  return (
    <div className="film-details">
            <h1 className="section-title">DETAILS</h1>

      {!film ? 
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
       : 
       <div className="film-detail is-hydrated">
  <figure className="film-backdrop">
    <img src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt="" />
    <h1 className="film-title">{film.title}</h1>
  </figure>

  <div className="film-meta">
    <h2 className="film-tagline">{film.tagline}</h2>
    <p className="film-detail-overview">
      <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} className="film-detail-poster" alt={film.title} />
      {film.overview}
    </p>
  </div>
</div>
      }
    </div>
  );
};

export default FilmDetails;
