// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR4VYtDeBjsbRHwXibRuBxqwagIKrg2AI",
    authDomain: "facebook-clone-f69a7.firebaseapp.com",
    databaseURL: "https://facebook-clone-f69a7.firebaseio.com",
    projectId: "facebook-clone-f69a7",
    storageBucket: "facebook-clone-f69a7.appspot.com",
    messagingSenderId: "51055704237",
    appId: "1:51055704237:web:ef2cd9018941968c062e24",
    measurementId: "G-BWD6R47PHZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db ; 