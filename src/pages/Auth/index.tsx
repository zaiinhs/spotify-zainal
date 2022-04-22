import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../lib/config';
import { getUserProfile } from '../../lib/fetchApi';
import { login } from '../../slice/authSlice';
import { Box, Button, Link} from '@chakra-ui/react';
import { User } from '../../types/user';
import { useAppDispatch } from '../../store';
import { FiLogIn } from 'react-icons/fi';
import Seo from '../../components/Seo';

const Auth : React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const setLogin = useCallback(async (accessToken, expiresIn) => {
    try {
      const responseUser: User = await getUserProfile(accessToken);

      dispatch(login({
        accessToken,
        expiredDate: +new Date() + expiresIn * 1000,
        user: responseUser,
      }));

      history.push('/create-playlist');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, [dispatch, history]);

  useEffect(() => {
    const accessTokenParams: string | null = new URLSearchParams(window.location.hash).get('#access_token');
    const expiresIn: string | null = new URLSearchParams(window.location.hash).get('expires_in');

    if (accessTokenParams !== null) {
      setLogin(accessTokenParams, expiresIn);
    }
  }, [setLogin]);

  const buildSpotifyLinkAuthorize: () => string = () => {
    const state: string = Date.now().toString();
    const clientId: string | undefined = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    return 'https://accounts.spotify.com/authorize?' +
      `client_id=${clientId}` +
      '&response_type=token' +
      `&redirect_uri=${config.HOST}` +
      `&state=${state}` +
      `&scope=${config.SPOTIFY_SCOPE}`;
  };

  return (
    <>
      <Seo
        title="Auth"
        suffixTitle
      />

      <main>
        <Box className="center" gap={2}>
          <Link href={buildSpotifyLinkAuthorize()} _hover={{ textDecoration: 'none' }}>
            <Button rightIcon={<FiLogIn />}>Spotify</Button>
          </Link>
        </Box>
      </main>
    </>
  );
};

export default Auth;
