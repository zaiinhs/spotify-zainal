import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { Playlist } from '../types/playlist';
import { Snapshot } from '../types/snapshot';
import { ResponseTracks } from '../types/tracks';
import { User } from '../types/user';
import config from './config';

type TBuildHeaders = (accessToken: string) => AxiosRequestHeaders;

const buildHeaders: TBuildHeaders = (accessToken) => {
  return {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  };
};

type TSearchTrack = (query: string, accessToken: string) => Promise<ResponseTracks>;

export const searchTrack: TSearchTrack = async (query, accessToken) => {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: buildHeaders(accessToken),
  };

  const endPoint: string = `${config.SPOTIFY_BASE_URL}/search?type=track&q=${query}`;
  const response: AxiosResponse = await axios.get(endPoint, requestOptions);

  return response.data;
};

type TGetUserProfile = (accessToken: string) => Promise<User>;

export const getUserProfile: TGetUserProfile = async (accessToken) => {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: buildHeaders(accessToken),
  };

  const endPoint: string = `${config.SPOTIFY_BASE_URL}/me`;
  const response: AxiosResponse = await axios.get(endPoint, requestOptions);

  return response.data;
};

interface IPlaylist {
  name: string;
  description: string;
}

type TCreatePlaylist = (
  accessToken: string,
  userId: string | undefined,
  playlist: IPlaylist
) => Promise<Playlist>;

export const createPlaylist: TCreatePlaylist = async (accessToken, userId, playlist) => {
  const data = JSON.stringify({
    name: playlist.name,
    description: playlist.description,
    public: false,
    collaborative: false,
  });
  
  const requestOptions: AxiosRequestConfig<any> = {
    headers: buildHeaders(accessToken),
  };

  const endPoint: string = `${config.SPOTIFY_BASE_URL}/users/${userId}/playlists`;
  const response: AxiosResponse = await axios.post(endPoint, data, requestOptions);

  return response.data;
};

type TAddTrackToPlaylist = (
  accessToken: string,
  playlistId: string,
  uris: string[]
) => Promise<Snapshot>;

export const addTracksToPlaylist: TAddTrackToPlaylist = async (accessToken, playlistId, uris) => {
  const data = JSON.stringify({
    uris
  });

  const requestOptions: AxiosRequestConfig<any> = {
    headers: buildHeaders(accessToken),
  };

  const endPoint: string = `${config.SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`;
  const response: AxiosResponse = await axios.post(endPoint, data, requestOptions);

  return response.data;
};
