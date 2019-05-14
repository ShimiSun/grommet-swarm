import React, { Component } from 'react';

import { Box } from 'grommet';

import { Cube } from '../components/Cube';
// import { SwarmChart } from '../components/SwarmChart';

import { edges } from '../data/edges';

class Learn extends Component {
  render() {
    console.log(edges);
    return edges.map((edge, index) => (
      <Box alignSelf="center" direction="row" pad="medium">
        <Cube
          accuracy={edge.accuracy}
          direction="column"
          id={index}
          key={edge.name}
          name={edge.name}
          size="large"
          time={edge.time}
          utilization={edge.utilization}
        />
      </Box>
    ));
  }
}

export { Learn };
