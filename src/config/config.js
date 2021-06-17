import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB7J7i-IqxRzrRJv4vru4LLJ6hILOKPUNM",
    authDomain: "finalpbf.firebaseapp.com",
    databaseURL: "https://finalpbf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "finalpbf",
    storageBucket: "finalpbf.appspot.com",
    messagingSenderId: "236412698513",
    appId: "1:236412698513:web:ad3be9039f55ac90ed6430"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}