import React, { useState } from 'react';
import '../styles/Internships.css'; // Check the correct path to your CSS file
import intern from '../images/internships.jpg';

const Internships = () => {
  const [liked, setLiked] = useState(Array(5).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="internships-container">
      <div className="header-image">
        <img src={intern} alt="Internships Header" />
      </div>
      <div className="internships-content">
        <h1 className="section-title">Explore Internship Opportunities</h1>
        <p className="section-description">Discover exciting internship roles in cutting-edge technologies.</p>
        <div className="internship-tiles">
          {["AI Research Intern", "Blockchain Developer Intern", "Cybersecurity Intern", "Full Stack Developer Intern", "Data Science Intern"].map((title, index) => (
            <div key={index} className="tile">
              <h2>{title}</h2>
              <p>Explore opportunities in {title}.</p>
              <button 
                className={`like-btn ${liked[index] ? 'liked' : ''}`} 
                onClick={() => toggleLike(index)}
              >
                {liked[index] ? 'Liked' : 'Like'}
              </button>
            </div>
          ))}
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

export default Internships;


// import React, { useState } from 'react';
// import '../styles/Internships.css';
// import intern from '../images/internships.jpg'

// const Internships = () => {
//   const [liked, setLiked] = useState(Array(5).fill(false));

//   const toggleLike = (index) => {
//     const newLiked = [...liked];
//     newLiked[index] = !newLiked[index];
//     setLiked(newLiked);
//   };

//   return (
//     <div className="internships">
//       <div className="header-image">
//         <img src={intern} alt="Internships Header" />
//       </div>
//       <div className="internships-content">
//         <h1 className="section-title">Internships</h1>
//         <p className="section-description">Explore the latest internship opportunities in cutting-edge technologies.</p>
//         <div className="internship-tiles">
//           {["AI Research Intern", "Blockchain Developer Intern", "Cybersecurity Intern", "Full Stack Developer Intern", "Data Science Intern"].map((title, index) => (
//             <div key={index} className="tile">
//               <h2>{title}</h2>
//               <p>Discover opportunities in {title}.</p>
//               <button 
//                 className={`like-btn ${liked[index] ? 'liked' : ''}`} 
//                 onClick={() => toggleLike(index)}
//               >
//                 {liked[index] ? 'Liked' : 'Like'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <footer className="footer">
//         <div className="footer-content">
//           <p>© 2024 Orion. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Internships;


