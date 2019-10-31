import React from "react";
import FilmRow from "./FilmRow";
import { Component } from "react";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = filter => {
    this.setState({
      //es 6 syntax for making a key with the same name as the variable
      filter
    });
    console.log(filter);
  };
  render() {
    let moviesArr = this.state.filter === "faves" ? "faves" : "films";
    const allFilms = this.props[moviesArr].map((film) => (
      <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        handleDetailsClick={() => this.props.handleDetailsClick(film)}
      />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
