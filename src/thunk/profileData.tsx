import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchdata } from '../apiService/auth';
import { ApiResponse } from '../types/commonentity';
import { PayloadItem, SuccessResponsePayload } from '../types/authentity';

export const fetchPosts = createAsyncThunk('posts/fetchdata', async (payload: PayloadItem, thunkAPI) => {
    try {
        const response = await fetchdata(payload);
        return thunkAPI.fulfillWithValue(response);
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: 'Failed to fetch posts' });
    }
});

type UserProfileState = ApiResponse<SuccessResponsePayload>;

const initialState: UserProfileState = {
    data: undefined,
    error: undefined,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const UserProfileSlice = createSlice({
    name: 'fetchdata',
    initialState,
    reducers: {
        resetFetchPosts: state => {
            state.data = undefined;
            state.error = undefined;
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.data = undefined;
                state.error = undefined;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.data = action.payload;
                state.error = undefined;
                state.isSuccess = true
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.data = undefined;
                state.error = action.error.message;
            });
    },
});

export const { resetFetchPosts } = UserProfileSlice.actions;
export default UserProfileSlice.reducer;