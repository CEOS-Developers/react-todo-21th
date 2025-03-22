export type ColorPalette = {
  Grayscale: {
    0: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  };
  Signature: {
    Red_50: string;
    Red_500: string;
    Yellow: string;
    Blue: string;
  };
};

const colors: ColorPalette = {
  Grayscale: {
    0: '#FFFFFF',
    50: '#F4F4F4',
    100: '#E4E4E1',
    200: '#A19F9A',
    300: '#93938F',
    400: '#37352F',
    500: '#000000',
  },
  Signature: {
    Red_50: '#E16A6E',
    Red_500: '#E33F45',
    Yellow: '#FBF3DB',
    Blue: '#DDEBF1',
  },
};

export default colors;
