import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='w-max mx-auto  text-white'>
            <button type="button" class="bg-indigo-500 p-4 font-lg " disabled>
        Processing...
      </button>
        </div>
    }


    if(user){
        return children;
    }
    return  <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;