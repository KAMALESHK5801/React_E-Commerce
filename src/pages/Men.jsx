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
          <Card className="h-100 anime shadow-sm" style={{ overflow: "hidden" }}>
           <div style={{ height: "250px", overflow: "hidden" }}>
            <Card.Img
              variant="top"
              className="card-img-top cover-image"
              src={item.image}
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

const Men = () => {
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const [category, setCategory] = useState("all");

  // filter from central products.json
  const shirts = products.filter((p) => p.category === "Shirts");
  const pants = products.filter((p) => p.category === "Pants");
  const watches = products.filter((p) => p.category === "Watches");

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">Men's Collection</h2>

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
            variant={category === "Shirts" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Shirts")}
          >
            Shirts
          </Button>
          <Button
            variant={category === "Pants" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Pants")}
          >
            Pants
          </Button>
          <Button
            variant={category === "Watches" ? "dark" : "outline-dark"}
            className="btn px-4 mx-1"
            onClick={() => setCategory("Watches")}
          >
            Watches
          </Button>
        </ButtonGroup>
      </div>

      {/* Conditional Rendering */}
      {category === "all" && (
        <>
          <ProductSection title="Shirts" items={shirts} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Pants" items={pants} addToCart={addToCart} addToWishlist={addToWishlist} />
          <ProductSection title="Watches" items={watches} addToCart={addToCart} addToWishlist={addToWishlist} />
        </>
      )}
      {category === "Shirts" && <ProductSection title="Shirts" items={shirts} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Pants" && <ProductSection title="Pants" items={pants} addToCart={addToCart} addToWishlist={addToWishlist} />}
      {category === "Watches" && <ProductSection title="Watches" items={watches} addToCart={addToCart} addToWishlist={addToWishlist} />}
    </Container>
  );
};

export default Men;
