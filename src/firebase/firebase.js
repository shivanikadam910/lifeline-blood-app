import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBomeJi5jK2iUmbRw0eEfHCYsGb2FwE-fU",
    authDomain: "demoproject-4655c.firebaseapp.com",
    projectId: "demoproject-4655c",
    storageBucket: "demoproject-4655c.appspot.com",
    messagingSenderId: "622806059063",
    appId: "1:622806059063:web:46423ff6f47fc96320d7b2",
    measurementId: "G-VZVBDJM278"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();