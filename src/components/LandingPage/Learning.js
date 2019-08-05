import React from 'react';

import { Box, Diagram, ResponsiveContext, Stack, Text } from 'grommet';
import { Inherit } from 'grommet-icons';

import { Cube } from '../Cube';

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

const LearningCube = ({ node, index, iconSize }) => (
  <Cube
    accuracy={node.accuracy}
    id={index}
    name={node.name}
    iconSize={iconSize}
    textSize="medium"
    time={node.time}
    utilization={node.utilization}
    weight="bold"
  />
);

class Learning extends React.Component {
  state = {
    draw: true,
    isLoaded: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { draw } = this.state;
      this.setState({
        draw: !draw,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 1000);
  }

  render() {
    const { draw, isLoaded } = this.state;
    const connections = [];

    if (draw) {
      connections.push(connection('4', '1', { anchor: 'vertical' }));
      connections.push(connection('4', '2', { anchor: 'vertical' }));
      connections.push(connection('4', '3', { anchor: 'vertical' }));
    }

    const getResponsiveSize = size => {
      return size === 'small' ? 'large' : 'xlarge';
    };

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            direction={size === 'small' ? 'column' : 'row'}
            align="center"
            width="xlarge"
            gap="medium"
          >
            <Box pad="large">
              <Stack>
                <Box>
                  <Box alignSelf="center" margin={{ bottom: 'large' }}>
                    <LearningCube
                      node={edge[0]}
                      index={1}
                      iconSize={getResponsiveSize(size)}
                    />
                    <Box pad="small" />
                    <Box
                      id="4"
                      width="xsmall"
                      margin={{ bottom: 'large', top: 'xlarge' }}
                    />
                  </Box>
                  <Box direction="row" gap="xlarge">
                    {[2, 3].map(id => (
                      <LearningCube
                        key={id}
                        node={edge[id - 1]}
                        index={id}
                        iconSize={getResponsiveSize(size)}
                      />
                    ))}
                  </Box>
                </Box>
                {isLoaded && <Diagram connections={connections} />}
              </Stack>
            </Box>
            <Box gap="small" alignSelf="center" align="start">
              <Box direction="row">
                <Inherit size={getResponsiveSize(size)} color="accent-3" />
                <Box alignSelf="center" pad={{ left: 'small' }}>
                  <Text
                    color="accent-3"
                    size={getResponsiveSize(size)}
                    weight="bold"
                    alignSelf="center"
                  >
                    Swarm Advantages
                  </Text>
                </Box>
              </Box>
              <Box direction="row" gap="small">
                <Box pad="large" />
                <Box gap="xsmall">
                  {descriptiveLearning.map(desc => (
                    <Text
                      weight="bold"
                      size={getResponsiveSize(size)}
                      key={desc}
                    >
                      {desc}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export { Learning };
