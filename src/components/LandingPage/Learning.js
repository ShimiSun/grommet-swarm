import React from 'react';

import { Box, Diagram, Stack, Text } from 'grommet';
import { Inherit } from 'grommet-icons';

import { Cube } from '../Cube';
// import { Inherit } from 'grommet-icons';

import { edges as edge } from '../../data/edges';
import { descriptiveLearning } from '../../data/descriptiveLearning';

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: color || 'grommet',
  thickness: 'xsmall',
  round: true,
  type: 'direct',
  ...rest,
});

const LearningCube = (node, index) => (
  <Cube
    // accuracy={node.accuracy}
    id={index}
    key={node.name}
    name={node.name}
    // time={node.time}
    // utilization={node.utilization}
    textSize="xlarge"
    // weight="bold"
  />
);

class Learning extends React.Component {
  state = {
    draw: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { draw } = this.state;
      this.setState({
        draw: !draw,
      });
    }, 3000);
  }

  render() {
    const { draw } = this.state;
    const connections = [];

    if (draw) {
      connections.push(connection('4', '1', { anchor: 'vertical' }));
      connections.push(connection('4', '2', { anchor: 'vertical' }));
      connections.push(connection('4', '3', { anchor: 'vertical' }));
    }

    return (
      <Box direction="row" align="center" width="xlarge" gap="medium">
        <Box pad="large">
          <Stack>
            <Box>
              <Box alignSelf="center" margin={{ bottom: 'large' }}>
                {LearningCube(edge[0], '1')}
                <Box pad="small" />
                <Box
                  id="4"
                  width="xsmall"
                  margin={{ bottom: 'large', top: 'xlarge' }}
                />
              </Box>
              <Box direction="row" gap="xlarge">
                {[2, 3].map(id => LearningCube(edge[id - 1], id))}
              </Box>
            </Box>
            <Diagram connections={connections} />
          </Stack>
        </Box>
        <Box gap="small" alignSelf="center" align="start">
          <Box direction="row">
            <Inherit size="xlarge" color="accent-3" />
            <Box alignSelf="center" pad={{ left: 'small' }}>
              <Text
                color="accent-3"
                size="xxlarge"
                weight="bold"
                alignSelf="center"
              >
                Swarm Advantages
              </Text>
              {/* <Text weight="bold" color="accent-3" size="small">
                  Accuracy: 80%
                </Text>
                <Text weight="bold" color="accent-3" size="small">
                  Time to Learn: 8.4s
                </Text> */}
            </Box>
          </Box>
          <Box direction="row" gap="small">
            <Box pad="large" />
            <Box gap="xsmall">
              {descriptiveLearning.map(desc => (
                <Text weight="bold" size="xlarge" key={desc}>
                  {desc}
                </Text>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export { Learning };
