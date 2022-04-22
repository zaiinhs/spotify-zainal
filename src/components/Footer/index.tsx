import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  const bgFooter = useColorModeValue('primary.500', 'gray.700');

  return (
    <Box as="footer" bg={bgFooter} p={3}>
      <Text
        align="center"
        color="white"
        fontSize={{ base: 'xs', sm: 'md' }}
      >
        &copy; 2022 Zainal Abidin
      </Text>
    </Box>
  );
};

export default Footer;
