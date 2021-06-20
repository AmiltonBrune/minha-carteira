import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Signin} />
  </Switch>
);

export default Routes;
