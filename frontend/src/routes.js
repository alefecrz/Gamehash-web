import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Game from './pages/Game';
import NewUser from './pages/NewUser';
import Rooms from './pages/Rooms';
import NewRoom from './pages/NewRoom'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/newroom" component={NewRoom} />
      <Route path="/new" component={NewUser} />
      <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}