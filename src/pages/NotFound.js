import React from 'react';

import { Box, Heading, Paragraph } from 'grommet';
import { Halt } from 'grommet-icons';

export const NotFound = () => (
  <Box fill align="center" pad={{ top: 'large', horizontal: 'small' }}>
    <Halt size="xlarge" />
    <Heading textAlign="center" level="2">
      Please verify you are using the correct link.
    </Heading>
    <Paragraph textAlign="center" color="dark-4">
      The page you requested does not exist.
    </Paragraph>
  </Box>
);
