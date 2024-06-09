import { useParams } from "react-router-dom"
import FullRecipeCard from "../components/FullRecipeCard"

const FullRecipe=() => {
    const{id} = useParams();
    return(
        <div>
            <FullRecipeCard food={id}/>
        </div>
    );
};

export default FullRecipe;