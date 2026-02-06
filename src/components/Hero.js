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
          <a href="/Pasan%20Baddewithana%20CV.pdf" download className="btn btn-primary">Download CV</a>
          <a href="/PasanBaddewithana_resume.pdf" download className="btn btn-secondary">Download Resume</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
