import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBhuue9k6qctBvPTS580PEqah2E9YfGSA",
  authDomain: "instagram-clone-react-51df6.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-51df6.firebaseio.com",
  projectId: "instagram-clone-react-51df6",
  storageBucket: "instagram-clone-react-51df6.appspot.com",
  messagingSenderId: "281912210467",
  appId: "1:281912210467:web:8a9ea4311aa0e953f5ed96",
  measurementId: "G-B6V7GJPGB2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
