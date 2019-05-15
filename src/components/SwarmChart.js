import React, { Component } from 'react';

import { Box, Chart, calcs, Stack, Text } from 'grommet';

class SwarmChart extends Component {
  state = { yAxis: [], xAxis: [] };

  componentDidMount() {
    const { values } = this.props;
    const { axis, bounds } = calcs(values, { coarseness: 5, steps: [3, 3] });
    const xAxis = axis[0];
    const yAxis = axis[1];
    this.setState({ bounds, yAxis, xAxis });
  }

  render() {
    const { bounds, yAxis, xAxis } = this.state;
    const { values } = this.props;
    const chartProps = {
      size: { width: 'large', height: 'small' },
      bounds,
      values,
      overflow: true,
    };
    return (
      <Box align="center" pad="large" size="xlarge">
        <Box
          fill
          direction="row"
          justify="between"
          width="medium"
          margin={{ vertical: 'small' }}
        >
          {xAxis.map(x => (
            <Text key={x}>{x}</Text>
          ))}
        </Box>
        <Stack guidingChild="last">
          <Box fill justify="between">
            {yAxis.map((y, index) => {
              const first = index === 0;
              const last = index === yAxis.length - 1 && !first;
              let align;
              if (first) {
                align = 'start';
              } else if (last) {
                align = 'end';
              } else {
                align = 'center';
              }
              return (
                <Box key={y} direction="row" align={align}>
                  <Box pad={{ horizontal: 'small' }} margin="horizontal">
                    <Text>{y}</Text>
                  </Box>
                  {/* <Box border="top" flex /> */}
                </Box>
              );
            })}
          </Box>
          <Chart
            {...chartProps}
            type="line"
            color={{ color: 'accent-1', opacity: 'medium' }}
            thickness="hair"
          />
        </Stack>
      </Box>
    );
  }
}

export { SwarmChart };
