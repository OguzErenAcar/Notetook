import React from "react";
import { removeFav } from "../../slices/NotesSlice";
import { useDispatch } from "react-redux";

function FavNote({id,fav,text}) {
  const dispatch=useDispatch()
  const removeFavhandle=()=>{
    dispatch(removeFav(id))
  }

  return (
    <div className="NoteComp">
      <div className="NoteContainer">
        <p id="note">{text.slice(0,83)}</p>
        <span
          onClick={() => {removeFavhandle()}}
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

export default FavNote;
