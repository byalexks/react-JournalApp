import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

 const firebaseConfig = {
   apiKey: "AIzaSyB2Ldv49KMSUGRd5pPQEym6api04R-2Z00",
   authDomain: "journalapp-42517.firebaseapp.com",
   projectId: "journalapp-42517",
   storageBucket: "journalapp-42517.appspot.com",
   messagingSenderId: "895237797673",
   appId: "1:895237797673:web:879f0d5adad9bf4bca6938",
   measurementId: "G-78TXPCY0SZ",
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 

 const db = firebase.firestore()
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
     db,
     googleAuthProvider,
     firebase
 }