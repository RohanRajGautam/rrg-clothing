import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAccfVtoPZl_dFEtUsqwCSvzs_zdoSqFAE",
  authDomain: "rrg-clothing.firebaseapp.com",
  databaseURL: "https://rrg-clothing.firebaseio.com",
  projectId: "rrg-clothing",
  storageBucket: "rrg-clothing.appspot.com",
  messagingSenderId: "927762203498",
  appId: "1:927762203498:web:2af3c99bf0e666f7ff1b13",
  measurementId: "G-3Z7FKEJXHN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;