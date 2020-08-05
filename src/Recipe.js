import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './Recipe.css';

function Recipe(props) {

  const [recipe, setRecipe] = useState(props.recipe);  // We can now access a recipe by just typing "recipe" instead of "props.recipe"
  const { id, picture, name, description } = recipe; // We can now access attributes by just typing "picture" instead of "recipe.picture"

  return (

    <div className="Recipe">

      <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src={picture} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <Button onClick={() => props.delete(id)}>Delete</Button>
        </CardBody>
      </Card>

    </div >
  );
}

export default Recipe;
