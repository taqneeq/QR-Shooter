import React from 'react';
import '../styles/index.css';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

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
      <div className="min-h-screen flex flex-col m-auto items-center justify-center bg-tq-base">
        <div
          className="flex min-h-full w-full max-w-5xl flex-col items-center rounded-2xl p-10 text-center md:block  md:p-20 md:bg-white"
          ref={boxRef}
        >
          <h1 className=" text-4xl font-black text-gray-900 md:text-slate-200 mb-5 md:mb-20 md:text-6xl lg:text-7xl">
            Welcome to <br></br>Taqneeq Fest's <br /> QR Shooter
          </h1>

          <div className="md:w-[calc(-0.3rem + 50vw)] mx-auto mt-10 flex w-[40vw] flex-col font-bold text-white items-center justify-between gap-9 md:flex-row">
            <a
              href="/Login"
              className="w-full rounded-xl bg-tq-text px-4 py-4  hover:opacity-90 md:py-7"
            >
              Login
            </a>

            <a
              href="/register"
              className=" w-full rounded-xl bg-tq-red px-4 py-4  hover:saturate-100 md:py-7"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;