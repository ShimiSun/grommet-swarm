import React from 'react';

import { Cube, Inherit } from 'grommet-icons';
import { Box, ResponsiveContext, Text } from 'grommet';
import { inferenceResults } from '../../data/inferenceResults';
import { getResponsiveSize } from './CubesInfo';

const CubesPlaceholder = ({ size }) =>
  inferenceResults.map(edge => (
    <Box gap="medium" direction="row" key={edge.name}>
      <Cube color="grommet" size={getResponsiveSize(size)} />
      <Text alignSelf="center"> {edge.name}</Text>
    </Box>
  ));

export const PrepResult = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box direction="row" margin="large" justify="between" align="center">
        <Box gap="medium">
          <CubesPlaceholder size={size} />
        </Box>
        <Box
          alignSelf="center"
          pad={{ horizontal: 'xlarge' }}
          direction="row"
          gap="medium"
        >
          <Inherit color="accent-3" size={getResponsiveSize(size)} />
          <Text alignSelf="center"> Swarm 001</Text>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
