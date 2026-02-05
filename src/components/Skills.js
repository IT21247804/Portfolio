import React from 'react';
import { 
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaravel, 
  FaAws, FaDocker, FaGithub, FaGitAlt, FaBrain, FaCode 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiMysql, SiDart, SiR, SiKotlin, SiNextdotjs, SiFlutter, 
  SiMui, SiExpress, SiFastapi, SiFlask, SiPrisma, SiMongodb, SiSqlite, 
  SiTensorflow, SiKeras, SiOpencv, SiKubernetes, 
  SiGooglecloud, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "#E76F00" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
        { name: "SQL", icon: SiMysql, color: "#4479A1" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "R", icon: SiR, color: "#276DC3" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      ]
    },
    {
      title: "Frontend & Frameworks",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" }, // Reusing React icon
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Material-UI", icon: SiMui, color: "#007FFF" },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
        { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
        { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" },
        { name: "AWS S3", icon: FaAws, color: "#FF9900" },
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "YOLO", icon: FaBrain, color: "#FFD700" }, // Generic brain for YOLO
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "Keras", icon: SiKeras, color: "#D00000" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "Langchain", icon: FaBrain, color: "#FFFFFF" }, // Generic brain
        { name: "Roboflow", icon: FaBrain, color: "#A020F0" }, // Generic brain
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
        { name: "VS Code", icon: FaCode, color: "#007ACC" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3>{category.title}</h3>
              <div className="skill-icons">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="skill-icon-wrapper" 
                    title={skill.name}
                    style={{ '--skill-color': skill.color }}
                  >
                    <skill.icon className="skill-icon" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
