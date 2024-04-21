import React, { useEffect, useState } from 'react'
import {removeTrash} from '../../slices/TrashSlice'
import { useDispatch } from 'react-redux'
import { addNote } from '../../slices/NotesSlice'

const  TrashNote=({children,index})=> {
    const dispatch=useDispatch()
    const [note,setnote]=useState(children)

    const removeHandle=()=>{
      dispatch(removeTrash(index))
    }
    const revokeHandle=()=>{
      dispatch(addNote(note[0]))
      dispatch(removeTrash(index))
    }
    useEffect(()=>{
      setnote(children)
    },[children])

  return (
    <div className=" NoteComp">
    <div className="NoteContainer">
       <p id="note"> {note[0].slice(0,83)}</p>
       <span onClick={() =>{revokeHandle()}} class="revoke material-symbols-outlined">keyboard_return</span>
       <span onClick={() => removeHandle()} class="delete material-symbols-outlined">scan_delete</span>
      </div>

    </div>
  )
}

export default TrashNote
