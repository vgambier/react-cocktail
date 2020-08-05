import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { MOCK } from './Mock';

function Recipe() {
  return (

    <div className="Recipe">

      <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src={MOCK[0].picture} />
        <CardBody>
          <CardTitle>{MOCK[0].name}</CardTitle>
          <CardText>{MOCK[0].description}</CardText>
        </CardBody>
      </Card>

    </div >
  );
}

export default Recipe;
