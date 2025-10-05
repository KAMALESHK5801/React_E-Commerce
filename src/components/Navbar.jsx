// src/components/NavigationBar.jsx
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, Badge, Modal, Form, Tab, Nav as TabNav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  // Auth Modal
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shop = useContext(ShopContext);
  if (!shop) return null;

  const { cart, wishlist } = shop;

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-sm sticky-md-top"
        style={{ minHeight: "75px", fontSize: "1.2rem" }}
      >
        <Container>
          <Button
            variant="outline-secondary"
            onClick={handleShow}
            className="me-2 d-lg-none"
          >
            ☰
          </Button>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            MyStore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto text-dark align-items-center gap-3">
              <Nav.Link as={Link} to="/men">Men</Nav.Link>
              <Nav.Link as={Link} to="/women">Women</Nav.Link>
              <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              {/* Wishlist */}
              <Nav.Link as={Link} to="/wishlist" className="d-flex align-items-center">
                <FaHeart className="text-dark me-1" />
                <Badge bg="dark" pill>{wishlist.length}</Badge>
              </Nav.Link>

              {/* Cart */}
              <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
                <FaShoppingCart className="text-dark me-1" />
                <Badge bg="dark" pill>{cart.length}</Badge>
              </Nav.Link>

              {/* User Auth */}
              <Nav.Link as="button" className=" btn-link" onClick={() => setShowAuth(true)}>
                <FaUser className="text-dark me-1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar (Offcanvas for mobile) */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-dark">
            <Nav.Link as={Link} to="/men" onClick={handleClose}>Men</Nav.Link>
            <Nav.Link as={Link} to="/women" onClick={handleClose}>Women</Nav.Link>
            <Nav.Link as={Link} to="/accessories" onClick={handleClose}>Accessories</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Auth Modal (Toggle Tabs) */}
      <Modal show={showAuth} onHide={() => setShowAuth(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeTab === "signin" ? "Sign In" : "Sign Up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <TabNav variant="tabs" className="mb-3 justify-content-center">
              <TabNav.Item>
                <TabNav.Link eventKey="signin">Sign In</TabNav.Link>
              </TabNav.Item>
              <TabNav.Item>
                <TabNav.Link eventKey="signup">Sign Up</TabNav.Link>
              </TabNav.Item>
            </TabNav>

            <Tab.Content>
              {/* Sign In Form */}
              <Tab.Pane eventKey="signin">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="dark" type="submit" className="w-100">Sign In</Button>
                </Form>
              </Tab.Pane>

              {/* Sign Up Form */}
              <Tab.Pane eventKey="signup">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="dark" type="submit" className="w-100">Sign Up</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;
