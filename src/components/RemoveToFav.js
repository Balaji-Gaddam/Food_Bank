import React from "react";
import "../components/Food_bank.css"

const RemoveFavourites=()=>{
    return(
        <div className="addto_fav">
            <button><i className="fa-solid fa-circle-xmark"></i>Remove</button>
        </div>
    );
}

export default RemoveFavourites;