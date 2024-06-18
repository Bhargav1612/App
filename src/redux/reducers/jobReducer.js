// src/redux/reducers/jobReducer.js
const initialState = {
    jobs: [
      { id: 1, title: 'Web Developer', stipend: '3000', technology: 'React, Node.js', description: 'Build and maintain web applications.', location: 'Remote' },
      { id: 2, title: 'Data Scientist', stipend: '4000', technology: 'Python, R', description: 'Analyze data and build models.', location: 'Office' },
      { id: 3, title: 'DevOps Engineer', stipend: '3500', technology: 'Docker, Kubernetes', description: 'Manage deployment and infrastructure.', location: 'Remote' },
    ],
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default jobReducer;
  