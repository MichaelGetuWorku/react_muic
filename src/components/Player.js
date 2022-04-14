import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" name="" id="" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-back" size="2x" />
        <FontAwesomeIcon icon={faPlay} className="play" size="2x" />
        <FontAwesomeIcon icon={faAngleRight} className="skip-right" size="2x" />
      </div>
    </div>
  );
};

export default Player;
