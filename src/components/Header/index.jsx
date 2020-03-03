import React from 'react';
import './styles.scss';
import stackdheader from '../../assets/images/Logo_hwhite';

function Header() {
  return (
    <section className='header'>
      <div className='wrapper'>
        <div className='logo'>
          <a href="/">
            <img src={stackdheader} className='jadetext'></img>
          </a>
        </div>
        <div className='links'>
          <ul>
            {/*<li>
              <a href='/signup'>SIGN IN</a>
            </li>*/}
            <li>
              <a href='/event'>EVENT</a>
            </li>
            <li>
              <a href='/about'>ABOUT US</a>
            </li>
            <li>
              <a href='/'>HOME</a>
            </li>
          </ul>
          <link
            href='https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap'
            rel='stylesheet'></link>
        </div>
      </div>
    </section>
  );
}

export default Header;
