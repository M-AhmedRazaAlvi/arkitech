import React from 'react';
import {Link} from  "react-router-dom"

const WelcomePage = () => {
  const buttonstyle={
    color:"white",
    alignable:"center",
  }
  return (
    <div className="welcome-container">
      <div style={buttonstyle}>
        <h1>Welcome to ArkiTech</h1>
        <p>Discover, explore, and appreciate architectural wonders.</p>
      </div>
      <div style={{display:"flex"}}>
        <Link className='authButtonStyle' to='/signup'>Sign Up</Link>
        <Link className='authButtonStyle' to='/login'>Log in</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
