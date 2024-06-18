import React, { useState } from 'react';
import '../styles/AdminPage.css';

const initialData = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    experience: '2-5 years',
    location: 'New York',
    role: 'Software Engineer',
    stipend: '5000 USD',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 24,
    experience: '0-2 years',
    location: 'San Francisco',
    role: 'Data Scientist',
    stipend: '6000 USD',
    status: 'pending',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 30,
    experience: '5-20 years',
    location: 'Boston',
    role: 'Product Manager',
    stipend: '7000 USD',
    status: 'pending',
  },
  {
    id: 4,
    name: 'Robert Brown',
    age: 35,
    experience: '20+ years',
    location: 'Chicago',
    role: 'UX Designer',
    stipend: '5500 USD',
    status: 'pending',
  },
  {
    id: 5,
    name: 'Emily Davis',
    age: 29,
    experience: '2-5 years',
    location: 'Los Angeles',
    role: 'Marketing Specialist',
    stipend: '4800 USD',
    status: 'pending',
  },
];

const AdminPage = () => {
  const [applications, setApplications] = useState(initialData);

  const handleStatusChange = (id, status) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  return (
    <div className="admin-page">
      <h2 className="admin-header">Admin Dashboard</h2>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Role</th>
            <th>Stipend</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="application-row">
              <td>{app.name}</td>
              <td>{app.age}</td>
              <td>{app.experience}</td>
              <td>{app.location}</td>
              <td>{app.role}</td>
              <td>{app.stipend}</td>
              <td className={`status ${app.status}`}>{app.status}</td>
              <td>
                <button
                  className="accept"
                  onClick={() => handleStatusChange(app.id, 'accepted')}
                >
                  Accept
                </button>
                <button
                  className="reject"
                  onClick={() => handleStatusChange(app.id, 'rejected')}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;




























































































































//
// import React from 'react';
// import '../styles/AdminPage.css';

// const AdminPage = () => {
//   const applications = [
//     { name: 'John Doe', age: 25, location: 'New York', mobileCode: '+1', role: 'Developer', stipend: '$1000', status: null },
//     { name: 'Jane Smith', age: 30, location: 'London', mobileCode: '+44', role: 'Designer', stipend: '£800', status: null },
//     // Add more hardcoded data here
//   ];

//   const handleStatusChange = (index, status) => {
//     applications[index].status = status;
//     // Update state or store if needed
//   };

//   return (
//     <div className="admin-page">
//       <h2>Admin Page</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Location</th>
//             <th>Mobile Code</th>
//             <th>Role</th>
//             <th>Stipend</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app, index) => (
//             <tr key={index}>
//               <td>{app.name}</td>
//               <td>{app.age}</td>
//               <td>{app.location}</td>
//               <td>{app.mobileCode}</td>
//               <td>{app.role}</td>
//               <td>{app.stipend}</td>
//               <td>
//                 <button onClick={() => handleStatusChange(index, 'accepted')}>Accept</button>
//                 <button onClick={() => handleStatusChange(index, 'rejected')}>Reject</button>
//                 {app.status && (
//                   <span className={`status ${app.status}`}>{app.status}</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPage;
