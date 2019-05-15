import React, { Component } from 'react';

import { Box, Button, Image, Text, ThemeContext } from 'grommet';
import { SwarmHeading } from '../components';

import { imagesList } from '../data/imagesList';
import { InferenceInfoEmpty, InferenceInfo } from '../components/Inference';

const imageCursor = {
  image: {
    extend: 'cursor: pointer;',
  },
};

class Inference extends Component {
  state = {
    clicked: false,
    clickedImage: undefined,
  };

  render() {
    const { clicked, clickedImage } = this.state;

    return (
      <Box alignSelf="center" align="center">
        <Box width="xlarge" align="center">
          <SwarmHeading
            title="Swarm Inferencing"
            desc="Select an image and click 'GO!' to begin inferencing"
          />
          <Box direction="row">
            {imagesList.map(image => (
              <Box
                height="small"
                width="small"
                key={image}
                border={image === clickedImage && !clicked ? 'all' : undefined}
              >
                <ThemeContext.Extend value={imageCursor}>
                  <Image
                    fit="contain"
                    src={image}
                    onClick={() =>
                      this.setState({
                        clickedImage: image,
                      })
                    }
                  />
                </ThemeContext.Extend>
              </Box>
            ))}
          </Box>
          <Button
            primary
            label={
              <Box pad={{ horizontal: 'medium' }}>
                <Text size="xlarge" weight="bold">
                  {clicked ? 'DO IT AGAIN?' : 'GO!'}
                </Text>
              </Box>
            }
            onClick={() =>
              this.setState({
                clicked: !clicked,
              })
            }
          />
          {clicked ? <InferenceInfo /> : <InferenceInfoEmpty />}
        </Box>
      </Box>
    );
  }
}

export { Inference };
