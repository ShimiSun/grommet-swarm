import React from 'react';

import { Cube, Nodes } from 'grommet-icons';
import { Box, Text } from 'grommet';

export const cubes = [1, 2, 3].map(index => (
  <Box key={index}>
    <Box gap="medium" direction="row">
      <Cube color="grommet" size="xlarge" />
      <Text alignSelf="center"> Discover Node 00{index + 1}</Text>
    </Box>
  </Box>
));

export const InferenceInfoEmpty = () => (
  <Box direction="row" margin="large" gap="xlarge">
    <Box gap="large">{cubes}</Box>
    <Box
      alignSelf="center"
      pad={{ horizontal: 'xlarge' }}
      direction="row"
      gap="medium"
    >
      <Nodes color="accent-3" size="xlarge" />
      <Text alignSelf="center"> Swarm 001</Text>
    </Box>
  </Box>
);
