import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBookmarks = createAsyncThunk(
    "bookmark/getBookmarks",
    async (dispatch, getState) => {
        let myHeaders = new Headers();
          myHeaders.append("Accept", "application/json");
          myHeaders.append("authorization",dispatch.token);
          let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
      return await fetch(dispatch).then(
        (res) => res.json()
      );
    }
  );
const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:{data:[],status: null},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload;
        }
    },
    extraReducers: {
        [getBookmarks.pending]: (state, action) => {
          state.status = "loading";
        },
        [getBookmarks.fulfilled]: (state, action) => {
          state.status = "success";
        },
        [getBookmarks.rejected]: (state, action) => {
          state.status = "failed";
          console.log( state.status )


        },
      },
});
export const {login} = bookmarkSlice.actions
export default bookmarkSlice.reducer;