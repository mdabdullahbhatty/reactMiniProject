import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const userContext = createContext();



const ProfileContext = ({ children }) => {
    const [userProfile, setUserProfile] = useState('')
    console.log(userProfile);
    
    const auth = getAuth(app)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogOut = () => {

    }

    const saveUserProfile = (profile) => {
        setUserProfile(profile);
    }

    const userRaferData = {registerUser, saveUserProfile, userProfile, userLogOut}

    return (
        <div>
            <userContext.Provider value={userRaferData}>
                {children}
            </userContext.Provider>
        </div>
    )
}

export default ProfileContext