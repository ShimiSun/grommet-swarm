import React from 'react';
import { Anchor, Box, Text, ResponsiveContext } from 'grommet';
import { HpeLabs } from 'grommet-icons';

import RoutedButton from './RoutedButton';

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        width="xlarge"
        direction="row"
        align="center"
        justify="between"
        gap="medium"
        pad="medium"
        background="#425563"
      >
        <Anchor
          href="/"
          icon={<HpeLabs color="#01a982" />}
          color="white"
          label={
            size !== 'xsmall' &&
            size !== 'small' && <Text size="medium">Hewlett Packard Labs</Text>
          }
        />
        <Box direction="row" gap="large">
          <RoutedButton
            active={false}
            hoverIndicator
            icon
            path="/learn"
            label="Learning"
          />
          <RoutedButton
            active={false}
            hoverIndicator
            icon
            path="/inference"
            label="Inferencing"
          />
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };
