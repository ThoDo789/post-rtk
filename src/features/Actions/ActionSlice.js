import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isShowModal:false,
  isShowModalEdit:false,
}
export const actionSlice = createSlice({
  name:'actions',
  initialState,
  reducers:{
    displayModal:(state)=>{
      state.isShowModal=!state.isShowModal
    },
    displayModalEdit:(state)=>{
      state.isShowModalEdit=!state.isShowModalEdit
    }

  }
})
export const actionSelector = state=>state.actions;
export const {displayModal,displayModalEdit} = actionSlice.actions