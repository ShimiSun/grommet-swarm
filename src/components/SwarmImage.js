import React from 'react';

import { Box, Image, Stack, Text, Paragraph } from 'grommet';

const SwarmImage = () => (
  <Stack anchor="center">
    <Box align="center" height="large">
      <Image fit="contain" src="assets/james-wainscoat-521741-unsplash.jpg" />
    </Box>
    <Box
      round="xlarge"
      overflow="hidden"
      align="center"
      margin="small"
      height="large"
      gap="xlarge"
    >
      <Text color="white" margin="xlarge" size="200px" weight="bold">
        SWARM
      </Text>
      <Box pad={{ vertical: 'small' }} />
      <Paragraph textAlign="center" color="white">
        HPE Swarm Learning and this is where more paragraph text is going, greg
        needs to send me the full text after he figures it out with Parsad.
        thanks, Shimi
      </Paragraph>
    </Box>
  </Stack>
);

export { SwarmImage };
