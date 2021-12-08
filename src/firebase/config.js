// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKtTN3hpfPnis5VH6hdnkTpM_SNfh2o88",
  authDomain: "e-commerce-coderhouse-a5d1d.firebaseapp.com",
  projectId: "e-commerce-coderhouse-a5d1d",
  storageBucket: "e-commerce-coderhouse-a5d1d.appspot.com",
  messagingSenderId: "474844352177",
  appId: "1:474844352177:web:9e9400ff8778958ea99c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)