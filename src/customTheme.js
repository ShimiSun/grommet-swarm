import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';

const colors = {
  grommet: '#9060EB',
};

export const customTheme = deepMerge(hpe, {
  global: {
    colors,
  },
  button: {
    border: {
      radius: '24px',
    },
  },
  heading: {
    extend: `margin-bottom: 0; margin-top: 24px;`,
  },
  icon: {
    size: {
      xxlarge: '280px',
    },
  },
  paragraph: {
    extend: () => `margin-top: 0;`,
    xxlarge: {
      size: '28px',
    },
  },
});
