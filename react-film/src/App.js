import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmListing from "./FilmListing";
import TMND from "./TMDB";
class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing films={TMND.films} />
        </div>
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;
