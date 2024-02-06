import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let unsubscribe;

  useEffect(() => {
    unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    if (user) {
      const intervalId = setInterval(async () => {
        try {
          await user.getIdToken(true);
        } catch (error) {
          console.error("Error refreshing token:", error.message);
        }
      }, 3600000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [user]);

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(Auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
      throw error;
    }
  };

  const SignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(Auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ createUser, user, logout, SignIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
