import React from 'react';
import './styles.scss';
import imageheader from '../../assets/images/StackdHeaderJade.png';
import stackdheader from '../../assets/images/StackdHeaderText.png';


function Header() {
  return (
    <section>

      <div>
      <img src={imageheader} className="jadeheader"></img>
      <img src={stackdheader} className="jadetext"></img>
      </div>
      <div className="links">
      <h2>SIGN IN</h2> <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      <h2>ABOUT US</h2>
      <h2>EVENT</h2>
      </div>
    </section>
  );
}

export default Header;
