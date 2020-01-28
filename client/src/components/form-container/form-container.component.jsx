import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import {withRouter} from 'react-router-dom';
import Button from '../custom-button/custom-button.component';
import './form-container.style.scss';

class FormContainer extends Component {
    state = {
        roomId: ''
    }

    componentDidMount() {
        this.setState({ roomId: '2xsffsds3' });
    }

    handleOnClick = () => {
        this.props.history.push(`/room/${this.state.roomId}`);
    };

    render() {

        setTimeout(() => {
            const uid = Math.random().toString(36).substr(2, 9);
            this.setState({ roomId: uid });
        }, 10000);

        return (
            <div className="box flex">
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
                        required
                    />
                    <Button type="submit" value="Video Call" handleOnClick={this.handleOnClick}>
                        Let's Chat
                    </Button>
                </div>
            </div>
        )
    };
}
export default withRouter(FormContainer);