import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmAeuicrlEnugwpJ-GLFnWjG7zwn7Mn5k",
    authDomain: "swipeclass.firebaseapp.com",
    projectId: "swipeclass",
    storageBucket: "swipeclass.appspot.com",
    messagingSenderId: "462508932171",
    appId: "1:462508932171:web:3057915b2a611e08cca1ce",
    measurementId: "G-BCSWG8FXQL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;