import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
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
  const data = [
    {
      name: 'Food Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
    {
      name: 'Clothing Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
    {
      name: ' Media Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
    {
      name: ' Cosmetics Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
    {
      name: ' Gifting Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
    {
      name: ' Tech Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sbarro_LLC_logo.svg/210px-Sbarro_LLC_logo.svg.png',
      link: 'https://www.google.com/',
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-around bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>
        
        <Footer></Footer>
      </div>
    </>
  );
};
export default Sponsor;
