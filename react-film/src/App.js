import React, { Component } from "react";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import axios from "axios";
import "./index.css";
import "./normalize.css";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);

  }


   handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    axios.get(url)
    .then(res =>{
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: res.data })
    })
    .catch(err =>{
      console.log(err);
      
    })
    
  };

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();

    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      console.log(`removing ${film.title} to the array`);
      faves.splice(faves.indexOf(film), 1);
    } else {
      console.log(`adding ${film.title} to the array`);
      faves.push(film);
    }
    this.setState({ faves });
  };

  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            handleDetailsClick={this.handleDetailsClick}
          />
        </div>
        <FilmDetails current={this.state.current}/>
      </div>
    );
  }
}

export default App;
