import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
const userAuthContext = createContext();
import {auth} from '../firebase-config';

export function UserAuthContextProvider ({ childer }){
    const [user, setUser] = useState();
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return (
        <userAuthContext.Provider  > {childer}  </userAuthContext.Provider>
    )

}

export function useUserAuth(){
    return userContext(userAuthContext);
}