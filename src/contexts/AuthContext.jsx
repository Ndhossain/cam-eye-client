import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import '../firebase.config';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const providerLogin = async (provider) => {
        const auth = getAuth();
        const res = await signInWithPopup(auth, provider);
        return res;
    };

    const register = async (email, password, userName) => {
        setLoading(true);
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: userName,
        });
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    };

    const login = (email, password) => {
        setLoading(true);
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        const auth = getAuth();
        return signOut(auth);
    };

    return (
        <AuthContext.Provider
            value={{ providerLogin, register, login, logout, currentUser, loading, setLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;