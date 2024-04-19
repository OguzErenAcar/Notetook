import React, { useEffect, useState, useCallback } from "react";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../slices/NotesSlice";

function ListComp() {
  const Todos= useSelector(state=>state.Notes.value)
  const [noteList, setnoteList] = useState(Todos); 

  const dispatch=useDispatch()
  
  useEffect(()=>{
    setnoteList(Todos)
  },[Todos]) 

  const removeElement = (index) => {
    dispatch(removeNote(index))
  };

  return (
    <div className="ListComp">
      {noteList && noteList.length > 0 ? (
        noteList.map((note, index) => (
        
            <Note key={index} index={index} {...note} removeCalback={removeElement}>
              {note}
            </Note>
         ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListComp;
