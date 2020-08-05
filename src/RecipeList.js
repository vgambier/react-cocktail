import React from 'react';
import { MOCK } from './Mock';
import Recipe from './Recipe';

function RecipeList() {
    return (

        <div>
            {
                MOCK.map(element =>
                    <div>
                        <Recipe recipe={element} />
                    </div>
                )
            }
        </div>
    );
}

export default RecipeList;
