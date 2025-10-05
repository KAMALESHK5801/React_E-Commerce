import React, { useState } from 'react'

import about1 from '../assets/about-2.jpg';
import about2 from '../assets/about-3.jpg';


const About = () => {
    

  return (
    <>
    {/* about header */}
    <h2 className="mb-4 text-center fw-bold anime">About Shop</h2>
    <div className="about-glowing-section anime">
        <div className="overlay">
            <div className="about-content">
                <p className="intro-text">Introducing</p>
                <h1 className="title">About Glowing</h1>
            </div>
        </div>
    </div>

    {/* Main about content */}
    <section className="py-5">

        {/* face image and description */}
        <div className="container anime mb-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0 about-img1">
                    <img src={about1} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h4 className="fw-bold">Find Your Perfect Style with Our Dress Collection</h4>
                    <p className="text-muted">
                        Step into elegance every day. Our dress collection is designed to bring out your confidence and charm with modern styles, premium fabrics, and timeless cuts. From casual wear to party outfits, each piece is crafted to fit beautifully and make you shine. Experience fashion that blends comfort, elegance, and trend for every occasion.
                    </p>
                </div>
            </div>
        </div>

        {/* Mission and product image */}
        <div className="container anime">
            <div className="row align-items-center flex-md-row-reverse">
                <div className="col-md-6 mb-4 mb-md-0 about-img1">
                    <img src={about2} alt="Products" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h4 className="fw-bold">Our Mission</h4>
                    <p className="text-muted">
                       We believe everyone deserves to look and feel their best. Our dresses are carefully designed with style, quality, and comfort in mind to make you shine on every occasion—because confidence starts with the perfect outfit. Experience the perfect blend of elegance and trend for fashion that truly transforms your wardrobe. 
                    </p>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default About