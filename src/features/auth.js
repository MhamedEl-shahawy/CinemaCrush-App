import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getLoginToken = createAsyncThunk(
    "auth/getLoginToken",
    async (dispatch, getState) => {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        let raw = JSON.stringify({
             email:dispatch.email,
             password:dispatch.password
        });
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }; 
      return await fetch("https://cinema-club-api.herokuapp.com/api/users/login",requestOptions).then(
        (res) => res.json()
      );
    }
  );
const authSlice = createSlice({
    name:"auth",
    initialState:{data:[],statusInfo: null},
    reducers:{
        login:(state,action)=>{
            state.data = action.payload;
        }
    },
    extraReducers: {
        [getLoginToken.pending]: (state, action) => {
          state.statusInfo = "loading";
        },
        [getLoginToken.fulfilled]: (state, action) => {
          state.statusInfo = "success";
          state.data = action.payload;
          console.log(state.data);

        },
        [getLoginToken.rejected]: (state, action) => {
          state.statusInfo = "failed";
        },
      },
});
// export const {getLoginToken} = authSlice.actions
export default authSlice.reducer;