import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TrashNote from './TrashNote'
import TrashSlice from '../../slices/TrashSlice'

function Trash() { 
  const updateList=useSelector(state=>state.Trash.value)
  const [list,setlist] = useState(updateList)

 useEffect(()=>{
  setlist(updateList)
  console.log(list)
 },[updateList])

    return (
    <div className='Trash'>
      <div className='ListComp'>
      {list.length>0?list.map((item,index)=>(
        <> 
         {  <TrashNote index={index} key={index}  >{item} </TrashNote> }
        </>
      )):
      <li>boş</li>}
      </div>
    </div>
  )
}

export default Trash

