import React, { useState } from 'react';
import { MOCK } from './Mock';
import Recipe from './Recipe';
import './RecipeList.css';

function RecipeList() {

    const [recipeList, setRecipeList] = useState(MOCK);

    function deleteRecipe(id) {
        setRecipeList(recipeList.filter(recipe => recipe.id != id))
    }

    return (

        <div className="RecipeList">
            {recipeList.map(
                recipe =>
                    <Recipe key={recipe.id} recipe={recipe} delete={deleteRecipe} />
            )}
        </div>
    );
}

export default RecipeList;
