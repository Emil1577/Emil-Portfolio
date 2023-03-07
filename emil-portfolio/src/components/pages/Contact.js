import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Contact() {
  return (
    <CardGroup>
    <Card style={{ width: '60rem', padding: '30px' }}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Comments">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <a href="./" class="btn btn-primary">Submit</a>
    </Form>
</Card>

</CardGroup>
  );
}
