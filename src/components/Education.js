import React, { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [svgPath, setSvgPath] = useState('');
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const calculatePath = () => {
      if (!containerRef.current || itemsRef.current.length === 0) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const points = itemsRef.current.map(item => {
        if (!item) return null;
        const rect = item.querySelector('.timeline-marker').getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2
        };
      }).filter(Boolean);

      if (points.length < 2) return;

      // Start path at first point
      let d = `M ${points[0].x} ${points[0].y}`;

      // Draw bezier curves between points
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const midY = (p1.y + p2.y) / 2;
        
        // S-curve logic: control points vertical
        d += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
      }

      setSvgPath(d);
    };

    // Calculate initially and on resize/scroll (for animation shifts)
    calculatePath();
    window.addEventListener('resize', calculatePath);
    
    // Recalculate after a delay to allow for AOS animations to settle/start
    const timeout = setTimeout(calculatePath, 500);
    const interval = setInterval(calculatePath, 1000); // Polling for robust resize handling

    return () => {
      window.removeEventListener('resize', calculatePath);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const educationData = [
    {
      school: "Sri Lanka Institute of Information Technology",
      degree: "Bachelor of Science (Hons) in Information Technology",
      specialization: "Specializing in Software Engineering",
      gpa: "GPA: 3.15",
      side: "left"
    },
    {
      school: "C.W.W. Central College",
      degree: "General Certificate In Advanced Level",
      specialization: "Bio Stream",
      gpa: "",
      side: "right"
    },
    {
      school: "Kalutara Vidyalaya",
      degree: "General Certificate In Ordinary Level",
      specialization: "",
      gpa: "",
      side: "left"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container" ref={containerRef} style={{ position: 'relative' }}>
        <h2 className="section-title" data-aos="fade-up">Education</h2>
        
        {/* SVG Layer */}
        <svg className="timeline-svg">
          <defs>
            <linearGradient id="education-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#0099ff" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path 
            d={svgPath} 
            className="timeline-path"
            fill="none"
            stroke="url(#education-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="curvy-timeline">
          {educationData.map((item, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`timeline-item ${item.side === 'left' ? 'left-align' : 'right-align'}`}
              data-aos={item.side === 'left' ? "fade-right" : "fade-left"}
            >
              <div className={`timeline-content ${item.side}-content`}>
                <h3>{item.school}</h3>
                <p className="education-degree">{item.degree}</p>
                {item.specialization && <p className="education-specialization">{item.specialization}</p>}
                {item.gpa && <p className="gpa">{item.gpa}</p>}
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
