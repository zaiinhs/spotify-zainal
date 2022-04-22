import React, { useEffect, useState } from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { Track as ITrack } from '../../types/tracks';
import formatDuration from '../../lib/formatDuration';
import { useAppDispatch } from '../../store';
import { addTrack, removeTrack } from '../../slice/tracksSlice';

interface IProps {
  track: ITrack;
  select: boolean;
}

const Track: React.FC<IProps> = ({ track, select }) => {
  const [isSelected, setIsSelected] = useState<boolean>(select);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsSelected(select);
  }, [select]);

  const handleToggleSelect: () => void = () => {
    if (isSelected) {
      dispatch(removeTrack(track.uri));
      setIsSelected(false);
    } else {
      dispatch(addTrack(track));
      setIsSelected(true);
    }
  };

  return (
    <Stack
      direction={{ base: 'row', sm: 'column' }}
      overflow="hidden"
      borderRadius={10}
      border="1px solid"
      borderColor="gray.200"
      role="group"
      _hover={{
        boxShadow: '0px 7px 15px -7px rgba(0, 0, 0, 0.1)',
      }}
    >
      <AspectRatio
        w={{ base: '35%', sm: '100%' }}
        ratio={1}
        overflow="hidden"
        borderRadius={{ sm: 10 }}
      >
        <Image
          src={track.album.images[0].url}
          alt={track.name}
          transform="scale(1.1)"
          objectFit="cover"
          _groupHover={{ transform: 'scale(1)' }}
          transition="transform .3s ease-in-out"
          data-testid="track-img" />
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
        <Link
          href={track.external_urls.spotify}
          _hover={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box>
            <Heading
              as="h3"
              size="sm"
              isTruncated
              data-testid="track-title"
            >
              {track.name}
            </Heading>
            <Text
              fontSize="sm"
              isTruncated
              data-testid="track-artist"
            >
              {track.artists[0].name}
            </Text>
            <Text
              fontSize="sm"
              data-testid="track-duration"
              color="gray.500"
              mt={1}
            >
              {formatDuration(track.duration_ms)}
            </Text>
          </Box>
        </Link>

        <HStack justify="flex-end">
          <Button
            variant={isSelected ? 'solid' : 'outline'}
            onClick={handleToggleSelect}
            data-testid="track-btn-select"
          >
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Track;
