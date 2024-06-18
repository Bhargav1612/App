// src/components/StudentPage.js
import React, { useState } from 'react';
import '../styles/StudentPage.css';
import JobApplyModal from './JobApplyModal';
import Toast from './Toast';

import intern1 from '../images/i1.jpg';
import intern2 from '../images/i2.png';
import intern3 from '../images/i3.jpg';
import intern4 from '../images/i4.jpg';
import intern5 from '../images/i5.jpg';
import intern6 from '../images/i6.jpg';

const jobData = [
  { id: 1, title: 'Software Developer', role: 'Software Engineer', stipend: '5000 USD', tech: 'React, Node.js', imageUrl: intern1 },
  { id: 2, title: 'Data Analyst', role: 'Data Analyst', stipend: '4000 USD', tech: 'Python, SQL', imageUrl: intern2},
  { id: 3, title: 'Web Designer', role: 'Designer', stipend: '3000 USD', tech: 'HTML, CSS, JS', imageUrl: intern3 },
  { id: 4, title: 'Product Manager', role: 'Product Manager', stipend: '7000 USD', tech: 'Agile, Scrum', imageUrl: intern4 },
  { id: 5, title: 'Marketing Specialist', role: 'Marketing', stipend: '3500 USD', tech: 'SEO, SEM', imageUrl: intern5 },
  { id: 6, title: 'HR Manager', role: 'HR', stipend: '4500 USD', tech: 'Recruitment, Payroll', imageUrl: intern6 }
];

const StudentPage = () => {
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApply = (formData) => {
    setApplications([...applications, { ...selectedJob, ...formData }]);
    closeModal();
    showToast(`Applied for ${selectedJob.title}`);
  };

  const handleDelete = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    setApplications(updatedApplications);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="student-page">
      {toastMessage && <Toast message={toastMessage} />}
      <h2 className="page-heading">Available Job Opportunities</h2>
      <div className="job-tiles">
        {jobData.map((job) => (
          <div key={job.id} className="job-tile">
            <img src={job.imageUrl} alt={job.title} className="job-image" />
            <div className="job-info">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-role"><strong>Role:</strong> {job.role}</p>
              <p className="job-stipend"><strong>Stipend:</strong> {job.stipend}</p>
              <p className="job-tech"><strong>Technologies:</strong> {job.tech}</p>
              <button className="apply-button" onClick={() => openModal(job)}>Apply</button>
            </div>
          </div>
        ))}
      </div>
      <div className="applications">
        <h2 className="applications-heading">Your Applications</h2>
        <div className="applications-list">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <img src={app.imageUrl} alt={app.title} className="application-image" />
              <div className="application-info">
                <h4 className="application-title">{app.title}</h4>
                <p className="application-role">{app.role}</p>
                <p className="application-stipend">{app.stipend}</p>
                <p className="application-tech">{app.tech}</p>
                <p className="application-name"><strong>Name:</strong> {app.name}</p>
                <p className="application-age"><strong>Age:</strong> {app.age}</p>
                <p className="application-experience"><strong>Experience:</strong> {app.experience}</p>
                <p className="application-location"><strong>Location:</strong> {app.location}</p>
                <p className="application-terms"><strong>Agree to Terms:</strong> {app.agree ? 'Yes' : 'No'}</p>
              </div>
              <button className="close-button" onClick={() => handleDelete(index)}>Close</button>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <JobApplyModal job={selectedJob} onApply={handleApply} onClose={closeModal} showToast={showToast} />
      )}
    </div>
  );
};

export default StudentPage;


// import React, { useState } from 'react';
// import '../styles/StudentPage.css';
// import JobApplyModal from './JobApplyModal';
// import Toast from './Toast';

// const jobData = [
//   { id: 1, title: 'Software Developer', role: 'Software Engineer', stipend: '5000 USD', tech: 'React, Node.js', imageUrl: 'https://via.placeholder.com/150' },
//   { id: 2, title: 'Data Analyst', role: 'Data Analyst', stipend: '4000 USD', tech: 'Python, SQL', imageUrl: 'https://via.placeholder.com/150' },
//   { id: 3, title: 'Web Designer', role: 'Designer', stipend: '3000 USD', tech: 'HTML, CSS, JS', imageUrl: 'https://via.placeholder.com/150' },
//   { id: 4, title: 'Product Manager', role: 'Product Manager', stipend: '7000 USD', tech: 'Agile, Scrum', imageUrl: 'https://via.placeholder.com/150' },
//   { id: 5, title: 'Marketing Specialist', role: 'Marketing', stipend: '3500 USD', tech: 'SEO, SEM', imageUrl: 'https://via.placeholder.com/150' },
//   { id: 6, title: 'HR Manager', role: 'HR', stipend: '4500 USD', tech: 'Recruitment, Payroll', imageUrl: 'https://via.placeholder.com/150' }
// ];

// const StudentPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [toastMessage, setToastMessage] = useState('');

//   const openModal = (job) => {
//     setSelectedJob(job);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleApply = (formData) => {
//     setApplications([...applications, { ...selectedJob, ...formData }]);
//     closeModal();
//   };

//   const handleDelete = (index) => {
//     const updatedApplications = applications.filter((_, i) => i !== index);
//     setApplications(updatedApplications);
//   };

//   const showToast = (message) => {
//     setToastMessage(message);
//     setTimeout(() => setToastMessage(''), 3000);
//   };

//   return (
//     <div className="student-page">
//       {toastMessage && <Toast message={toastMessage} />}
//       <div className="job-tiles">
//         {jobData.map((job) => (
//           <div key={job.id} className="job-tile">
//             <img src={job.imageUrl} alt={job.title} className="job-image" />
//             <h3>{job.title}</h3>
//             <p>{job.role}</p>
//             <p>{job.stipend}</p>
//             <p>{job.tech}</p>
//             <button onClick={() => openModal(job)}>Apply</button>
//           </div>
//         ))}
//       </div>
//       <div className="applications">
//         {applications.map((app, index) => (
//           <div key={index} className="application-card">
//             <img src={app.imageUrl} alt={app.title} className="application-image" />
//             <div>
//               <h4>{app.title}</h4>
//               <p>{app.role}</p>
//               <p>{app.stipend}</p>
//               <p>{app.tech}</p>
//               <p>Name: {app.name}</p>
//               <p>Age: {app.age}</p>
//               <p>Experience: {app.experience}</p>
//               <p>Location: {app.location}</p>
//               <p>Agree to Terms: {app.agree ? 'Yes' : 'No'}</p>
//             </div>
//             <span className="close" onClick={() => handleDelete(index)}>x</span>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <JobApplyModal job={selectedJob} onApply={handleApply} onClose={closeModal} showToast={showToast} />
//       )}
//     </div>
//   );
// };

// export default StudentPage;


