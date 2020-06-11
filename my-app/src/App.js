import React ,{useState} from 'react';
import './App.css';
import TMDB from "./TMDB"
import FilmDetails from './components/FilmDetails/FilmDetails.component'
import FilmListin from './components/FilmListing/FilmListing.component'
import axios from 'axios'
const App = () => {

   const [films, setFilms] = useState(TMDB)
   const [faves, setfaves] = useState([])
   const [current, setCurrent] = useState(null)
//    const  [state, set] = useState({})
//    const setState= (obj)=> {
//         set({...state, obj})
//    }
const handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
        method: 'GET',
        url: url
    }).then(response => {
        // console.log(response) // take a look at what you get back!
        console.log(`Fetching details for ${film.title}`);
        setCurrent(response.data)
      })
}
   const handleFaveToggle =  (data) => {
    // check for faves 
    let liked = false
    faves.forEach(obj => {
        if(obj.id == data.id) {liked =true }
    })
    if (liked){
        //remove like
        let list = faves.filter(obj => obj.id !== data.id)
        setfaves(list) 
    }else {
        //add like
        setfaves([...faves, data])
    }
 }
    return (
        
  <div className="App">
      <div className="film-library">

      <FilmListin data={films} handleFaveToggle={handleFaveToggle} faves={faves} handleDetailsClick={handleDetailsClick}/>
      <FilmDetails film ={current}/>

     

</div>
    </div>
    );
  

}

export default App;
