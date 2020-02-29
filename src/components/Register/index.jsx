import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import bg from '../../assets/images/league-bg';

function Signup() {
  return (
    <section>
      <div class="container">
        <div id="register-area">
          <h1>REGISTER</h1>
          <form>
            <button><FontAwesomeIcon id="icon" icon={faDiscord} />SIGN UP WITH DISCORD</button>
          </form>
          <div id="hr-line">
            <hr></hr>
          </div>
          <a id="have-account" href="/login">ALREADY HAVE AN ACCOUNT?</a>
          <div id="terms">
            <p>By signing up you agree to the Stackd <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>            </div>
          </div>
        </div>
    </section>
  );
}

export default Signup;
