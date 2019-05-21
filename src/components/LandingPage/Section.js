import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, Heading, Paragraph, Text } from 'grommet';
import RoutedButton from '../RoutedButton';

const Section = ({ children, desc, goto, path, title, width, ...rest }) => (
  <Box align="center" flex={false} {...rest}>
    <Box width={width} align="center">
      <Heading color="#01a982" level={1} size="large">
        {title}
      </Heading>
      <Paragraph size="large" textAlign="center">
        {desc}
      </Paragraph>
      <Box flex={false} margin="small">
        {children}
      </Box>
      <RoutedButton
        margin={{ vertical: 'large' }}
        primary
        label={
          <Text size="xxlarge" weight="bold">
            {goto}
          </Text>
        }
        path={path}
      />
    </Box>
  </Box>
);

Section.propTypes = {
  desc: PropTypes.string.isRequired,
  goto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Section.defaultProps = {
  width: 'xlarge',
};

export { Section };
