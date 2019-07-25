import React, { Component } from 'react';

import { Box, Button, Image, Text, ThemeContext } from 'grommet';
import { Grommet, Refresh } from 'grommet-icons';

import { SwarmHeading } from '../components';
import { imagesListOriginal, randomNoRepeats } from '../data/imagesList';
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
    images: imagesListOriginal,
  };

  componentDidMount() {
    const { images } = this.state;
    this.setState({ selectedImage: images[0] });
  }

  render() {
    const { images, isSelected, selectedImage } = this.state;

    return (
      <Box alignSelf="center" align="center">
        <Box width="xlarge" align="center" gap="small">
          <SwarmHeading
            title="Swarm Inferencing"
            desc="Select an image and click 'SWARM!' to begin inferencing"
          />
          <Box align="end" fill>
            <Button
              icon={<Refresh color="brand" size="customRefreshSize" />}
              style={{ padding: '0' }}
              plain
              onClick={() => {
                const list = randomNoRepeats();
                this.setState({
                  images: list,
                  selectedImage: list[0],
                });
              }}
            />
          </Box>
          <Box direction="row">
            {images.map(image => (
              <Box height="xsmall" key={image}>
                <ThemeContext.Extend value={imageCursor}>
                  <Image
                    fit="contain"
                    src={image}
                    onClick={() =>
                      this.setState({
                        selectedImage: image,
                        isSelected: false,
                      })
                    }
                  />
                </ThemeContext.Extend>
                <Box alignSelf="center" pad={{ top: 'xsmall' }}>
                  <Grommet
                    size="customSize"
                    color={image === selectedImage ? 'accent-3' : 'white'}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            primary
            margin="small"
            label={
              <Box pad={{ horizontal: 'medium' }}>
                <Text size="medium" weight="bold">
                  START INFERENCING
                </Text>
              </Box>
            }
            onClick={() =>
              this.setState({
                isSelected: true,
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
