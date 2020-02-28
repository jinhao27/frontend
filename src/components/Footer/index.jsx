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
      <div>
        <img src={jade} alt="Blue Stackd Jade Logo"></img>
        <img src={word} alt="Blue Stackd Words"></img>
        <p>Level the playing field</p>
      </div>
      <div>
        <a href="https://www.facebook.com/stackd.gg/"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com/GgStackd"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.linkedin.com/company/stackd-gaming/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="https://www.twitch.tv/Stackd_gg"><FontAwesomeIcon icon={faTwitch} /></a>
        <a href="https://www.instagram.com/stackd.gg"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://discord.gg/VsyHf6d"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="mailto:info@stackd.gg"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      <div>

      </div>
    </footer>
  );
}

export default Footer;
