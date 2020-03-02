import React from 'react';
import './styles.scss';
import imageheader from '../../assets/images/StackdHeaderJade.png';
import stackdheader from '../../assets/images/StackdHeaderText.png';

function Header() {
  return (
    <section className='header'>
      <div className='logo'>
        <img src={imageheader} className='jadeheader'></img>
        <img src={stackdheader} className='jadetext'></img>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href='/signup'>SIGN IN</a>
          </li>
          <li>
            <a href='/about'>ABOUT US</a>
          </li>
          <li>
            <a href='/event'>EVENT</a>
          </li>
        </ul>
        <link
          href='https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap'
          rel='stylesheet'></link>
      </div>
    </section>
  );
}

export default Header;
