// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAm1YrAm_qLlzOxgDJnzjL528Km2Z416s",
    authDomain: "mern-project-a2dcc.firebaseapp.com",
    projectId: "mern-project-a2dcc",
    storageBucket: "mern-project-a2dcc.appspot.com",
    messagingSenderId: "798664526732",
    appId: "1:798664526732:web:61f6ef33e61767a01964a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;