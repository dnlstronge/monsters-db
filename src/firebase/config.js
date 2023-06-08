// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUgO4DAcYGJNRQ9Xc0iJ759NeoqrbmUOI",
  authDomain: "monsterdb-30be5.firebaseapp.com",
  databaseURL: "https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "monsterdb-30be5",
  storageBucket: "monsterdb-30be5.appspot.com",
  messagingSenderId: "1045737772588",
  appId: "1:1045737772588:web:7741964797599ce9c86389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app)
const database = getDatabase(app)
export { projectStorage, database };
