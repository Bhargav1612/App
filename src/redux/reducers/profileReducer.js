// src/redux/reducers/profileReducer.js
const initialState = {
    profile: {
      username: '',
      password: '',
      age: null,
      location: '',
    },
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROFILE':
        return {
          ...state,
          profile: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  