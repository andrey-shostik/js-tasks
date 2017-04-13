import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import Preloader from '../components/preloader/preloader';
import './waitingPlayer.scss';

class WaitingPlayer extends Component {
  componentDidMount() {
    console.log(this.context);
    const socket = SocketIOClient('http://localhost:3000');
    const room = 'game-room';

    socket.emit('join', room);
    socket.on('game-ready', () => {
      this.props.router.push('/preparing')
    });
  }

  render() {
    console.log(this.context);
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

// WaitingPlayer.contextTypes = {
//   router: React.PropTypes.object.isRequire
// };

export default WaitingPlayer;
