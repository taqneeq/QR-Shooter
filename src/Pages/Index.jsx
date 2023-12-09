import React from 'react';
import '../styles/index.css';
import background from '../assets/background.mp4';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import bg from '../assets/mesh-837(1).png';

const Index = () => {
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
        {/* <video
					src={background}
					autoPlay
					loop
					muted
					className="relative z-0 h-screen object-cover opacity-40"
				/> */}
        <img
          src={bg}
          className=" relative z-0 h-screen w-full object-cover opacity-70"
        ></img>
        {/* <div className=" bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100 via-pink-600 to-teal-900 relative z-0 h-screen w-full  opacity-50 bg-[length:400%_400%] animate-bgMoving"></div> */}
        <div className="absolute inset-0 -top-20 z-10 flex items-center justify-center">
          <div
            className="flex min-h-fit min-w-[93vw] flex-col items-center rounded-2xl p-10 text-center md:block md:min-w-[50vw] md:bg-[#f5f5f5] md:bg-opacity-20 md:p-20 md:backdrop-blur-lg md:backdrop-filter "
            ref={boxRef}
          >
            <h1 className=" text-4xl font-black text-slate-200 md:m-6 md:text-6xl lg:text-7xl">
              Welcome to <br></br>Taqneeq Fest's <br /> QR Shooter
            </h1>

            <div className="md:w-[calc(-.4rem + 100vw)] mx-auto mt-10 flex w-[40vw] flex-col items-center justify-between gap-9 md:flex-row">
              <a
                href="/Login"
                className="w-full rounded bg-[#1E232C] px-4 py-4 font-bold text-white hover:bg-[#333] md:py-5"
              >
                Login{' '}
              </a>

              <a
                href="/register"
                className=" w-full rounded bg-white px-4 py-4 font-bold text-black hover:bg-slate-100 md:py-5"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
