import React, { useEffect, useState } from "react";
import { getData, getDataAxios } from "../../Services/APIRequires";
import ListComp from "./ListComp";
import { useDispatch } from "react-redux";
import { addNote } from "../../slices/NotesSlice";

function Notes() {
  const [currentNote, setcurrentNote] = useState("");  
  const dispatch=useDispatch()

  const addTodo = () => {
    dispatch(addNote(currentNote))
    setcurrentNote("") 
  }; 

  return (
    <div id="Notes">
      <div id="inputDiv">
      <input  value={currentNote} onChange={(e)=>setcurrentNote(e.target.value)} className="bg-yellow-100" type="text"></input>
      <button onClick={() => addTodo()} className="bg-blue-100" type="submit">
        ekle
      </button>
      </div>
        <ListComp/> 
    </div>
  );
}

export default Notes;
