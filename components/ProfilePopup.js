// // src/components/ProfilePopup.js
// import React from 'react';
// import '../styles/ProfilePopup.css';
// import welcomeImage from '../images/logo.jpg';

// const ProfilePopup = ({ onClose }) => {
//   return (
//     <div className="profile-popup">
//       <div className="profile-content">
//       <img src={welcomeImage} alt="Welcome" className="popup-image" />
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2 className="popup-heading">Welcome to Orion!</h2>
//         <p className="popup-description">
//           Discover exciting opportunities tailored just for you. Explore internships, jobs, and connect with industry leaders. 
//           Start your journey with Orion today!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePopup;

// src/components/ProfilePopup.js
import React from 'react';
import '../styles/ProfilePopup.css';
import welcomeImage from '../images/logo.jpg';

const ProfilePopup = ({ onClose, userDetails }) => {
  const { username, userType } = userDetails;

  return (
    <div className="profile-popup">
      <div className="profile-content">
        <img src={welcomeImage} alt="Welcome" className="popup-image" />
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="popup-heading">Welcome, {username}!</h2>
        <div className="credentials">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>User Type:</strong> {userType}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;


