import React from 'react';
import '../styles/index.css';
import background from '../assets/background.mp4';

const Index = () => {
  return (
    <>
     <div className="main">
      <div className="overlay"></div>
      <video src={background} autoPlay loop muted />
      <div className="content">
        <h1>Taqneeq Fest's <br/> QR Shooter</h1>
        <a href="/Login"><div className="btn"> Login </div></a>
        <a href="/register">
        <div className="btn-1"> Register</div></a>
      </div>
     </div>


    </>
  );
}

export default Index;
