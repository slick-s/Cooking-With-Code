import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Background = () => {
  return (
    <Container fluid className="custom-background text-white p-5">
      <Row>
        <Col>
          <h1 className='custom-h1'>What are we eating today? </h1>
          <h3 className='custom-h3'>Breakfast</h3>
          <h3 className='custom-h3'>Lunch</h3>
          <h3 className='custom-h3'>Dinner</h3>
          <h3 className='custom-h3'>Snacks</h3>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Background;