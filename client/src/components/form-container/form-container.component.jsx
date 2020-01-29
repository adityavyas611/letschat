import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import VideoIcon from '../../assets/images/videoicon.png';

import './form-container.style.scss';

class FormContainer extends Component {
  interval = '';

  state = {
    roomId: ''
  }

  getRoomId = () => {
    setInterval(() => {
      const uid = Math.random().toString(36).substr(2, 9);
      this.setState({ roomId: uid });
    }, 5000);
  }

  componentDidMount() {
    this.interval = this.getRoomId();
  }

  componentDidUpdate() {
    this.interval = this.getRoomId();
  }

  handleOnClick = () => {
    this.props.history.push(`/room/${this.state.roomId}`);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="box">
        <div className="header">
          <h3>LetsChat - Video Chat</h3>
        </div>
        <div className="form-content">
          <FormInput
            name="username"
            type="text"
            label="Room Id"
            value={this.state.roomId}
            handleChange={this.handleChange}
            readOnly
            required
          />
        </div>
        <div className="custom-button">
          <CustomButton type="submit" value="Video Call" handleOnClick={this.handleOnClick}>
            <img src={VideoIcon} alt="VideoCamera" />
          </CustomButton>
        </div>
      </div>
    )
  };
}

export default withRouter(FormContainer);
