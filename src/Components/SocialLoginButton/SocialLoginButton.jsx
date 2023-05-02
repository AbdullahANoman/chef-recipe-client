import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const SocialLoginButton = () => {
    const [user,setUser]= useState({})
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user)
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  })
    }
    const handleGithubLogin = () =>{
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            const user = result.user;

        }).catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div className=" social-button-container w-50 mt-3">
      <div className="mb-2 border p-5">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="border p-5">
        <img
          onClick={handleGithubLogin}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
    );
};

export default SocialLoginButton;