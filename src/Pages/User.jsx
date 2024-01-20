import React, { useLayoutEffect, useRef, useState } from 'react';
import { UserAuth } from '../context/AuthContext'; // Ensure this path is correct for your AuthContext
import { Avatar } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import gsap from 'gsap/gsap-core';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

const User = () => {
  const { user, logout } = UserAuth();
  const [points, setPoints] = useState(0);
  const boxRef = useRef(null);
  const navRef = useRef(null);
  const Navigate = useNavigate();

  useLayoutEffect(() => {
    const box = boxRef.current;
    const nav = navRef.current;

    gsap.to(box, {
      opacity: 1,
      duration: 0.9,
      delay: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(nav, {
      opacity: 1,
      duration: 0.9,
      delay: 3.5,
      ease: 'power2.inOut',
    });

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

  const HandleLogout = async () => {
    try {
      await logout();
      Navigate('/');
      console.log('Logged Out');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-around bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Welcome {user?.displayName || 'User'}
        </h1>
        <div className="flex flex-col gap-10 items-center max-w-[80%] text-center">
          <Avatar
            src={user?.photoURL || "https://thispersondoesnotexist.com/"}
            className="w-full"
          />
          <p>
            Your Registered Email ID:
            <span className="italic text-tq-surface">
              {user?.email || 'N/A'}
            </span>
          </p>

          <p>
            Your Collected Points:
            <span className="italic text-tq-surface">{points}</span>
          </p>
          <button className="bg-red-500 px-5 p-2 rounded-3xl max-w-[60%]" onClick={HandleLogout}>
            Log Out
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default User;
