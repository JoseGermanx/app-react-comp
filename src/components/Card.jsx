import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cardwine({nombre, vineria, imagen, location}) {
  return (
    <Card style={{ width: '50%', height:'auto', alignItems:'center', marginTop:'10px', }}>
    <Card.Img variant="top" style={{ width: '50px' }} src={imagen} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
        <div>{vineria}</div>
        <div>{location}</div>  
      </Card.Text>
      <Button variant="dark">Ver mas</Button>
    </Card.Body>
  </Card>    
  )
}
