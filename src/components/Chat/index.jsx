import React from 'react';
import './styles.scss';
import chatlogo from '../../assets/images/chatlogo.png';
import samplechat from '../../assets/images/samplechat.png';

function Chat() {
  return (
    <section className='chatcontainer'>
      <div className='top'>
        <div className='chatlogo'>
          <img src={chatlogo} alt='chatlogo'></img>
        </div>
        <p>Stackd Chat</p>
      </div>
      <div className='samplechat'>
        <img src={samplechat} alt='samplechat' className='samplechat'></img>
      </div>
      <div className='review'>
        <div className='players'>
          <p className='review-title'>Review Recent Matches</p>
          <div className='player-review'>
            <p className='player'>gamergirl2001</p>
          </div>
          <div className='player-review'>
            <p className='player'>league23_master</p>
          </div>
          <div className='player-review'>
            <p className='player'>gaming4ever_99</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
