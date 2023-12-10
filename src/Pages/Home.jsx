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

const Home = () => {
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

  const qr = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="14"
        viewBox="0 0 448 512"
      >
        <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
      </svg>
    );
  };

  const data = [
    {
      icon: <FcCalendar />,
      url: '/Schedule',
      title: 'Schedule ',
      num: 1.5,
      classN: true,
    },
    {
      icon: <FcPositiveDynamic />,
      url: '/LeaderBoard',
      title: 'Leader Board ',
      num: 1.8,
      classN: false,
    },
    {
      icon: <FcAssistant />,
      url: '/ContactUs',
      title: 'Contact Us ',
      num: 2.1,
      classN: false,
    },
    {
      icon: <FaQrcode />,
      url: '/my-qr',
      title: 'My QR ',
      num: 2.4,
      classN: true,
    },
    {
      icon: <FcMoneyTransfer />,
      url: '/Sponsors',
      title: 'Sponsors ',
      num: 2.7,
      classN: true,
    },
    {
      icon: <ImLocation />,
      url: '/Location',
      title: 'Location ',
      num: 3.0,
      classN: false,
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-start bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>
        <div className="mx-auto flex min-h-fit w-full flex-col gap-5 px-6 lg:px-0 overflow-hidden  md:overflow-visible max-w-7xl">
          <Carousel
            transition={{ duration: 2 }}
            autoplay
            loop
            autoplayDelay={10000}
            className="rounded-xl mx-auto max-h-[10rem] md:min-h-[70vh] overflow-hidden "
            ref={boxRef}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>

          <div className="grid grid-cols-3 min-w-full gap-6 w-full max-w-7xl overflow-hidden  md:overflow-visible">
            {data.map((item, index) => (
              <EventBox
                key={index}
                icon={item.icon}
                url={item.url}
                title={item.title}
                num={item.num}
                classN={item.classN}
              />
            ))}
          </div>
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
export default Home;
