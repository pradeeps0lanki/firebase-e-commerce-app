import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebaseUtils";

const SignIn = () => {

  const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  

  return (
    <div>
      <h1>sign-in-page</h1>
      <button onClick={logGoogleUser}>sign-with-google-pop-up</button>
    </div>
  );
};

export default SignIn;
