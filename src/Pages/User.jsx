import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Avatar } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import gsap from 'gsap/gsap-core';

const User = () => {
  // const { user, logout } = UserAuth();
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const box = boxRef.current;

    gsap.to(box, {
      opacity: 1,
      duration: 0.9,
      delay: 0.5,
      ease: 'power2.inOut',
    });
  }, []);

  const navRef = useRef(null);
  useLayoutEffect(() => {
    const nav = navRef.current;

    gsap.to(nav, {
      opacity: 1,
      duration: 0.9,
      delay: 3.5,
      ease: 'power2.inOut',
    });
  }, []);

  const Navigate = useNavigate();

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
          Welcome User
        </h1>
        <div className=" flex flex-col gap-10 items-center max-w-[80%] text-center">
          <Avatar
            src="https://thispersondoesnotexist.com/"
            className=" w-full"
          ></Avatar>
          <p>
            Your Registered Email ID:{' '}
            <span className=" italic text-tq-surface ">
              {' '}
              yashdeshpande714@gmail.com
            </span>{' '}
          </p>

          <p>
            Your Collected Points:{' '}
            <span className=" italic text-tq-surface "> 87 </span>{' '}
          </p>
          <button className=" bg-red-500 p-2 rounded-2xl max-w-[60%]">
            Log Me Out Now :(
          </button>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};
export default User;
