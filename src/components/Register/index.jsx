import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

function Signup() {
  return (
    <section>
      <div class="container">
        <div id="bg"></div>
        <div id="register-area">
          <h1>REGISTER</h1>
          <button><FontAwesomeIcon id="icon" icon={faDiscord} />SIGN UP FOR DISCORD</button>
          <a id="have-account" href="#">ALREADY HAVE AN ACCOUNT?</a>
          <p>By signing up you agree to the Stackd <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
