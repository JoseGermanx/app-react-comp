import React from 'react';
import Cardwine from './Card';
import Navigation from './Navbar';
import {data} from '../data/data.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
   return (    
    <div >
      <Navigation/>
      <Container fluid style={{display:'flex', alignItems:'center'}}>
      <Row>
      {data.length > 0 ? data.map((e) => {    
        return (          
          <div key={e.id}>
          <Col style={{display:'flex', justifyContent: 'center'}}>
          <Cardwine
          nombre={e.wine}
          vineria={e.winery}
          imagen={e.image}
          location={e.location}
          />
          </Col>
        </div>
        
        )
       }):<div style={{display:'flex', alignItems:'center'}}><h1>No hay datos</h1></div>}
       </Row>
    </Container>
    </div>
)
}
