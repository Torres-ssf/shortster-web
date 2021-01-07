import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Redirect } from '../pages/Redirect';
import { ShortsterStats } from '../pages/ShortsterStats';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />

    <Route path="/:code" exact component={Redirect} />

    <Route path="/:code/stats" component={ShortsterStats} />
  </Switch>
);
