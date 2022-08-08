// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfKqL7Z2JhKMvDa18C_DZDUWrRAfBNJgM",
  authDomain: "skrate-358811.firebaseapp.com",
  projectId: "skrate-358811",
  storageBucket: "skrate-358811.appspot.com",
  messagingSenderId: "44881105254",
  appId: "1:44881105254:web:b348b8cf57b0b6d2b278a7",
  measurementId: "G-G796GEH8CM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("isLoggedIn");
    });
};
