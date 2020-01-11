import React from 'react';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src='img/onlineIcon.png' alt="online icon" />
      <h1>Chat Room: {room}</h1>
    </div>
    <div className="rightInnerContainer">
      <a href="/joinchat"><img id="closeImg" src='img/closeIcon.png' alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;