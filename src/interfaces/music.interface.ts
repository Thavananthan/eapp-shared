import { ObjectId } from 'mongoose';

export interface IMusicDocument {
  _id?: string | ObjectId;
  title: string;
  artist: IArtists[];
  music_director: IArtists;
  album?: IMusicAlbum;
  year: string;
  genre: string;
  duration: string;
  cover?: string;
  src: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  description: string;
  likes?: number;
  plays?: number;
  downloads?: number;
  toJSON?: () => unknown;
}

export interface IMusicAlbum {
  _id?: string | ObjectId;
  title: string;
  description: string;
  year: string;
  cover?: string;
  songs?: IMusicDocument[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
  toJSON?: () => unknown;
}

export interface IArtists {
  _id?: string | ObjectId;
  name: string;
  title: string;
  description: string;
  profile?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  toJSON?: () => unknown;
}

export interface IMusicResponse {
  message: string;
}
