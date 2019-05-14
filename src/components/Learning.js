import React from 'react';

import { Box, Diagram, Stack } from 'grommet';

import { Cube } from './Cube';
// import { Nodes } from 'grommet-icons';

import { edge } from '../data/edge';

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
  state = { topRow: nodes.slice(0, 1) };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { topRow } = this.state;
      this.setState({
        topRow: nodes.slice(
          0,
          topRow.length < nodes.length ? topRow.length + 1 : 1,
        ),
      });
    }, 1200);
  }

  render() {
    const { topRow } = this.state;
    const connections = [];
    if (topRow.length >= 1) {
      connections.push(connection('1', '4', { anchor: 'vertical' }));
    }
    if (topRow.length >= 2) {
      connections.push(connection('4', '3', { anchor: 'vertical' }));
    }
    if (topRow.length >= 3) {
      connections.push(connection('4', '2', { anchor: 'vertical' }));
    }
    console.log(edge[0]);
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
          <Box id="4" margin={{ bottom: 'xlarge' }} align="center">
            {/* <Nodes size="xlarge" color="accent-3" /> */}
          </Box>
          <Box direction="row" gap="large">
            {[2, 3].map(id => (
              <Cube
                accuracy={edge[id - 1].accuracy}
                id={id}
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
