import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import "../components/Food_bank.css"




const RecipeInfo =()=>{
    const{MealId}=useParams();
    const[item,setitem]=useState()
    if(MealId!="")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setitem(data.meals[0])
        })
    }
  return (
   <>
    {(!item)?<center><h1>Loading...</h1></center>:(<>
    <div className='content'>
        <img className='Recipe_img' src={item.strMealThumb} alt={item.strMeal}/>
       <div className='Recipe_Discription'>
        <h1>Dish Name:{item.strMeal}</h1>
        <p><b>Category:</b>{item.strCategory}</p>
        <p><b>Area:</b>{item.strArea}</p>
        <p><b>Recipe Discription: </b><br/>{item.strInstructions}</p>
        <button><a href={item.strYoutube}>Preparation Video</a></button>
       </div>
    </div>
    </>)}
   </>
  )
}

export default RecipeInfo