import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function Recipe(props) {
  return (

    <div className="Recipe">

      <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src={props.recipe.picture} />
        <CardBody>
          <CardTitle>{props.recipe.name}</CardTitle>
          <CardText>{props.recipe.description}</CardText>
        </CardBody>
      </Card>

    </div >
  );
}

export default Recipe;
