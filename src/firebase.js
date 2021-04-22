import firebase from "firebase";
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})


const projectStorage = app.storage()
const projectFirestore = app.firestore()
const auth = app.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {auth,projectFirestore,projectStorage,timestamp}

export default app

