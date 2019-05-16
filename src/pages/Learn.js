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
        <Box direction="row" alignSelf="center">
          <Box>
            {edges.map((edge, index) => (
              <Box
                alignSelf="center"
                direction="row"
                gap="medium"
                pad="large"
                key={edge.name}
              >
                {learnCube(edge, index)}
                <SwarmChart values={[values1, values2]} />
              </Box>
            ))}
            <Box color="grommet" pad="small" />
          </Box>
          <Box alignSelf="center" align="center">
            <Box direction="row" gap="small">
              <Inherit color="accent-3" size="large" />
              <Text weight={600} color="accent-3" alignSelf="center">
                Swarm Precision: {swarmEdge.accuracy}
              </Text>
            </Box>
            <Box gap="medium" direction="row" alignSelf="center">
              <Box align="end" alignSelf="center">
                <Text> {swarmEdge.name} </Text>
                <Text size="small"> Accuracy: {swarmEdge.accuracy} </Text>
                <Text size="small"> Time to Learn: {swarmEdge.time} </Text>
              </Box>
              <SwarmChart values={[values1, values2]} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export { Learn };
