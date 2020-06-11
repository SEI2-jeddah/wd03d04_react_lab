import React, {useState} from 'react'
// import './FilmListing.styles.scss'
import FilmRow from '../FilmRow/FilmRow.component'
const FilmListin = ({data, handleFaveToggle, faves, handleDetailsClick}) => {
    const [filter, setfilter] = useState('all') 

      const  handleFilterClick=(filter) => {
        setfilter(filter)
            console.log(`Setting filter to ${filter}` )
        }

        return (
   <div className="film-list">
               <h1 className="section-title">FILMS</h1>
               {filter === 'all' ?  
                  data.films.map((el, i ) => 
                <FilmRow key={i} handleFaveToggle={handleFaveToggle} data={el} id={i} handleDetailsClick={handleDetailsClick}/>
            )
            :
            faves.length >= 1 ? 
            faves.map((el, i ) => 
                <FilmRow key={i} handleFaveToggle={handleFaveToggle} data={el} id={i}/>
            ) 
            :
            <h2>NO FAVES yet go add some </h2>            
              }
        
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
            ALL
            <span className="section-count">{data.length}</span>
        </div>
        <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{faves.length}</span>

        </div>
    </div>

    {/* {allFilms} */}
</div>
        )
    
}

export default FilmListin