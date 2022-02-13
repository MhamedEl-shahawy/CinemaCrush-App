import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const controller = new AbortController();
const signal = controller.signal;
export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async (dispatch, getState) => {
      return await fetch(dispatch,{signal: signal}).then(
        (res) => res.json()
      );
    }
  );
const moviesSlice = createSlice({
    name:"movies",
    initialState:{data:[],status: null},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload;
        }
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
          state.status = "loading";
        },
        [getMovies.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload;
        },
        [getMovies.rejected]: (state, action) => {
          state.status = "failed";
        },
      },
});
export const {login} = moviesSlice.actions
export default moviesSlice.reducer;