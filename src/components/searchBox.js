import React from "react";


const SearchBox=(props)=>{
    const input =document.getElementById("inputValue")
    const removeText=()=>{
        props.setSearchItem('')
        input.value=""
    }
    return(
        <div className="SearchInput">
            <i className="fa-solid fa-magnifying-glass search"></i>
            <input id="inputValue" placeholder="Search" value={props.value} onChange={(event)=>props.setSearchItem(event.target.value)}  />
            <i className="fa-solid fa-xmark wrong" onClick={removeText} ></i>
        </div>
    );
}

export default SearchBox