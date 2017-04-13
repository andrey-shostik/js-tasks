import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './gameMenu.scss';
import { getRoomPlayers } from './gameMenu.Action';

class GameMenu extends Component {
  componentDidMount() {
    this.props.onGetRoom();

    console.log(Object.keys(this.props.store.room).length);
    if (Object.keys(this.props.store.room).length == 1) {
      this.connectLink = '/waiting';
    } else {
      this.connectLink = '/menu';
    }
  }

  render() {
    return (
      <div id="game-menu">
        <ul>
          <li>
            <Link to="/waiting" className="game-button">New Game</Link>
          </li>

          <li>
            <Link to={{ pathname: this.connectLink }} className="game-button">
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

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onGetRoom: () => {
      fetch('http://localhost:3000/room', { method: 'GET' })
      .then((res) => {
        res.json().then((data) => {
          const peoples = data.sockets;
          dispatch(getRoomPlayers(peoples))
        });
      });
    }
  })
)(GameMenu);
