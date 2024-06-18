// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage';
import ProfessionalPage from './components/ProfessionalPage';
import AdminPage from './components/AdminPage';
import InternshipsPage from './components/Internships';
import ExploreJobsPage from './components/ExploreJobs';
import AiPage from './components/AI';
import AboutUsPage from './components/AboutUs';
import UserSelection from './components/UserSelection';
import ProfilePopup from './components/ProfilePopup';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userselection" element={<UserSelection />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/professional" element={<ProfessionalPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/jobs" element={<ExploreJobsPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/profile" element={<ProfilePopup />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import LandingPage from './components/LandingPage';
// import LoginPage from './components/LoginPage';
// import StudentPage from './components/StudentPage';
// import ProfessionalPage from './components/ProfessionalPage';
// import AdminPage from './components/AdminPage';
// import InternshipsPage from './components/Internships';
// import ExploreJobsPage from './components/ExploreJobs';
// import AiPage from './components/AI';
// import AboutUsPage from './components/AboutUs';
// import UserSelection from './components/UserSelection';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/userselection" element={<UserSelection />} />
//         <Route path="/student" element={<StudentPage />} />
//         <Route path="/professional" element={<ProfessionalPage />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/internships" element={<InternshipsPage />} />
//         <Route path="/jobs" element={<ExploreJobsPage />} />
//         <Route path="/ai" element={<AiPage />} />
//         <Route path="/about" element={<AboutUsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
