import React from 'react';
import './styles.scss';
import samplepf from '../../assets/images/samplepf.png';
import ratestar from '../../assets/images/ratestar.png';

function DashboardHeader() {
  return (
    <div className='dashboard-container'>
      <div className='userinfo'>
        <div className='pf'>
          <img src={samplepf} alt='profile' className='profile-pic'></img>
        </div>
        <div className='gamer'>
          <div className='gamer-info'>
            <div className='welcome'>
              <p className='welcome-text'>Welcome,</p>
            </div>
            <div className='nickname'>
              <p className='welcome-text'>gamergiiirlxo</p>
            </div>
          </div>
          <div className='rating'>
            <img src={ratestar} alt='ratestar'></img>
            <p className='number'>4.7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
