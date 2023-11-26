import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { user , logout } = UserAuth();
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
    <div>
      <p>User Email :{(user && user.email)}</p>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  )
}

export default Home