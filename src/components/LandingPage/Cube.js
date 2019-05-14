import React from 'react';
import { Cube as CubeIcon } from 'grommet-icons';
import { Box, Text } from 'grommet';

const Cube = ({ accuracy, id, name, time, utilization }) => (
  <Box
    align="center"
    gap="small"
    id={id}
    direction="row"
    key={name}
    pad="small"
    border={{ color: 'grommet', size: 'medium' }}
    round
  >
    <CubeIcon size="xlarge" color="grommet" />
    <Box>
      <Text weight="bold"> {name}</Text>
      <Text> Accuracy: {accuracy} </Text>
      <Text> Time To Learn: {time} </Text>
      <Text> Utilization: {utilization} </Text>
    </Box>
  </Box>
);

export { Cube };
