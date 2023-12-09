import {React,useLayoutEffect, useRef, useState} from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Carousel } from '@material-tailwind/react';
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
      <div className="bg-slate-200 flex flex-col gap-5 justify-center">
        <h1 className="p-4 text-4xl text-center text-gray-800 font-bold ">
          TAQNEEQ 16.0
        </h1>

        <div className=" m-auto md:min-h-screen w-full bg-transparent px-8 py-8 max-w-screen-sm mx-auto lg:py-10">
          <div className="flex justify-center md:justify-around">
            <div className="p-4">
              <p className="text-2xl text-blue-950 font-bold">Hey,xyz</p>
              <p className="text-xl text-blue-800 font-semibold">
                Welcome to the Taqneeq Fest
              </p>
            </div>
            <div>
              <img
                src="logo.png"
                alt="Fest Logo"
                className=" max-w-[10rem] rounded-xl"
              />
            </div>
          </div>

          <Carousel className="rounded-xl mx-auto">
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

          {/* Box Components */}
          <div className="grid grid-cols-2 gap-6 p-8 w-screen mx-8 rounded-md">
            {/* Additional Boxes */}
            <EventBox
              icon="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              title="QR"
            />
            <EventBox
              icon="https://images.unsplash.com/photo-1685575112968-7dd67bc447b4?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Redeem Here"
            />
            <EventBox
              icon="https://images.unsplash.com/photo-1685575112968-7dd67bc447b4?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Contact Us"
            />
          </div>

          {/* <footer className='absolute bottom-0 left-0 w-full bg-gray-800 p-4 md:hidden flex justify-around text-white z-100'>
      <BottomNavItem icon={<FaUser size={25}/>} label='Profile' />
      <BottomNavItem icon={<FaHome size={25}/>} label='Home' />
      <BottomNavItem icon={<FaTrophy size={25}/>} label='Leaderboard' />
      <BottomNavItem icon={<FaRegCalendarAlt size={25}/>} label='Schedule' />
    </footer> */}

          <div className="fixed z-50 w-full max-w-lg -translate-x-1/2 bg-gray-300 border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 flex justify-between mx-auto px-4 py-2">
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
          </div>
        </div>
      </div>
    </>
  );
};
const EventBox = ({ icon, title}) => {

  return (
    <div
      className={`event-box animate-fade-up   bg-QR bg-cover bg-opacity-40 bg-no-repeat sepia-50 rounded-md flex flex-col items-center justify-center w-full shadow-md px-20 py-6 bg-gray-800`}
    >
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
      </div>
    </div>
  );
};

const BottomNavItem = ({ icon, label }) => {
  return <div className="flex flex-col items-center">{icon}</div>;
};

export default Home;
