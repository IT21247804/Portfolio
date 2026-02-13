import React from 'react';
import ceylonAmbassadorImg from '../assets/ceyloan ambassador.png';
import realRealtorImg from '../assets/the real realtor.png';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Work Experience</h2>
        <div className="experience-layout">
          <div className="experience-cards">
            <div className="experience-card" data-aos="fade-up">
              <div className="exp-header">
                <h3>Intern Software Engineer</h3>
                <p className="company">Gravity Colombo PVT LTD</p>
                <p className="duration">Aug 2024 – Aug 2025</p>
              </div>
              <div className="exp-meta">
                <span>Full-stack delivery</span>
                <span>Client-facing builds</span>
                <span>Production support</span>
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

          <div className="experience-featured" data-aos="fade-up">
            <div className="featured-header">
              <h3>Featured Client Builds</h3>
              <p>Live deployments showcasing design, performance, and business impact.</p>
            </div>
            <div className="featured-grid">
              <article className="featured-card">
                <div className="featured-media">
                  <img src={realRealtorImg} alt="The Real Realtor website preview" loading="lazy" />
                </div>
                <div className="featured-body">
                  <h4>The Real Realtor</h4>
                  <p>Property listing platform with rich media, advanced filtering, and agent-centric workflows.</p>
                  <div className="featured-tags">
                    <span>React</span>
                    <span>Node</span>
                    <span>MySQL</span>
                    <span>S3</span>
                  </div>
                  <a className="featured-link" href="https://www.therealrealtor.lk/" target="_blank" rel="noreferrer">
                    Visit Live Site
                  </a>
                </div>
              </article>

              <article className="featured-card">
                <div className="featured-media">
                  <img src={ceylonAmbassadorImg} alt="Ceylon Ambassador website preview" loading="lazy" />
                </div>
                <div className="featured-body">
                  <h4>Ceylon Ambassador</h4>
                  <p>Brand-forward portfolio experience with editorial storytelling and scalable CMS-ready structure.</p>
                  <div className="featured-tags">
                    <span>Node</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>Prisma</span>
                  </div>
                  <a className="featured-link" href="https://ceylonambassador.com/" target="_blank" rel="noreferrer">
                    Explore Website
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;