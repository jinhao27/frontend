import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faTwitch, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import jade from '../../assets/images/bluejade'
import word from '../../assets/images/bluestackd'

function Footer() {
  return (
    <footer>
      <div class="container">
        <div id="stackd-brand">
          <div id="blue-logo">
            <img id="blueJade" src={jade} alt="Blue Stackd Jade Logo"></img>
            <img id="blueStackd" src={word} alt="Blue Stackd Words"></img>
          </div>
          <h1 id="slogan">Level the playing field</h1>
        </div>
        <div id="social-link-area">
          <p>Join us on</p>
          <div id="social-links">
            <a href="https://www.facebook.com/stackd.gg/"><FontAwesomeIcon id="icon" icon={faFacebookF} /></a>
            <a href="https://twitter.com/GgStackd"><FontAwesomeIcon id="icon" icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/company/stackd-gaming/"><FontAwesomeIcon id="icon" icon={faLinkedinIn} /></a>
            <a href="https://www.twitch.tv/Stackd_gg"><FontAwesomeIcon id="icon" icon={faTwitch} /></a>
            <a href="https://www.instagram.com/stackd.gg"><FontAwesomeIcon id="icon" icon={faInstagram} /></a>
            <a href="https://discord.gg/VsyHf6d"><FontAwesomeIcon id="icon" icon={faDiscord} /></a>
            <a href="mailto:info@stackd.gg"><FontAwesomeIcon id="icon" icon={faEnvelope} /></a>
          </div>
        </div>
        <div id="link-area">
          <h1>Links</h1>
          <div id="site-links">
            <a href="/about">ABOUT US</a>
            <a href="/event">EVENT PAGE</a>
          </div>
        </div>
        <div id="contact-area">
          <h1>Contact</h1>
          <p>Don't hesitate to ask us <br></br>questions or give feedback!</p>
          <form>
            <button type="submit" formaction="mailto:info@stackd.gg">CONTACT SUPPORT</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
