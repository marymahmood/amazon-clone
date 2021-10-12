import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBU8YVFTVoEjleAQQCct2Th7x3hMj7SlTk",
  authDomain: "amzon-fd.firebaseapp.com",
  projectId: "amzon-fd",
  storageBucket: "amzon-fd.appspot.com",
  messagingSenderId: "489392183525",
  appId: "1:489392183525:web:8c8130722a71ad4e735c0c"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();

export default db;