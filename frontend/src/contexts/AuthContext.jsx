import axios from 'axios';
import React,{createContext, useEffect, useState} from 'react';

export const AuthContext=createContext();
const AuthContextProvider = ({children}) => {
    const [usersArray,setUsersArray]=useState([]);
    const [userdata,setUserdata]=useState({});
    const user=JSON.parse(localStorage.getItem('userdata'));
    //console.log(user);
   // useEffect(()=>{axios.get(`https://asap-backend-server-deploy.herokuapp.com/users`).then(res=>setUsersArray(res.data))},[usersArray])
    usersArray.map(u=>(u.email===user.email)? setUserdata(u) : setUserdata({}));
    // console.log(userdata);
  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
