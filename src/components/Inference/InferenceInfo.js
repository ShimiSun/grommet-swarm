import React from 'react';

import { Box, Meter, ResponsiveContext, Text } from 'grommet';
import { Cube, Inherit } from 'grommet-icons';

import {
  inferenceResults,
  inferenceResultsSwarm,
} from '../../data/inferenceResults';

const meterText = (value, item, color) => (
  <Box direction="row">
    <Text size="small" color={color || 'grommet'}>
      {value}
    </Text>
    <Text size="small" color={color || 'grommet'}>
      % {item}
    </Text>
  </Box>
);

const meter = (result, color, size, thickness) => (
  <Box gap="xsmall">
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        type="bar"
        values={[{ value: result.car, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      {meterText(result.car, 'Car', color)}
    </Box>
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        type="bar"
        values={[{ value: result.truck, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      {meterText(result.truck, 'Truck', color)}
    </Box>
    <Box direction="row" align="center" gap="xsmall">
      <Meter
        type="bar"
        values={[{ value: result.ship, color }]}
        size={size || 'xsmall'}
        thickness={thickness || 'small'}
      />
      {meterText(result.ship, 'Ship', color)}
    </Box>
  </Box>
);

const getResponsiveSize = size => {
  return size === 'small' ? 'large' : 'xlarge';
};

export const cubes = (results, size) =>
  results.map(result => (
    <Box key={result.name}>
      <Box gap="medium" direction="row" align="center">
        <Cube color="grommet" size={getResponsiveSize(size)} />
        <Box gap="small">
          <Text size="small">{result.name}</Text>
          {meter(result)}
        </Box>
      </Box>
    </Box>
  ));

export const InferenceInfo = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction={size === 'small' ? 'column' : 'row'}
        margin="medium"
        gap={size === 'small' ? 'xlarge' : 'large'}
        align="center"
      >
        <Box gap="medium">{cubes(inferenceResults, size)}</Box>
        <Box
          align="center"
          pad={{ horizontal: 'xlarge' }}
          direction="row"
          gap="medium"
        >
          <Inherit color="accent-3" size={getResponsiveSize(size)} />
          <Box gap="small">
            <Box gap="xsmall">
              <Text size="medium" weight="bold">
                {inferenceResultsSwarm[0].name}
              </Text>
              {meter(inferenceResultsSwarm[0], 'accent-3', 'small', 'medium')}
            </Box>
            <Text size="xsmall">Time to Learn: 8.4 seconds</Text>
          </Box>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
