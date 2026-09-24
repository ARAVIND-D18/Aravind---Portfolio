import React from 'react';
import './Internship.css';

const Internship = () => {
  const internshipData = {
    role: 'IoT & Python Engineering Intern',
    period: '2025',
    type: 'Technical Internship',
    location: 'Chennai, India',
    overview:
      'Gained hands-on industry experience building IoT communication pipelines and automated Python software modules, bridging hardware device telemetry with backend service endpoints.',
    responsibilities: [
      {
        title: 'Python Automation & Telemetry Ingestion',
        desc: 'Engineered Python scripts to parse, clean, and serialize real-time sensor streams into structured JSON payloads for downstream processing.'
      },
      {
        title: 'REST API Integration',
        desc: 'Constructed lightweight REST endpoints and client interfaces to transmit sensor data reliably across network layers with automated retry logic.'
      },
      {
        title: 'Testing & Operational Reliability',
        desc: 'Implemented unit validation scripts, error-handling routines, and local database logging to prevent telemetry packet loss during hardware dropouts.'
      },
      {
        title: 'Agile Development & Version Control',
        desc: 'Practiced Git branch management, structured documentation, and collaborative code reviews to deliver production-grade modules.'
      }
    ],
    skills: ['Python', 'IoT Telemetry', 'REST APIs', 'JSON Serialization', 'Data Pipelines', 'Git & GitHub', 'System Automation']
  };

  return (
    <section id="internship" className="section internship-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Work Experience</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Industry exposure applying software engineering fundamentals, data pipelines, and automation.
          </p>
        </div>

        <div className="internship-card">
          <div className="internship-header">
            <div className="internship-role-info">
              <span className="internship-type-pill">{internshipData.type}</span>
              <h3 className="internship-role-title">{internshipData.role}</h3>
              <div className="internship-meta">
                <span className="meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {internshipData.period}
                </span>
                <span className="meta-dot">&bull;</span>
                <span className="meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {internshipData.location}
                </span>
              </div>
            </div>

            <div className="internship-badge-icon">
              <span>💼</span>
            </div>
          </div>

          <p className="internship-overview">{internshipData.overview}</p>

          <div className="internship-tasks-grid">
            {internshipData.responsibilities.map((task, idx) => (
              <div key={idx} className="internship-task-card">
                <div className="task-indicator">
                  <span className="task-num">0{idx + 1}</span>
                  <div className="task-bar"></div>
                </div>
                <div className="task-content">
                  <h4 className="task-title">{task.title}</h4>
                  <p className="task-desc">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="internship-footer">
            <span className="internship-skills-label">Applied Technologies:</span>
            <div className="internship-tags">
              {internshipData.skills.map((skill, sIdx) => (
                <span key={sIdx} className="internship-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
