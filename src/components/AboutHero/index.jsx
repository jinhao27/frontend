import React from 'react';
import './styles.scss';
import bgimage from '../../assets/images/AboutHero_bg';
import longlogo from '../../assets/images/Logo_hwhite'

function AboutHero() {
  return (
    <section>
      <div class="bkgd">
        <div class="hero">
          <img src={longlogo}></img>

          <div class="herotext">
            <h1>Our Company</h1>
          </div>
        </div>

        <img src={bgimage}></img>
      </div>

      "Team page goes here"

      <div class="banner">
        <div class="hero">
          <div class="bannertext">
            <h1>Looking to chat?</h1>
            <p>Contact us at <a href="mailto:info@stackd.gg?subject=Web Inquiry">info@stackd.gg</a></p>
          </div>
        </div>

        <img src={bgimage}></img>
      </div>
    </section>
  );
}

export default AboutHero;
