import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:[]
}

const Notes=createSlice({
    name:"Notes",
    initialState,
    reducers:{
        addNote:(state,action)=>{
            console.log(action.payload)
            const newTodo={
                text:action.payload,
                fav:false,
                id:state.value.length
            }
            state.value=[...state.value,newTodo]
        },
        removeNote:(state,action)=>{
            const index=action.payload
            var list =[]
            state.value=state.value.forEach((item,i)=>{
                if(i<index)
                    list=[...list,item]
                else if(i>index){
                    item.id-=1
                    list=[...list,item]
                }
            })
            state.value=list
        },
        addFav:(state,action)=>{
            const index =action.payload
            state.value[index].fav=true
            
        },
        removeFav:(state,action)=>{
            const index =action.payload
            state.value[index].fav=false
        }
    }
})


export const {addNote,removeNote,addFav,removeFav}=Notes.actions
export default Notes.reducer