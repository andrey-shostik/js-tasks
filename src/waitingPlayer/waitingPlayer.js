import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import Preloader from '../components/preloader/preloader';
import './waitingPlayer.scss';

class WaitingPlayer extends Component {
  componentDidMount() {
    const socket = SocketIOClient('http://localhost:3000');
    const room = 'game-room';

    socket.emit('join', room);
    console.log(socket);
    socket.on('game-ready');
  }

  render() {
    return (
      <div className="waiting-container">
        <Preloader/>
        <div className="waiting-header">
          <h1>Waiting For Player</h1>
        </div>
      </div>
    );
  }
}

export default WaitingPlayer;
