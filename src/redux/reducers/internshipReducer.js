// src/redux/reducers/internshipReducer.js
const initialState = {
    internships: [
      { id: 1, title: 'Frontend Intern', stipend: '2000', technology: 'React', description: 'Learn to build web applications with React.', location: 'Remote' },
      { id: 2, title: 'Backend Intern', stipend: '2500', technology: 'Node.js', description: 'Work on server-side applications.', location: 'Remote' },
      { id: 3, title: 'UI/UX Intern', stipend: '1800', technology: 'Figma', description: 'Design user interfaces and experiences.', location: 'Office' },
    ],
  };
  
  const internshipReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default internshipReducer;
  