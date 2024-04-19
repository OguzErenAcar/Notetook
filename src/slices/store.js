import { configureStore } from "@reduxjs/toolkit";
import SelectTab from "./tabSlice"
import Trash from "./TrashSlice";
import Notes from "./NotesSlice";

const reHydrateStore = () => {
if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'));  
 }
};
const localStorageMiddleware = ({ getState }) => {
return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
    };
};

const  store =configureStore({
    reducer:{
        SelectTab,
        Trash,
        Notes
    },
    devTools:true,
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store;


