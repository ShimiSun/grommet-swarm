import React from 'react';

import { Box, Diagram, Stack } from 'grommet';

import { Cube } from '../Cube';
// import { Inherit } from 'grommet-icons';

import { edges as edge } from '../../data/edges';
// import { descriptiveLearning } from '../../data/descriptiveLearning';

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
    accuracy={node.accuracy}
    id={index}
    key={node.name}
    name={node.name}
    time={node.time}
    utilization={node.utilization}
    weight="bold"
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
      <Box direction="row">
        {/* <Box gap="small">
          <Text size="small"> {descriptiveLearning[0]} </Text>
          <Text size="small"> {descriptiveLearning[1]} </Text>
        </Box> */}
        <Stack>
          <Box margin={{ left: 'xlarge' }}>
            <Box alignSelf="center" margin={{ bottom: 'large' }}>
              {LearningCube(edge[0], '1')}
              <Box />
              <Box
                id="4"
                width="xsmall"
                margin={{ bottom: 'large', top: 'xlarge' }}
              />
              {/* <Inherit size="xlarge" color="accent-3" /> */}
            </Box>
            <Box direction="row" gap="xlarge">
              {[2, 3].map(id => LearningCube(edge[id - 1], id))}
            </Box>
          </Box>
          <Diagram connections={connections} />
        </Stack>
      </Box>
    );
  }
}

export { Learning };
