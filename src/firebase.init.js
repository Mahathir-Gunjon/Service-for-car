// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiO03WfZJHPtEcjKj_Lqvh8zg_pJr80yk",
  authDomain: "car-services-43abe.firebaseapp.com",
  projectId: "car-services-43abe",
  storageBucket: "car-services-43abe.appspot.com",
  messagingSenderId: "427470970083",
  appId: "1:427470970083:web:7c822a2b9efb5b49b439d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
