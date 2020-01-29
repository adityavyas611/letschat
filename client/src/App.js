import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FormContainer from './components/form-container/form-container.component';
import VideoRoom from './components/video-room/video-room.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FormContainer} />
        <Route path="/room/:id" component={VideoRoom} />
      </Switch>
    </div>
  );
}

export default App;
