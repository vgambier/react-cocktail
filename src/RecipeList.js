import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import { Card, Input, Button } from 'reactstrap';
import './RecipeList.css';
import useAxios from 'axios-hooks';

export const baseURL = "http://10.0.1.182:8080/api/v1";

function RecipeList() {

    const [{ data, loading, error }] = useAxios(`${baseURL}/recipes`); // Connecting to the server (back-end)
    const [recipeList, setRecipeList] = useState(data); // Grabbing data from the dataset
    const [addMode, setAddMode] = useState(false);

    // HTML POST, DELETE, EDIT methods

    const [{ data: dataAdd }, executeAdd] = useAxios({
        url: `${baseURL}/recipes`,
        method: "POST"
    }, { manual: true });

    const [{ }, executeDelete] = useAxios({
        method: "DELETE"
    }, { manual: true });

    const [{ data: dataEdit }, executeEdit] = useAxios({
        url: `${baseURL}/recipes`,
        method: "PUT"
    }, { manual: true });

    useEffect(() => setRecipeList(data), [data, dataAdd, dataEdit]);

    // Adding logic
    const newRecipe = {};

    function handleSubmit() {
        setAddMode(!addMode);
        executeAdd({ data: newRecipe }).then(
            response => { recipeList.push({ ...newRecipe, id: response.data }) });
        setRecipeList(recipeList.concat([newRecipe])); // Allows temporary display of recipe upon adding while waiting for asynchronous back-end updating
    }

    // Deleting logic
    function deleteRecipe(id) {
        executeDelete({ url: `${baseURL}/recipes/${id}` });
        setRecipeList(recipeList.filter(recipe => recipe.id !== id));
    }

    // Editing logic
    function editRecipe(updatedRecipe) {
        executeEdit({ data: updatedRecipe });
        recipeList.push(updatedRecipe);
    }

    return (

        <div className="RecipeList">
            {recipeList && recipeList.map( // We need to check that recipeList is not undefined because of asynchronicity
                recipe =>
                    <Recipe key={recipe.id} recipe={recipe} delete={deleteRecipe} edit={editRecipe} />
            )}

            {!addMode ?

                <Button onClick={() => setAddMode(!addMode)}>Add</Button>

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
