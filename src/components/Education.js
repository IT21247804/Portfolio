import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education</h2>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Sri Lanka Institute of Information Technology</h3>
              <p className="education-degree">Bachelor of Science (Hons) in Information Technology</p>
              <p className="education-specialization">Specializing in Software Engineering</p>
              <p className="gpa">GPA: 3.15</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>C.W.W. Central College</h3>
              <p className="education-degree">General Certificate In Advanced Level</p>
              <p className="education-specialization">Bio Stream</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Kalutara Vidyalaya</h3>
              <p className="education-degree">General Certificate In Ordinary Level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
