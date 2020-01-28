import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../custom-button/custom-button.component';
import './form-container.style.scss';

class FormContainer extends Component {
    state = {
        username: ''
    }

    handleChange = () => {

    }

    render() {
        return (
            <div className="box flex">
                <div className="header">
                    <h3>LetsChat - Video Chat</h3>
                </div>
                <div className="form-content">
                    <FormInput
                        name="username"
                        type="text"
                        label="Username"
                        value={this.state.username}
                        handleChange={this.handleChange}
                        required
                    />
                    <Button type="submit" value="Video Call">
                        Let's Video
                    </Button>
                </div>
            </div>
        )
    };
}

export default FormContainer;