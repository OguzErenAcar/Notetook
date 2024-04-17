import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    value:[]
}

const Trash=createSlice({
    name:"Trash",
    initialState,
    reducers:{
        addTrash:(state,action)=>{
            state.value=[...state.value,action.payload]
            console.log(state.value,"in trash")
        },
        removeTrash:(state,action)=>{
            const index = action.payload;
            const list =state.value.filter(a=>a!==state.value[index])
            state.value=list
            console.log(list)
        }
    }
})

export const {addTrash,removeTrash}=Trash.actions
export default Trash.reducer