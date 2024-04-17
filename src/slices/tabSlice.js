import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState=  {
    value: 0,
  }

const SelectTab= createSlice({
name:"SelectTab",
initialState,
reducers:{
    ChangeTab:(state,action)=>{
        state.value=action.payload
    }
}

}) 


export const {ChangeTab}=SelectTab.actions
export default SelectTab.reducer