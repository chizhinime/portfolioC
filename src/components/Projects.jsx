import { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ecommerceImage from '../assets/developer-image.jpg';
import taskappImage from '../assets/developer-image.jpg';
import weatherImage from '../assets/developer-image.jpg';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Digital Study Clock",
    description: " A beautifully styled browser-based digital study clock to help you stay focused and track your study sessions.",
    tags: ["HTML5", "CSS5", "JavaScript"],
    github: "https://github.com/chizhinime/digital-study-clock.git",
    live: "https://digital-study-clock.vercel.app",
    image: ecommerceImage
  },
  {
    id: 2,
    title: "Responsive Landing Page",
    description: "A modern, fully responsive landing page built with HTML, CSS, and JavaScript that adapts smoothly to all screen sizes.",
    tags: ["React", "Firebase", "Material UI", "Context API"],
    github: "https://github.com/chizhinime/responsive-landing-page.git",
    live: "https://afritech-landing-page.vercel.app",
    image: taskappImage
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather application with 5-day forecasts, location search, and animated weather representations.",
    tags: ["JavaScript", "API", "CSS3", "HTML5"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://yourweatherapp.com",
    image: weatherImage
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const distanceFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (distanceFromTop < windowHeight * 0.75) {
          element.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                  width="400"
                  height="220"
                />
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="project-icon" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FiExternalLink className="project-icon" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
