import React from "react";
import { removeFav } from "../../slices/NotesSlice";
import { useDispatch } from "react-redux";

function FavNote({id,fav,text}) {
  const dispatch=useDispatch()
  const removeFavhandle=()=>{
    dispatch(removeFav(id))
  }

  return (
    <div className="bg-amber-200 NoteComp">
      <div className="NoteContainer">
        <p>{text}</p>
        <button
          onClick={() => {removeFavhandle()}}
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

export default FavNote;
