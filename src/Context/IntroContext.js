import React, { createContext, useContext, useState } from 'react'

const myContext =createContext();
function IntroProvider({children}) {

    const [StartBool,setStartBool]=useState(false)

    const data={
        StartBool,
        setStartBool
    }

  return (
    <myContext.Provider value={data}>
        {children}
    </myContext.Provider>
  )
}

export const useIntro=()=>useContext(myContext)
export default IntroProvider
