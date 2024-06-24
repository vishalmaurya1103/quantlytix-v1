import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiBaseAddress } from '../Utils/Const';
import axios from 'axios';

// Define a type for the slice state
interface ProfileState {
  searchProfiles: Array<any>;
  searchProfile: any,
  selectedProfiles: Array<any>;
  selectedProfile: any,
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Helper function to get the initial state from local storage
const initialState: ProfileState = {
  searchProfile: {} as any,
  searchProfiles: [],
  selectedProfile: {} as any,
  selectedProfiles: [],
  status: 'idle',
  error: null
};

// Async thunk for fetching users
export const fetchSearchProfile = createAsyncThunk('profile/fetchSearchProfile', async () => {
  const response = await axios.get<[]>(`${apiBaseAddress}/profiles`);
  return response.data;
});

export const fetchSearchProfileById = createAsyncThunk('profile/fetchSearchProfileById', async (id: string) => {
  const response = await axios.get<[]>(`${apiBaseAddress}/profiles/${id}`);
  return response.data;
});

export const fetchSelectedProfile = createAsyncThunk('profile/fetchSelectedProfile', async () => {
  const response = await axios.get<[]>(`${apiBaseAddress}/profiles`);
  return response.data;
});

export const fetchSelectedProfileById = createAsyncThunk('profile/fetchSelectedProfileById', async (id:string) => {
  const response = await axios.get<[]>(`${apiBaseAddress}/profiles/${id}`);
  return response.data;
});

const userSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProfile.pending, (state: ProfileState) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchProfile.fulfilled, (state: ProfileState, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.searchProfiles = action.payload;
      })
      .addCase(fetchSearchProfile.rejected, (state: ProfileState, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(fetchSearchProfileById.pending, (state: ProfileState) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchProfileById.fulfilled, (state: ProfileState, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.searchProfile = action.payload;
      })
      .addCase(fetchSearchProfileById.rejected, (state: ProfileState, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(fetchSelectedProfile.pending, (state: ProfileState) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedProfile.fulfilled, (state: ProfileState, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.selectedProfiles = action.payload;
      })
      .addCase(fetchSelectedProfile.rejected, (state: ProfileState, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
  },
});

export default userSlice.reducer;
