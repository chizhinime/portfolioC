import { useEffect, useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaGithub, FaNpm, FaFigma 
} from 'react-icons/fa';
import { 
  SiTailwindcss,SiPython
} from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
  { name: 'Git', icon: <FaGitAlt />, level: 85 },
  { name: 'GitHub', icon: <FaGithub />, level: 90 },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
  { name: 'Python', icon: <SiPython />, level: 75},
  { name: 'npm', icon: <FaNpm />, level: 80 },
  { name: 'Figma', icon: <FaFigma />, level: 60 }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const distanceFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (distanceFromTop < windowHeight * 0.75) {
          element.classList.add('animate-in');
          // Animate skill bars
          document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.getAttribute('data-level');
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    data-level={`${skill.level}%`}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;