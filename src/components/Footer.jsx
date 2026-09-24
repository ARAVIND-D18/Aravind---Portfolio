import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#internship' },
    { name: 'Coding Profiles', href: '#coding-profiles' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="footer-brand-bracket">&lt;</span>
              <span className="footer-brand-name">Aravind D</span>
              <span className="footer-brand-bracket"> /&gt;</span>
            </a>
            <p className="footer-bio">
              Full-Stack Java Developer & Software Engineer specializing in resilient Spring Boot architectures,
              RAG pipelines, relational database design, and cloud systems.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://github.com/ARAVIND-D18"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/aravind-d18"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/3C2gnCsSBo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LeetCode Profile"
              >
                LeetCode
              </a>
              <a
                href="mailto:daravind978@gmail.com"
                className="footer-social-btn"
                aria-label="Email Aravind"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Aravind D. Designed & Built with clean, modern web engineering.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
