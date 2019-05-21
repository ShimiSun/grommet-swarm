import React from 'react';

import { Cube, Inherit } from 'grommet-icons';
import { Box, Text } from 'grommet';
import { inferenceResults } from '../../data/inferenceResults';

export const cubes = inferenceResults.map(edge => (
  <Box key={edge.name}>
    <Box gap="medium" direction="row">
      <Cube color="grommet" size="xlarge" />
      <Text alignSelf="center"> {edge.name}</Text>
    </Box>
  </Box>
));

export const InferenceInfoEmpty = () => (
  <Box direction="row" margin="large" justify="between" align="center">
    <Box gap="medium">{cubes}</Box>
    <Box
      alignSelf="center"
      pad={{ horizontal: 'xlarge' }}
      direction="row"
      gap="medium"
    >
      <Inherit color="accent-3" size="xlarge" />
      <Text alignSelf="center"> Swarm 001</Text>
    </Box>
  </Box>
);
