import React from 'react';
import './styles.scss';
import logo from '../../assets/images/logo.png';

function EventBanner() {
  return (
    <section className='container'>
      <div className='content'>
        <div className='text'>
          <p>
            <b>
              Super<font color='#61dafb'>Stackd</font>
            </b>
          </p>
          <p>
            <b>03.20.2020</b>
          </p>
          <div className='slogan'>
            <p>
              <b>#leveltheplayingfield</b>
            </p>
          </div>
        </div>
        <div className='banner-logo'>
          <img src={logo} className='banner-image' alt='logo'></img>
        </div>
      </div>
    </section>
  );
}

export default EventBanner;
