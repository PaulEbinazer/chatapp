import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../Firebase";
import { GoogleAuthProvider } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"})
  signInWithPopup(auth, provider);
};
const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default Signin;
