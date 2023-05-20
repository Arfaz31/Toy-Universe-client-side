import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const  AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // SignIn
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // LogIn
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    }

    // LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // update user profile
    const userUpdateData =(user,  name, photo)=>{
        setLoading(true)
       return  updateProfile (user, {
         displayName: name,
         photoURL:photo
     })    
 }
    
    // Current User Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('currentUser', currentUser )
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);
    
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        userUpdateData
    
    }
    
        return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        );
};

export default AuthProvider;