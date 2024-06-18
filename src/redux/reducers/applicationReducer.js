// src/redux/reducers/applicationReducer.js
const initialState = {
    applications: [],
  };
  
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_APPLICATION':
        return {
          ...state,
          applications: [...state.applications, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default applicationReducer;
  