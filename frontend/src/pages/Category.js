import { useParams } from "react-router-dom"
import RecipeCardIngredient from "../components/RecipeCardIngredient";


const Category=() => {
    const{id} = useParams();
    return(
        <div>
            <RecipeCardIngredient category={id}/>
        </div>
    );
};

export default Category;