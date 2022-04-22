import { ExternalUrls } from './exterrnalUrls';
import { Followers } from './followers';
import { Image } from './image';
import { Tracks } from './tracks';

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface Playlist {
  collaborative: boolean;
  description: null;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}