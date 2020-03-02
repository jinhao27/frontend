import React from 'react';
import './styles.scss';
import group from '../../assets/images/team';
import cards from '../../assets/images/cards';

function AboutBody() {
  return (
    <section>
        <div id="about-section">
            <div id="stackd-description">
                <p>
                    Stackd is a student-led company in downtown Toronto. We are comprised of 21 high school students who aim to eliminate toxicity in the esports environment. We provide an inclusive gaming community for everyone to connect and empower gamers.
                </p>
            </div>

            <div id="image">
              <img id="team-photo" src={ group } alt="Group photo of Stackd team members and advisors"></img>
            </div>

            <div id="team-area">
                <h1>Meet Our Team</h1>
                <img id="team-cards" src={ cards } alt="Cards with executive members and roles"></img>
            </div>
        </div>
    </section>
  );
}

export default AboutBody;