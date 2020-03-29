import React from 'react';
import './styles.scss';
import mapimg from '../../assets/images/map';
import profile1 from '../../assets/images/kingnidhogg';
import profile2 from '../../assets/images/arwinamogul';

function EventBody() {
  return (
    <section>
      <div id='event-body'>
        <div id='intro-body'>
          <div id='intro-text'>
            <h1>
              Join us for a safe and inclusive online gaming tournament!
            </h1>
          </div>

          <div id='location-info'>

            <div id='text-info'>
              <p id='p-info'>
                <span id='sub'>Event Type: </span>Online Tournament
              </p>
              <p id='p-info'>
                <span id='sub'>Date: </span>Fri, 27 Mar 2020 to Sat, 28 Mar 2020
              </p>
              <p id='p-info'>
                <span id='sub'>Time: </span>2:00 PM to 5:30 PM EST & 7:30 PM to 11:00 PM EST
              </p>
              <p id='p-info'>
                <span id='sub'>Region: </span>North America
              </p>
              <p id='p-info'>
                <span id='sub'>Games: </span>League of Legends
              </p>
            </div>
          </div>
        </div>

        <div id='description-body'>
          <p id='description-text'>
            Due to the unfortunate COVID-19 situation, we have transitioned SuperStackd online and tentatively postponed the event at Invictus Game Station. SuperStackd Virtual is an online League of Legends Summoner's Rift tournament that aims to create a safe and inclusive environment for casual and intermediate gamers! Join us from March 27-28 for two fun-filled days of gaming and prizes.
          </p>
          <p id='description-text'>
          Enter our tournament as either a solo or duo and get drafted into a team to meet like-minded gamers!
          </p>
          <p id='description-sub'>Requirements: </p>
          <p id='description-text'>Rank of Platinum and below</p>
        </div>

        <div id='register-section-link'>
          <h1 id='to-register'>To register for the event,</h1>
          <form>
            <button
              id='event-button'
              type='submit'
              formaction='https://gamers.beam.gg/event/SuperStackd-9853736'>
              Click here.
            </button>
          </form>
        </div>

        <div id='guest-section'>
          <div id='guest-section-div'>
            <div id='guest-text'>
              <h1>Notable Guests</h1>
            </div>

            <div id='guest-row'>
              <div id='king-nidhogg'>
                <div id='profile-picture'>
                  <img src={profile1} id='profileimg' alt='King Nidhogg'></img>
                </div>
                <p id='name'>King Nidhogg</p>
              </div>

              <div id='arwina-mogul'>
                <div id='profile-picture'>
                  <img src={profile2} id='profileimg' alt='Arwina Mogul'></img>
                </div>
                <p id='name'>Arwina Mogul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventBody;
