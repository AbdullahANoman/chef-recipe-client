import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(user?.displayName)
  const userName = user?.displayName;
  const userPhotoUrl = user?.photoURL;
  console.log(userName,userPhotoUrl)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateNamePhoto = (name,photoUrl) =>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName : "Abdullah Al Nomna",
        photoURL : 'https://lh3.googleusercontent.com/a/AGNmyxbbNe-quK9msiJDWdKyCYgw2RqL88rcI5GDZ2TS=s96-c'
    }).then(() => {
        console.log('profile updated',auth.currentUser)
        console.log(name)

      }).catch((error) => {
        // An error occurred
        console.log(error.message)
        console.log(name)

        // ...
      });
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("onAuthStateChanged", currentUser);
      setLoading(false);
    });
    return () => {
      unSubscriber();
    };
  }, []);
  const authInfo = {
    userName,
    userPhotoUrl,
    loading,
    user,
    createUser,
    signIn,
    logOut,
    updateNamePhoto
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
