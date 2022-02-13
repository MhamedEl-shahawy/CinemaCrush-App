import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMovieInfo = createAsyncThunk(
    "moviesInfo/getMovieInfo",
    async (dispatch, getState) => {
      return await fetch(dispatch).then(
        (res) => res.json()
      );
    }
  );
const moviesInfoSlice = createSlice({
    name:"moviesInfo",
    initialState:{data:[],statusInfo: null},
    reducers:{
        login:(state,action)=>{
            state.data = action.payload;
        }
    },
    extraReducers: {
        [getMovieInfo.pending]: (state, action) => {
          state.statusInfo = "loading";
        },
        [getMovieInfo.fulfilled]: (state, action) => {
          state.statusInfo = "success";
          state.data = action.payload;

        },
        [getMovieInfo.rejected]: (state, action) => {
          state.statusInfo = "failed";
        },
      },
});
export const {login} = moviesInfoSlice.actions
export default moviesInfoSlice.reducer;