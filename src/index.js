import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Grommet } from 'grommet';

import { Inference, Landing, Learn, NotFound } from './pages';
import { NavHeader } from './components';

import { customTheme } from './customTheme';

const App = () => (
  <Router>
    <Grommet theme={customTheme} full>
      <Box alignSelf="center" align="center">
        <NavHeader />
      </Box>
      <Box>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/learn" exact component={Learn} />
          <Route path="/inference" component={Inference} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </Grommet>
  </Router>
);

render(<App />, document.getElementById('root'));
