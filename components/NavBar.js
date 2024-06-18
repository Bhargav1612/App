// src/components/NavBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../redux/actions/authActions';
import '../styles/NavBar.css';
import logoImage from '../images/logo.jpg';
import ProfilePopup from './ProfilePopup';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [showProfilePopup, setShowProfilePopup] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');  // Redirect to LandingPage after logout
  };

  const handleNavigation = (path) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container" onClick={() => navigate('/')}>
        <img src={logoImage} alt="Orion Logo" className="navbar-logo-image" />
        <div className="navbar-logo">Orion</div>
      </div>
      <div className="navbar-buttons">
        <button onClick={() => handleNavigation('/internships')}>Internships</button>
        <button onClick={() => handleNavigation('/jobs')}>Explore Jobs</button>
        <button onClick={() => handleNavigation('/ai')}>AI</button>
        <button onClick={() => handleNavigation('/about')}>About Us</button>
      </div>
      <div className="navbar-icons">
        {!isAuthenticated ? (
          <FaHome className="navbar-icon" onClick={() => navigate('/login')} />
        ) : (
          user.userType === 'admin' ? null : (
            <FaHome className="navbar-icon" onClick={() => navigate('/userselection')} />
          )
        )}
        {isAuthenticated && (
          <FaUser className="navbar-icon" onClick={toggleProfilePopup} />
        )}
        {isAuthenticated && (
          <FaSignOutAlt className="navbar-icon" onClick={handleLogout} />
        )}
        {!isAuthenticated && (
          <FaUser className="navbar-icon" onClick={() => navigate('/login')} />
        )}
      </div>
      {showProfilePopup && <ProfilePopup onClose={toggleProfilePopup} userDetails={user} />}
    </nav>
  );
};

export default NavBar;








// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaUser, FaSignOutAlt } from 'react-icons/fa';
// import { logout } from '../redux/actions/authActions';
// import '../styles/NavBar.css';
// import logoImage from '../images/logo.jpg';

// const Navbar = () => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo-container">
//         <img src={logoImage} alt="Orion Logo" className="navbar-logo-image" onClick={() => navigate('/')} />
//         <span className="navbar-logo">Orion</span>
//       </div>
//       <div className="navbar-buttons">
//         <Link to="/login" className="btn">Login</Link>
//         {!isAuthenticated && (
//           <>
//             <Link to="/login" className="btn">Login</Link>
//           </>
//         )}
//         {isAuthenticated && (
//           <>
//             <Link to="/userselection" className="btn">User Selection</Link>
//             <button className="btn" onClick={handleLogout}>Logout</button>
//           </>
//         )}
//         {isAuthenticated && (
//           <>
//             <Link to="/internships" className="btn">Internships</Link>
//             <Link to="/jobs" className="btn">Explore Jobs</Link>
//             <Link to="/ai" className="btn">AI</Link>
//             <Link to="/about" className="btn">About Us</Link>
//           </>
//         )}
//       </div>
//       <div className="navbar-icons">
//         <FaUser className="navbar-icon" onClick={() => navigate('/login')} />
//         {isAuthenticated && <FaSignOutAlt className="navbar-icon" onClick={handleLogout} />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaSignOutAlt, FaHome } from 'react-icons/fa';
// import '../styles/NavBar.css';
// import ProfilePopup from './ProfilePopup';
// import logoImage from '../images/logo.jpg'; // Make sure to import your image

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [showProfilePopup, setShowProfilePopup] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfilePopup(!showProfilePopup);
//   };

//   const handleLogoutClick = () => {
//     // Clear user session and navigate to the landing page
//     navigate('/');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo-container" onClick={() => navigate('/')}>
//         <img src={logoImage} alt="Logo" className="navbar-logo-image" />
//         <div className="navbar-logo">Orion</div>
//       </div>
//       <div className="navbar-buttons">
//         <button onClick={() => navigate('/internships')}>Internships</button>
//         <button onClick={() => navigate('/jobs')}>Explore Jobs</button>
//         <button onClick={() => navigate('/ai')}>AI</button>
//         <button onClick={() => navigate('/about')}>About Us</button>
//       </div>
//       <div className="navbar-icons">
//         <FaHome className="navbar-icon" onClick={() => navigate('/userselection')} />
//         <FaUser className="navbar-icon" onClick={handleProfileClick} />
//         <FaSignOutAlt className="navbar-icon" onClick={handleLogoutClick} />
//       </div>
//       {showProfilePopup && <ProfilePopup onClose={handleProfileClick} />}
//     </nav>
//   );
// };

// export default NavBar;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaSignOutAlt } from 'react-icons/fa'; // Using react-icons for profile and logout icons
// import '../styles/NavBar.css';
// import ProfilePopup from './ProfilePopup';
// import logoImage from '../images/logo.jpg'; // Make sure to import your image

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [showProfilePopup, setShowProfilePopup] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfilePopup(!showProfilePopup);
//   };

//   const handleLogoutClick = () => {
//     // Clear user session and navigate to the landing page
//     navigate('/');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo-container">
//         <img src={logoImage} alt="Logo" className="navbar-logo-image" />
//         <div className="navbar-logo">Orion</div>
//       </div>
//       <div className="navbar-buttons">
//         <button onClick={() => navigate('/')}>Home</button>
//         <button onClick={() => navigate('/internships')}>Internships</button>
//         <button onClick={() => navigate('/jobs')}>Explore Jobs</button>
//         <button onClick={() => navigate('/ai')}>AI</button>
//         <button onClick={() => navigate('/about')}>About Us</button>
//       </div>
//       <div className="navbar-icons">
//         <FaUser className="navbar-icon" onClick={handleProfileClick} />
//         <FaSignOutAlt className="navbar-icon" onClick={handleLogoutClick} />
//       </div>
//       {showProfilePopup && <ProfilePopup onClose={handleProfileClick} />}
//     </nav>
//   );
// };

// export default NavBar;

