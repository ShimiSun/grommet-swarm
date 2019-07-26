import React, { Component } from 'react';

import { Box, Chart, calcs, Stack, Text } from 'grommet';

class SwarmChart extends Component {
  state = { yAxis: [], xAxis: [] };

  componentDidMount() {
    const { values } = this.props;
    const { axis, bounds } = calcs(values[0], { coarseness: 5, steps: [3, 3] });
    const xAxis = axis[0];
    const yAxis = axis[1];
    this.setState({ bounds, yAxis, xAxis });
  }

  render() {
    const { bounds, yAxis, xAxis } = this.state;
    const { color, values } = this.props;
    const chartProps = {
      size: { width: 'medium', height: 'xsmall' },
      bounds,
      overflow: false,
      thickness: 'xsmall',
      round: true,
      type: 'line',
    };
    return (
      <Box align="center" pad={{ vertical: 'small' }} border="bottom">
        <Box
          fill
          direction="row"
          justify="between"
          width="medium"
          margin={{ vertical: 'small' }}
          pad={{ horizontal: 'large' }}
        >
          {xAxis.map(x => (
            <Text size="small" key={x}>
              {x}
            </Text>
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
                  <Box>
                    <Text size="small">
                      {parseFloat(y)
                        .toFixed(1)
                        .toString()}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box pad={{ left: 'large' }}>
            <Chart
              {...chartProps}
              values={values[0]}
              color={{ color: color || 'grommet' }}
            />
          </Box>
          <Box pad={{ left: 'large' }}>
            <Chart
              {...chartProps}
              values={values[1]}
              color={{ color: 'accent-1' }}
            />
          </Box>
        </Stack>
      </Box>
    );
  }
}

export { SwarmChart };
