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
    <div className="bg-amber-200 NoteComp">
    <div className="NoteContainer">
       <p> {note}</p>
        <button  onClick={() => removeHandle()} className='bg-blue-100 ms-3' >delete</button>
        <button onClick={() =>{revokeHandle()}} className='bg-gray-100 ms-3'>Revoke</button>
      </div>

    </div>
  )
}

export default TrashNote
