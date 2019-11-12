import React from 'react';

function Fave(props){

   const handleFaveClick = (e) => {
        e.stopPropagation()

        props.onFaveToggle()
    }
    const isFave = props.isFave ? 'remove_from_queue' : 'add_to_queue'
    const message = props.isFave ? "remove_from_queue" : "add_to_queue"

    return ( 
        <div  onClick={handleFaveClick} className={`film-row-fave ${isFave}`}  >
            <p className="material-icons">{message}</p>
        </div>
    );
    
}
 
export default Fave;