import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {users, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <span className=" text-center loading loading-ring loading-xl"></span>
    }

    if(users){
        return children;
    }

    return (
        <Navigate to="/login" state={location?.pathname}></Navigate>
    );
};

export default PrivateRoute;