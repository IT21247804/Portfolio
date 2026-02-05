import React from 'react';

const Awards = () => {
  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Awards & Recognition</h2>
        <div className="awards-list">
          <div className="award-item" data-aos="fade-up">
            <h3>Best Research Paper Presentation Award</h3>
            <p className="award-event">8th Conference on Artificial Intelligence and Big Data</p>
            <p className="award-date">May 2025</p>
          </div>
          <div className="award-item" data-aos="fade-up" data-aos-delay="100">
            <h3>Dean's List Award – Year 4, 2nd Semester</h3>
            <p className="award-event">For Academic Excellence</p>
            <p className="award-date">Jan 2025 – Jun 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
