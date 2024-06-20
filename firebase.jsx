// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd83HafpHZu8AR31yl3kvJrPHW4MQkgPQ",
  authDomain: "tic-tac-toe-akhand.firebaseapp.com",
  projectId: "tic-tac-toe-akhand",
  storageBucket: "tic-tac-toe-akhand.appspot.com",
  messagingSenderId: "783003072748",
  appId: "1:783003072748:web:301d7489a1ad525852cdc9",
  measurementId: "G-P5EVVWKV17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);