import React from 'react';
import { Anchor, Box, Text, ResponsiveContext } from 'grommet';
import { HpeLabs } from 'grommet-icons';

import NavHeaderButton from './NavHeaderButton';

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
          <NavHeaderButton
            active={false}
            icon
            path="/learn"
            label={<Text weight={600}>Learning</Text>}
            style={{ padding: 0 }}
          />
          <NavHeaderButton
            active={false}
            icon
            path="/inference"
            label={<Text weight={600}>Inferencing</Text>}
            style={{ padding: 0 }}
          />
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };
