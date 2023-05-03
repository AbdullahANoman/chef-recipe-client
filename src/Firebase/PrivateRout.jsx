import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if(loading){
        return <p>Loading ..</p>
    }
    if(user)
    {
        return children;
    }
    else{
        return (
            <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
        );
    }
    
};

export default PrivateRout;