// src/pages/Accessories.jsx
import React, { useContext, useState } from "react";
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
          <Card className="h-100 anime shadow-sm"  style={{ overflow: "hidden" }}>
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

// ================== MAIN COMPONENT ==================
const Accessories = () => {
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const [category, setCategory] = useState("all");

  // filter from central products.json
  const watches = products.filter((p) => p.category === "Watches");
  const shoes   = products.filter((p) => p.category === "Shoes");
  const bags    = products.filter((p) => p.category === "Bags");

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">Accessories Collection</h2>

      {/* Filter Buttons */}
      <div className="text-center">
        <ButtonGroup>
          <Button
            variant={category === "all" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("all")}
          >
            All
          </Button>
          <Button
            variant={category === "Watches" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Watches")}
          >
            Watches
          </Button>
          <Button
            variant={category === "Shoes" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Shoes")}
          >
            Shoes
          </Button>
          <Button
            variant={category === "Bags" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Bags")}
          >
            Bags
          </Button>
        </ButtonGroup>
      </div>

      {/* Conditional Rendering */}
      {category === "all" && (
        <>
          <ProductSection title="Watches" items={watches} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Shoes" items={shoes} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Bags" items={bags} addToCart={addToCart} addToWishlist={addToWishlist} />
        </>
      )}
      {category === "Watches" && <ProductSection title="Watches" items={watches} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Shoes" && <ProductSection title="Shoes" items={shoes} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Bags" && <ProductSection title="Bags" items={bags} addToCart={addToCart} addToWishlist={addToWishlist} />}
    </Container>
  );
};

export default Accessories;
