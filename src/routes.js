import React from 'react';
import { Route } from 'react-router';
import App from './App/App';
import GameMenu from './gameMenu/gameMenu';
import WaitingPlayer from './waitingPlayer/waitingPlayer';
import Preparing from './preparingGame/preparingGame';

export default function() {
  return (
    <Route>
      <Route path="/" component={App} />
      <Route path="/menu" component={GameMenu} />
      <Route path="/waiting" component={WaitingPlayer} />
      <Route path="/preparing" component={Preparing} />
      <Route path="/playing" component={Preparing} />
    </Route>
  );
}
