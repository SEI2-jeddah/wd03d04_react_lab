import React, {useState} from 'react'
// import './FilmRow.styles.scss'
import FilmPoster from './FilmPoster'
import Fave from '../Fave/Fave.component'



const FilmRow  = ({data, handleFaveToggle, key, id, handleDetailsClick}) => {

  const [isFave, toggle] = useState(false);

  const onFaveToggle = () => {
// console.log({isFave})
    toggle(!isFave)
    handleFaveToggle({...data, id})
    
}

    return <div  className="film-row"   >
    <FilmPoster data={data.poster_path}/>
    <div className="film-summary" onClick={() => {handleDetailsClick(data)}}>
    <Fave onFaveToggle={onFaveToggle} isFave={isFave} handleDetailsClick={handleDetailsClick} data={data} />
      <h1 >TITLE</h1>
      <h2 >{data.title}</h2>
      <p>YEAR</p>
      <p>{data.release_date}</p>
    </div>
  </div>
}
export default FilmRow