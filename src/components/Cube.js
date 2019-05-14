import React from 'react';
import { Cube as CubeIcon } from 'grommet-icons';
import { Box, Text } from 'grommet';

const Cube = ({ accuracy, direction, id, name, size, time, utilization }) => (
  <Box
    align="center"
    gap="small"
    direction={direction || 'row'}
    key={name}
    pad="small"
    round
  >
    <CubeIcon id={id} size={size || 'xlarge'} color="grommet" />
    <Box>
      <Text weight="bold"> {name}</Text>
      <Text> Accuracy: {accuracy} </Text>
      <Text> Time To Learn: {time} </Text>
      <Text> Utilization: {utilization} </Text>
    </Box>
  </Box>
);

export { Cube };
