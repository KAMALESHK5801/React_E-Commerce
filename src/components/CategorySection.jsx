import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const categories = [
  {
    title: "For Men's",
    image: 'https://cdn.shopify.com/s/files/1/0162/2116/files/Mens_Dress_Shirt_Looks_3.jpg?v=1525457936', // Put image in public/assets
    link: '/Men'
  },
  {
    title: "For Women's",
    image: 'https://i.pinimg.com/736x/bf/e4/1b/bfe41b9a424e2a76c0480285ef80d873.jpg',
    link: '/women'
  },
  {
    title: "Accessories",
    image: 'https://img.freepik.com/premium-photo/clothing-accessories-men-women-ready-travel-life-style_11304-1404.jpg',
    link: '/accessories'
  }
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="mb-4 text-center fw-bold">Shop by Category</h2>
      <Row>
        {categories.map((cat, index) => (
          <Col md={4} key={index} className="anime mb-4">
            <Card onClick={() => navigate(cat.link)} className="h-100 shadow-sm category-card" style={{ cursor: 'pointer' }}>
              <div style={{overflow:'hidden'}}>
              <Card.Img className="card-img-top cover-image" variant="top" src={cat.image} height="300px" width="250px" style={{ objectFit: 'cover' }} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{cat.title}</Card.Title>
                <Button className='btn btn-dark' onClick={() => navigate(cat.link)}>Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategorySection;