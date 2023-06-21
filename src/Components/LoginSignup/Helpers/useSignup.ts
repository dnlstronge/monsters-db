import Signup from "../Signup"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


type returnObjType = {
    status: string,
    message: string,
    error: boolean,
    user: null | any
}

export const useSignup = async(email: string, password: string, username: string, valid: boolean) => {
   
      
        const auth =  getAuth();
        const getUserObject = async() => {
         
            try {
            const createUser = await createUserWithEmailAndPassword(auth, email, password)
            const addUsername = await updateProfile(createUser.user, {displayName: username})
            return {
                status: "success",
                message: "user has been created",
                error: false,
                user: createUser.user
            }
            } catch (error) {
                console.log(error)
              return {
                status: "failed",
                message: error,
                error: true,
                user: null,
              } 
            }       
        }
        if(!valid) {
          console.log(valid)
          const userAuth = await getUserObject()
          return userAuth;
        } else {
          return {
            status: "failed",
            message:"invalid sign up details provided",
            error: true,
            user: null,
          }
        }
         
          
    } 

    


