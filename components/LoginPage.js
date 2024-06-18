import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogin = () => {
    if (isAdmin) {
      if (username === 'Admin' && password === '123') {
        dispatch(loginUser({ username, password, userType: 'admin' }));
      } else {
        alert('Invalid Admin credentials');
      }
    } else {
      if (username.length >= 6 && password.length >= 3 && password.length <= 5) {
        dispatch(loginUser({ username, password, userType: 'user' }));
      } else {
        alert('Invalid User credentials');
      }
    }
  };

  const handleAdminClick = () => {
    setIsAdmin(true);
  };

  const handleUserClick = () => {
    setIsAdmin(false);
  };

  if (isAuthenticated) {
    if (user.userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/userselection');
    }
  }

  return (
    <div className="login-page">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="login-container">
        {!isAdmin ? (
          <>
            <h2 className="welcome-message">Welcome User, please log in</h2>
            <div className="login-form">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
            <div className="admin-signin-link">
              <p onClick={handleAdminClick}>Sign in as Admin?</p>
            </div>
          </>
        ) : (
          <div className="admin-login">
            <h2 className="welcome-message">Welcome Admin, please log in</h2>
            <div className="login-form">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
            <div className="user-signin-link">
              <p onClick={handleUserClick}>Sign in as User?</p>
            </div>
          </div>
        )}
      </div>
      <footer className="footer-login">
        <div className="footer-logincontent">
          © 2024 Orion. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import '../styles/LoginPage.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isAuthenticated, user } = useSelector(state => state.auth);

//   const handleLogin = () => {
//     if (isAdmin) {
//       if (username === 'Admin' && password === '123') {
//         dispatch(loginUser({ username, password, userType: 'admin' }));
//       } else {
//         alert('Invalid Admin credentials');
//       }
//     } else {
//       if (username.length >= 6 && password.length >= 3 && password.length <= 5) {
//         dispatch(loginUser({ username, password, userType: 'user' }));
//       } else {
//         alert('Invalid User credentials');
//       }
//     }
//   };

//   if (isAuthenticated) {
//     if (user.userType === 'admin') {
//       navigate('/admin');
//     } else {
//       navigate('/userselection');
//     }
//   }

//   return (
//     <div className="login-page">
//       <Helmet>
//         <title>Login Page</title>
//       </Helmet>
//       <div className="login-container">
//         {!isAdmin ? (
//           <>
//             <h2 className="welcome-message">Welcome User, please log in</h2>
//             <div className="login-form">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button className="login-button" onClick={handleLogin}>Login</button>
//             </div>
//             <div className="admin-signin-link">
//               <p onClick={() => setIsAdmin(true)}>Sign in as Admin?</p>
//             </div>
//           </>
//         ) : (
//           <>
//             <h2 className="welcome-message">Welcome Admin, please log in</h2>
//             <div className="login-form">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button className="login-button" onClick={handleLogin}>Login</button>
//             </div>
//             <div className="user-signin-link">
//               <p onClick={() => setIsAdmin(false)}>Sign in as User?</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






