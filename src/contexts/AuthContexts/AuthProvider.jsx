import  { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

    const Provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    const signInWithgoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }

    useEffect(() => {
         const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            console.log('state capture ', currentUser)
            setLoading(false)
         })
    return () => {
        unSubcribe()
    }
    })

    const authInfo = {
       users,
       loading,
       createUser,
       signInUser,
       signOutUser,
       signInWithgoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;