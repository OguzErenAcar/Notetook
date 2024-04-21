import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TrashNote from './TrashNote'
import TrashSlice from '../../slices/TrashSlice'
import { Listdiv } from '../Content'

function Trash({ElementCount}) { 
  const updateList=useSelector(state=>state.Trash.value)
  const [list,setlist] = useState(updateList)

 useEffect(()=>{
  setlist(updateList)
  console.log(list)
  ElementCount(updateList.length)
 },[updateList])

    return (
    <div className='Trash'>
      <Listdiv>
     {list.length>0?list.map((item,index)=>(
         <TrashNote index={index} key={index}  >{item} </TrashNote>  
       
      )):
      <li>This place is empty.</li>}  
    
      </Listdiv>
    </div>
  )
}

export default Trash

