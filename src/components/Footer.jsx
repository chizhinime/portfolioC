import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiCodepen } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = footerRef.current;
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
    <footer id="footer" ref={footerRef} className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Chizhinime.</h3>
            <p className="footer-tagline">
              Building digital experiences that matter
            </p>
          </div>
          
          <div className="footer-links">
            <div className="links-group">
              <h4 className="links-title">Quick Links</h4>
              <ul className="links-list">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="links-group">
              <h4 className="links-title">Connect</h4>
              <ul className="links-list">
                <li>
                  <a 
                    href="https://github.com/chizhinime" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/chizhinime-chijioke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/ChizhinimeC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:chizhinimec@gmail.com" 
                    className="footer-link"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-icons">
              <a 
                href="https://github.com/chizhinime" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/chizhinime-chijioke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/ChizhinimeC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://codepen.io/Chizhinime-Chijioke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="CodePen"
              >
                <SiCodepen />
              </a>
              <a 
                href="mailto:chizhinimec@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Chizhinime. All rights reserved.
          </p>
          <p className="credits">
            Built with React and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;