import React from 'react';
import './styles.scss';
import chatlogo from '../../assets/images/chatlogo.png'
import samplechat from '../../assets/images/samplechat.png'

function Chat() {
  return (
    <section className="chatcontainer">
      <div className="top">
        <div className="chatlogo">
        <img src={chatlogo} alt="chatlogo"></img>
        </div>
        <p>Stackd Chat</p> 
      </div>
      <div className="samplechat">
      <img src={samplechat} alt="samplechat"></img>
      </div>
      <div className="review">
        <div className="players">
        <p className="reviews">Review Recent Matches</p>
          <div className="player">
            <p>gamergirl2001</p>
          </div>
          <div className="player">
            <p>league23_master</p>
          </div>
          <div className="player">
            <p>gaming4ever_99</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
