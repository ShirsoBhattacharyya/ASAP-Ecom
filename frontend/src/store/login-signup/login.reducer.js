import {
    LOGIN_GET_ERROR,
    LOGIN_GET_SUCCESS,
    LOGIN_GET_LOADING,
    LOGOUT_GET,
    UPDATE_GET_SUCCESS,
  } from "./login.action.types";
  let token = localStorage.getItem("token") || "";
  let name = localStorage.getItem("name")   || "";
  let id = localStorage.getItem("id")   || "";
  let initialstate = {
    name,
    loading: false,
    error: false,
    token,
    id
  };
  
  export const authReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case LOGIN_GET_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case LOGIN_GET_SUCCESS: {
        if (payload.token) {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("name", payload.username);
          localStorage.setItem("id", payload.id);

        }
  
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token,
          name: payload.username,
          id:payload.id
        };
      }
      case UPDATE_GET_SUCCESS: {
        if (payload.token) {
          // localStorage.setItem("token", payload.token);
          localStorage.setItem("name", payload.username);
        }
  
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token,
          name: payload.name
        };
      }
        
      case LOGIN_GET_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case LOGOUT_GET: {
        localStorage.removeItem("token");
        return {
          ...state,
          loading: false,
          error: false,
          token: "",
        };
      }
      default:
        return state;
    }
  };