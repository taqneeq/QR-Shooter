import React from 'react';
import '../styles/index.css';

import background from '../assets/background.mp4';

const Index = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        {/* <video
					src={background}
					autoPlay
					loop
					muted
					className="relative z-0 w-full h-[30vh] top-0 md:h-screen object-cover opacity-50"
				/> */}
        <img
          src={bg}
          className="relative top-0 z-0 h-[30vh] w-full object-cover opacity-50 md:h-screen"
        ></img>
        <div className="absolute inset-0 top-1/3 z-10  flex items-center justify-center md:top-0">
          <div className="flex min-h-[90vh] min-w-[100vw] flex-col items-center rounded rounded-t-[3rem] bg-slate-200 p-10 text-center backdrop-blur-lg backdrop-filter md:block md:min-h-fit md:min-w-[50vw] md:rounded-2xl md:bg-white md:bg-opacity-70 md:p-20 ">
            <h1 className="text-4xl font-bold text-[#333] md:m-6 md:text-6xl lg:text-7xl  ">
              Taqneeq Fest's <br /> QR Shooter
            </h1>

            <div className=" m-6 mx-auto flex min-h-[20rem] min-w-[70%] max-w-xs flex-col justify-center gap-5 md:min-h-fit md:min-w-fit">
              <a
                href="/Login"
                className="mt-4  rounded bg-[#1E232C] px-4 py-3 font-bold text-white hover:bg-[#333] md:py-5  "
              >
                Login
              </a>

              <a
                href="/register "
                className=" mt-2 rounded border-4  border-black px-4 py-4 font-bold text-black hover:bg-slate-100 "
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
