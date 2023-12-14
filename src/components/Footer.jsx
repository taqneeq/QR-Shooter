import React, { useEffect, useRef } from 'react';
import { ImLocation } from 'react-icons/im';
import { FaQrcode, FaHouseChimney, FaRankingStar } from 'react-icons/fa6';
import gsap from 'gsap';

export default function Footer(props) {
  const card = useRef();
  const delay = 0.9 * props.num; // Adjust the delay as needed
  useEffect(() => {
    if (card.current) {
      gsap.fromTo(
        card.current,
        { opacity: 0 }, // Initial values
        { opacity: 1, duration: 0.3, delay }, // Target values
      );
    }
  }, [delay]);

  return (
    <footer className="w-full bg-white p-5 rounded-2xl md:hidden" ref={card}>
      <div className="flex text-xl flex-row flex-wrap items-center justify-evenly text-tq-text gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <a href="/Home">
          <FaHouseChimney />
        </a>
        <a href="/Location">
          {' '}
          <ImLocation />
        </a>
        <a href="/my-qr">
          {' '}
          <FaQrcode />
        </a>
        <a href="/Leaderboard">
          {' '}
          <FaRankingStar />
        </a>
      </div>
    </footer>
  );
}
