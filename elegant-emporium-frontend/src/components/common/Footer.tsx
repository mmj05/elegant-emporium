import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 footer">
    <Container>
      <Row>
        <Col md={4}>
        <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li><Link to="/customer-service">Customer Service</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/gift-cards">Buy gift cards</Link></li>
              <li><Link to="/size-charts">Size charts</Link></li>
            </ul>
        </Col>
        <Col md={4}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </Col>
        <Col md={4}>
          <h4>Contact Information</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
