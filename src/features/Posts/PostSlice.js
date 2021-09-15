import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import { postApi } from "../../utils/postApi";



const initialState = {
  posts:[],
  isLoading:false,
  isSuccess:false,
  isError:true,
  item:null,
  id:''
  
}

export const getAllPost = createAsyncThunk(
      'posts/getAllPost',
      async()=>{
        try {
            const {api, headerResponse} = postApi()
            const response = await axios.get(api,headerResponse)
          if(response.data.success){ 
            return response.data.posts
          }
        } catch (error) {
          console.log(error.response.data.posts)

    }
  }
);
export const addNewPost =createAsyncThunk(
  'posts/addNewPost',  async(payload,thunkAPI)=>{
    
    try {


      const {api,dataResponse, headerResponse} = postApi(payload)
      
      const response = await axios.post(api,{...dataResponse},headerResponse)


      if(response.data.success){ 
        return response.data.posts
      }else{
        return thunkAPI.rejectWithValue(response.data.posts);
      }
    } catch (error) {
      console.log(error.response.data.posts)
  return thunkAPI.rejectWithValue(error.response.data.posts);
  }
})

export const deletePost = createAsyncThunk(
  "posts/deletePost", async(payload,thunkAPI)=>{
    try {
  
      const {api, headerResponse} = postApi(payload)
      console.log(api,"ksksk")
      const response = await axios.delete(api,headerResponse)

      if(response.data.success){
      return response.data.posts
      }
      else{
       return thunkAPI.rejectWithValue(response.data.posts);

      }
    } catch (error) {
      console.log(error.response.data.posts)
      return thunkAPI.rejectWithValue(error.response.data.posts);
    }

  }
)
export const updatePost = createAsyncThunk(
  "posts/updatePost", async(payload,thunkAPI)=>{
    try {
    
    const {api,dataResponse, headerResponse} = postApi(payload)
      const response = await axios.put(api,dataResponse,headerResponse)
      if(response.data.success){
      return response.data.posts
      }
      else{
       return thunkAPI.rejectWithValue(response.data.posts);

      }
    } catch (error) {
      console.log(error.response.data.posts)
      return thunkAPI.rejectWithValue(error.response.data.posts);
    }

  }
)

export const postSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{
    getId:(state,{payload})=>{
      state.id= payload
        state.item= state.posts.filter(item=>(item._id===payload))
    }
      
  },
  extraReducers:{
    [getAllPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPost.fulfilled]: (state,{payload}) => {
      
      state.isLoading = false;
      state.isSuccess=true;
      state.posts= payload
     
    }, 
     [getAllPost.rejected]: (state,action) => {
      state.isLoading = false;
      state.isSuccess=false;
    },
    [addNewPost.fulfilled]:(state,action)=>{
     console.log(action)
      state.isSuccess=true;
      state.posts= [...state.posts,action.meta.arg]
     
    }, 
    [addNewPost.pending]:(state,action)=>{
      
      state.isSuccess=false;
      
      
    },
    [deletePost.fulfilled]:(state,action)=>{
      console.log(action)
      state.isSuccess=true;
      state.posts = state.posts.filter(item=>(item._id!==action.meta.arg.id))
    },
    [updatePost.fulfilled]:(state,action)=>{
      state.isSuccess=true;
      console.log(action)
      const newPost = state.posts.map((post)=>(post._id===action.meta.arg.id ? action.meta.arg.data: post))
      state.posts=newPost
    }
  
  },

})

export const postSelector = (state) => state.posts;
export const {getId} = postSlice.actions

