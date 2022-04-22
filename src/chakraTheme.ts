import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    primary: {
      400: '#000',
      500: '#000',
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 30,
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          px: 6,
          _disabled: {
            opacity: '0.5',
          },
          _hover: {
            _disabled: {
              bg: 'primary.400',
            },
            bg: 'primary.400',
          },
          _focus: {
            ring: 2,
            ringColor: 'primary.500',
          },
          _active: {
            bg: 'primary.500',
          }
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          px: 6,
          _focus: {
            ring: 2,
            ringColor: 'primary.500',
          }
        }
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'primary.500',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'primary.500',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: '"Poppins", sans-serif',
      }
    }
  }
});

export default theme;
