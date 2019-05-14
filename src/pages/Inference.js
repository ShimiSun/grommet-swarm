import React, { Component } from 'react';

import { Box, Button, Image, Text } from 'grommet';
import { SwarmHeading } from '../components';

import { imagesList } from '../data/imagesList';

class Inference extends Component {
  state = {};

  render() {
    console.log('inferences!');
    return (
      <Box alignSelf="center" align="center" flex={false}>
        <Box width="xlarge" align="center">
          <SwarmHeading
            title="Swarm Inferencing"
            desc="Select an image and click 'GO!' to begin inferencing"
          />
          <Box direction="row" size="small" flex={false} gap="none">
            {imagesList.map(image => (
              <Box size="small" height="small" key={image}>
                <Image fit="contain" src={image} />
              </Box>
            ))}
          </Box>
          <Button
            primary
            label={
              <Box pad={{ horizontal: 'medium' }}>
                <Text size="xlarge" weight="bold">
                  GO!
                </Text>
              </Box>
            }
          />
        </Box>
      </Box>
    );
  }
}

export { Inference };
