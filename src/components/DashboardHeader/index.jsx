import React from 'react';
import './styles.scss';
import samplepf from '../../assets/images/samplepf.png';
import ratestar from '../../assets/images/ratestar.png';


function DashboardHeader() {
  return (
    <section className="container">
      <div className="userinfo">
        <div className="pf">
          <img src={samplepf} alt="profile"></img>
        </div>
        <div className="gamer">
          <div className="welcome">
            <p>Welcome,</p>
          </div>
      {/*gamer name, rate, and statics will be changed*/}
          <div className ="nickname">
            <p>gamergiiirlxo</p>
          </div>
          <div className="rating">
            <img src={ratestar} alt="ratestar"></img>
            <p>4.7</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default DashboardHeader;
