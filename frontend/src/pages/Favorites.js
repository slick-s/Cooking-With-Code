import RecipeCard from "../components/RecipeCard"
import FavoritesCard from "../components/FavoritesCard"
import toast, { Toaster } from 'react-hot-toast';

export default function Favorites() {
    return (
        <div>
            <h1>Favorites Recipes</h1>
            <FavoritesCard/>
        </div>
       
    )
}