// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLQP_wMn5msBlBvZsc1FhUlN42QIsed9c",
  authDomain: "acadify-1.firebaseapp.com",
  projectId: "acadify-1",
  storageBucket: "acadify-1.firebasestorage.app",
  messagingSenderId: "753740543393",
  appId: "1:753740543393:web:8680d81c808c3f638a47e0",
  measurementId: "G-1DCXKJRTBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};