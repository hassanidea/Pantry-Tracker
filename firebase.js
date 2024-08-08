// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGBHTHNrb122U1kIaeL16lUUpL1cf0bAY",
  authDomain: "inventory-management-48417.firebaseapp.com",
  projectId: "inventory-management-48417",
  storageBucket: "inventory-management-48417.appspot.com",
  messagingSenderId: "386015489521",
  appId: "1:386015489521:web:663768a4a78a3c4500a850",
  measurementId: "G-9QESN69XFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}