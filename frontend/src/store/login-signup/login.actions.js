import axios from "axios";
import { LOGIN_GET_ERROR, LOGIN_GET_SUCCESS, LOGOUT_GET} from "./login.action.types";
export const login = (creds) => async (dispatch) => {

    // dispatch({ type: LOGIN_GET_LOADING });
    try {
        let response = await axios.post("https://asap-backend-production.up.railway.app/users/login", creds)
        dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data });
        alert('Login Successful')
        return response.data;        
    }
    catch (e) {
        dispatch({ type: LOGIN_GET_ERROR })
        alert('Login Failed')
    }  
}
export const logout = () => ({type:LOGOUT_GET})