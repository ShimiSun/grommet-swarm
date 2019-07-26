import React from 'react';

import { Box, ResponsiveContext } from 'grommet';

import { CubesInfo } from './CubesInfo';
import { InheritInfo } from './InheritInfo';

import { inferenceResults } from '../../data/inferenceResults';

export const Results = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction={size === 'small' ? 'column' : 'row'}
        margin="medium"
        gap={size === 'small' ? 'xlarge' : 'large'}
        align="center"
      >
        <Box>
          <CubesInfo nodes={inferenceResults} size={size} showMeters />
        </Box>
        <InheritInfo size={size} />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
