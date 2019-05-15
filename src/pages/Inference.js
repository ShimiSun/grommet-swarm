import React, { Component } from 'react';

import { Box, Button, Image, Text, ThemeContext } from 'grommet';
import { SwarmHeading } from '../components';

import { imagesList } from '../data/imagesList';
import { InferenceInfoEmpty } from '../components/Inference/InferenceInfoEmpty';
import { InferenceInfo } from '../components/Inference/InferenceInfo';

const imageCursor = {
  image: {
    extend: 'cursor: pointer;',
  },
};

class Inference extends Component {
  state = {
    isSelected: false,
    selectedImage: undefined,
  };

  render() {
    const { isSelected, selectedImage } = this.state;

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
                border={
                  image === selectedImage && !isSelected
                    ? { color: 'accent-3', size: '8px' }
                    : undefined
                }
              >
                <ThemeContext.Extend value={imageCursor}>
                  <Image
                    fit={
                      image === selectedImage && !isSelected
                        ? 'cover'
                        : 'contain'
                    }
                    src={image}
                    onClick={() =>
                      this.setState({
                        selectedImage: image,
                      })
                    }
                  />
                </ThemeContext.Extend>
              </Box>
            ))}
          </Box>
          <Button
            primary
            margin="small"
            label={
              <Box pad={{ horizontal: 'medium' }}>
                <Text size="xlarge" weight="bold">
                  {isSelected ? 'DO IT AGAIN?' : 'GO!'}
                </Text>
              </Box>
            }
            onClick={() =>
              this.setState({
                isSelected: !isSelected,
              })
            }
          />
          {isSelected ? <InferenceInfo /> : <InferenceInfoEmpty />}
        </Box>
      </Box>
    );
  }
}

export { Inference };
