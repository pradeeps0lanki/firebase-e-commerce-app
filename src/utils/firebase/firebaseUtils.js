import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithRedirect} from "firebase/auth";

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

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

export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth)=>{

  const userDocRef = doc(db,'user',userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){

    const {displayName,email} = userAuth;


    const createdAt = new Date();

    try {

      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });

    }
    catch(error){

      console.log('error creating the user',error.message);

    }
  }

  return userDocRef;

}



