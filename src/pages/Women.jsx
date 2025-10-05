// src/pages/Women.jsx
import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import products from "../data/product.json";

const ProductSection = ({ title, items, addToCart, addToWishlist }) => (
  <>
    <h3 className="fw-bold my-4 anime">{title}</h3>
    <Row>
      {items.map((item) => (
        <Col key={item.id} md={4} sm={6} xs={12} className="mb-5">
          <Card className="h-100 shadow-sm anime" style={{ overflow: "hidden" }}>
           <div style={{ height: "250px", overflow: "hidden" }}>
            <Card.Img
              variant="top"
              src={item.image}
              className="card-img-top cover-image"
              style={{ height: "250px", objectFit: "cover", overflow: "hidden" }}
            />
            </div>
            <Card.Body className="d-flex bg-light flex-column justify-content-between" style={{ overflow: "hidden" }}>
              <div>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Rs. {item.price}</Card.Text>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill px-3"
                  onClick={() => addToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="rounded-pill px-2"
                  onClick={() => addToWishlist(item)}
                >
                  <FaHeart /> Wishlist
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);

const Women = () => {
  const [category, setCategory] = useState("all");
  const { addToCart, addToWishlist } = useContext(ShopContext);

  const dresses = products.filter((p) => p.category === "Dresses");
  const tops = products.filter((p) => p.category === "Tops");
  const bags = products.filter((p) => p.category === "Bags");

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">Women's Collection</h2>

      <div className="text-center">
        <ButtonGroup>
          <Button variant={category === "all" ? "dark" : "outline-dark"} className="btn px-4 mx-1" onClick={() => setCategory("all")}>
            All
          </Button>
          <Button variant={category === "Dresses" ? "dark" : "outline-dark"} className="btn px-4 mx-1" onClick={() => setCategory("Dresses")}>
            Dresses
          </Button>
          <Button variant={category === "Tops" ? "dark" : "outline-dark"} className="btn px-4 mx-1" onClick={() => setCategory("Tops")}>
            Tops
          </Button>
          <Button variant={category === "Bags" ? "dark" : "outline-dark"} className="btn px-4 mx-1" onClick={() => setCategory("Bags")}>
            Bags
          </Button>
        </ButtonGroup>
      </div>

      {category === "all" && (
        <>
          <ProductSection title="Dresses" items={dresses} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Tops" items={tops} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Bags" items={bags} addToCart={addToCart} addToWishlist={addToWishlist} />
        </>
      )}
      {category === "Dresses" && <ProductSection title="Dresses" items={dresses} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Tops" && <ProductSection title="Tops" items={tops} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Bags" && <ProductSection title="Bags" items={bags} addToCart={addToCart} addToWishlist={addToWishlist} />}
    </Container>
  );
};

export default Women;
