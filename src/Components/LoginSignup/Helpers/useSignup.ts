import Signup from "../Signup"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


type returnObjType = {
    status: string,
    message: string,
    error: boolean,
    user: null | any
}

export const useSignup = async(email: string, password: string, username: string, valid: boolean) => {
    let returnObj: returnObjType = {
        status: "",
        message: "",
        error: false,
        user: null 
    }
    const createUser = async() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            const user = userCredential.user
            updateProfile(user, {displayName: username} )
            returnObj = {
                status: "success",
                message: "New user added",
                error: false,
                user: user
               }
               console.log(returnObj)
            
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            returnObj = {
                status: "failed",
                message: ` ${errorCode} - ${errorMessage}`,
                error: true,
                user: null
            }
          });
          return returnObj;
    } 
    const newUser = await createUser()
    //console.log(newUser)
    return  newUser;
}

