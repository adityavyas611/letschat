import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Microphone from '../../assets/images/Microphone.webp';
import MicrophoneMute from '../../assets/images/microphone-mute.png';
import Disconnect from '../../assets/images/disconnect-512.png';

import './video-control.style.scss';

const VideoControl = ({ onDisconnectCall, onMuteCall, isMute }) => (
  <div className="control-visible">
    <div className="video-control">
      <CustomButton handleOnClick={onMuteCall}>
        {!isMute ?
          <img src={Microphone} className="control-button" alt="Microphone" />
          :
          <img src={MicrophoneMute} className="control-button" alt="Microphone" />}
      </CustomButton>
      <CustomButton handleOnClick={onDisconnectCall}>
        <img src={Disconnect} className="control-button" alt="Disconnect" />
      </CustomButton>
    </div>
  </div>
);

export default VideoControl;
