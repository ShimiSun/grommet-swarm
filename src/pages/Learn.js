import React, { Component } from 'react';

import { Box, Text } from 'grommet';
import { Inherit } from 'grommet-icons';
import { Cube } from '../components/Cube';
import { SwarmChart } from '../components/SwarmChart';
import { SwarmHeading } from '../components';

import { edges, swarmEdge } from '../data/edges';
import { central, central2 } from '../data/central';

const learnCube = (edge, index) => (
  <Cube
    accuracy={edge.accuracy}
    align="end"
    direction="column"
    iconSize="large"
    id={index}
    name={edge.name}
    textSize="small"
    time={edge.time}
    utilization={edge.utilization}
  />
);

const legend = () => (
  <Box
    direction="row"
    gap="medium"
    alignSelf="center"
    margin={{ top: 'large' }}
  >
    {/* [name, background color] */}
    {[['Avg Precision', 'grommet'], ['Avg Loss', 'accent-1']].map(item => (
      <Box gap="small" direction="row">
        <Box
          background={item[1]}
          pad={{ vertical: 'xxsmall', horizontal: 'small' }}
          alignSelf="center"
        />
        <Text size="xsmall">{item[0]}</Text>
      </Box>
    ))}
  </Box>
);

class Learn extends Component {
  state = {};

  render() {
    const values1 = [];
    central.map(point =>
      values1.push({ value: [point.time, point.moving_average] }),
    );

    const values2 = [];
    central2.map(point =>
      values2.push({ value: [point.time, point.moving_average] }),
    );

    return (
      <Box alignSelf="center">
        <Box width="xlarge" align="center">
          <SwarmHeading title="Swarm Learning" />
        </Box>
        <Box direction="row" justify="between" align="center">
          <Box>
            {edges.map((edge, index) => (
              <Box
                alignSelf="center"
                direction="row"
                gap="medium"
                pad={{ vertical: 'large' }}
                key={edge.name}
              >
                {learnCube(edge, index)}
                <SwarmChart values={[values1, values2]} />
              </Box>
            ))}
            {legend()}
          </Box>
          <Box alignSelf="center" align="center">
            <Box direction="row" gap="medium">
              <Box alignSelf="center">
                <Inherit color="accent-3" size="large" />
              </Box>
              <Box align="start">
                <Text weight={600} color="accent-3">
                  {swarmEdge.name}
                </Text>
                <Text weight={600} color="accent-3">
                  Swarm Precision: {swarmEdge.accuracy}
                </Text>
                <Text weight={600} color="accent-3">
                  Time to Learn: {swarmEdge.time}
                </Text>
              </Box>
            </Box>
            <SwarmChart values={[values1, values2]} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export { Learn };
