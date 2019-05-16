import React from 'react';
import { Cube as CubeIcon } from 'grommet-icons';
import { Box, Text } from 'grommet';

const Cube = ({
  accuracy,
  align,
  direction,
  iconSize,
  id,
  name,
  textSize,
  time,
  utilization,
  weight,
}) => (
  <Box
    align={align || 'center'}
    gap="small"
    direction={direction || 'row'}
    key={name}
    alignSelf="center"
  >
    <CubeIcon id={id} size={iconSize || 'xlarge'} color="grommet" />
    <Box align={align}>
      <Text size={textSize} weight={weight}>
        {name}
      </Text>
      <Text size={textSize}> Accuracy: {accuracy} </Text>
      <Text size={textSize}> Time To Learn: {time} </Text>
      <Text size={textSize}> Utilization: {utilization} </Text>
    </Box>
  </Box>
);

export { Cube };
