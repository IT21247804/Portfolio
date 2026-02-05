import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animElements = document.querySelectorAll(
      '.section-title, .timeline-item, .experience-card, .project-card, .skill-category, .award-item'
    );
    animElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">PB</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
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

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a Software Engineer with a passion for building scalable, user-friendly applications. 
            With expertise in full-stack development, AI/ML, and mobile app development, I thrive on 
            solving complex problems and creating innovative solutions. Currently interning at 
            Gravity Colombo PVT LTD, where I'm developing web and mobile applications.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Sri Lanka Institute of Information Technology</h3>
                <p className="education-degree">Bachelor of Science (Hons) in Information Technology</p>
                <p className="education-specialization">Specializing in Software Engineering</p>
                <p className="gpa">GPA: 3.15</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>C.W.W. Central College</h3>
                <p className="education-degree">General Certificate In Advanced Level</p>
                <p className="education-specialization">Bio Stream</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Kalutara Vidyalaya</h3>
                <p className="education-degree">General Certificate In Ordinary Level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-cards">
            <div className="experience-card">
              <div className="exp-header">
                <h3>Intern Software Engineer</h3>
                <p className="company">Gravity Colombo PVT LTD</p>
                <p className="duration">Aug 2024 – Aug 2025</p>
              </div>
              <ul className="exp-list">
                <li>
                  <strong>Real Realtor Web App</strong> - Developed a web application for managing real estate advertisements 
                  using ReactJS, ExpressJS, NodeJS, MySQL, and Amazon S3 for media storage.
                </li>
                <li>
                  <strong>Ceylon Ambassador Web App</strong> - Built a comprehensive portfolio web application with 
                  NodeJS, ExpressJS, MongoDB, and Prisma ORM.
                </li>
                <li>
                  <strong>Thilakawardhana Groups Mobile App</strong> - Created a React Native mobile app (Expo/EAS Build) 
                  for backup POS operations and parking ticket management with SQLite storage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E.N.T Insight</h3>
                <p className="project-duration">June 2024 – June 2025</p>
              </div>
              <p className="project-description">
                AI-powered system for identifying foreign objects in throat X-rays using YOLO object detection model.
              </p>
              <div className="project-tech">
                <span>YOLO</span>
                <span>FastAPI</span>
                <span>Next.js</span>
                <span>Flutter</span>
                <span>MongoDB</span>
                <span>Roboflow</span>
              </div>
              <ul className="project-highlights">
                <li>Trained YOLO-based object detection model for accurate detection</li>
                <li>Built FastAPI backend and Next.js web frontend</li>
                <li>Developed Flutter mobile app for broader accessibility</li>
                <li>Published research paper (IEEE)</li>
              </ul>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Ceylon Translate</h3>
                <p className="project-duration">June 2023 – Nov 2023</p>
              </div>
              <p className="project-description">
                Multimodal translation platform supporting English-Sinhala translation via text, images, PDFs, and voice.
              </p>
              <div className="project-tech">
                <span>MERN Stack</span>
                <span>Tesseract OCR</span>
                <span>Google Translate API</span>
              </div>
              <ul className="project-highlights">
                <li>Implemented OCR-based text extraction from images and documents</li>
                <li>Built community posting and commenting system</li>
                <li>Led team of four in third-year group project</li>
                <li>Published research paper</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>C/C++</span>
                <span>SQL</span>
                <span>Dart</span>
                <span>HTML/CSS</span>
                <span>R</span>
                <span>Kotlin</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Frontend & Frameworks</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>React Native</span>
                <span>Flutter</span>
                <span>Material-UI</span>
                <span>HTML/CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend & APIs</h3>
              <div className="skill-tags">
                <span>Express.js</span>
                <span>Node.js</span>
                <span>FastAPI</span>
                <span>Flask</span>
                <span>Laravel</span>
                <span>Prisma ORM</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases & Storage</h3>
              <div className="skill-tags">
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>SQLite</span>
                <span>MongoDB Atlas</span>
                <span>AWS S3</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI/ML & Tools</h3>
              <div className="skill-tags">
                <span>YOLO</span>
                <span>TensorFlow</span>
                <span>Keras</span>
                <span>OpenCV</span>
                <span>FastAPI</span>
                <span>Langchain</span>
                <span>Roboflow</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Developer Tools</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>AWS</span>
                <span>Google Cloud</span>
                <span>VS Code</span>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="awards">
        <div className="container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-list">
            <div className="award-item">
              <h3>Best Research Paper Presentation Award</h3>
              <p className="award-event">8th Conference on Artificial Intelligence and Big Data</p>
              <p className="award-date">May 2025</p>
            </div>
            <div className="award-item">
              <h3>Dean's List Award – Year 4, 2nd Semester</h3>
              <p className="award-event">For Academic Excellence</p>
              <p className="award-date">Jan 2025 – Jun 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
          <div className="contact-info">
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Pasan Baddewithana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
