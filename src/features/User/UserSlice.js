import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { userApi } from '../../utils/userApi';

// register
export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (payload, thunkAPI) => {
    try {
        await console.log(payload)

const {api,dataResponse,headerResponse} =userApi(payload,'register')
      const response = await axios.post( api,dataResponse,headerResponse );
      let {data} = await response;
      if (response.status === 200) {
        localStorage.setItem('token', data.accessToken);
        return { ...data, username:payload.username, password:payload.password};
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.data);
      return thunkAPI.rejectWithValue(e.data);
    }
  }
);
//login
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload, thunkAPI) => {
    
    try {
      const {api,dataResponse,headerResponse} =userApi(payload,'login')
      const response = await axios.post( api,dataResponse,headerResponse );
      let {data} = await response;
      
      if (response.status===200) {
        localStorage.setItem('token', data.accessToken);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);

      }
    } catch (e) {
      console.log('Error', e.data);
      thunkAPI.rejectWithValue(e.data);
    }
  }
);
//get token
export const fetchUserByToken = createAsyncThunk(
  'users/fetchUserByToken',
  async ( payload, thunkAPI) => {
    console.log(payload.token)
    try {
    
      const {api,headerResponse} =userApi(payload)
      console.log(headerResponse,"jkjk")
      const response = await axios.get( api,headerResponse );
      let {data} = await response;
 

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user:null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.fulfilled]: (state,  action ) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.errorMessage = action.payload.message;
      state.user = action.meta.arg.username
    }, 
    [signupUser.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage=action.payload.message;
    },
    [loginUser.pending]: (state) => {

      state.isFetching = true;
    },
    [loginUser.fulfilled]: (state,action) => {
      console.log(action,"aloo")
      // state.user = action.payload.user.username  
      state.user = localStorage.setItem('username',action.meta.arg.username)
      state.isFetching = false;
      state.isSuccess = true;
      // state.errorMessage=action.payload.message;

      return state;
    },
    
    [loginUser.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage=action.payload.message;

    },
    
    [fetchUserByToken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserByToken.fulfilled]: (state,action) => {
      state.isFetching = false;
      state.isSuccess = true;

    },
    [fetchUserByToken.rejected]: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const userSelector = (state) => state.users;

export const { clearState } = userSlice.actions;

