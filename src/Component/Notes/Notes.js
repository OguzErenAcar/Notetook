import React, { useEffect, useState } from "react";
import { getData, getDataAxios } from "../../Services/APIRequires";
import ListComp from "./ListComp";
import { useDispatch } from "react-redux";
import { addNote } from "../../slices/NotesSlice";

function Notes({ ElementCount }) {
  const [currentNote, setcurrentNote] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if (currentNote !== "") dispatch(addNote(currentNote));
    setcurrentNote("");
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === 'Enter' && currentNote !== "") {
        dispatch(addNote(currentNote));
        setcurrentNote("");
      }
    });
  }, []);

  return (
    <div id="Notes">
      <div id="inputDiv">
        <div id="inputs">
          <input
            id="input"
            value={currentNote}
            onChange={(e) => setcurrentNote(e.target.value)}
            type="text"
          ></input>
          <button id="add" onClick={() => addTodo()} type="submit">
            Add
          </button>
        </div>
      </div>
      <ListComp
        ElementCount={(i) => {
          ElementCount(i);
        }}
      />
    </div>
  );
}

export default Notes;
