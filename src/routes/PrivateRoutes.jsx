import React, { use } from 'react';
import { AuthContext } from './../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-dots loading-5xl"></span>

    }
    if (!user) {
     return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoutes;