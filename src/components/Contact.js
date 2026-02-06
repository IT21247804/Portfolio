import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual Service ID and Template ID
    // You can find them in your EmailJS dashboard
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <p className="contact-intro" data-aos="fade-up" data-aos-delay="100">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out via the form or my social channels!
        </p>

        <div className="contact-content">
          <div className="contact-details" data-aos="fade-right" data-aos-delay="200">
            <h3>Connect with me</h3>
            <p>
              Have a project in mind or just want to say hi? 
              I'm open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="social-links">
              <a href="mailto:baddewithanapasan@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
                <span>baddewithanapasan@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/pasan-baddewithana" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/IT21247804" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-left" data-aos-delay="300">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
