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
      {accuracy && <Text size={textSize}> Accuracy: {accuracy} </Text>}
      {time && <Text size={textSize}> Time To Learn: {time} </Text>}
      {utilization && <Text size={textSize}> Utilization: {utilization} </Text>}
    </Box>
  </Box>
);

export { Cube };
