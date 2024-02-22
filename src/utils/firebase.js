// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVDHB4Vm32RSuufXgkUBqS_HXptmZHWQY",
  authDomain: "netflixgpt-31ee1.firebaseapp.com",
  projectId: "netflixgpt-31ee1",
  storageBucket: "netflixgpt-31ee1.appspot.com",
  messagingSenderId: "124579511605",
  appId: "1:124579511605:web:e9b60af9761852a2d6207c",
  measurementId: "G-SKYNB24WYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();