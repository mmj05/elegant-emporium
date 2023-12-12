import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h4 className="text-uppercase">Customer Service</h4>
            <ul className="list-unstyled">
              <li><Link to="/customer-service" className="text-white">Customer Service</Link></li>
              <li><Link to="/shipping" className="text-white">Shipping</Link></li>
              <li><Link to="/returns" className="text-white">Returns</Link></li>
              <li><Link to="/gift-cards" className="text-white">Buy gift cards</Link></li>
              <li><Link to="/size-charts" className="text-white">Size charts</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className="text-uppercase">Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-white">FAQs</Link></li>
              <li><Link to="/terms" className="text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className="text-uppercase">Contact Information</h4>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;