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

    </section>
  );
}

export default AboutHero;
