// src/components/ExploreJobs.js
import React from 'react';
import '../styles/ExploreJobs.css';
import job from '../images/explore.jpg';

const ExploreJobs = () => {
  return (
    <div className="explore-jobs">
      <div className="header-image">
        <img src={job} alt="Explore Jobs" className="header-img" />
      </div>
      <div className="internships-content">
        <h1 className="section-title">Explore Jobs</h1>
        <p className="section-description">
          Discover a variety of job opportunities across different fields. Explore roles, technologies, and qualifications that can help you build a successful career.
        </p>
        <div className="internship-tiles">
          <div className="tile">
            <h2>Popular Roles</h2>
            <ul>
              <li>Software Engineer</li>
              <li>Data Scientist</li>
              <li>Product Manager</li>
              <li>UX/UI Designer</li>
              <li>Marketing Specialist</li>
              <li>Sales Executive</li>
            </ul>
          </div>
          <div className="tile">
            <h2>Popular Technologies</h2>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>Django</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <div className="tile">
            <h2>Qualifications</h2>
            <ul>
              <li>Bachelor’s Degree in Computer Science</li>
              <li>3+ years of experience in relevant field</li>
              <li>Strong problem-solving skills</li>
              <li>Excellent communication skills</li>
              <li>Experience with Agile methodologies</li>
              <li>Proven track record of successful projects</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Orion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExploreJobs;

