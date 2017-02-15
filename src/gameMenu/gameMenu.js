import React, { Component } from 'react';
import { Link } from 'react-router';
import './gameMenu.scss';
// import WaitingPlayer from '../WaitingPlayer/WaitingPlayer'

class GameMenu extends Component {
  constructor() {
    super();
    this.getLinkPath = this.getLinkPath.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/room', { method: 'GET' })
      .then((res) => {
        res.json().then((data) => {
          this.roomPlayers = data.length;
          console.log(this.roomPlayers, 'DidMount');

        });
      });
  }

  getLinkPath() {
    console.log(this.roomPlayers, 'getLinkPath');
    if (this.roomPlayers != 1) {
      return '/';
    } else {
      return '/waiting';
    }
    // ref={(c) => { this.connectBtn = c; }}
  }

  render() {
    return (
      <div id="game-menu">
        <ul>
          <li>
            <Link to="/waiting" className="game-button">New Game</Link>
          </li>

          <li>
            <Link to={{ pathname: this.getLinkPath() }} className="game-button">
              Connect
            </Link>
          </li>

          <li>
            <Link to="/" className="game-button">Back</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default GameMenu;
