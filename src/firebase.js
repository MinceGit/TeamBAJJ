import firebase from "firebase";
import "firebase/auth"
import 'firebase/firestore'
const app = firebase.initializeApp({
  apiKey: "AIzaSyDWvsX_3hSoUuUfKIlKOl4iHcabqwwADMk",
  authDomain: "ecouf-1bf8a.firebaseapp.com",
  projectId: "ecouf-1bf8a",
  storageBucket: "ecouf-1bf8a.appspot.com",
  messagingSenderId: "139678000627",
  appId: "1:139678000627:web:c365595c5e9cdf4b13de86",
  measurementId: "G-T3GJF2LB1Z"
})

const db = app.firestore()
export {db}
export const auth = app.auth()
export default app

