import React from 'react';
import './styles.scss';
import stackd from '../../assets/images/Logo_hwhite';

function Home() {
  return (
    <section>
      <div class='home'>
        <div className='home-container'>
          <div className='home-left'>
            <img className='home-logo' src={stackd} alt='logo'></img>
            <h1 className='home-h1'>An Inclusive Network for Gamers</h1>
            <p className='home-description'>
              Connect and play with others. Immerse yourself in our safe and
              welcoming peer-reviewed community
            </p>
          </div>
          <div className='home-right'>
            <p className='home-text'>Win now, make forever friends</p>
            <button className='join-button' href='/login'>
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
