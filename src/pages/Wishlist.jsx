// src/pages/Wishlist.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Wishlist = () => {
  const { wishlist } = useContext(ShopContext);

  return (
    <Container className="py-4 anime">
      <h2 className="mb-4 fw-bold text-center">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className='fw-bold'>Your wishlist is empty.</p>
      ) : (
        <Row>
          {wishlist.map((item, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-3">
              <Card>
                <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body className="d-flex bg-light flex-column justify-content-between">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>₹ {item.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Wishlist;