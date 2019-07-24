import React from 'react';

import { Cube, Inherit } from 'grommet-icons';
import { Box, ResponsiveContext, Text } from 'grommet';
import { inferenceResults } from '../../data/inferenceResults';

export const cubes = inferenceResults.map(edge => (
  <ResponsiveContext.Consumer key={edge.name}>
    {size => (
      <Box>
        <Box gap="medium" direction="row">
          <Cube color="grommet" size={size === 'small' ? 'large' : 'xlarge'} />
          <Text alignSelf="center"> {edge.name}</Text>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
));

export const InferenceInfoEmpty = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box direction="row" margin="large" justify="between" align="center">
        <Box gap="medium">{cubes}</Box>
        <Box
          alignSelf="center"
          pad={{ horizontal: 'xlarge' }}
          direction="row"
          gap="medium"
        >
          <Inherit
            color="accent-3"
            size={size === 'small' ? 'large' : 'xlarge'}
          />
          <Text alignSelf="center"> Swarm 001</Text>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
