import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <p className="contact-intro" data-aos="fade-up" data-aos-delay="100">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out!
        </p>
        <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
          <a href="tel:+94706370573" className="contact-link">
            <span>📞</span> +94 70 637 0573
          </a>
          <a href="mailto:baddewithanapasan@gmail.com" className="contact-link">
            <span>📧</span> baddewithanapasan@gmail.com
          </a>
          <a href="https://linkedin.com/in/pasan-baddewithana" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>💼</span> LinkedIn
          </a>
          <a href="https://github.com/IT21247804" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>🐙</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
