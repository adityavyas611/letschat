import React, { Component } from 'react';
import Peer from 'peerjs';
import { withRouter } from 'react-router-dom';
import VideoControl from '../video-control/video-control.component';

import './video-room.style.scss';

class VideoRoom extends Component {
  state = {
    peerId: '',
    localStream: null,
    remoteStream: null,
    roomId: '',
    isMute: false
  }

  componentDidMount() {
    this.peer = new Peer();
    this.peer.on('open', (peerId) => this.setState({ ...this.state, peerId }));
    this.peer.on('connection', (conn) => this.handleConnection(conn));

    const roomId = this.props.match.params.id;

    this.setState({ roomId, remoteStream: "https://www.youtube.com/embed/DQuhA5ZCV9M?autoplay=1&controls=0&showinfo=0" });

    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => this.setState({ ...this.state, localStream: stream }))
      .catch((error) => { throw error });

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.localStream) {
      this.refs.localVideo.srcObject = nextState.localStream;
    }

    return true;
  }

  onRecipientChange = (event) => {
    this.setState({ ...this.state, recipientId: event.target.value });
  }

  onMuteCall = () => {
    const stream = this.state.localStream;
    const tracks = stream.getTracks()[0];

    tracks.enabled ? tracks.enabled = false : tracks.enabled = true;

    const isMute = this.state.isMute;

    this.setState({ isMute: !isMute });
  }

  onDisconnectCall = () => {
    this.peer.disconnect();
    this.peer.destroy();

    const stream = this.state.localStream;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    this.setState({ localStream: null });

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="video-room">
        <h3 className="video-room-header">room: {this.state.roomId}</h3>
        <video ref="localVideo" className="local-box" autoPlay />
        <iframe src={this.state.remoteStream} className="remote-box" title="remote"></iframe>
        <VideoControl onDisconnectCall={this.onDisconnectCall} onMuteCall={this.onMuteCall} isMute={this.state.isMute} />
      </div>
    )
  }
};

export default withRouter(VideoRoom);
