const getHost: () => string = () => {
  const protocol: string = window.location.protocol;
  const host: string = window.location.host;

  return `${protocol}//${host}`;
};

interface IConfig {
  SPOTIFY_BASE_URL: string;
  SPOTIFY_SCOPE: string;
  HOST: string;
}

const config: IConfig = {
  SPOTIFY_BASE_URL: 'https://api.spotify.com/v1',
  SPOTIFY_SCOPE: 'playlist-modify-private',
  HOST: getHost(),
};

export default config;
