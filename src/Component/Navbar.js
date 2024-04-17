import { useEffect, useState } from 'react'
import Navtab from './Navtab'
import Favories from './Favories/Favories'
import Notes from './Notes/Notes'
import Trash from './Trash/Trash'
import { useDispatch } from 'react-redux'
import { ChangeTab } from '../slices/tabSlice'


function Navbar(){

    const [activeTab,setactiveTab]=useState(1)

    const dispatch= useDispatch()
    dispatch(ChangeTab(activeTab))

    return(
        <div id="Navbar">
        <div id="Navtab" >
        <Navtab  activeTab={activeTab} onChange={(index)=>{setactiveTab(index)}}>
            <Navtab.Content title="Favories"> Favories</Navtab.Content>
            <Navtab.Content title="Notes"> Notes</Navtab.Content>
            <Navtab.Content title="Trash">Trash</Navtab.Content> 
        </Navtab> 
        </div>
        </div>
    )
}

export default Navbar;