import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import {useHistory} from 'react-router-dom'

import './InfoBar.css';

const InfoBar = ({ room }) => {
  const history = useHistory()
  function goBack(){
    history.goBack();
  }
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <div onClick={goBack}><img src={closeIcon} alt="close icon" /></div>
      </div>
    </div>
  );
}

export default InfoBar;