import React, { Component } from 'react';
import { Link } from 'react-router';
import Board from '../components/board/board';
import './preparingGame.scss';
import Ship from '../components/ship/ship';

class PreparingGame extends Component {
  render() {
    const ships = [];
    for (let i = 1; i < 5; i++) {
      ships.push(<Ship key={i} size={5 - i} quantity={i} />);
    }

    return (
      <div className="preparing-container">
        <Board />
        <div className="ships-container">
          {ships}
          <Link to="/waiting" className="game-button ready-btn">Ready</Link>
        </div>
      </div>
    );
  }
}

export default PreparingGame;
