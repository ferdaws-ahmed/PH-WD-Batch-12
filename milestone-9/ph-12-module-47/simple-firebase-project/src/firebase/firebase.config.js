// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZGi9lKKbFf-lbXbnScvArSDXzm0odDrg",
  authDomain: "fir-first-project-f59e9.firebaseapp.com",
  projectId: "fir-first-project-f59e9",
  storageBucket: "fir-first-project-f59e9.firebasestorage.app",
  messagingSenderId: "944778705821",
  appId: "1:944778705821:web:2c6dfe334bbe1ceb934d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);