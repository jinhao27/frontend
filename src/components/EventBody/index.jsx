import React from 'react';
import './styles.scss';
import mapimg from '../../assets/images/map';
import profile1 from '../../assets/images/nidhogg';
import profile2 from '../../assets/images/arwina';

function EventBody() {
  return (
    <section>
      <div id="event-body">

        <div id="intro-body">

          <div id="intro-text">
            <h1>Join us for a safe and inclusive gaming tournament at Invictus Game Station!</h1>
          </div>

          <div id="location-info">

            <div id="map">
              <img src={ mapimg }></img>
            </div>

            <div id="text-info">
              <p id="p-info"><span id="sub">Event Type: </span>Tournament</p>
              <p id="p-info"><span id="sub">Date and Time: </span>Fri, 20 Mar 2020 - 10:30 AM to 6:00 PM EST</p>
              <p id="p-info"><span id="sub">Location: </span>Invictus Game Station - 558 Yonge St, Toronto, ON M4Y 1Z1</p>
              <p id="p-info"><span id="sub">Games: </span>League of Legends</p>
            </div>

          </div>

        </div>

        <div id="description-body">
          <p id="description-text">SuperStackd is an innovative League of Legends Summoner's Rift tournament that aims to create a safe and inclusive environment for casual and intermediate gamers! Join us on March 20 to win prizes and get tips from gaming celebrities!</p>
          <p id="description-text">Join our tournament as either a solo or duo and get drafted into a team to meet like-minded gamers!</p>
          <p id="description-sub">Requirements: </p>
          <p id="description-text">Rank of Platinum and below</p>
          <p id="description-text">Note: The first competitors that sign up have a higher chance of playing in an elevated gaming area. The different options are: the VIP rooms, Stage area, and main area.</p>
        </div>

        <div id="register-section">
          <h1 id="to-register">To register for the event,</h1>
          <form>
          <button type="submit" formaction="https://gamers.beam.gg/event/SuperStackd-9853736">Click here.</button>
          </form>
        </div>

        <div id="guest-section">
          <div id="guest-text">
            <h1>Notable Guests</h1>
          </div>

          <div id="guest-section">
            <div id="king-nidhogg">
              <img src={ profile1 } id="profileimg" alt="Image of King Nidhogg"></img>
              <p id="name">King Nidhogg</p>
            </div>
            <div id="arwina-mogul">
              <img src={ profile2 } id="profileimg" alt="Image of Arwina Mogul"></img>
              <p id="name">Arwina Mogul</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default EventBody;
