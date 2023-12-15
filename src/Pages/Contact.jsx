import { React, useLayoutEffect, useRef, useState } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { Carousel } from '@material-tailwind/react';
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { CiInstagram, CiLinkedin, CiMail } from 'react-icons/ci';
import {
  FcCalendar,
  FcPositiveDynamic,
  FcAssistant,
  FcMoneyTransfer,
} from 'react-icons/fc';
import { FaQrcode, FaHouseChimney, FaRankingStar } from 'react-icons/fa6';
import { ImLocation } from 'react-icons/im';
import gsap from 'gsap/gsap-core';

const Contact = () => {
  // const { user, logout } = UserAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = async (e) => {
    console.log('submit');
    console.log(email, name, message);
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-around bg-tq-base p-6 overflow-hidden md:overflow-visible">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>

        <h1 className="text-3xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Contact Us
        </h1>
        <div className="divide-gray-00 mx-auto mt-5 max-w-md divide-y md:mt-14">
          <form
            onSubmit={handleSubmit}
            className="flex w-[70vw] flex-col gap-10 space-y-4 py-8 text-base leading-6 text-tq-surface sm:text-lg sm:leading-7 md:w-auto"
          >
            <div className="relative border-b-2 border-slate-600 ">
              <input
                autoComplete="email"
                id="email"
                type="text"
                name="email"
                className="focus:borer-rose-600 peer h-10 w-full bg-transparent font-medium text-tq-text placeholder-transparent focus:outline-none "
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="email"
                className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
              >
                Email ID
              </label>
            </div>
            <div className="relative border-b-2 border-slate-600 ">
              <input
                id="name"
                type="text"
                name="name"
                className="focus:borer-rose-600 peer h-10 w-full bg-transparent font-medium text-tq-text placeholder-transparent focus:outline-none "
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label
                for="name"
                className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
              >
                Name
              </label>
            </div>
            <div className="relative border-b-2 border-slate-600 ">
              <textarea
                id="message"
                name="message"
                className="focus:borer-rose-600 peer w-full bg-transparent font-medium text-tq-text placeholder-transparent focus:outline-none h-20"
                placeholder="Message"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <label
                for="message"
                className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
              >
                Message
              </label>
            </div>
            <div className="relative">
              <button
                className="rounded-md bg-tq-blue px-5 py-3 font-semibold text-white transition-colors hover:opacity-80"
                type="submit"
                value="Sign In"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-2 pb-5">
          <a
            className="flex flex-row items-center gap-2"
            href="mailto:contact@taqneeqfest.com"
          >
            <CiMail size={50} />
            <p className="text-tq-text text-xl">contact@taqneeqfest.com</p>
          </a>
          <a
            className="flex flex-row items-center gap-2"
            href="https://instagram.com/taqneeqfest/"
          >
            <CiInstagram size={50} />
            <p className="text-tq-text text-xl">@taqneeqfest</p>
          </a>
          <a
            className="flex flex-row items-center gap-2"
            href="https://www.linkedin.com/company/taqneeqfest/"
          >
            <CiLinkedin size={50} />
            <p className="text-tq-text text-xl">@taqneeqfest</p>
          </a>
        </div>
        <h1>Dhoond Lo hume</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9463375276578!2d72.83501097600883!3d19.110009950902374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0xe0b9538d623ac5d2!2sMukesh%20Patel%20School%20of%20Technology%20Management%20%26%20Engineering!5e0!3m2!1sen!2sin!4v1702571205771!5m2!1sen!2sin"
          width="auto"
          height="auto"
          className=" border-0 my-10"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
