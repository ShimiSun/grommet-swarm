import React from 'react';

import { Box, Diagram, Stack } from 'grommet';

import { Cube } from '../Cube';
// import { Nodes } from 'grommet-icons';

import { edges as edge } from '../../data/edges';

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

const nodes = [1, 2, 3, 4];

class Learning extends React.Component {
  state = {
    draw: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { draw } = this.state;
      this.setState({
        draw: draw ? false : true,
      });
    }, 5000);
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
      <Stack>
        <Box>
          <Box alignSelf="center" margin={{ bottom: 'large' }}>
            <Cube
              id="1"
              accuracy={edge[0].accuracy}
              name={edge[0].name}
              time={edge[0].time}
              utilization={edge[0].utilization}
            />
          </Box>
          <Box
            id="4"
            margin={{ bottom: 'xlarge', top: 'large' }}
            align="center"
          >
            {/* <Nodes size="xlarge" color="accent-3" /> */}
          </Box>
          <Box direction="row" gap="xlarge">
            {[2, 3].map(id => (
              <Cube
                accuracy={edge[id - 1].accuracy}
                id={id}
                key={edge[id - 1].name}
                name={edge[id - 1].name}
                time={edge[id - 1].time}
                utilization={edge[id - 1].utilization}
              />
            ))}
          </Box>
        </Box>
        <Diagram connections={connections} />
      </Stack>
    );
  }
}

export { Learning };
