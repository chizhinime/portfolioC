import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setScrolled(true);
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
      
      // Update active link based on scroll position
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}
    >
      <div className="nav-container">
        {/* Logo as Home Link */}
        <div className="logo-container">
          <a 
            href="#home" 
            className="logo"
            onClick={() => handleLinkClick('home')}
            aria-label="Home"
          >
            <span className="logo-text">Chizhinime</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a 
            href="#projects" 
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
          
          {/* Social Icons */}
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
              href="mailto:chizhinimec@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a 
            href="#home" 
            className={`mobile-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className={`mobile-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`mobile-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className={`mobile-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`mobile-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
        
        <div className="mobile-social-icons">
          <a 
            href="https://github.com/chizhinime" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/chizhinime-chijioke" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com/ChizhinimeC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-social-icon"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="mailto:chizhinimec@gmail.com" 
            className="mobile-social-icon"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;