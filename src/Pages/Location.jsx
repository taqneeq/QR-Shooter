import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Carousel } from '@material-tailwind/react';
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import {
  FcCalendar,
  FcPositiveDynamic,
  FcAssistant,
  FcMoneyTransfer,
} from 'react-icons/fc';
import { FaQrcode, FaHouseChimney, FaRankingStar } from 'react-icons/fa6';
import { ImLocation } from 'react-icons/im';
import gsap from 'gsap/gsap-core';

const Sponsor = () => {
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
      <div className="min-h-screen flex flex-col m-auto items-center justify-start bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl  ">
          Taqneeq Fest
        </h1>

        {/* html code goes here */}
        <div className="mx-auto flex min-h-fit w-full flex-col gap-5 px-6 lg:px-0 overflow-hidden  md:overflow-visible max-w-7xl">
          <footer
            className="w-full bg-white p-5 rounded-2xl md:hidden "
            ref={navRef}
          >
            <div className="flex text-2xl flex-row flex-wrap items-center justify-evenly text-tq-text gap-y-6 gap-x-12 bg-white text-center md:justify-between">
              <FaHouseChimney />
              <ImLocation />
              <FaQrcode />
              <FaRankingStar />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Sponsor;
