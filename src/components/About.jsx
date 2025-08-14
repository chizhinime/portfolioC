import { useEffect, useRef } from 'react';
import profileImage from '../assets/developer-image.jpg';
import Resume from '../assets/Chizhinime_Chijioke_Professional_Resume.pdf';
import '../components/About.css';

const About = () => {
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
    <section id="about" ref={sectionRef} className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profileImage} 
              alt="Professional headshot" 
              className="profile-img"
              loading="lazy"
            />
            <div className="image-border"></div>
          </div>
          
          <div className="about-text">
            <h3 className="about-heading">Who am I?</h3>
            <p className="about-description">
              I'm a self-taught front-end developer based in Port Harcourt, Nigeria,
              with a strong passion for creating intuitive and accssible web interfaces. I
              started learning web development through online resoures and hands-on projects. 
              With experience in HTML, CSS, JavaScript, and React, I enjoy solving real-world 
              problems and building tools that make a difference. <br />
            I'm currently open to freelance work, internships, and senior developer opportunities.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Chizhinime Chijioke</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">chizhinimec@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">From:</span>
                <span className="detail-value">Port Harcourt, Nigeria</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">5+ Years</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a 
                href={Resume} 
                download 
                className="btn btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;