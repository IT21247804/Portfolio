import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Academic Projects</h2>
        <div className="projects-grid">
          <div className="project-card" data-aos="fade-up">
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
              <li>
                <a href="https://ieeexplore.ieee.org/document/11082052" target="_blank" rel="noopener noreferrer" style={{color: '#00d4ff', textDecoration: 'none'}}>
                  Published research paper (IEEE) ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
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
              <li>
                <a href="https://propulsiontechjournal.com/index.php/journal/article/view/2494" target="_blank" rel="noopener noreferrer" style={{color: '#00d4ff', textDecoration: 'none'}}>
                  Published research paper ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
