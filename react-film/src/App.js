import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import './App.css';
import TMDB from './TMDB'


function App() {
  return (
  <div className="film-library">
  <div className="film-list">
  <FilmListing db={TMDB}/>
 
  </div>
  <div className="film-details">
  <FilmDetails />
 
  </div>
  </div>
  );
}

export default App;
