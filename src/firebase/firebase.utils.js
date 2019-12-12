import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//When you clone a GitHub repo, if this message isn't here.
//Then we're not connecting to the database of our own but the courses.
const config = {
    apiKey: "AIzaSyCdn9A49Olr8wy6_Vdk2wFo-bgvQu5EKFA",
    authDomain: "crwn-db-8c20c.firebaseapp.com",
    databaseURL: "https://crwn-db-8c20c.firebaseio.com",
    projectId: "crwn-db-8c20c",
    storageBucket: "crwn-db-8c20c.appspot.com",
    messagingSenderId: "507696099569",
    appId: "1:507696099569:web:753b3872e89a024fe83950",
    measurementId: "G-W41XF8WLZ9"
  };

firebase.initializeApp(config);

//Authentication provided by Firebase
export const auth = firebase.auth();
//Database provided by Firebase
export const firestore = firebase.firestore();

//Authentication through Google.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;