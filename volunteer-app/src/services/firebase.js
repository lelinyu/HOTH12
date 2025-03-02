import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkv2_hdzvrvfKJabPABcy4P28yYwhQLaQ",
    authDomain: "hoth12.firebaseapp.com",
    projectId: "hoth12",
    storageBucket: "hoth12.firebasestorage.app",
    messagingSenderId: "545322909203",
    appId: "1:545322909203:web:1c327a15289b984a7949e6",
    measurementId: "G-T9WEPQ8N59"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };