import axios from "axios";
import { LOGIN_GET_ERROR, LOGIN_GET_SUCCESS, LOGIN_GET_LOADING,LOGOUT_GET, UPDATE_GET_SUCCESS } from "./login.action.types";
export const login = (creds) => async (dispatch) => {

    // dispatch({ type: LOGIN_GET_LOADING });
    try {
        let response = await axios.post("https://asap-backend-server-deploy.herokuapp.com/users/login", creds)
        dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data });
        alert('Login Successful')
        return response.data;        
    }
    catch (e) {
        dispatch({ type: LOGIN_GET_ERROR })
        alert('Login Failed')
    }  
}
// export const update = (id, newcred) => async (dispatch) => {
//     try {
//         let res= await axios.patch(`https://cloneofeverhour.herokuapp.com/users/${id}`,newcred)
//         dispatch({ type: UPDATE_GET_SUCCESS, payload: res.data });       
//     }
//     catch(e) {
//         dispatch({ type: LOGIN_GET_ERROR })
//     }
//   }
export const logout = () => ({type:LOGOUT_GET})