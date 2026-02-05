import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Work Experience</h2>
        <div className="experience-cards">
          <div className="experience-card" data-aos="fade-up">
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
  );
};

export default Experience;
