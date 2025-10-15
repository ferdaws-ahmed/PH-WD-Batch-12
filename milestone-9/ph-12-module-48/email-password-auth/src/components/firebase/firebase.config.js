// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCirJ2QLorQn9g3Nwtt2Fs5SksqB6x1VbY",
  authDomain: "email-password-auth-9cb05.firebaseapp.com",
  projectId: "email-password-auth-9cb05",
  storageBucket: "email-password-auth-9cb05.firebasestorage.app",
  messagingSenderId: "322851074293",
  appId: "1:322851074293:web:579550de0533d67acf15bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)