import React from 'react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 'docmind-ai',
      badge: 'Featured AI Project',
      title: 'DocMind AI — Hybrid RAG Document Intelligence',
      category: 'AI / RAG & Backend',
      period: '2025 – Present',
      summary:
        'An enterprise-grade Hybrid Retrieval-Augmented Generation system enabling page-cited document Q&A over complex multi-page PDFs.',
      description: [
        'Built a Hybrid RAG platform where users upload PDFs and receive page-cited answers, combining dense vector search with BM25 keyword search via Reciprocal Rank Fusion to handle semantic and exact-term queries.',
        'Diagnosed a chunk-ID mismatch silently breaking hybrid retrieval, and integrated Google Gemini for answer synthesis with Python embedding, JWT authentication, and MySQL persistence.'
      ],
      highlights: [
        'Reciprocal Rank Fusion (RRF) merging dense semantic + sparse BM25 scores',
        'Decoupled architecture: Java Spring Boot core + Python Embedding worker',
        'Stateful session tracking with page-cited source verification',
        'Stateless JWT auth & relational metadata persistence in MySQL'
      ],
      tags: [
        'Java',
        'Spring Boot',
        'Google Gemini',
        'RAG Architecture',
        'Reciprocal Rank Fusion',
        'BM25 Search',
        'Vector Embeddings',
        'JWT Auth',
        'MySQL'
      ],
      githubUrl: 'https://github.com/ARAVIND-D18',
      icon: '🧠'
    },
    {
      id: 'fresh-basket',
      badge: 'Full-Stack E-Commerce',
      title: 'Fresh Basket — Grocery E-Commerce Platform',
      category: 'Full-Stack Enterprise',
      period: '2024 – 2025',
      summary:
        'A comprehensive grocery commerce and multi-tiered supply chain platform linking buyers, merchants, and distributor inventory.',
      description: [
        'Developed a grocery e-commerce platform with user authentication, product catalog, shopping cart, and seller management, including a seller–distributor workflow enabling sellers to browse distributor products and place orders directly through the application.'
      ],
      highlights: [
        'End-to-end seller–distributor workflow streamlining wholesale inventory replenishment',
        'Role-based access control (RBAC) separating customers, sellers, and platform admins',
        'Real-time inventory decrementing and synchronized cart checkout pipelines',
        'Optimized JPA/Hibernate queries ensuring sub-100ms catalog search times'
      ],
      tags: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'REST APIs',
        'Hibernate / JPA',
        'MySQL',
        'JavaScript',
        'E-Commerce Architecture',
        'RBAC'
      ],
      githubUrl: 'https://github.com/ARAVIND-D18',
      icon: '🛒'
    }
  ];

  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Deep dive into technical implementations showcasing backend reliability, AI integration, and enterprise design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card"
            >
              <div className="project-card-header">
                <div className="project-badge-group">
                  <span className="project-tag-pill">{project.badge}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <span className="project-icon-badge">{project.icon}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                {/* Core Description Points */}
                <div className="project-points">
                  {project.description.map((point, pIdx) => (
                    <div key={pIdx} className="project-point-item">
                      <span className="point-arrow">▹</span>
                      <p className="point-text">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Key Architectural Highlights */}
                <div className="project-highlights-box">
                  <h4 className="highlights-title">Key Architectural Highlights:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <span className="highlight-bullet">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  title="View code on GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>View Repository</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
