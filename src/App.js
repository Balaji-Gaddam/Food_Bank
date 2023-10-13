import Food_items from "./components/Food_items";
import { Routes,Route } from "react-router-dom";
import RecipeInfo from "./components/RecipeInfo";
function App() {
  return (
   <>
      <Routes>
      <Route path="/" element={<Food_items />}/>
      <Route path="/:MealId" element={<RecipeInfo/>}></Route>
      </Routes>
   </>
  );
}

export default App;
