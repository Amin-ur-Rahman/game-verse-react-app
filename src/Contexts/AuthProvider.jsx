import React, { useEffect, useState } from "react";
import AuthContext from "./CreateAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const googleSignUp = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        return result.user;
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.code, error.message);
        throw error;
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setAuthLoading(false)
    );
  };
  const updateUserProfile = (userName, url) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: url,
    }).then(() => {
      setUser({ ...auth.currentUser });
    });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth).then(() => {
      setUser(null);
      console.log(user);
    });
  };
  const authData = {
    authLoading,
    user,
    signInUser,
    createUser,
    updateUserProfile,
    signOutUser,
    googleSignUp,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
