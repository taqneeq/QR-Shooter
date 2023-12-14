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
      <div className="min-h-screen flex flex-col m-auto items-center justify-around bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>

        {/* html code goes */}
        <div className="h-32 bg-red-500"></div>
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
const EventBox = ({ icon, url, title, num, classN }) => {
  // variable height and width
  const card = useRef();
  const delay = 0.9 * num; // Adjust the delay as needed

  useLayoutEffect(() => {
    gsap.fromTo(
      card.current,
      { opacity: 0 }, // Initial values
      { opacity: 1, duration: 0.3, delay }, // Target values
    );
  }, [delay]);

  return (
    <a href={url} className={`${classN ? 'col-span-2' : ''} `}>
      <Card
        shadow={false}
        ref={card}
        className={`group relative grid h-[33vw] min-w-full items-end  justify-center overflow-hidden text-center bg-white border border-tq-text rounded-md transition-transform `}
      >
        <CardBody className="relative py-8 px-6 md:px-12 flex flex-col justify-center items-center m-auto md:gap-6  md:overflow-visible">
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-tq-text mb-4 md:mb-6 font-medium leading-tight">
            {title}
          </h1>
          <div className="mb-4 text-4xl md:text-[10rem] text-center self-center">
            {icon}
          </div>
        </CardBody>
      </Card>
    </a>
  );
};
export default Sponsor;
