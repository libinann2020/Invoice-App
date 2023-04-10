// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkLTHb4_v1CA-XTzLehGtn6gykMwB-TJc",
  authDomain: "invoice-app-yt-eaf5b.firebaseapp.com",
  projectId: "invoice-app-yt-eaf5b",
  storageBucket: "invoice-app-yt-eaf5b.appspot.com",
  messagingSenderId: "765691128815",
  appId: "1:765691128815:web:ddb9eff2f2441d54a0a41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(app);
export { db }