import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/UserSelection.css';
import companyLogo from '../images/logo.jpg'; 
import officeImage from '../images/office.jpg'; 
import teamImage from '../images/team.jpg'; 

const UserSelection = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <h1>Welcome to Orion</h1>
        <p>Innovating the future of technology. Explore our services and join our team to create impactful solutions.</p>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Orion is a leading software company specializing in innovative solutions for businesses worldwide. Our mission is to drive progress through cutting-edge technology.</p>
        <img src={officeImage} alt="Orion Office" className="section-image" />
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-tiles">
          <div className="tile">
            <h3>Custom Software Development</h3>
            <p>We create tailored software solutions to meet the unique needs of your business.</p>
          </div>
          <div className="tile">
            <h3>Cloud Computing</h3>
            <p>Our cloud solutions provide scalability, flexibility, and efficiency for your operations.</p>
          </div>
          <div className="tile">
            <h3>Data Analytics</h3>
            <p>Transform your data into actionable insights with our advanced analytics services.</p>
          </div>
        </div>
      </section>

      <section id="careers" className="careers-section">
        <h2>Careers at Orion</h2>
        <p>Join our team of talented professionals and take your career to new heights.</p>
        <div className="selection-buttons">
          <Link to="/student" className="btn">Student</Link>
          <Link to="/professional" className="btn">Professional</Link>
        </div>
        <img src={teamImage} alt="Orion Team" className="section-image" />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={companyLogo} alt="Orion Logo" className="logo" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>About</h3>
              <p><a href="#about">Company</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#careers">Careers</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <p><FaEnvelope /> info@orion.com</p>
              <p><FaPhone /> +123-456-7890</p>
            </div>
            <div className="footer-column">
              <h3>Follow Us</h3>
              <div className="social-media-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Orion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserSelection;





// // src/components/UserSelection.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/UserSelection.css';

// const UserSelection = () => {
//   return (
//     <div className="dashboard-page">
//       <div className="user-selection">
//         <h2 className="section-heading">Choose Your Path</h2>
//         <p className="section-description">
//           Whether you are a student looking for internships or a professional searching for new opportunities, we have got you covered. Select your role below to find tailored job listings and internships that suit your career goals.
//         </p>
//         <div className="selection-buttons">
//           <Link to="/student" className="btn">Student</Link>
//           <Link to="/professional" className="btn">Professional</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserSelection;

