import { Box, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import Lottie from 'react-lottie-player';
import notFoundGif from '../../assets/lottie/not-found.json';
import notFoundDarkGif from '../../assets/lottie/not-found-dark.json';

const NotFound: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Seo
        title="Not Found"
      />

      <Box as="main" className="center" gap={2}>
        <Box boxSize="300px">
          <Lottie
            animationData={colorMode === 'light' ? notFoundGif : notFoundDarkGif}
            loop
            play
          />
        </Box>
        <Link to="/create-playlist">
          <Button>
            Go to content
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NotFound;
