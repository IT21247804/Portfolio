import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-in">
        <h1 className="hero-title">Pasan Baddewithana</h1>
        <p className="hero-subtitle">Software Engineer | Full Stack Developer | AI/ML Enthusiast</p>
        <p className="hero-description">
          Building innovative web and mobile applications with modern technologies. 
          Passionate about AI, machine learning, and creating impactful software solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
