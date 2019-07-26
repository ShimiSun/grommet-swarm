import React, { Component } from 'react';

import {
  Box,
  Button,
  Image,
  ResponsiveContext,
  Text,
  ThemeContext,
} from 'grommet';
import { Grommet, Refresh } from 'grommet-icons';

import { SwarmHeading } from '../components';
import { Results, PrepResult } from '../components/Inference';
import { imagesListOriginal, randomNoRepeats } from '../data/imagesList';

const imageCursor = {
  image: {
    extend: 'cursor: pointer;',
  },
};

const SelectionIndicator = (image, selectedImage) => (
  <Box alignSelf="center" pad={{ top: 'xsmall' }}>
    <Grommet
      size="customSize"
      color={image === selectedImage ? 'accent-3' : 'white'}
    />
  </Box>
);

const StartInferencingLabel = () => (
  <Box pad={{ horizontal: 'medium' }}>
    <Text size="medium" weight="bold">
      START INFERENCING
    </Text>
  </Box>
);
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
      <ResponsiveContext.Consumer>
        {size => (
          <Box alignSelf="center" align="center">
            <Box width="xlarge" align="center" gap="small">
              <SwarmHeading
                title="Swarm Inferencing"
                desc="Select an image and click 'SWARM!' to begin inferencing"
              />
              <Box align="end" fill>
                <Button
                  icon={<Refresh color="brand" size="customRefreshSize" />}
                  plain
                  onClick={() => {
                    const list = randomNoRepeats(size);
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
                    <SelectionIndicator
                      image={image}
                      selectedImage={selectedImage}
                    />
                  </Box>
                ))}
              </Box>
              <Button
                primary
                margin="small"
                label={<StartInferencingLabel />}
                onClick={() =>
                  this.setState({
                    isSelected: true,
                  })
                }
              />
              {isSelected ? <Results /> : <PrepResult />}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export { Inference };