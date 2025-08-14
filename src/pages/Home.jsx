import { useEffect, useRef } from 'react';
import profileImage from '../assets/developer-image.jpg';
import '../pages/Home.css';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = homeRef.current;
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
    <section id="home" ref={homeRef} className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="text-content">
            <h1 className="greeting">Hi, I'm <span className="name">Chizhinime Chijioke</span></h1>
            <h2 className="title">Senior Front-end Developer </h2>
            <p className="description">
              I design and build clean, responsive websites and web apps using modern technologies like
              React, Tailwind CSS, and JavaScript. I focus on delivering user-friendly and accessible digital experiences.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          
          <div className="image-container">
            <img 
              src={profileImage} 
              alt="Professional headshot of Developer Name" 
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;