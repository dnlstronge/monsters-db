import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";


export const useAuthLogin = (email: string, password: string) => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
  .then(async () => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
   const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
    
  })

    
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return auth
}
