import React, { Component } from 'react'
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import "./index.css";
import "./normalize.css";
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(props){
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state = {
    fillms : TMDB.films,
    faves : [],
    current : {},

  }
  handleFaveToggle =(movie) => {
    const faves = [...this.state.faves]
    const index = faves.indexOf(movie)
    index !== -1? faves.push(movie) : faves.splice(index, 1)
    this.setState({faves})
    console.log(faves, movie)
  }

  render() {
   
  
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmListing fillm=  {this.state.fillms} faves={this.state.faves} onFaveToggle= {this.handleFaveToggle} />
      </div>
        <FilmDetails current= {this.state.current} />

    </div>
  );
}
  
  }

