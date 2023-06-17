import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";

export const authLogin = (email: string, password: string) => {
    const dispatch: AppDispatch = useDispatch()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {

    const user = userCredential.user;
    console.log(user)
    return user
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
