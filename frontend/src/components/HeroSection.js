import React from 'react';
import Link from '@docusaurus/Link';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">ROBOLEARN PLATFORM</h1>
        <p className="hero__subtitle">Build robots that understand the physical world</p>
        <p className="hero__description">Interactive textbook for Physical AI & Robotics</p>
        <div className="margin-top--lg">
          <Button to="/" variant="primary" className="button--lg margin-right--md">
            Get Started
          </Button>
          <Button to="/" variant="secondary" className="button--lg">
            Browse Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
