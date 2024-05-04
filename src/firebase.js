// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvtCjCGqgmifS4coTQaEJIGckLzJ8MrLc",
  authDomain: "login-register-a18.firebaseapp.com",
  projectId: "login-register-a18",
  storageBucket: "login-register-a18.appspot.com",
  messagingSenderId: "922300298933",
  appId: "1:922300298933:web:b7949997105d8dcb2db0fc",
  measurementId: "G-10TTS7WQBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
