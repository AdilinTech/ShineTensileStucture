import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import DashBoardPage from '../pages/DashboardPage';


const PrivateRoute = ({ componet: componet, isAuthenticated, ...rest }) => {
    
   
    return isAuthenticated ? <DashBoardPage />  : <Navigate to="/login" />;
}

export default PrivateRoute