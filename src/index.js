import React, { Component } from 'react';
import { render } from 'react-dom';

import { Box, Grommet } from 'grommet';
import { Nodes } from 'grommet-icons';

import { Learning, Section, SwarmImage } from './components/LandingPage';
import { NavHeader } from './components';

import { customTheme } from './customTheme';

class App extends Component {
  render() {
    return (
      <Grommet theme={customTheme} full>
        <Box fill alignSelf="center" align="center">
          <NavHeader />
          <SwarmImage />
          <Section
            title="Swarm Learning"
            desc="Collaborative machine learning, data privacy and model training at the Edge."
            goto="SHOW ME THE LEARNING"
          >
            <Learning />
          </Section>
          <Section
            title="Swarm Inferencing"
            desc="Be an active participant and watch how HPE Labs Swarm Network happens live."
            goto="START THE SWARM"
            margin={{ top: 'xlarge' }}
          />
          <Nodes size="xxlarge" color="accent-3" />
        </Box>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById('root'));
