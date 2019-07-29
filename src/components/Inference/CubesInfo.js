import React from 'react';
import { Box, Text } from 'grommet';
import { Cube } from 'grommet-icons';

import { SwarmMeters } from './SwarmMeters';

export const getResponsiveSize = size => {
  return size === 'small' ? 'large' : 'xlarge';
};

export const CubesInfo = ({ nodes, size, showMeters }) =>
  nodes.map(node => (
    <Box key={node.name}>
      <Box gap="medium" direction="row" align="center">
        <Cube color="grommet" size={getResponsiveSize(size)} />
        <Box pad={{ vertical: 'small' }}>
          <Text size="small">{node.name}</Text>
          {showMeters && <SwarmMeters result={node} />}
        </Box>
      </Box>
    </Box>
  ));
