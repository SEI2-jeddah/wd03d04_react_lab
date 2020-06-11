import React from 'react';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const  Fave = ({isFave, onFaveToggle,handleDetailsClick,data }) => { 


// const [isFave] = useState(false);
  //  const [isFave, toggle] = useState(false);

// {console.log(handleDetailsClick, isFave)}

    return <div onClick={() => onFaveToggle()} className="film-row-fave add_to_queue">

    {!isFave ? <p onClick={()=> handleDetailsClick(data)} className="material-icons"><FcLikePlaceholder/></p> :<p className="material-icons"><FcLike/></p> }

  </div>
}
export default Fave