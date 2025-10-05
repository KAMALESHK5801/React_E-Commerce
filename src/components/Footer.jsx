import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>MyStore</h5>
            <p>Your one-stop fashion shop for Men, Women, and Accessories.</p>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/men" className="text-light text-decoration-none">Men</a></li>
              <li><a href="/women" className="text-light text-decoration-none">Women</a></li>
              <li><a href="/accessories" className="text-light text-decoration-none">Accessories</a></li>
            </ul>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <h6>Contact</h6>
            <p>Email: support@myecom.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Coimbatore, India</p>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;