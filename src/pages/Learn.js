import React, { Component } from 'react';

import { Box, Text } from 'grommet';
import { Inherit } from 'grommet-icons';
import { Cube } from '../components/Cube';
import { SwarmChart } from '../components/SwarmChart';

import { edges, swarmEdge } from '../data/edges';
import { central } from '../data/central';

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
    const values = [];
    central.map(point =>
      values.push({ value: [point.time, point.moving_average] }),
    );

    console.log(values);

    return (
      <Box alignSelf="center">
        <Box direction="row" alignSelf="center">
          <Box>
            {edges.map((edge, index) => (
              <Box
                alignSelf="center"
                direction="row"
                pad="medium"
                key={edge.name}
              >
                {learnCube(edge, index)}
                {/* <SwarmChart values={values} /> */}
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
            <Box direction="row" alignSelf="center">
              <Box align="end" alignSelf="center">
                <Text> {swarmEdge.name} </Text>
                <Text size="small"> Accuracy: {swarmEdge.accuracy} </Text>
                <Text size="small"> Time to Learn: {swarmEdge.time} </Text>
              </Box>
              <SwarmChart values={values} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export { Learn };
