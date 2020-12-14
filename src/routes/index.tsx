import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Redirect } from '../pages/Redirect';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />

    <Route path="/:code" component={Redirect} />
  </Switch>
);
