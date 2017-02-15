import React, { Component } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux'
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="logo"/>
        <h1 id="header">Sea Battle</h1>
        <Link to="/menu" className="game-button">Start Game</Link>
      </div>
    );
  }
}

// export default connect(
//   state => ({
//     testStore: state
//   }),
//   dispatch => ({})
// )(App);

export default App;
