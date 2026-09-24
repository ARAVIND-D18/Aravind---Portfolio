import React from 'react';
import './CodingProfiles.css';

const CodingProfiles = () => {
  const platforms = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      handle: '3C2gnCsSBo',
      statNumber: '450+',
      statLabel: 'Problems Solved',
      accentColor: '#FFA116',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.791l3.748-4.013 4.908-5.26a1.388 1.388 0 0 0-.965-2.355zm.51 9.387c-.764 0-1.382.618-1.382 1.382v2.764c0 .764.618 1.382 1.382 1.382h5.528c.764 0 1.382-.618 1.382-1.382v-2.764c0-.764-.618-1.382-1.382-1.382z"/>
        </svg>
      ),
      description:
        'Continuous problem solving focused on optimal Data Structures & Algorithms, including Trees, Dynamic Programming, Graphs, and Greedy approaches.',
      highlights: ['450+ Algorithmic Challenges', 'Strong Focus on Time/Space Complexity', 'Java DSA Specialization'],
      url: 'https://leetcode.com/u/3C2gnCsSBo',
      badgeText: 'Top Problem Solver'
    },
    {
      id: 'skillrack',
      name: 'SkillRack',
      handle: 'ARAVIND-D',
      statNumber: '850+',
      statLabel: 'Problems Solved',
      accentColor: '#10B981',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      description:
        'Extensive practice with daily challenges, code tests, algorithmic logic, and speed coding across diverse computing topics and edge cases.',
      highlights: ['850+ Code Challenges Solved', 'Consistent Daily Solving Track Record', 'Core Logic Mastery'],
      badgeText: '850+ Milestones'
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'ARAVIND-D18',
      statNumber: 'Active',
      statLabel: 'Open Repositories',
      accentColor: '#24292e',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      description:
        'Source code for full-stack enterprise systems, AI / RAG implementations, Spring Boot microservices, and architectural showcases.',
      highlights: ['DocMind AI & Fresh Basket Repos', 'Clean Commit Histories & Branches', 'Modular Java Architecture'],
      url: 'https://github.com/ARAVIND-D18',
      badgeText: 'Open Source'
    }
  ];

  const topicProficiencies = [
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Binary Search',
    'Linked Lists',
    'Dynamic Programming',
    'Greedy Algorithms',
    'Backtracking',
    'Heap / Priority Queue',
    'Recursion'
  ];

  return (
    <section id="coding-profiles" className="section section-alt coding-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Problem Solving</span>
          <h2 className="section-title">Coding Profiles & Algorithmic Track</h2>
          <p className="section-subtitle">
            Demonstrating disciplined computational thinking with 1,300+ combined solved challenges.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="coding-cards-grid">
          {platforms.map((platform) => (
            <div key={platform.id} className="coding-card">
              <div className="coding-card-top">
                <div className="coding-icon-box" style={{ color: platform.accentColor }}>
                  {platform.icon}
                </div>
                <div className="coding-header-text">
                  <h3 className="coding-platform-name">{platform.name}</h3>
                  <span className="coding-handle">@{platform.handle}</span>
                </div>
                <span className="coding-badge">{platform.badgeText}</span>
              </div>

              <div className="coding-stat-highlight">
                <div className="coding-stat-num">{platform.statNumber}</div>
                <div className="coding-stat-desc">{platform.statLabel}</div>
              </div>

              <p className="coding-card-desc">{platform.description}</p>

              <ul className="coding-card-bullets">
                {platform.highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="coding-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {platform.url && (
                <div className="coding-card-bottom">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coding-link-btn"
                  >
                    <span>View Profile</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Topic Competency Banner */}
        <div className="coding-topics-box">
          <div className="topics-heading-group">
            <h4 className="topics-title">Core DSA Topics Practiced</h4>
            <p className="topics-subtitle">
              Fundamental algorithmic strategies mastered through rigorous problem solving
            </p>
          </div>
          <div className="topics-tags-list">
            {topicProficiencies.map((topic, tIdx) => (
              <span key={tIdx} className="topic-tag-item">
                <span className="topic-bullet">◆</span>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
