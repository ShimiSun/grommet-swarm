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
    extend: `padding: 0 36px`,
  },
  chart: {
    extend:
      '@keyframes example { to { stroke-dashoffset: 0; } } path { stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 6s linear forwards; }',
  },
  diagram: {
    extend:
      '@keyframes example { to { stroke-dashoffset: 0; } } path { stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 3s linear forwards; }',
  },
  heading: {
    extend: `margin-bottom: 0; margin-top: 24px;`,
  },
  icon: {
    size: {
      customSize: '14px',
      customRefreshSize: '18px',
      xxlarge: '280px',
    },
  },
  meter: {
    color: '#9060EB',
    extend:
      '@keyframes example { to { stroke-dashoffset: 0; } } path { stroke-dasharray: 500; stroke-dashoffset: 500; animation: example 5s linear forwards; }',
  },
  paragraph: {
    extend: () => `margin-top: 0;`,
    large: { maxWidth: '624px' },
    xxlarge: {
      size: '28px',
    },
  },
});
