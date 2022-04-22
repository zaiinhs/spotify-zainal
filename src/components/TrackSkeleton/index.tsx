import React from 'react';
import {
  AspectRatio,
  Stack,
  VStack,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const TrackSkeleton = () => {
  return (
    <Stack
      direction={{ base: 'row', sm: 'column' }}
      overflow="hidden"
      borderRadius={10}
      border="1px solid"
      borderColor="gray.200"
    >
      <AspectRatio
        w={{ base: '35%', sm: '100%' }}
        ratio={1}
      >
        <Skeleton />
      </AspectRatio>

      <VStack
        p={{ base: 2, sm: 3 }}
        w={{ base: '65%', sm: '100%' }}
        h={{ base: '100%', sm: 'auto' }}
        gap={{ base: 0, sm: 2 }}
        align="strech"
        justify="space-between"
        style={{
          margin: 0
        }}
      >
        <SkeletonText noOfLines={3} spacing='4' />
      </VStack>
    </Stack>
  );
};

export default TrackSkeleton;
