import { React, useLayoutEffect, useRef } from 'react';
// import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';
import gsap from 'gsap/gsap-core';
import Footer from '../components/Footer';

const Leaderboard = () => {
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

  // Now the question is how do find the current user from the database and change its display name to "You!"
  const user = [
    {
      name: 'Jegathiswaran Ramakrishnan',
      Avatar: 'https://thispersondoesnotexist.com/',
      points: 100,
    },
    {
      name: 'Jegathiswaran Ramakrishnan',
      Avatar: 'https://thispersondoesnotexist.com/',
      points: 90,
    },
    {
      name: 'Jegathiswaran Ramakrishnan',
      Avatar: 'https://thispersondoesnotexist.com/',
      points: 80,
    },
    {
      name: 'Yash Deshpande',
      Avatar: 'https://thispersondoesnotexist.com/',
      points: 70,
    },
  ]; //this is assumed that the it is sorted in descending order

  return (
    <>
      <div className="min-h-screen h-full flex flex-col m-auto items-center justify-start bg-tq-base p-6 overflow-hidden md:overflow-visible border">
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>

        {/* html code goes here */}
        {/* Display pic , display name, points */}

        <div className=" min-h-fit flex flex-col items-center justify-center w-full max-w-2xl bg-blue-400 rounded-2xl p-4 text-white ">
          <div className=" flex flex-col  items-center justify-evenly w-full min-h-fit rounded-2xl max-w-2xl">
            {' '}
            <Avatar
              src={user[0].Avatar}
              alt="avatar"
              className=" border-4 border-orange-300"
            />
            <h1 className="">{user[0].name}</h1>
            <p>1st</p>
          </div>

          <div className=" flex flex-row items-center justify-evenly w-full min-h-fit max-w-2xl text-center ">
            <div className=" flex flex-col items-center justify-evenly w-full min-h-fit max-w-2xl p-4 ">
              <Avatar
                src={user[1].Avatar}
                alt="avatar"
                className=" border-4 border-orange-300"
              />
              <h1 className=""> {user[1].name} </h1>
              <p>2st</p>
            </div>
            <div className=" flex flex-col items-center justify-evenly w-full min-h-fit max-w-2xl p-4 text-center ">
              <Avatar
                src={user[2].Avatar}
                alt="avatar"
                className=" border-4 border-orange-300"
              />
              <h1 className="">{user[2].name} </h1>
              <p>3st</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-between w-full min-h-fit max-w-2xl gap-4 p-6 bg-white my-6">
          <div className=" flex flex-row items-center justify-between w-full min-h-fit max-w-2x">
            <p>Position</p>
            <h1 className="">Name</h1>
            <p>Points</p>
          </div>
          <hr className=" border border-gray-200 w-full"></hr>
          {user.map((users, index) => {
            return (
              <div className=" flex flex-row items-center justify-evenly w-full min-h-fit max-w-2xl gap-2 text-center">
                <p> {index + 1} </p>
                <Avatar
                  src={users.Avatar}
                  alt="avatar"
                  className=" self-center border-4 border-gray-300"
                />{' '}
                <h1 className=" w-full max-w-[50%] text-center">
                  {users.name}
                </h1>
                <p>{users.points}</p>
              </div>
            );
          })}
          {/* Put the top 3 ppl also to display */}
        </div>

        <Footer num={0.3} className="fixed "></Footer>
      </div>
    </>
  );
};
export default Leaderboard;
