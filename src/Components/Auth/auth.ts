import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";


export const useAuthLogin = (email: string, password: string) => {
    
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {

    const user = userCredential.user;
    //console.log(user)
    return user
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return auth
}
