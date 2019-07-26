import React, { Component } from 'react';

import { Box, ResponsiveContext, Text } from 'grommet';
import { Inherit } from 'grommet-icons';
import { Cube, SwarmHeading } from '../components';
import { SwarmChart } from '../components/Learn';

import { edges, swarmEdge } from '../data/edges';
import { central, central2 } from '../data/central';

const LearnCube = ({ edge, index, textSize }) => (
  <Cube
    accuracy={edge.accuracy}
    align="end"
    direction="column"
    iconSize="large"
    id={index}
    name={edge.name}
    textSize={textSize}
    time={edge.time}
    utilization={edge.utilization}
  />
);

const legendData = [['Avg Precision', 'grommet'], ['Avg Loss', 'accent-1']];

const Legend = () => (
  <Box
    direction="row"
    gap="medium"
    alignSelf="center"
    margin={{ top: 'large' }}
  >
    {/* [name, background color] */}
    {legendData.map(item => (
      <Box gap="small" direction="row" key={item[0]}>
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

    const values = [values1, values2];

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box alignSelf="center">
            <Box width="xlarge" align="center">
              <SwarmHeading title="Swarm Learning" />
            </Box>
            <Box
              direction={size === 'small' ? 'column' : 'row'}
              justify="between"
              align="center"
              gap={size === 'small' ? 'xlarge' : undefined}
            >
              <Box>
                {edges.map((edge, index) => (
                  <Box
                    alignSelf="center"
                    direction="row"
                    gap="medium"
                    pad={{ vertical: 'small' }}
                    key={edge.name}
                  >
                    <LearnCube
                      edge={edge}
                      index={index}
                      textSize={size === 'small' ? 'xsmall' : 'small'}
                    />
                    <SwarmChart values={values} />
                  </Box>
                ))}
                <Legend />
              </Box>
              <Box alignSelf="center">
                <Box
                  alignSelf="center"
                  width="medium"
                  pad={{ bottom: 'large' }}
                >
                  <Text weight="bold" textAlign="center" size="large">
                    Swarm learns from all the data centers to recognize content
                    to provide a result at a specified accuracy threshold.
                  </Text>
                </Box>
                <Box direction="row" gap="small" alignSelf="center">
                  <Inherit color="accent-3" size="large" />
                  <Text
                    weight={600}
                    align="start"
                    alignSelf="center"
                    color="accent-3"
                  >
                    {swarmEdge.name}
                  </Text>
                </Box>
                <SwarmChart values={values} color="accent-3" />
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export { Learn };
