import { createSlice } from '@reduxjs/toolkit';
import { Track } from '../types/tracks';

interface IInitialState {
  itemsSelected: Track[];
  itemsSelectedUri: string[];
};

const initialState: IInitialState = {
  itemsSelected: [],
  itemsSelectedUri: [],
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    addTrack: (state, action) => {
      state.itemsSelected = [action.payload, ...state.itemsSelected];
      state.itemsSelectedUri = [action.payload.uri, ...state.itemsSelectedUri];
    },
    removeTrack: (state, action) => {
      const tracks = state.itemsSelected;
      const tracksUri = state.itemsSelectedUri;

      state.itemsSelected = tracks.filter((track) => track.uri !== action.payload);
      state.itemsSelectedUri = tracksUri.filter((uri) => uri !== action.payload);
    },
    removeAllTracks: (state) => {
      state.itemsSelected = [];
      state.itemsSelectedUri = [];
    }
  }
});

export const { addTrack, removeTrack, removeAllTracks } = tracksSlice.actions;

export default tracksSlice.reducer;
