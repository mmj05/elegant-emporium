// src/components/home/PromotionalSection.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PromotionalSection: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Special Offers</h2>
          <p>Check out our exclusive deals and save big!</p>
          <Button variant="info">View Offers</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PromotionalSection;
