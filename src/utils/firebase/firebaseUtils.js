import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc , collection,writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAll4yVWNXEhsU3WG8abX5KXoQbKjZx23M",
  authDomain: "e-commerce-web-app-f8ab1.firebaseapp.com",
  projectId: "e-commerce-web-app-f8ab1",
  storageBucket: "e-commerce-web-app-f8ab1.appspot.com",
  messagingSenderId: "931530083286",
  appId: "1:931530083286:web:ef93977941443e0ecc3277",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const authentication = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db , collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.name.toLowerCase());
    batch.set(docRef,object);
  });

  await batch.commit();
  console.log('done');
}

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  return;
};
