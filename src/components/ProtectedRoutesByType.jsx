import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

const ProtectedRoutesByType = ({ children }) => {
  const { user, loading } = UserAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserType = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'Users', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            const userType = userData.type;
            if (userType !== 'OC') {
              window.location.href = '/Home';
            }
          }
        } catch (error) {
          console.error('Error fetching user type:', error);
        }
      }
    };

    fetchUserType();
  }, [user, db]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children; // Render the protected content for 'OC' users
};

export default ProtectedRoutesByType;
