import React, { Component } from 'react';
import FilmRow from './FilmRow';


class FilmListing extends Component {

    constructor(props){
        super(props)
        this.state = {
            filters: "all"
        }   
    }

    handleFilterClick(filter){
        this.setState({
            filters: filter
        });
    }

    render(){
        
        const { films, faves} = this.props;
        let showFilms = [];
        const allFilms = films.map((film) => <FilmRow key={film.id} film={film} isFave={faves.includes(film)} onFaveToggle={() => this.props.onFaveToggle(film)}  handleDetailsClick ={this.props.handleDetailsClick}/>)
        const favesFilms = faves.map((film) => <FilmRow key={film.id} film={film} isFave={faves.includes(film)} onFaveToggle={() => this.props.onFaveToggle(film)} handleDetailsClick ={this.props.handleDetailsClick}/>)
        this.state.filters === "all" ? showFilms = allFilms : showFilms = favesFilms
       
        return(
            <div className="film-list" >
                <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filters === 'all' ? 'is-active' : ''}`}>
                            ALL
                            <span className="section-count">{films.length}</span>
                        </div>
                        <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filters === 'faves' ? 'is-active' : ''}`}>
                            FAVES
                            <span className="section-count">{faves.length}</span>
                        </div>
                     </div>
                        {showFilms}       
            </div>
        );
    }
}


export default FilmListing;



