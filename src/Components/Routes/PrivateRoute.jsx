import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/Authcontext';
import { Navigate } from 'react-router-dom';



function PrivateRoute({children}) {
const {isAuth}=useContext(AuthContext)
if(!isAuth){
    return (<Navigate to="/login"/>)
}
  return children;
}

export default PrivateRoute;