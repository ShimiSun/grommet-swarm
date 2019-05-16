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
          desc="Collaborative machine learning, data privacy and model training at the Edge."
          goto="SHOW ME THE LEARNING"
          path="/learn"
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
          <Inherit size="xxlarge" color="accent-3" />
        </Section>
      </Box>
    );
  }
}

export { Landing };
