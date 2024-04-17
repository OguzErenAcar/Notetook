import { configureStore } from "@reduxjs/toolkit";
import SelectTab from "./tabSlice"
import Trash from "./TrashSlice";
import Notes from "./NotesSlice";
const  store =configureStore({
    reducer:{
        SelectTab,
        Trash,
        Notes
    },
    devTools:true
})

export default store;