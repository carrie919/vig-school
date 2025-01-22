// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC85FDZCw0jMIC4moZgJa6t6qa1S2XvPU",
  authDomain: "vignan-web.firebaseapp.com",
  projectId: "vignan-web",
  storageBucket: "vignan-web.firebasestorage.app",
  messagingSenderId: "159480404244",
  appId: "1:159480404244:web:966bbd4267ad0fb2cd4a01",
  measurementId: "G-RTXS2MYH2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };