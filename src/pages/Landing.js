import React, { Component } from 'react';

import { Box } from 'grommet';
import { Nodes } from 'grommet-icons';

import { Learning, Section, SwarmImage } from '../components/LandingPage';

class Landing extends Component {
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
        />
        <Nodes size="xxlarge" color="accent-3" />
      </Box>
    );
  }
}

export { Landing };
