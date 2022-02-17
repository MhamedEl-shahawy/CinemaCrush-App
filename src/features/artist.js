import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getArtist = createAsyncThunk(
    "movies/getArtist",
    async (dispatch, getState) => {
      return await fetch(dispatch).then(
        (res) => res.json()
      );
    }
  );
const artistSlice = createSlice({
    name:"artist",
    initialState:{data:[],status: null},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload;
        }
    },
    extraReducers: {
        [getArtist.pending]: (state, action) => {
          state.status = "loading";
        },
        [getArtist.fulfilled]: (state, action) => {
          state.status = "success";
          state.data = action.payload;
          console.log("last",state.data )

        },
        [getArtist.rejected]: (state, action) => {
          state.status = "failed";
          console.log( state.status )


        },
      },
});
export const {login} = artistSlice.actions
export default artistSlice.reducer;