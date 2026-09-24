import React from 'react';
import './About.css';

const About = () => {
  const highlights = [
    { number: '450+', label: 'LeetCode Problems Solved', icon: '⚡' },
    { number: '850+', label: 'Skillrack Problems Solved', icon: '🏆' },
    { number: '8.0/10', label: 'B.E. CSE CGPA', icon: '🎓' },
    { number: '2025', label: 'IoT & Python Internship', icon: '💼' }
  ];

  const quickDetails = [
    { label: 'Location', value: 'Chennai, India', icon: '📍' },
    { label: 'Degree', value: 'B.E. Computer Science & Engg', icon: '🏛️' },
    { label: 'Core Expertise', value: 'Java, Spring Boot, RAG, AWS', icon: '⚙️' },
    { label: 'Status', value: 'Open to Software Engineering Roles', icon: '🚀' }
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Background & Profile</h2>
          <p className="section-subtitle">
            Get to know my engineering journey, problem-solving mindset, and technical background.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Column */}
          <div className="about-main-card">
            <div className="about-card-badge">Software Engineer & Student</div>
            <h3 className="about-heading">
              Building robust backend architectures and AI-driven platforms.
            </h3>
            <p className="about-paragraph">
              Computer Science Engineering student with strong skills in Java, Spring Boot,
              REST APIs, and relational database design, with exposure to AI integration and
              cloud technologies. Experienced in building full-stack backend systems with
              secure authentication and hybrid retrieval, demonstrated through 450+ LeetCode problems.
            </p>
            <p className="about-subparagraph">
              I thrive at the intersection of enterprise Java architecture and modern AI capabilities.
              Whether implementing Reciprocal Rank Fusion for semantic search, diagnosing deep microservice
              data flow issues, or fine-tuning database schemas for e-commerce, I write clean,
              maintainable, and production-ready code.
            </p>

            <div className="about-quick-details">
              {quickDetails.map((item, idx) => (
                <div key={idx} className="quick-detail-item">
                  <span className="detail-icon">{item.icon}</span>
                  <div className="detail-text">
                    <span className="detail-label">{item.label}</span>
                    <strong className="detail-value">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats Column */}
          <div className="about-stats-column">
            <div className="stats-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-icon-wrapper">{item.icon}</div>
                  <div className="stat-number">{item.number}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="about-focus-card">
              <h4 className="focus-title">What I Love Working On</h4>
              <ul className="focus-list">
                <li>
                  <span className="focus-bullet">✓</span>
                  <span>Enterprise Backend Architecture with Spring Boot & JWT</span>
                </li>
                <li>
                  <span className="focus-bullet">✓</span>
                  <span>RAG (Retrieval-Augmented Generation) & Hybrid Search Pipelines</span>
                </li>
                <li>
                  <span className="focus-bullet">✓</span>
                  <span>Relational Database Modeling with MySQL, JPA & Hibernate</span>
                </li>
                <li>
                  <span className="focus-bullet">✓</span>
                  <span>Cloud Deployment & Automation on AWS (EC2, RDS, Amplify)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
