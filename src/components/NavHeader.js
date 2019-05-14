import React from 'react';
import { Anchor, Box, Text, ResponsiveContext } from 'grommet';
import { HpeLabs, Nodes } from 'grommet-icons';

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
          <Anchor
            href="/"
            icon={<Nodes />}
            color="white"
            label={
              size !== 'xsmall' &&
              size !== 'small' && <Text size="medium">Learning</Text>
            }
          />
          <Anchor
            href="/"
            icon={<Nodes />}
            color="white"
            label={
              size !== 'xsmall' &&
              size !== 'small' && <Text size="medium">Inferencing</Text>
            }
          />
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };
