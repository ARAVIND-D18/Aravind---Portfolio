import React from 'react';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
      institution: 'Chennai, Tamil Nadu, India',
      duration: 'Graduation Year: 2027',
      grade: 'CGPA: 8.0 / 10.0',
      badge: 'Undergraduate Degree',
      highlights: [
        'Maintained a strong 8.0 CGPA across computer science core curricula and software labs.',
        'Specialized in Object-Oriented Analysis & Design, Database Architecture, and Distributed Systems.',
        'Actively participated in technical coding platforms with over 1,300+ problems solved in parallel with academic coursework.'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Full-Stack Java',
      issuer: 'Technical Specialization',
      icon: '☕',
      topics: 'Spring Boot, Spring Security, REST APIs, Hibernate/JPA'
    },
    {
      title: 'Cloud & Infrastructure Fundamentals',
      issuer: 'AWS Competency',
      icon: '☁️',
      topics: 'AWS EC2, S3, RDS, IAM, VPC, Amplify'
    },
    {
      title: 'Generative AI & Hybrid Retrieval',
      issuer: 'Applied AI Development',
      icon: '🧠',
      topics: 'RAG Pipelines, Vector Search, BM25, Reciprocal Rank Fusion'
    },
    {
      title: 'Algorithmic Problem Solving (450+ LeetCode)',
      issuer: 'Competitive Programming',
      icon: '⚡',
      topics: 'Dynamic Programming, Complexity Optimization'
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Strong foundational computer science degree paired with specialized modern engineering competencies.
          </p>
        </div>

        <div className="education-layout">
          {/* Main Degree Card */}
          <div className="education-main-col">
            {educationHistory.map((item, idx) => (
              <div key={idx} className="education-card">
                <div className="edu-card-top">
                  <div className="edu-badge-row">
                    <span className="edu-type-badge">{item.badge}</span>
                    <span className="edu-grade-pill">{item.grade}</span>
                  </div>
                  <h3 className="edu-degree-title">{item.degree}</h3>
                  <div className="edu-meta-row">
                    <span className="edu-inst">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {item.institution}
                    </span>
                    <span className="edu-dot">&bull;</span>
                    <span className="edu-duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="edu-card-body">
                  <h4 className="edu-section-heading">Key Academic Highlights</h4>
                  <ul className="edu-highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <span className="edu-check">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="edu-section-heading" style={{ marginTop: '1.5rem' }}>
                    Core Coursework
                  </h4>
                  <div className="edu-courses-grid">
                    {item.courses.map((course, cIdx) => (
                      <span key={cIdx} className="edu-course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Focus Areas Column */}
          <div className="education-certs-col">
            <h3 className="certs-col-title">Key Competencies & Milestones</h3>
            <div className="certs-list">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="cert-item-card">
                  <div className="cert-icon-box">{cert.icon}</div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <p className="cert-topics">{cert.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
