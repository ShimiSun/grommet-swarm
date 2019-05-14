import React from 'react';

import { Heading, Paragraph } from 'grommet';

export const SwarmHeading = ({ desc, title }) => (
  <React.Fragment>
    <Heading color="#01a982" level={2} size="xlarge">
      {title}
    </Heading>
    <Paragraph size="medium" textAlign="center">
      {desc}
    </Paragraph>
  </React.Fragment>
);
