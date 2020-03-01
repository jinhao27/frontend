import React from 'react';
import './styles.scss';
import imageheader from '../../assets/images/StackdHeaderJade.png';
import stackdheader from '../../assets/images/StackdHeaderText.png';


function Header() {
  return (
    <section>

      <img src={imageheader} className="jadeheader"></img>
      <img src={stackdheader} className="jadetext"></img>
      <div className="links">

      <ul>
  <li><a href="default.asp">SIGN IN</a></li>
  <li><a href="news.asp">ABOUT US</a></li>
  <li><a href="contact.asp">EVENT</a></li>
</ul>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      </div>
    </section>
  );
}

export default Header;
