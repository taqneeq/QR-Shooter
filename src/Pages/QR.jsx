import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

const QR = () => {
  const { user } = UserAuth();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        const userRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setPoints(docSnap.data().points || 0);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="bg-tq-base p-4">
      <div className="flex items-center mb-4">
        <Link to="/Home" className="flex items-center text-tq-blue">
          <BsArrowLeft className="mr-1" />
          Back to Home
        </Link>
      </div>
      <div className='h-screen text-lg flex flex-col justify-center items-center'>
        {user && user.uid ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-tq-text mb-4">
              Hey, {user.displayName || "User"}
            </h1>
            <div className="shadow-tq-surface rounded-lg shadow-md p-4 mb-8">
              <QRCode value={user.uid} />
            </div>
            <p className="text-tq-text mt-2">Your total points: {points}</p>
          </div>
        ) : (
          <p className="text-tq-text mt-4">User data not available.</p>
        )}
        <p className="text-tq-red mt-8 cursor-pointer hover:underline">
          Show this to OC to gain or redeem points!
        </p>
      </div>
    </div>
  );
};

export default QR;
