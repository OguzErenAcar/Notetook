import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; 
import { addTrash } from "../../slices/TrashSlice";
import {addFav,removeFav} from "../../slices/NotesSlice";

function Note({fav,text, removeCalback,index } ) {
  const dispatch = useDispatch();
  const AddFavhandle = () => {
    dispatch(addFav(index));
  };
  const removeFavhandle = () => {
    console.log("favremove")
    dispatch(removeFav(index));
  };
  const MoveTrashhandle = () => {
    dispatch(addTrash(text));
    removeCalback(index);
  };

  return (
    <div className="bg-amber-200 NoteComp">
      <div className="NoteContainer">
        <p>{text}</p>
        <button
          onClick={() => {
            MoveTrashhandle();
          }}
          className="bg-green-200"
        >
          MoveTrash
        </button>
        <button
          onClick={() => {
            !fav ? AddFavhandle() : removeFavhandle();
          }}
          style={{
            height: 20,
            width: 20,
            background: !fav ? "black" : "yellow",
          }}
        ></button>
      </div>
    </div>
  );
}
export default Note;
