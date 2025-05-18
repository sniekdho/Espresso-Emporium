import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../Contexts/AuthContext";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const deletingUser = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };

  const updateUser = (updateUserProfile) => {
    return updateProfile(auth.currentUser, updateUserProfile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logoutUser,
    deletingUser,
    updateUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
