import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const token=useSelector(store=>store.auth.token);
    let [id,email,password]=token.split(':');
    if(id===""){
        alert('Please Login first.');
        return <Navigate to='/' />
    }
    return children;
}

export default PrivateRoute
