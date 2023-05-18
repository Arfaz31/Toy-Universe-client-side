import React from 'react';
import banner from '../../assets/banner/iron-man-4599990_960_720 (2).jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Hero Toys</h1>
            <p className="mb-5 text-lg">Hero Toys store is full of action figure toys. Explore our best collection & choose your favourite Hero.</p>
            <button className="btn btn-primary mr-3">Discover More</button>
            <button className="btn btn-secondary">Latest Toys</button>
            {/* <button className="btn btn-outline btn-primary">Latest Toys</button> */}
          </div>
        </div>
      </div>
    );
};

export default Banner;