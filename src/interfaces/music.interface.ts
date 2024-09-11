import { ObjectId } from 'mongoose';

export interface IMusicDocument {
  _id?: string | ObjectId;
  title: string;
  artist: string;
  album: string;
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

export interface IMusicPlayListDocument {
  _id?: string | ObjectId;
  title: string;
  description: string;
  cover?: string;
  songs: IMusicDocument[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IMusicResponse {
  message: string;
}
