import React from 'react'
import "../components/Food_bank.css"
import { useNavigate } from 'react-router-dom'

function Food_Card(props) {
    const FavouriteComponent = props.favoutiteComponet
    let navigate=useNavigate();
  return (
    <div className='Main_card'>
        {props.foodItem.map((FoodItems,index)=>
            
                <div className='Food_card' key={FoodItems.idMeal} >
                    <img src={FoodItems.strMealThumb} alt="food_bank"/>
                    <h4>{FoodItems.strMeal}</h4>
                    <div className='button_div'>
                    <div onClick={()=>props.handlefavouritesClick(FoodItems)} className='Card_button'>
                    <FavouriteComponent />
                    </div >
                    <button onClick={()=>{navigate(`/${FoodItems.idMeal}`)}}>Details</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Food_Card