import React, { useEffect, useState } from 'react'


function Navtab({children ,activeTab,onChange }) {
const [active,setActive]=useState(activeTab)

useEffect(()=>{
    onChange(active)
},[active])

  return (
   <>
   <nav>
    {children.map((item,index)=>(
    <button key={index} onClick={() => setActive(index)} className={activeTab===index? "bg-green-100":"bg-red-100"} >{item.props.title}</button>
    ))}
   </nav>
   </>
  )
}


Navtab.Content =({children})=>{

    return children
}

export default Navtab
