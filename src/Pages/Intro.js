import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useIntro } from '../Context/IntroContext';
function Intro() {
    const {setStartBool}=useIntro()

const navigate = useNavigate();

  const NoteTook=()=>{
    setStartBool(true)
    navigate("/")
  }
  return (
   <button onClick={()=>{NoteTook()}}>Take Note</button>
  )
}

export default Intro
