import React, { useState } from 'react';
import '../styles/JobApplyModal.css';

const JobApplyModal = ({ job, onApply, onClose, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: '',
    location: '',
    agree: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, experience, location } = formData;

    if (name.length < 5 || name.length > 10) {
      setError('Name must be 5-10 characters.');
      return;
    }
    if (age < 18 || age > 60) {
      setError('Age must be between 18 and 60.');
      return;
    }
    if (!experience) {
      setError('Please select your experience.');
      return;
    }
    if (!location) {
      setError('Please select your location.');
      return;
    }
    setError('');
    showToast('Application submitted successfully!');
    onApply(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Apply for {job.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <strong>Name:</strong>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <strong>Age:</strong>
            <input type="number" name="age" value={formData.age} onChange={handleChange} min="18" max="60" />
          </label>
          <label>
            <strong>Experience:</strong>
            <select name="experience" value={formData.experience} onChange={handleChange}>
              <option value="">Select experience</option>
              <option value="Less than 2 years">Less than 2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-20 years">5-20 years</option>
              <option value="More than 20 years">More than 20 years</option>
            </select>
          </label>
          <label>
            <strong>Location:</strong>
            <select name="location" value={formData.location} onChange={handleChange}>
              <option value="">Select location</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Chicago">Chicago</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Seattle">Seattle</option>
            </select>
          </label>
          <label>
            <strong>Agree to Terms:</strong>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyModal;



// import React, { useState } from 'react';
// import '../styles/JobApplyModal.css';

// const JobApplyModal = ({ job, onApply, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     mobileCode: '+',
//     location: '',
//     agree: false
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, age, mobileCode, location, agree } = formData;

//     if (name.length < 5 || name.length > 10) {
//       setError('Name must be 5-10 characters.');
//       return;
//     }
//     if (age < 18 || age > 60) {
//       setError('Age must be between 18 and 60.');
//       return;
//     }
//     if (!/^\+\d{1,4}$/.test(mobileCode)) {
//       setError('Mobile Code should start with + and be 1-4 digits.');
//       return;
//     }
//     setError('');
//     onApply(formData);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>x</span>
//         <h2>Apply for {job.title}</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" value={formData.name} onChange={handleChange} />
//           </label>
//           <label>
//             Age:
//             <input type="number" name="age" value={formData.age} onChange={handleChange} min="18" max="60" />
//           </label>
//           <label>
//             Mobile Code:
//             <input type="text" name="mobileCode" value={formData.mobileCode} onChange={handleChange} pattern="\+\d{1,4}" />
//           </label>
//           <label>
//             Location:
//             <input type="text" name="location" value={formData.location} onChange={handleChange} />
//           </label>
//           <label>
//             Agree to Terms:
//             <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
//           </label>
//           {error && <p className="error">{error}</p>}
//           <button type="submit">Apply</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobApplyModal;

