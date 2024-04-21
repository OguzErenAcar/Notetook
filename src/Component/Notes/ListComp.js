import React, { useEffect, useState, useCallback } from "react";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../slices/NotesSlice";
import { Listdiv } from "../Content";

function ListComp({ElementCount}) {
  const Todos= useSelector(state=>state.Notes.value)
  const [noteList, setnoteList] = useState(Todos); 

  const dispatch=useDispatch()
  
  useEffect(()=>{
    setnoteList(Todos)
    ElementCount(noteList.length)
  },[Todos]) 

  const removeElement = (index) => {
    dispatch(removeNote(index))
  };

  return (
    <Listdiv>
      {noteList && noteList.length > 0 ? (
        noteList.map((note, index) => (
        
            <Note key={index} index={index} {...note} removeCalback={removeElement}>
              {note}
            </Note>
         ))
      ) : (
        <>This place is empty.</>
      )}
    </Listdiv>
  );
}

export default ListComp;
