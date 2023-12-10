import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Carousel } from '@material-tailwind/react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import {
  FaRegCalendarAlt,
  FaQrcode,
  FaGift,
  FaPhone,
  FaUser,
  FaHome,
  FaTrophy,
  FaCalendarAlt,
} from 'react-icons/fa';
import gsap from 'gsap/gsap-core';

const Home = () => {
  // const { user, logout } = UserAuth();
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const box = boxRef.current;
    gsap.set(box, { opacity: 0 });

    gsap.to(box, {
      opacity: 1,
      duration: 0.9,
      delay: 0.5,
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
      <div className="min-h-screen flex flex-col m-auto items-center justify-center bg-tq-base p-6">
        <div className="flex min-h-fit w-full flex-col items-center rounded-2x py-8 text-center md:block bg-tq-base">
          <h1 className=" text-4xl font-black text-gray-900 text-center  md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
            Taqneeq Fest
          </h1>
          <div className="mx-auto flex min-h-screen max-h-screen w-full   flex-col gap-5 px-6 lg:px-0">
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

            <div className=" grid grid-cols-3 min-w-full gap-6 ">
              <EventBox
                icon="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                url=""
                title="Schedule "
                num={1.5}
              ></EventBox>
              <EventBox
                icon="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                url=""
                title="Schedule "
                num={1.5}
              ></EventBox>
              <EventBox
                icon="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                url=""
                title="Schedule "
                num={1.5}
              ></EventBox>
              <EventBox
                icon="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                url=""
                title="Schedule "
                num={1.5}
              ></EventBox>

              <EventBox
                icon="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                url=""
                title="Scheduleewe "
                num={1.5}
                className="col-span-2"
              ></EventBox>
            </div>
            {/* <div className="fixed z-50 w-full max-w-lg -translate-x-1/2 bg-gray-900  rounded-full bottom-4 left-1/2 flex justify-between mx-auto px-4 py-2">
              <button
                data-tooltip-target="tooltip-home"
                type="button"
                className="flex flex-col items-center justify-center px-4 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <FaHome size={20} color="white" />
                <span className="sr-only">Home</span>
              </button>

              <button
                data-tooltip-target="tooltip-wallet"
                type="button"
                className="flex flex-col items-center justify-center px-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <FaCalendarAlt size={20} color="white" />
                <span className="sr-only">Schedule</span>
              </button>

              <button
                data-tooltip-target="tooltip-new"
                type="button"
                data-te-toggle="tooltip"
                data-te-placement="top"
                data-te-ripple-init
                data-te-ripple-color="light"
                title="Tooltip on top"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              >
                <FaTrophy size={20} color="white" />
                <span className="sr-only">LeaderBoard</span>
              </button>

              <button
                data-tooltip-target="tooltip-profile"
                type="button"
                className="flex flex-col items-center justify-center px-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <FaUser size={20} color="white"></FaUser>
                <span className="sr-only">Profile</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
const EventBox = ({ icon, url, title, num }) => {
  // variable height and width
  const card = useRef();
  const delay = 0.9 * num; // Adjust the delay as needed

  useLayoutEffect(() => {
    gsap.set(card, { opacity: 0 });

    gsap.fromTo(
      card.current,
      { opacity: 0 }, // Initial values
      { opacity: 1, duration: 0.3, delay }, // Target values
    );
  }, [delay]);

  return (
    <Card
      shadow={false}
      ref={card}
      className="group relative grid h-[12rem] md:h-[17rem] w-full items-end justify-center overflow-hidden text-center"
    >
      <CardBody className="relative py-14 px-6 md:px-12">
        <h1 className=" text-tq-text mb-6 font-medium leading-[1.5]">
          {title}jdskdjks{' '}
        </h1>
      </CardBody>
    </Card>
  );
};

const BottomNavItem = ({ icon, label }) => {
  return <div className="flex flex-col items-center">{icon}</div>;
};

export default Home;