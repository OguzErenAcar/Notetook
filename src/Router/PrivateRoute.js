import React from 'react'
import { Navigate } from 'react-router-dom'
import { useIntro } from '../Context/IntroContext'

function PrivateRoute({children}) {
    const {StartBool}=useIntro()
    if(!StartBool)
  return  <Navigate to="/Intro"/>

  return children
  
}

export default PrivateRoute
