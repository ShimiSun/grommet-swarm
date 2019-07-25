import React, { Component } from 'react';

import { Box } from 'grommet';
import { Inherit } from 'grommet-icons';

import { Learning, Section, SwarmImage } from '../components/LandingPage';

class Landing extends Component {
  statue = {};

  render() {
    return (
      <Box align="center">
        <SwarmImage />
        <Section
          title="Swarm Learning"
          desc="Decentralized machine learning that preserves your data privacy"
          goto="SHOW ME THE LEARNING"
          path="/learn"
          pad={{ top: 'large' }}
        >
          <Learning />
        </Section>
        <Section
          title="Swarm Inferencing"
          desc="Be an active participant and watch how HPE Labs Swarm Network happens live."
          goto="START THE SWARM"
          margin={{ top: 'xlarge' }}
          path="/inference"
        >
          <Box margin="large">
            <Inherit size="xxlarge" color="accent-3" />
          </Box>
        </Section>
      </Box>
    );
  }
}

export { Landing };
