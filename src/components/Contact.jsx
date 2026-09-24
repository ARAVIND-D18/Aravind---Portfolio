import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('daravind978@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Trigger user mail client fallback as well
    const mailtoUrl = `mailto:daravind978@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Whether you have an engineering opportunity, a question about my projects, or want to discuss backend architecture.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information & Channels */}
          <div className="contact-info-col">
            <div className="contact-card-badge">Available for Hire</div>
            <h3 className="contact-col-title">Let's discuss how I can contribute to your team.</h3>
            <p className="contact-col-desc">
              I am actively seeking software engineering and full-stack Java developer roles.
              Feel free to reach out directly through email or connect on professional platforms.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-card">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-content">
                  <span className="detail-caption">Email Address</span>
                  <a href="mailto:daravind978@gmail.com" className="detail-link">
                    daravind978@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-content">
                  <span className="detail-caption">Location</span>
                  <span className="detail-plain">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">💼</div>
                <div className="contact-detail-content">
                  <span className="detail-caption">Professional Profiles</span>
                  <div className="contact-social-pills">
                    <a
                      href="https://linkedin.com/in/aravind-d18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/ARAVIND-D18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://leetcode.com/u/3C2gnCsSBo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      LeetCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-container">
              {isSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon">🎉</div>
                  <h3 className="success-title">Message Prepared!</h3>
                  <p className="success-desc">
                    Your email client has been launched with your message. You can also reach me directly at{' '}
                    <strong>daravind978@gmail.com</strong>.
                  </p>
                  <button
                    className="btn btn-secondary reset-form-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Send a Direct Message</h3>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Question"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
