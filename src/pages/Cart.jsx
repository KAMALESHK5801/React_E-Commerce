// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <Container className="py-4 anime">
      <h2 className="mb-4 fw-bold text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className='fw-bold'>Your cart is empty.</p>
      ) : (
        <Row>
          {cart.map((item) => (
            <Col key={item.id} md={4} sm={6} xs={12} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex bg-light flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>₹ {item.price}</Card.Text>
                    <Card.Text>Qty: {item.quantity}</Card.Text>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Cart;
