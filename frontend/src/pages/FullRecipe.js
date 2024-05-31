import { useParams } from "react-router-dom"
import FullRecipeCard from "../components/FullRecipeCard"

/*export default function FullRecipe() {
    const {id} = useParams();
    return (
        <div>
            <FullRecipeCard food={id}/>
        </div>
       
    )
}*/
const FullRecipe=() => {
    const{id} = useParams();
    return(
        <div>
            <FullRecipeCard food={id}/>
        </div>
    );
};

export default FullRecipe;