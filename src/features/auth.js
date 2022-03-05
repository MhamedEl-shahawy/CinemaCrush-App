import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from "../components/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const getLoginToken = createAsyncThunk(
    "auth/getLoginToken",
    async (dispatch, getState) => {
      return  await signInWithEmailAndPassword(auth,dispatch.email,dispatch.password);    
        
    }
  );
  export const newUser = createAsyncThunk(
    "auth/newUser",
    async (dispatch, getState) => {
      return  await createUserWithEmailAndPassword(auth,dispatch.email,dispatch.password);    
        
    }
  );
const authSlice = createSlice({
    name:"auth",
    initialState:{data:[],statusInfo: null,token:null,localToken:null},
    reducers:{
        login:(state,action)=>{
            state.data = action.payload;
        },
        setToken:(state,action)=>{
          state.localToken = action.token;  
        }
    },
    extraReducers: {
        [getLoginToken.pending]: (state, action) => {
          state.statusInfo = "loading";
        },
        [getLoginToken.fulfilled]: (state, action) => {
          state.statusInfo = "success";
          state.token = action.payload.user["accessToken"];
           state.localToken = action.payload.user["accessToken"];

        },
        [getLoginToken.rejected]: (state, action) => {
          state.statusInfo = "failed";
        },
      },
});
export const {setToken} = authSlice.actions
export default authSlice.reducer;