
import FilmRow from './FilmRow'
import React, { Component } from 'react'

export default class     extends Component {
    constructor(props) {
        super(props);
        this.state = {
        filter: "all"
        }
    }
     allFilms = this.props.db.films.map( (film, index) => (<FilmRow filmTitle={film.title} 
        filmId={film.id} filmDate={new Date().getFullYear(film.release_date)} filmPoster={film.poster_path}/>));
   
   
            
               handleFilterClick = filter => {
                   this.setState ({
                   filter: filter
                   });
                   console.log(filter);
               };
    render() {

        return (
            <div>
         <div className="film-list">
     <h1 className="section-title">FILMS</h1>
     <div className="film-list-filters">
         <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={()=> this.handleFilterClick('all')}>
             ALL
             <span className="section-count">{this.props.db.films.length}</span>
         </div>
         <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={()=> this.handleFilterClick('faves')}>
             FAVES
             <span className="section-count">0</span>
         </div>
   </div>

    {this.allFilms}
 </div>
        </div>
        )
    }
}


