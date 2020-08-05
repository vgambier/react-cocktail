import React, { useState } from 'react';
import { MOCK } from './Mock';
import Recipe from './Recipe';
import { Card, Input, Button } from 'reactstrap';
import './RecipeList.css';

function RecipeList() {

    const [recipeList, setRecipeList] = useState(MOCK);
    const [addMode, setAddMode] = useState(false);

    const newRecipe = [];

    function deleteRecipe(id) {
        setRecipeList(recipeList.filter(recipe => recipe.id != id))
    }

    function handleSubmit() {
        newRecipe.id = recipeList.length; // Dirty workaround
        setAddMode(!addMode);
        recipeList.push(newRecipe);
    }

    return (

        <div className="RecipeList">
            {recipeList.map(
                recipe =>
                    <Recipe key={recipe.id} recipe={recipe} delete={deleteRecipe} />
            )}

            {!addMode ?

                <Button onClick={() => setAddMode(!addMode)}>Edit</Button>

                :

                <Card>
                    <Input placeholder="Mojito" onChange={e => newRecipe.name = e.target.value} />
                    <Input placeholder="Sweet and sour cocktail" onChange={e => newRecipe.description = e.target.value} />
                    <Input placeholder="https://example.org/mojito.jpg" onChange={e => newRecipe.picture = e.target.value} />
                    <Button onClick={(event) => handleSubmit()}>Confirm</Button>
                </Card>
            }
        </div>
    );

}
export default RecipeList;
