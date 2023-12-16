import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Carousel } from '@material-tailwind/react';
import { Card, CardBody, Avatar } from '@material-tailwind/react';
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
import Footer from '../components/Footer';

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
      duration: 0.3,
      delay: 0.3,
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
  const data = [
    {
      icon: <FcCalendar />,
      url: '/Schedule',
      title: 'Schedule ',
      num: 1.5,
      classN: 2,
    },
    {
      icon: <FcPositiveDynamic />,
      url: '/Leaderboard',
      title: 'Leader Board ',
      num: 1.8,
      classN: 1,
    },
    {
      icon: <FaQrcode />,
      url: '/my-qr',
      title: 'My QR ',
      num: 2.1,
      classN: 3,
    },
    {
      icon: <FcAssistant />,
      url: '/Contact',
      title: 'Contact Us ',
      num: 2.4,
      classN: 1,
    },

    {
      icon: <FcMoneyTransfer />,
      url: '/Sponsors',
      title: 'Sponsors ',
      num: 2.7,
      classN: 2,
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-around bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <div className=" flex flex-row justify-center gap-5 items-start">
          <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
            Taqneeq Fest
          </h1>
          <a href="/User">
            <Avatar
              src="https://thispersondoesnotexist.com/"
              alt="avatar"
              className=" border-4 border-gray-300"
            />
          </a>
        </div>
        <div className="mx-auto flex min-h-fit w-full flex-col gap-5 px-6 lg:px-0 overflow-hidden  md:overflow-visible max-w-7xl">
          <Carousel
            transition={{ duration: 2 }}
            autoplay
            loop
            autoplayDelay={10000}
            className="rounded-xl mx-auto max-h-[10rem] md:min-h-[70vh] overflow-hidden object-cover "
            ref={boxRef}
          >
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

          <div className="grid grid-cols-3 min-w-full gap-4 w-full max-w-7xl">
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
          <Footer num={4}></Footer>
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
    <a
      href={url}
      className={`${
        classN === 2 ? 'col-span-2' : classN === 3 ? 'col-span-3' : ''
      }`}
    >
      <Card
        shadow={1}
        ref={card}
        className={`group relative grid h-[33vw] min-w-full items-end  justify-center overflow-hidden text-center bg-white drop-shadow-xl  transition-transform m-auto`}
      >
        <CardBody className="relative py-2 px-3 md:px-12 flex flex-col justify-center items-center m-auto md:gap-6  md:overflow-visible">
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
