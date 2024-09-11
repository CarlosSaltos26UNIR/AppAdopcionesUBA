// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNDnrLEK8VPSk-AtpDVce69sb2FQ7NapA",
  authDomain: "adopciones-uba-893c1.firebaseapp.com",
  projectId: "adopciones-uba-893c1",
  storageBucket: "adopciones-uba-893c1.appspot.com",
  messagingSenderId: "419246144177",
  appId: "1:419246144177:web:4c83480902535ec5c1c090"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;