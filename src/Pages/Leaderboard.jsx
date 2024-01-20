import React, { useEffect, useRef, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Avatar } from '@material-tailwind/react';
import gsap from 'gsap/gsap-core';
import Footer from '../components/Footer';
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore';

const db = getFirestore();

const Leaderboard = () => {
  const { user } = UserAuth();
  const [users, setUsers] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, orderBy('points', 'desc'));
      const querySnapshot = await getDocs(q);
      const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();

    gsap.to(boxRef.current, {
      opacity: 1,
      duration: 0.9,
      delay: 0.5,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <>
      <div className="min-h-screen h-full flex flex-col m-auto items-center justify-start bg-tq-base p-6 overflow-hidden md:overflow-visible border" ref={boxRef}>
        <h1 className="text-4xl font-black text-gray-900 text-center md:text-slate-200 mb-5 md:mb-14 md:text-6xl lg:text-7xl">
          Taqneeq Fest
        </h1>

        {/* WINNERS - TOP 3 USERS */}
        <div className="min-h-fit flex flex-col items-center justify-center w-full max-w-2xl bg-blue-400 rounded-2xl p-4 text-white ">
          {users.slice(0, 3).map((user, index) => (
            <div key={user.id} className="flex flex-col items-center justify-evenly w-full min-h-fit rounded-2xl max-w-2xl p-4">
              <Avatar src={"https://thispersondoesnotexist.com/"} alt="avatar" className="border-4 border-orange-300" />
              <h1 className="">{user.email}</h1>
              <p>{`${index + 1}${['st', 'nd', 'rd'][index] || 'th'}`}</p>
            </div>
          ))}
        </div>

        {/* FuLL LEADERBOAR  */}
        <div className="flex flex-col items-center justify-between w-full min-h-fit max-w-2xl gap-4 p-6 bg-white my-6">
          <div className="flex flex-row items-center justify-between w-full min-h-fit max-w-2xl">
            <p>Position</p>
            <h1>Name</h1>
            <p>Points</p>
          </div>
          <hr className="border border-gray-200 w-full" />
          {users.map((user, index) => (
            <div key={user.id} className="flex flex-row items-center justify-evenly w-full min-h-fit max-w-2xl gap-2 text-center">
              <p>{index + 1}</p>
              <Avatar src={"https://thispersondoesnotexist.com/"} alt="avatar" className="self-center border-4 border-gray-300" />
              <h1 className="w-full max-w-[50%] text-center">{user.email}</h1>
              <p>{user.points}</p>
            </div>
          ))}
        </div>

        <Footer num={0.3} className="fixed"></Footer>
      </div>
    </>
  );
};

export default Leaderboard;
