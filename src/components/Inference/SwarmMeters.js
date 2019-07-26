import React from 'react';
import { Box, Meter, Text } from 'grommet';

export const SwarmMeters = ({ result, color, size, thickness }) => (
  <Box gap="xsmall">
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        values={[{ value: result.car, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      <MeterText value={result.car} label="Car" color={color} />
    </Box>
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        values={[{ value: result.truck, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      <MeterText value={result.truck} label="Truck" color={color} />
    </Box>
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        values={[{ value: result.ship, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      <MeterText value={result.ship} label="Ship" color={color} />
    </Box>
  </Box>
);

const MeterText = ({ value, label, color }) => (
  <Box direction="row">
    <Text size="small" color={color || 'grommet'}>
      {value}
    </Text>
    <Text size="small" color={color || 'grommet'}>
      % {label}
    </Text>
  </Box>
);
