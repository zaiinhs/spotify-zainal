import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import SearchBar from '../../components/SearchBar';
import CreatePlaylistForm from '../../components/CreatePlaylistForm';
import Layout from '../../components/Layout';
import { Box, Divider, Grid,  Text, VStack } from '@chakra-ui/react';
import { Track as ITrack } from '../../types/tracks';
import Seo from '../../components/Seo';
import TrackSkeleton from '../../components/TrackSkeleton';
import uid from '../../lib/uid';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeAllTracks } from '../../slice/tracksSlice';

type TOnSuccessSearch = (searchTracks: ITrack[], query: string) => void;

const CreatePlaylist: React.FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const selectedTracks = useAppSelector((state) => state.tracks.itemsSelected);
  const selectedTracksUri = useAppSelector((state) => state.tracks.itemsSelectedUri);
  const [isInSearch, setIsInSearch] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('No tracks');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isInSearch) {
      setTracks(selectedTracks);
    }
  }, [selectedTracks, isInSearch]);

  const onSuccessSearch: TOnSuccessSearch = (searchTracks, query) => {
    setIsInSearch(true);

    const selectedSearchTracks: ITrack[] = searchTracks.filter((track: ITrack) => selectedTracksUri.includes(track.uri));

    setTracks((prevState: ITrack[]): ITrack[] => {
      const _tracks: ITrack[] = [...new Set([...selectedSearchTracks, ...searchTracks])];

      if (_tracks.length === 0) {
        setMessage(`No tracks found with query "${query}"`);
      } else {
        setMessage('');
      }

      return _tracks;
    });
  };

  const clearSearch: () => void = () => {
    setTracks(selectedTracks);
    setMessage('No tracks');
    setIsInSearch(false);
  };

  const onSuccessCreatePlaylist: () => void = () => {
    dispatch(removeAllTracks());

    if (!isInSearch && tracks.length !== 0) {
      setTracks([]);
    }
  };

  const onLoading: (isLoading: boolean) => void = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <>
      <Seo
        title="Create Playlist"
        suffixTitle
      />

      <Layout>
        <Box as="main" className="container" my={5}>
          <CreatePlaylistForm
            uriTracks={selectedTracksUri}
            onSuccess={onSuccessCreatePlaylist}
          />

          <Divider variant="dashed" my={10} />

          <SearchBar
            onSuccess={onSuccessSearch}
            onClearSearch={clearSearch}
            onLoading={onLoading}
          />

          <Box mt={10}>
            {(!isLoading && tracks.length === 0) && (
              <VStack>
                <Text>{message}</Text>
              </VStack>
            )}

            {isLoading && (
              <Grid
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                gap={5}
                data-testid="tracks-list"
              >
                {Array.from({ length: 4 }, () => (
                  <TrackSkeleton key={uid()}/>
                ))}
              </Grid>
            )}

            {!isLoading && tracks.length !== 0 && (
              <Grid
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                gap={5}
                data-testid="tracks-list"
              >
                {tracks.map((track) => (
                  <Track
                    key={track.id}
                    track={track}
                    select={selectedTracksUri.includes(track.uri)}
                  />
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default CreatePlaylist;
