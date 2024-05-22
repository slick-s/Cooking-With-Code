import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Background = () => {
  return (
    <Container fluid className="custom-background text-white p-5">
      <Row>
        <Col>
          <h1 className='custom-h1'>What are we eating today? </h1>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Background;