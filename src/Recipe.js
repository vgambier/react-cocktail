import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Input, Table } from 'reactstrap';
import './Recipe.css';

function Recipe(props) {

  const [recipe, setRecipe] = useState(props.recipe);  // We can now access a recipe by just typing "recipe" instead of "props.recipe"
  const [editMode, setEditMode] = useState(false);
  const { id, picture, name, description } = recipe; // We can now access attributes by just typing "picture" instead of "recipe.picture"


  return (

    <div className="Recipe">

      {!editMode ?

        <Card style={{ width: '18rem' }}>
          <CardImg variant="top" src={picture} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>

            <Button onClick={() => props.delete(id)}>Delete</Button>
            <Button onClick={() => setEditMode(!editMode)}>Edit</Button>
          </CardBody>
        </Card>

        :

        <Card>
          <Input defaultValue={name} onChange={e => setRecipe({ ...recipe, name: e.target.value })} />
          <Input defaultValue={description} onChange={e => setRecipe({ ...recipe, description: e.target.value })} />
          <Input defaultValue={picture} onChange={e => setRecipe({ ...recipe, picture: e.target.value })} />
          <Button onClick={() => setEditMode(!editMode)}>Validate</Button>
        </Card>

      }

    </div >
  );
}

export default Recipe;
