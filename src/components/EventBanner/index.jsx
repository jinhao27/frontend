import React from 'react';
import './styles.scss';
import logo from '../../assets/images/logo.png';

function EventBanner() {
  return (
    <section>
      <p>SuperStackd</p>
      <p>03.20.2020</p>
      <p>#leveltheplayingfield</p>
      <img src={logo} alt="logo"></img>

    </section>
  );
}

export default EventBanner;
