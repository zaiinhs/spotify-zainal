import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { searchTrack } from '../../lib/fetchApi';
import { logout } from '../../slice/authSlice';
import { FaSearch } from 'react-icons/fa';
import { Button, Flex, Input, VStack } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store';
import axios from 'axios';
import { ResponseTracks, Track } from '../../types/tracks';

interface IProps {
  onSuccess: (tracks: Track[], text: string) => void;
  onClearSearch: () => void;
  onLoading: (isLoading: boolean) => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess, onClearSearch, onLoading }) => {
  const accessToken: string = useAppSelector((state) => state.auth.accessToken);
  const [text, setText] = useState<string>('');
  const [isClear, setIsClear] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    onLoading(true);

    try {
      const response: ResponseTracks = await searchTrack(text, accessToken);

      const tracks: Track[] = response.tracks.items;
      
      onLoading(false);
      onSuccess(tracks, text);
      setIsClear(false);
    } catch (error) {
      onLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          dispatch(logout());
        }
      } else if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleClear: () => void = () => {
    onClearSearch();
    setText('');
    setIsClear(true);
  };

  return (
    <Flex
      as="form"
      noValidate
      gap={3}
      onSubmit={handleSubmit}
      direction={{ base:'column', sm:'row' }}
    >
      <VStack flex="1 1 100%">
        <Input
          placeholder="Search track..."
          required
          value={text}
          onChange={handleInput}
          data-testid="search-input"
          borderRadius="full"
        />
        {!isClear && (
          <Button
            variant="link"
            onClick={handleClear}
            mt={1}
            alignSelf="flex-start"
          >
            Clear search
          </Button>
        )}
      </VStack>
      <Button
        type="submit"
        data-testid="search-button"
        aria-label="search button"
        isDisabled={text.length === 0}
        leftIcon={<FaSearch />}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
