import React from 'react';

import { Box, Text } from 'grommet';
import { Inherit } from 'grommet-icons';
import { getResponsiveSize } from './CubesInfo';
import { SwarmMeters } from './SwarmMeters';

import { inferenceResultsSwarm } from '../../data/inferenceResults';

export const InheritInfo = ({ size }) => (
  <Box
    align="center"
    pad={{ horizontal: 'xlarge' }}
    direction="row"
    gap="medium"
  >
    <Inherit color="accent-3" size={getResponsiveSize(size)} />
    <Box gap="small">
      <Box gap="xsmall">
        <Text size="medium" weight="bold">
          {inferenceResultsSwarm[0].name}
        </Text>
        <SwarmMeters
          result={inferenceResultsSwarm[0]}
          color="accent-3"
          size="small"
          thickness="medium"
        />
      </Box>
      <Text size="xsmall">Time to Learn: 8.4 seconds</Text>
    </Box>
  </Box>
);
