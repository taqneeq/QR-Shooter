import React, { useState } from 'react';
import '../styles/login.css';
import background from '../assets/background.mp4';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'; // Import UserAuth instead of createUser
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import bg from '../assets/mesh-837(1).png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = UserAuth(); // Destructure createUser from the UserAuth hook
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUser(email, password);
      navigate('/Home');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const box = boxRef.current;
    gsap.set(box, { opacity: 0 });

    gsap.to(box, {
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.inOut',
    });
  }, []);
  return (
    <>
      <div className="relative min-h-screen bg-black">
        {/* <video src={background} autoPlay loop muted /> */}
        <img
          src={bg}
          className=" relative z-0 h-screen w-full object-cover opacity-70"
        ></img>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {' '}
          <div
            className="flex max-h-[90vh] min-h-fit min-w-[93vw] flex-col items-center  rounded-2xl text-center md:block md:min-w-[50vw] md:bg-[#f5f5f5] md:bg-opacity-20 md:p-10 md:backdrop-blur-lg md:backdrop-filter "
            ref={boxRef}
          >
            <h1 className="text-4xl font-bold text-slate-200 my-10 md:text-6xl lg:text-7xl">
              Register To Continue{' '}
            </h1>
            <div className="divide-gray-00 mx-auto mt-5 max-w-md divide-y md:mt-auto">
              <form
                onSubmit={handleSubmit}
                className="flex w-[70vw] flex-col gap-10 space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 md:w-auto overflow-clip"
              >
                <div className="relative border-b-2 border-slate-600 ">
                  <input
                    autoComplete="username"
                    id="email"
                    type="text"
                    name="username"
                    className="focus:borer-rose-600 peer h-10 w-full bg-transparent font-medium text-slate-800 placeholder-transparent focus:outline-none "
                    placeholder="Username"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    for="email"
                    className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
                  >
                    Username
                  </label>
                </div>
                <div className="relative  border-b-2 border-slate-600 ">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="focus:borer-rose-600 peer h-10 w-full bg-transparent font-medium text-slate-800  placeholder-transparent focus:outline-none "
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    for="password"
                    className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="rounded-md bg-cyan-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-800"
                    type="submit"
                    value="Sign In"
                  >
                    Submit
                  </button>
                </div>
                <a
                  href="/Login"
                  className="font-medium text-slate-900 transition delay-150 ease-in-out hover:underline"
                >
                  Already a member? Log In now
                </a>{' '}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
