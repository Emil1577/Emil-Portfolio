import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
import myPetLogo from '../../assets/header-logo.png';
import planetX from '../../assets/headerImg.jpg';
import futureTrain from '../../assets/train.jpeg';
import goldenState from '../../assets/Paintedladies.jpeg';

export default function Portfolio() {
  return (

    <CardGroup >

    <Card style={{ width: '25rem', padding: '20px' }}>
      <Card.Img variant="top" src={myPetLogo} />
      <Card.Body>

        <Card.Text>
          Here is our Project 1
        </Card.Text>
        <a href="https://silkyjazz.github.io/Me-MyPet-AndI/" class="btn btn-primary">Click Here</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
<Card.Img variant="top" src={planetX} />
<Card.Body>

  <Card.Text>
    Here is our Project 2
  </Card.Text>
  <a href="https://planetxapp-jbe.herokuapp.com/" class="btn btn-primary">Click Here</a>
</Card.Body>
</Card>

<Card style={{ width: '18rem', padding: '20px' }}>
<Card.Img variant="top" src={futureTrain} />
      <Card.Body>
        <Card.Title>Future Train</Card.Title>
        <Card.Text>
          In Progress
        </Card.Text>
        <Button variant="primary">In Progress </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
    <Card.Img variant="top" src={goldenState} />
<Card.Body>
  <Card.Title>Golden State</Card.Title>
  <Card.Text>
    In Progress
  </Card.Text>
  <Button variant="primary">In Progress</Button>
</Card.Body>
</Card>

</CardGroup>

  );
}
