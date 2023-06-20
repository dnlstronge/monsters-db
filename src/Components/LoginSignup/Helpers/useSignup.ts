import Signup from "../Signup"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = (email: string, password: string, username: string) => {
    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user
            updateProfile(user, {displayName: username} )
            // ...
            return {
                status: "success",
                message: "new user added",
                user
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            return {
                status: errorCode,
                message: errorMessage,
                user: null
            }
          });
        return auth
    } 
}

