import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./signup.action.types";
  let token = localStorage.getItem("token") || "";
  let initialstate = {
    loading: false,
    error: false,
    token,
  };
  
  export const signupReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case SIGNUP_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case SIGNUP_SUCCESS: {
        if (payload.token) {
          localStorage.setItem("token", payload.token);
        }
  
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token,
        };
      }
   
      case SIGNUP_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
    
      default:
        return state;
    }
  };