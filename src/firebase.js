// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK51VSn8JeKuGs52VCvs-PYswY_p-fH-Q",
  authDomain: "bistro-del-mar-ecommerce.firebaseapp.com",
  projectId: "bistro-del-mar-ecommerce",
  storageBucket: "bistro-del-mar-ecommerce.firebasestorage.app",
  messagingSenderId: "286071981837",
  appId: "1:286071981837:web:9a3457e7c8ef72ffd19244",
  measurementId: "G-19SG6H4ZLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);