import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Box flex="1 1 100%">
        {children}
      </Box>

      <Footer />
    </Flex>
  );
};

export default Layout;