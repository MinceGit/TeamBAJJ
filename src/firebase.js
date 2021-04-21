import firebase from "firebase";
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZGa9ffVg70XkIb8ds0h2yXw2z7FSFF8s",
  authDomain: "email-contact-64937.firebaseapp.com",
  projectId: "email-contact-64937",
  storageBucket: "email-contact-64937.appspot.com",
  messagingSenderId: "1037379267216",
  appId: "1:1037379267216:web:d88e30bba36aabb5378615"
});

var db = firebaseApp.firestore();

export{db};

export const auth = firebaseApp.auth()
export default firebaseApp
