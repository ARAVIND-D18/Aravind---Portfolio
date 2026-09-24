import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const skillCategories = [
    {
      id: 'backend',
      category: 'Backend',
      icon: '⚙️',
      color: '#1F3A5F',
      skills: ['Spring Boot', 'Spring Framework', 'REST APIs', 'Spring Security', 'JWT', 'JPA']
    },
    {
      id: 'ai-ml',
      category: 'AI / ML',
      icon: '🧠',
      color: '#2E5C8A',
      skills: ['RAG', 'LLM Integration', 'Vector Embeddings', 'Hybrid Retrieval']
    },
    {
      id: 'languages',
      category: 'Languages',
      icon: '💻',
      color: '#1F3A5F',
      skills: ['Java', 'SQL', 'Python']
    },
    {
      id: 'cloud',
      category: 'Cloud (AWS)',
      icon: '☁️',
      color: '#2E5C8A',
      skills: ['AWS EC2', 'RDS', 'Amplify', 'S3', 'IAM']
    },
    {
      id: 'frontend',
      category: 'Front-End',
      icon: '🎨',
      color: '#1F3A5F',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'core',
      category: 'Core Subjects',
      icon: '📚',
      color: '#2E5C8A',
      skills: ['OOP', 'DBMS', 'Operating Systems', 'Data Structures & Algorithms']
    },
    {
      id: 'tools',
      category: 'Tools & DB',
      icon: '🛠️',
      color: '#1F3A5F',
      skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Swagger', 'MySQL']
    }
  ];

  const filterTabs = ['All', 'Backend', 'AI / ML', 'Languages', 'Cloud (AWS)', 'Front-End', 'Core Subjects', 'Tools & DB'];

  const displayedCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Stack</span>
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-subtitle">
            Categorized technical capabilities spanning enterprise Java architectures, AI/ML retrieval, and cloud infrastructure.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-wrapper">
          <div className="skills-filter-container">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`filter-pill-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {displayedCategories.map((group) => (
            <div key={group.id} className="skill-category-card">
              <div className="skill-card-top">
                <span className="skill-card-icon">{group.icon}</span>
                <h3 className="skill-card-title">{group.category}</h3>
                <span className="skill-count-badge">{group.skills.length} skills</span>
              </div>

              <div className="skill-tags-list">
                {group.skills.map((skill, index) => (
                  <div key={index} className="skill-tag">
                    <span className="tag-dot"></span>
                    <span className="tag-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
