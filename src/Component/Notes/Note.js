import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrash } from "../../slices/TrashSlice";
import { addFav, removeFav } from "../../slices/NotesSlice";

function Note({ fav, text, removeCalback, index }) {
  const dispatch = useDispatch();
  const AddFavhandle = () => {
    dispatch(addFav(index));
  };
  const removeFavhandle = () => {
    console.log("favremove");
    dispatch(removeFav(index));
  };
  const MoveTrashhandle = () => {
    dispatch(addTrash(text));
    removeCalback(index);
  };

  return (
    
    <div className="NoteComp">
      <div className="NoteContainer">
        <p id="note">{text.slice(0,83)}</p>
        <span
          onClick={() => {
            MoveTrashhandle();
          }}
          id="MoveTrash"
          class="material-symbols-outlined"
        >
          delete_sweep
        </span>
        <span
          onClick={() => {
            !fav ? AddFavhandle() : removeFavhandle();
          }}
          className={
            fav
              ? "fav material-symbols-outlined"
              : "notfav material-symbols-outlined"
          }
        >
          hotel_class
        </span>
      </div>
    </div>
  );
}
export default Note;
