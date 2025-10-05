import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./HeroBanner.css";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";

const HeroBanner = () => {
  return (
    <Carousel fade interval={5000} controls={false} indicators={true}>
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="hero-banner">
          <img src={home1} alt="home1" className="banner-img" />
          <div className="overlay-text left">
            <Container>
              <h2 className="fw-bold">Welcome to MyStore</h2>
              <p className="lead">Shop the trendiest fashion</p>
              <p className="lead">Exclusive collections</p>
              <p className="lead">Free shipping above ₹999</p>
            </Container>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="hero-banner">
          <img src={home2} alt="home2" className="banner-img" />
          <div className="overlay-text left">
            <Container>
              <h2 className="fw-bold">Discover Accessories</h2>
              <p className="lead">Bags, Sunglasses & More</p>
              <p className="lead">Latest styles for all occasions</p>
              <p className="lead">New arrivals every week</p>
            </Container>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="hero-banner">
          <img src={home3} alt="home3" className="banner-img" />
          <div className="overlay-text right">
            <Container>
              <h2 className="fw-bold">Big Sale is Here</h2>
              <p className="lead">Get up to 50% off</p>
              <p className="lead">Limited time only</p>
              <p className="lead">Don't miss out on deals</p>
            </Container>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroBanner;
