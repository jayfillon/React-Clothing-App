import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //If there is no user, don't exec anymore code
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //Creates a snapshot
  //Simpler terms, creates the document/data
  if (!snapShot.exists) {
    //Destructures userAuth for it's data
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating a User", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//Util that makes new collections and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  //Loop through the array
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    //Batch the elements
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//Function to get the whole Snapshot
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//Authentication provided by Firebase
export const auth = firebase.auth();
//Database provided by Firebase
export const firestore = firebase.firestore();

//Authentication through Google.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
