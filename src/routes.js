import React from 'react';
import { Route,y } from 'react-router';
import App from './App/App';
import GameMenu from './gameMenu/gameMenu';
import WaitingPlayer from './waitingPlayer/waitingPlayer';

export default function() {
  return (
    <Route>
      <Route path="/" component={App} />
      <Route path="/menu" component={GameMenu} />
      <Route path="/waiting" component={WaitingPlayer} />
    </Route>
  )
}
