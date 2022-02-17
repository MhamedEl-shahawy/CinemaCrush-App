import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async (dispatch, getState) => {
      return await fetch(dispatch).then(
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
          if(action.payload["cast"]){
          state.data = action.payload.cast;
          }else if(action.payload["results"]){
            state.data = action.payload.results;
          }else{
            state.data = [];
             
          }
           

        },
        [getMovies.rejected]: (state, action) => {
          state.status = "failed";
          console.log( state.status )


        },
      },
});
export const {login} = moviesSlice.actions
export default moviesSlice.reducer;