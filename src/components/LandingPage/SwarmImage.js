import React from 'react';

import { Box, Image, Stack, Text, Paragraph } from 'grommet';

const SwarmImage = () => (
  <Stack anchor="center">
    <Box align="center" height="large">
      <Image
        fit="contain"
        src="assets/james-wainscoat-521741-unsplash-resized.jpg"
      />
    </Box>
    <Box align="center" height="large">
      <Text color="white" margin="xlarge" size="200px" weight="bold">
        SWARM
      </Text>
      <Box pad={{ vertical: 'xlarge' }} />
      <Paragraph textAlign="center" color="white" style={{ maxWidth: '816px' }}>
        HPE Swarm Learning is a decentralized machine learning framework built
        on blockchain. HPE Labs is taking on challenges in machine learning such
        as low efficency, the lack of data privacy, and breaking down data silos
        and building data collaboration. HPE Labes views data bias as a critical
        issue to be faced with current machine learning models. Swarm Learning
        helps reduce the impact of environmental and population data bias.
      </Paragraph>
    </Box>
  </Stack>
);

export { SwarmImage };
