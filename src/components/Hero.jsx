import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const TITLES = [
  'Full-Stack Java Developer',
  'Backend Engineer',
  'Problem Solver'
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = TITLES[currentTitleIndex];

      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullTitle.length) {
          // Pause when word complete
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        // Deleting backward
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
          setTypingSpeed(110);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for Opportunities &bull; Chennai, India
          </div>

          <h1 className="hero-greeting">
            Hi, I'm <span className="hero-name-highlight">Aravind D</span>
          </h1>

          <div className="hero-title-wrapper">
            <span className="hero-title-prefix">I am a </span>
            <span className="hero-title-dynamic">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Passionate software engineer focused on architecting resilient Spring Boot architectures,
            intelligent RAG retrieval systems, and scalable full-stack applications.
          </p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              <span>View Projects</span>
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <span>Contact Me</span>
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <div className="hero-social-links">
            <a
              href="https://github.com/ARAVIND-D18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hero-social-item"
              title="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aravind-d18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hero-social-item"
              title="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/3C2gnCsSBo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="hero-social-item"
              title="LeetCode Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.791l3.748-4.013 4.908-5.26a1.388 1.388 0 0 0-.965-2.355zm.51 9.387c-.764 0-1.382.618-1.382 1.382v2.764c0 .764.618 1.382 1.382 1.382h5.528c.764 0 1.382-.618 1.382-1.382v-2.764c0-.764-.618-1.382-1.382-1.382z"/>
              </svg>
              <span>LeetCode (450+)</span>
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="hero-avatar-column">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-ring">
              <img
                src={profileImg}
                alt="Aravind D - Full-Stack Java Developer"
                className="hero-avatar-img"
              />
            </div>
            <div className="hero-exp-badge">
              <span className="hero-exp-icon">☕</span>
              <div className="hero-exp-text">
                <strong>Full-Stack</strong>
                <span>Java & AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
