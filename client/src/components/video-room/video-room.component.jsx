import React, { Component } from 'react';
import Peer from 'peerjs';
import RemoteVideo from '../../assets/video/remote.mp4';
import './video-room.style.scss';

class VideoRoom extends Component {
    state = {
        peerId: undefined,
        localStream: undefined,
        remoteStream: undefined,
        recipientId: '',
    }

    componentDidMount() {
        this.peer = new Peer({ host: 'localhost', secure: false, port: 9000 })
        this.peer.on('open', (peerId) => this.setState({ ...this.state, peerId }));
        this.peer.on('connection', (conn) => this.handleConnection(conn));

        console.log(this.props.match.params.id);

        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then((stream) => this.setState({ ...this.state, localStream: stream }))
            .catch((error) => { throw error });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.localStream) {
            this.refs.localVideo.srcObject = nextState.localStream;
        }

        if (nextState.remoteStream) {
            this.refs.remoteVideo.srcObject = nextState.remoteStream;
        }
    }


    handleStream = (call) => {
        call.on('stream', (stream) => {
            console.log(stream);
            this.setState({ ...this.state, remoteStream: stream });
        });
    }

    onCallClick = () => {
        const recipient = this.state.recipientId
        if (recipient) {
            const call = this.peer.call(recipient, this.state.localStream);
            this.handleStream(call);
        }
    }

    onRecipientChange = (event) => {
        this.setState({ ...this.state, recipientId: event.target.value })
    }

    render() {
        return (
            <div className="video-room">
                <h3 className="video-room-header">room: Aditya</h3>
                <video ref="localVideo" className="local-box" autoPlay />
                <video src={RemoteVideo} className="remote-box" autoPlay type="video/mp4" muted loop />
            </div>
        )
    }
};

export default VideoRoom;