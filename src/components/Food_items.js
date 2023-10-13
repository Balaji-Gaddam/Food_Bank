import React, { useEffect, useState } from 'react'
import Food_Card from './Food_Card'
import "../components/Food_bank.css"
import Heading from './Heading'
import AddtoFavourites from './AddToFav'
import RemoveFavourites from './RemoveToFav'
import SearchBox from './searchBox'
import Home_page from './Home_page'



const URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=`


const Food_items = () => {
    const [foodItem, setFoodItem]=useState([])
    const [searchItem,setSearchItem]=useState('')
    const[favourites, setFavourites]=useState([])
    const [loading,setLoading]=useState(false)
    const[IsError,setError]=useState({status:false,msg:''})

    const fetchingData=async(url)=>{
        setLoading(true)
        setError({status:false,msg:''})
        try {
            const response= await fetch(url)
        const {meals}=await response.json()
        if(meals){
            setFoodItem(meals)
        }
        setLoading(false)
        setError({status:false,msg:''})
        if(!meals && searchItem !=0){
            throw new Error("Dish Not Found")
        }

        } catch (error) {
            setLoading(false)
            setError({status:true,msg:error.message || "something went wrong"})
        }
        
    }
  

    useEffect(()=>{
        const originalUrl=`${URL}${searchItem}`
        fetchingData(originalUrl)
    },[searchItem])


    
   useEffect(()=>{
    const foodFavourites= JSON.parse(
        localStorage.getItem("fav_food_items")
    );
    setFavourites(foodFavourites)
   },[])



    const saveToLocalStorage =(items)=>{
        localStorage.setItem("fav_food_items", JSON.stringify(items))
    }




    
    const AddFavouriteMovie=(FoodItems)=>{
        
        const newFavouriteList=[...favourites,FoodItems]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList) 
        
    }


    const RemoveFavouriteMovie=(FoodItems)=>{
        const newFavouriteList = favourites.filter((favourite)=> favourite.idMeal !== FoodItems.idMeal )
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

  return (
    <>
    <div className='nav_div'>
        <Heading Heading="Food_Bank"/>
       <SearchBox searchItem={searchItem} setSearchItem={setSearchItem}/> 
    </div>
    
    <div>
   
    {!loading && !IsError?.status && searchItem ==0 && <div><Home_page /></div>}
        {loading && !IsError?.status&&<center><h1>Loading.......</h1></center>}
        {IsError?.status&&<center><h1  style={{color:"red"}}>{IsError.msg}</h1></center>}
        {!loading && !IsError?.status&&
           searchItem?.length?  <Food_Card foodItem={foodItem} handlefavouritesClick={AddFavouriteMovie} favoutiteComponet={AddtoFavourites}/>:""
        }
    </div>
    <hr/>
    <div>
        <Heading Heading="favourites"/>
    </div>
    <div>
        <Food_Card foodItem={favourites} handlefavouritesClick={RemoveFavouriteMovie} favoutiteComponet={RemoveFavourites}/>
    </div>
    
    </>
  )
}

export default Food_items